import { Page } from "./Page";

export class Main {
    
    // This method only executes when browser initially loads the page.
    initialize(): void {
        // isLegacy will be passed from tenant metadata.
        var page = new Page(true);
        globalThis.page = page;
        page.nextPage(1);
    }
}

var main = new Main();
main.initialize();