import { IInteraction } from "./IInteraction";
import { Http } from "./Http";
import { IPageData } from "./IPageData";

export class SignIn implements IInteraction {
    pageData: IPageData
    sectionData: any

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
    
    generateServiceContent(): HTMLElement {
        var el = document.createElement("div");
        return el;
    }
}