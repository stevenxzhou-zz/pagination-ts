import { IInteraction } from "./IInteraction";

export class SignIn implements IInteraction {
    
    submit(): void { 
        window.page.nextPage();
    }

    showError(): void { console.log("show error"); }
    
    hideError(): void { console.log("show error"); }
    
    generateServiceContent(): string {
        return "<div></div>";
    }

    // Hook up event listeners
    initialize(): void {}
}