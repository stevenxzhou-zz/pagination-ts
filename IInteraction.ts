import { ISection } from "./ISection";
import { IValidationResult } from "./IValidationResult";

export interface IInteraction extends ISection {
    submit(): void
    validate(): boolean
    showError(results: Array<IValidationResult>): void
    hideError(): void
}