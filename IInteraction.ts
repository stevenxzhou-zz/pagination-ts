import { ISection } from "./ISection";

export interface IInteraction extends ISection {
    submit(): void
    showError(): void
    hideError(): void
}