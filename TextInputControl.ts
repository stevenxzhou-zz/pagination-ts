import { IControl } from "./IControl";
import { ISA_FIELD } from "./ISA_FIELD";

export class TextInputControl extends Node implements IControl {
    controlErrorMessage: string
    controlClaimId: string
    controlValue: any
    defaultValue: string
    isEnabled: boolean
    sa_field: ISA_FIELD

    constructor(sa_field: ISA_FIELD) {
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
    
    validateControl(): boolean {
        return true;
    }

    getControlValue(): string {
        return this.controlValue;
    }
    setControlValue(value: any): void {
        this.controlValue = value;
    }
}