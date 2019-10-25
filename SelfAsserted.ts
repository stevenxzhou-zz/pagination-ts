import { IInteraction } from "./IInteraction";
import { IPageData } from "./IPageData";
import { IControl } from "./IControl";
import { TextInputControl } from "./TextInputControl";
import { IValidationResult } from "./IValidationResult";
import { ControlTypes } from "./ControlTypes";
import { Http } from "./Http";

export class SelfAsserted implements IInteraction {
    pageData: IPageData
    controls: Array<IControl>
    sectionData: any

    constructor(pageData: IPageData) {
        this.pageData = pageData;
    }

    submit(): void {
        if (this.validate()) {
            Http.sendDataAsync("https://api.com/submit", this.sectionData).then(function(){
                globalThis.page.nextPage();
            })
        }
    }

    validate(): boolean {
        let results: Array<IValidationResult> = [];
        for (let control of this.controls) {
            let result = control.validateControl();
            results.push(result);
        }
        
        if (results.find(x => x.result === false)){
            this.showError(results);
            return false;
        }

        this.hideError();

        return true;
    }

    showError(results: Array<IValidationResult>): void {
        // We'll append these error messages top of the form.
        // Using element id we would allow user to navigate through the invalid controls.
        for (let result of results) {
            console.log(result.errorMessage); 
        }
    }
    
    hideError(): void { console.log("show error"); }
    
    // genenerate the section html element without handlebars help.
    generateServiceContent(): HTMLElement {

        var element = document.createElement("div");
        element.setAttribute("id", "selfasserted");

        // Hook up controls
        for (let sa_field of this.pageData.ATTRIBUTE_FIELDS) {
            switch(sa_field.CONTROL_TYPE){
                case ControlTypes.Text:
                    let control = new TextInputControl(sa_field);
                    element.appendChild(control);
                    this.controls.push(control);
                case ControlTypes.Password:
                case ControlTypes.CheckButtonMultiSelect:
                case ControlTypes.RadioButtonSignleSelect:
            }
        }

        // Append continue and back button
        if (this.pageData.SETTINGS.showContinueButton) {
            let btn = document.createElement("button");
            btn.onclick = this.submit;
            element.appendChild(btn);
        }

        return element;
    }
}