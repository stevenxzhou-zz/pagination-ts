import { IButton } from "./IButton";
import { IInteraction } from "./IInteraction";
import { IPageData } from "./IPageData";

export class Button implements IButton {
    buttonId: string
    interaction: IInteraction
    element: HTMLElement
    pageData: IPageData

    constructor(interaction: IInteraction, pageData: IPageData) {
        this.interaction = interaction;
        this.pageData = pageData;
        this.element = this.generateButton();
    }
    
    generateButton(): HTMLElement {
        let btnel = document.createElement("button");
        btnel.textContent = this.pageData.content.button;
        return btnel;
    }

    nextPage(): void {
        this.interaction.continue();
    }

    enableButton(): void {}
    disableButton(): void {}
} 