import { IPageData } from "./IPageData"

export class Http {
    static getNextPageData(): IPageData {
        
        return {
            SECTIONTYPE: "SelfAsserted",
            SA_FIELDS: {},
            SETTINGS: {
                remoteResource: "https://cpim.azureedge.com/static/tenant/default/selfasserted.cshtml"
            },
            CONTENT: {},
            ELEMENT: "https://cpim.azureedge.com/static/js/1.2.0/selfasserted.min.js",
            ELEMENTS: ["https://cpim.azureedge.com/static/js/1.2.0/selfasserted.min.js"]
        }

    }

    // Async method to send data.
    static sendData(): Promise<string> {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'myservice/api');
            xhr.setRequestHeader('Content-Type', 'application/html');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve()
                }
            };
        })
    }

    // Async method to fetch a resource
    static fetchResourceAsync(url: string): Promise<string> {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'myservice/template.html');
            xhr.setRequestHeader('Content-Type', 'application/html');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve(xhr.responseText)
                }
            };
        })
    }
}