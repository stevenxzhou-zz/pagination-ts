import { IInteraction } from "./IInteraction";
import { Page } from "./Page";
import { IPageData } from "./IPageData";
import { IControl } from "./IControl";
import { ISA_FIELD } from "./ISA_FIELD";
import { TextInputControl } from "./TextInputControl";

export class SelfAsserted implements IInteraction {
    pageData: IPageData;
    controls: Array<IControl>

    constructor(pageData: IPageData) {
        this.pageData = pageData;
    }

    submit(): void {
        if (this.validate()) {
            globalThis.page.nextPage();
        }
    }

    validate(): boolean {
        let results = [];
        for (let control of this.controls) {
            let result = control.validateControl();
            results.push(result);
        }
        
        if (results.find(x => x === false)){
            this.showError();
            return false;
        }

        this.hideError();

        return true;
    }

    showError(): void { console.log("show error"); }
    
    hideError(): void { console.log("show error"); }
    
    // genenerate the section html using handlebars.
    generateServiceContent(): HTMLElement {

        var element = document.createElement("div");
        element.setAttribute("id", "selfasserted");

        // Hook up controls
        for (let sa_field of this.pageData.SA_FIELDS) {
            switch(sa_field.CONTROL_TYPE){
                case "text":
                    let control = new TextInputControl(sa_field);
                    element.appendChild(control);
                    this.controls.push(control);
            }
        }

        // Append continue and back button

        return element;
    }
}