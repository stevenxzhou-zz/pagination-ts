import { Http } from "./Http"
import { IPageData } from "./IPageData"
import { SelfAsserted } from "./SelfAsserted"
import { IInteraction } from "./IInteraction"
import { ResponseTypes } from "./ResponseTypes";
import { IRedirectData } from "./IRedirectData";
import { IResponseData } from "./IResponseData";

export class Page{
    sectionContent: string;
    contentReady: boolean;
    pageReady: boolean;
    prototype: HTMLElement;

    constructor() {
    }

    nextPage(url?: string): void {
        this.contentReady = false;
        this.pageReady = false;

        var responseData : IResponseData = Http.getNextPageData(url);

        // redirect page.
        if (responseData.type == ResponseTypes.Redirect) {
            var redirectData : IRedirectData = <IRedirectData>responseData;
            Http.redirectPage(redirectData.redirectUri);
        } else {
            var pageData : IPageData = <IPageData>responseData;

            var scriptPromise = this.appendScriptUrlToHead(pageData.element);
            var templatePromise = this.getRemoteResource(pageData.settings.remoteResource);
    
            Promise.all([scriptPromise, templatePromise]).then(function(values) {
                this.contentReady = true;
                var template = values[1];
                this.buildPage(pageData, template);
            })
        }
    }

    buildPage(pageData: IPageData, template: string): void {

        // Display waiting screen
        this.showWaitScreen();

        // Merge template with default
        this.process(pageData, template);

        // Append section in to api.
        var section = this.getSection(pageData);
        var sectionHtml = section.generateServiceContent();
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

    getSection(pageData: IPageData): IInteraction {
        switch(pageData.type){
            case ResponseTypes.SelfAsserted:
                var selfAsserted = new SelfAsserted(pageData);
                return selfAsserted;
            default:
                return null;
        }
    }

    process(pageData: IPageData, template: string): void {
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
            }
        })
    }
}