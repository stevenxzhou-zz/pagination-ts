import { IInteraction } from "./IInteraction";
import { Http } from "./Http";
import { IPageDataLegacy } from "./IPageDataLegacy";

export class UnifiedSSPLegacy implements IInteraction {
    pageDataLegacy: IPageDataLegacy
    sectionData: any

    constructor(pageDataLegacy: IPageDataLegacy) {
        this.pageDataLegacy = globalThis.page.isLegacy;
    }

    continue(): void { 
        if (this.validate()) {
            Http.sendDataAsync("https://api.com/submit", this.sectionData).then(function(){
                //globalThis.page.nextPage("/nextpage");
            })
        }
    }

    goback(): void {}

    redirectToSignup(): void {
        //globalThis.page.nextPage("unified?local=signup");
    }

    validate(): boolean {
        return true;
    }

    showError(): void { console.log("show error"); }
    
    hideError(): void { console.log("show error"); }
    
    generateIEFComponent(): HTMLElement {
        var el = document.createElement("div");
        return el;
    }
}