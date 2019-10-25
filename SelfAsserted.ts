import { IInteraction } from "./IInteraction";
import { Page } from "./Page";
import { IPageData } from "./IPageData";

export class SelfAsserted implements IInteraction {
    handlebars: string;
    pageData: IPageData;

    constructor(pageData: IPageData) {
        this.pageData = pageData;
    }

    submit(): void { 
        window.page.nextPage();
    }

    showError(): void { console.log("show error"); }
    
    hideError(): void { console.log("show error"); }
    
    // genenerate the section html using handlebars.
    generateServiceContent(pageData: IPageData): string {

        var handlebars = this.handlebars;

        return "<div></div>"
    }

    // Hook up event listeners
    initialize(pageData: IPageData): void {
        var element = document.getElementById("SelfAsserted");
    }
}