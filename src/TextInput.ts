import { IInput } from "./IInput";
import { IAttributeField } from "./IAttributeField";
import { IValidationResult } from "./IValidationResult";

export class TextInput extends Node implements IInput {
    errorMessage: string
    claimId: string
    value: any
    defaultValue: string
    isEnabled: boolean

    constructor(attributeField: IAttributeField) {
        super()
        this.defaultValue = attributeField.defaultValue
        this.isEnabled = attributeField.isEnabled
        this.appendChild(this.generateInput())
    }

    generateInput(): HTMLElement {
        var el = document.createElement("input");
        return el;
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