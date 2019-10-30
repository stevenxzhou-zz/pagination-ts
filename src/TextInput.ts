import { IInput } from "./IInput";
import { IAttributeField } from "./IAttributeField";
import { IValidationResult } from "./IValidationResult";
var handlebar = require("handlebars");

export class TextInput implements IInput {
    errorMessage: string
    claimId: string
    value: any
    defaultValue: string
    isEnabled: boolean
    element: HTMLElement
    template: string
    placeholder: string

    constructor(attributeField: IAttributeField) {
        this.claimId = attributeField.claimId
        this.defaultValue = attributeField.defaultValue
        this.isEnabled = attributeField.isEnabled
        this.template = attributeField.template
        this.placeholder = attributeField.placeHolder
        this.generateInput();
    }

    generateInput(): void {
        // Can we use handlebar or annotation for setting the template?
        var template = handlebar.compile(this.template);
        var htmlString = template({id: this.claimId, placeholder: this.placeholder});
        var htmlElement = document.createElement("div");
        htmlElement.innerHTML = htmlString
        var input:HTMLElement = htmlElement.querySelector("#" + this.claimId);
        input.setAttribute("onclick", "alert(123)");
        this.element = htmlElement;
    }

    enableInput(): void {}
    disableInput(): void {}
    
    showInputError(): void {}
    hideInputError(): void {}
    
    validateInput(): IValidationResult {
        return {
            errorMessage: "This is an error",
            elementId: "id",
            result: true
        };
    }

    getInputValue(): string {
        return this.value;
    }

    setInputValue(value: any): void {
        this.value = value;
    }
}