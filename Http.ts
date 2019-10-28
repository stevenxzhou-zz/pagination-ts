import { IPageData } from "./IPageData"

export class Http {
    static getNextPageData(url: string): IPageData {
        this.fetchResourceAsync(url).then(function(){        })
        return {
            TYPE: 1,
            ATTRIBUTE_FIELDS: [{
                CONTROL_TYPE: 1,
                DEFAULT_VALUE: "deaulttext",
                PREDICATES: {},
                PLACE_HOLDER: "placeholderstring",
                IS_ENABLED: true
            }],
            SETTINGS: {
                remoteResource: "https://cpim.azureedge.com/static/tenant/default/selfasserted.cshtml",
                showContinueButton: true
            },
            CONTENT: {},
            ELEMENT: "https://cpim.azureedge.com/static/js/1.2.0/selfasserted.min.js",
            ELEMENTS: ["https://cpim.azureedge.com/static/js/1.2.0/selfasserted.min.js"]
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