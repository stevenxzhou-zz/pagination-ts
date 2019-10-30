import { IButton } from "./IButton";
import { IInteraction } from "./IInteraction";
import { IPageData } from "./IPageData";

export class Button implements IButton {
    buttonId: string
    interaction: IInteraction
    element: HTMLElement
    textContent: string

    constructor(interaction: IInteraction, textContent: string) {
        this.interaction = interaction;
        this.textContent = textContent;
        this.element = this.generateButton();
    }
    
    generateButton(): HTMLElement {
        let btnel = document.createElement("button");
        btnel.textContent = this.textContent;
        return btnel;
    }

    nextPage(): void {
        this.interaction.continue();
    }

    enableButton(): void {}
    disableButton(): void {}
} 