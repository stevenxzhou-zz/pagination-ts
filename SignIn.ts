import { IInteraction } from "./IInteraction";
import { Http } from "./Http";
import { IPageData } from "./IPageData";

export class SignIn implements IInteraction {
    pageData: IPageData
    sectionData: any

    submit(): void { 
        if (this.validate()) {
            Http.sendDataAsync("https://api.com/submit", this.sectionData).then(function(){
                globalThis.page.nextPage("/nextpage");
            })
        }
    }

    redirectToSignup(): void {
        globalThis.page.nextPage("/signup");
    }

    validate(): boolean {
        return true;
    }

    showError(): void { console.log("show error"); }
    
    hideError(): void { console.log("show error"); }
    
    generateServiceContent(): HTMLElement {
        var el = document.createElement("div");
        return el;
    }
}