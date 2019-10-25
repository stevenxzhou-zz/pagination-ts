import { IControl } from "./IControl";
import { IAttributeFields } from "./IAttributeFields";
import { IValidationResult } from "./IValidationResult";

export class TextInputControl extends Node implements IControl {
    controlErrorMessage: string
    controlClaimId: string
    controlValue: any
    defaultValue: string
    isEnabled: boolean
    sa_field: IAttributeFields

    constructor(sa_field: IAttributeFields) {
        super()
        this.sa_field = sa_field
        this.defaultValue = sa_field.DEFAULT_VALUE
        this.isEnabled = sa_field.IS_ENABLED
        this.appendChild(this.generateControl())
    }

    generateControl(): HTMLElement {
        var el = document.createElement("input");
        return el;
    }

    enableControl(): void {}
    disableControl(): void {}
    
    showControlError(): void {}
    hideControlError(): void {}
    
    validateControl(): IValidationResult {
        return {
            errorMessage: "This is an error",
            elementId: "id",
            result: true
        };
    }

    getControlValue(): string {
        return this.controlValue;
    }

    setControlValue(value: any): void {
        this.controlValue = value;
    }
}