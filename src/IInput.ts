import { IValidationResult } from "./IValidationResult";

export interface IInput {
    errorMessage: string
    claimId: string
    value: any
    template: string

    enableInput(): void
    disableInput(): void
    showInputError(): void
    hideInputError(): void
    validateInput(): IValidationResult
    getInputValue(): string
    setInputValue(value: any): void
} 