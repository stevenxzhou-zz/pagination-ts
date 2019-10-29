import { IButton } from "./IButton";
import { IInteraction } from "./IInteraction";

export class Button extends Node implements IButton {
    buttonId: string
    interaction: IInteraction

    constructor(interaction: IInteraction) {
        super()
        this.interaction = interaction
    }
    
    nextPage(): void {
        this.interaction.continue();
    }

    enableButton(): void {}
    disableButton(): void {}
} 