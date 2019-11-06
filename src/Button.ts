import { IButton } from "./IButton";
import { IInteraction } from "./IInteraction";

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
        btnel.onclick = this.nextPage.bind(this)
        return btnel;
    }

    nextPage(): void {
        this.interaction.continue();
    }

    enableButton(): void {}
    disableButton(): void {}
} 