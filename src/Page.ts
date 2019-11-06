import { Http } from "./Http"
import { IPageData } from "./IPageData"
import { SelfAsserted } from "./SelfAsserted"
import { IInteraction } from "./IInteraction"
import { ResponseTypes } from "./ResponseTypes";
import { IRedirectData } from "./IRedirectData";
import { IResponseData } from "./IResponseData";
import { Multifactor } from "./Multifactor";
import { IPageDataLegacy } from "./IPageDataLegacy";
import { UnifiedSSPLegacy } from "./UnifiedSSPLegacy";

export class Page{
    sectionContent: string;
    contentReady: boolean;
    pageReady: boolean;
    prototype: HTMLElement;
    currentPageType: number;
    isLegacy: boolean;
    pageData: IPageData;
    pageDataLegacy: IPageDataLegacy;

    constructor(isLegacy: boolean) {
        this.isLegacy = isLegacy
    }

    nextPage(pageNumber: number): void {
        this.contentReady = false;
        this.pageReady = false;
        var responseData : IResponseData = Http.getNextPageData(pageNumber, this.isLegacy);
        var self = this;

        // check the current page type, remove the javascript and css from previous page load.
        
        // redirect page.
        if (responseData.type == ResponseTypes.Redirect) {
            var redirectData : IRedirectData = <IRedirectData>responseData;
            this.redirectPage(redirectData.redirectUri);
        } else {
            if (this.isLegacy) {
                this.pageDataLegacy = <IPageDataLegacy>responseData;
                var templatePromise = this.getRemoteResource(this.pageDataLegacy.SETTINGS.remoteResource);
        
                Promise.all([templatePromise]).then(function(values) {
                    self.contentReady = true;
                    var template = values[1];
                    self.buildPage(template);
                })
            } else {
                this.pageData = <IPageData>responseData;
                this.currentPageType  = this.pageData.type;
                var scriptPromise = this.appendScriptUrlToHead(this.pageData.element);
                var templatePromise = this.getRemoteResource(this.pageData.settings.remoteResource);
        
                Promise.all([scriptPromise, templatePromise]).then(function(values) {
                    self.contentReady = true;
                    var template = values[1];
                    self.buildPage(template);
                })
            }
        }
    }

    buildPage(template: string): void {

        // Display waiting screen
        this.showWaitScreen();

        // Merge template with default
        this.process(template);
        
        // Append section in to api.
        var section = this.buildSection();
        var sectionHtml = section.generateIEFComponent();
        var api = document.getElementById("api");
        if (api.firstChild != null) {
            api.firstChild.replaceWith(sectionHtml);
        } else {
            api.appendChild(sectionHtml);
        }
        
        this.pageReady = true;

        // Hide wait screen
        this.hideWaitScreen();
    }

    // Async method to send data.
    redirectPage(url: string): void {
        window.location.replace(url);
    }

    buildSection(): IInteraction {
        if (this.isLegacy) {
            return this.buildLegacySection();
        } 

        switch(this.pageData.type){
            case ResponseTypes.SelfAsserted:
                var selfAsserted = new SelfAsserted(this.pageData);
                return selfAsserted;
            case ResponseTypes.Multifactor:
                var multifactor = new Multifactor(this.pageData);
                return multifactor
            default:
                return null;
        }
    }

    buildLegacySection(): IInteraction {
        switch(this.pageDataLegacy.SETTINGS.api){
            case "CombinedSigninAndSignup":
                var selfAsserted = new UnifiedSSPLegacy(this.pageDataLegacy);
                return selfAsserted;
            default:
                return null;
        }
    }

    process(template: string): void {
        // Sanitize
        // preload customer js and css
        // Merge with default template
    }

    showWaitScreen() {
        console.log("Display wait screen.");
    }

    hideWaitScreen() {
        console.log("Hide wait screen.");
    }

    getRemoteResource(url: string): Promise<string> {
        return Http.fetchResourceAsync(url);
    }

    appendScriptUrlToHead(url: string) {
        var script = document.createElement("script");
        script.setAttribute("src", url);
        script.setAttribute("id", "selfasserted");
        document.head.append(script);

        return new Promise(function(resolve, reject) {
            script.onload = function() {
                resolve();
                console.log("script loaded");
            }
        })
    }
}