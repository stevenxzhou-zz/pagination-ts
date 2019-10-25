import { IInteraction } from "./IInteraction";

export class SignIn implements IInteraction {
    
    submit(): void { 
        globalThis.page.nextPage();
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