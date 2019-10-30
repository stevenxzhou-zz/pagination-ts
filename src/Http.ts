import { IPageData } from "./IPageData"

export class Http {
    static getNextPageData(): IPageData {
        return {
            type: 1,
            attributeFields: [{
                controlType: 1,
                defaultValue: "deaulttext",
                predicates: {},
                placeHolder: "placeholderstring",
                isEnabled: true,
                claimId: "test",
                template: "",
                displayName: ""
            }],
            settings: {
                remoteResource: "http://localhost:3000/static/tenant/default/selfasserted.cshtml",
                showContinueButton: true
            },
            content: {},
            element: "http://localhost:3000/static/js/1.2.0/selfasserted.min.js",
            elements: ["https://localhost:3000/static/js/1.2.0/selfasserted.min.js"]
        }
    }

    // Async method to send data.
    static sendDataAsync(data: any, url: string): Promise<string> {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type', 'application/html');
            xhr.send(data);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve()
                }
            };
        })
    }

    // Async method to send data.
    static redirectPage(url: string): void {
        window.location.replace(url);
    }

    // Async method to fetch a resource
    static fetchResourceAsync(url: string): Promise<string> {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.setRequestHeader('Content-Type', 'application/html');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve(xhr.responseText)
                }
            };
        })
    }
}