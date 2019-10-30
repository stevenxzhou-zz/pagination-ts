import { IInput } from "./IInput";
import { IAttributeField } from "./IAttributeField";
import { IValidationResult } from "./IValidationResult";
var handlebar = require("handlebars");

export class TextInput implements IInput {
    errorMessage: string
    attributeField: IAttributeField
    element: HTMLElement
    claimId: string
    value: string
    template: string

    constructor(attributeField: IAttributeField) {
        this.attributeField = attributeField;
        this.generateInput();
    }

    generateInput(): void {
        var template = handlebar.compile(this.attributeField.template);
        var htmlString = template({
            id: this.attributeField.claimId, 
            placeholder: this.attributeField.placeHolder,
            displayName: this.attributeField.displayName
        });
        var htmlElement = document.createElement("div");
        htmlElement.innerHTML = htmlString
        var input:HTMLElement = htmlElement.querySelector("#" + this.attributeField.claimId);
        input.setAttribute("onclick", "alert('" + this.attributeField.claimId + "')");
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