import { Page } from "./Page";

export class Main {
    
    // This method only executes when browser initially loads the page.
    initialize(): void {
        var page = new Page();
        //globalThis.page = page;
        page.nextPage();
    }
}

var main = new Main();
main.initialize();