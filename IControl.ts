export interface IControl {
    controlErrorMessage: string
    controlClaimId: string
    controlValue: any

    enableControl(): void
    disableControl(): void
    showControlError(): void
    hideControlError(): void
    validateControl(): boolean
    getControlValue(): string
    setControlValue(value: any): void
} 