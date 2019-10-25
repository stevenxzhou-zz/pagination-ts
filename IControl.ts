import { IValidationResult } from "./IValidationResult";

export interface IControl {
    controlErrorMessage: string
    controlClaimId: string
    controlValue: any

    enableControl(): void
    disableControl(): void
    showControlError(): void
    hideControlError(): void
    validateControl(): IValidationResult
    getControlValue(): string
    setControlValue(value: any): void
} 