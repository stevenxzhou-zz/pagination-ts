import { ISection } from "./ISection";
import { IValidationResult } from "./IValidationResult";

export interface IInteraction extends ISection {
    continue(): void
    goback(): void
    validate(): boolean
    showError(results: Array<IValidationResult>): void
    hideError(): void
}