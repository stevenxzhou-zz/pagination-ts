import { ISection } from "./ISection";

export interface IInteraction extends ISection {
    submit(): void
    validate(): boolean
    showError(): void
    hideError(): void
}