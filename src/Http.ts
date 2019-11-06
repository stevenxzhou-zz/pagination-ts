import { IPageDataLegacy } from "./IPageDataLegacy";

export class Http {
    static getNextPageData(pageNumber: number, isLegacy: boolean): any {
        
        if (isLegacy) {
            return this.getNextPageDataLegacy(pageNumber);
        }

        if (pageNumber === 1) {
            return {
                type: 1,
                attributeFields: [{
                    controlType: 1,
                    defaultValue: "deaulttext",
                    predicates: {},
                    placeHolder: "Username",
                    isEnabled: true,
                    claimId: "username",
                    template: "<label id='{{id}}_label'>{{displayName}}</label><div id='{{id}}_error'></div></div><input id='{{id}}' placeholder='{{placeholder}}'></input>",
                    displayName: "Username"
                },{
                    controlType: 1,
                    defaultValue: "deaulttext",
                    predicates: {},
                    placeHolder: "Password",
                    isEnabled: true,
                    claimId: "password",
                    template: "<label id='{{id}}_label'>{{displayName}}</label><div id='{{id}}_error'></div></div><input id='{{id}}' placeholder='{{placeholder}}'></input>",
                    displayName: "Password"
                }],
                settings: {
                    remoteResource: "http://localhost:3000/static/templates/default/selfasserted.html",
                    showContinueButton: true
                },
                content: {
                    "button": "Button",
                    "signIn": "Sign in",
                    "signUp": "Sign up",
                    "continue": "Continue"
                },
                element: "http://localhost:3000/static/js/1.2.0/selfasserted.min.js",
                elements: ["https://localhost:3000/static/js/1.2.0/selfasserted.min.js"]
            }
        }

        if (pageNumber === 3) {
            return {
                type: 3,
                attributeFields: [{
                    controlType: 1,
                    defaultValue: "deaulttext",
                    predicates: {},
                    placeHolder: "Phone Number",
                    isEnabled: true,
                    claimId: "phonenumber",
                    template: "<label id='{{id}}_label'>{{displayName}}</label><div id='{{id}}_error'></div></div><input id='{{id}}' placeholder='{{placeholder}}'></input>",
                    displayName: "Phone Number"
                },{
                    controlType: 1,
                    defaultValue: "deaulttext",
                    predicates: {},
                    placeHolder: "Verification Code",
                    isEnabled: true,
                    claimId: "verficationcode",
                    template: "<label id='{{id}}_label'>{{displayName}}</label><div id='{{id}}_error'></div></div><input id='{{id}}' placeholder='{{placeholder}}'></input>",
                    displayName: "Verfication Code"
                }],
                settings: {
                    remoteResource: "http://localhost:3000/static/templates/default/selfasserted.html",
                    showContinueButton: true
                },
                content: {
                    "button": "Button",
                    "signIn": "Sign in",
                    "signUp": "Sign up",
                    "continue": "Continue"
                },
                element: "http://localhost:3000/static/js/1.2.0/selfasserted.min.js",
                elements: ["https://localhost:3000/static/js/1.2.0/selfasserted.min.js"]
            }
        }
    }

    static getNextPageDataLegacy(pageNumber: number): any {

        var CP = {
            "list": [{
                "id": "FacebookExchange",
                "description": "Facebook"
            }, {
                "id": "GoogleExchange",
                "description": "Google"
            }, {
                "id": "AppleExchange",
                "description": "Apple"
            }]
        };

        var SA_FIELDS = {
            "AttributeFields": [{
                "UX_INPUT_TYPE": "TextBox",
                "USER_INPUT_TYPE": "TextBox",
                "IS_TEXT": true,
                "IS_EMAIL": false,
                "IS_PASSWORD": false,
                "IS_DATE": false,
                "IS_RADIO": false,
                "IS_DROP": false,
                "IS_TEXT_IN_PARAGRAPH": false,
                "IS_CHECK_MULTI": false,
                "IS_LINK": false,
                "VERIFY": false,
                "DN": "Username or email address",
                "ID": "logonIdentifier",
                "U_HELP": "Your username or email address.",
                "DAY_PRE": "0",
                "MONTH_PRE": "0",
                "YEAR_PRE": "0",
                "IS_REQ": true,
                "IS_RDO": false,
                "OPTIONS": []
            }, {
                "UX_INPUT_TYPE": "Password",
                "USER_INPUT_TYPE": "Password",
                "IS_TEXT": false,
                "IS_EMAIL": false,
                "IS_PASSWORD": true,
                "IS_DATE": false,
                "IS_RADIO": false,
                "IS_DROP": false,
                "IS_TEXT_IN_PARAGRAPH": false,
                "IS_CHECK_MULTI": false,
                "IS_LINK": false,
                "VERIFY": false,
                "DN": "Password",
                "ID": "password",
                "U_HELP": "Enter password",
                "DAY_PRE": "0",
                "MONTH_PRE": "0",
                "YEAR_PRE": "0",
                "IS_REQ": true,
                "IS_RDO": false,
                "OPTIONS": []
            }]
        };

        var CONTENT = {
            "invalid_password": "The password you entered is not in the expected format.",
            "cancel_message": "The user has forgotten their password",
            "requiredField_email": "Please enter your email",
            "logonIdentifier_username": "Username",
            "forgotpassword_link": "Forgot your password?",
            "local_intro_email": "Sign in with your existing account",
            "invalid_email": "Please enter a valid email address",
            "createaccount_link": "Sign up now",
            "unknown_error": "We are having trouble signing you in. Please try again later.",
            "requiredField_username": "Please enter your user name",
            "logonIdentifier_email": "Email Address",
            "email_pattern": "^[a-zA-Z0-9.!#$%&amp;’&#39;*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$",
            "requiredField_password": "Please enter your password",
            "password": "Password",
            "divider_title": "OR",
            "createaccount_intro": "Don&#39;t have an account?",
            "social_intro": "Sign in with your social account",
            "button_signin": "Sign in",
            "local_intro_username": "Sign in with your user name"
        };

        var SETTINGS = {
            "remoteResource": "https://login.microsoftonline.com/static/tenant/templates/AzureBlue/unified.cshtml",
            "retryLimit": 3,
            "trimSpacesInPassword": true,
            "api": "CombinedSigninAndSignup",
            "csrf": "NGlISXVlV1NSQ0lNQ2dySm8xNXcrK2tabHQ5QjlUNkNsTTBidGpBQTZpNk5JbnA3YzMzRkVZbmZESm1oTHlSaXVSb1hGdFBMazlGandIT2tjbEladXc9PTsyMDE5LTExLTA1VDIzOjQ4OjUwLjM1MTEzNThaO24rUjZXa2NUMjRmeitzV0VLQkhXc2c9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==",
            "transId": "StateProperties=eyJUSUQiOiIzZDc0ZmJiNi1hYWFjLTRmYjEtYWYxMy1lMWIyYjE3NjkyNmUifQ",
            "pageViewId": "9e5ea2a1-1a3e-4793-90d4-24a16671dfee",
            "suppressElementCss": false,
            "isPageViewIdSentWithHeader": false,
            "allowAutoFocusOnPasswordField": true,
            "pageMode": 0,
            "config": {
                "showSignupLink": "True",
                "operatingMode": "Username",
                "sendHintOnSignup": "False",
                "forgotPasswordLinkLocation": "AfterLabel",
                "includePasswordRequirements": "true",
                "announceVerCompleteMsg": "True"
            },
            "sanitizerPolicy": {
                allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'img', 'video', 'source', 'span', 'footer', 'header', 'nav', 'main', 'style', 'meta', 'title', 'link', 'section', 'input', 'button', 'marquee', 'label'],
                allowedAttributes: {
                    '*': ['id', 'class', 'href', 'name', 'data-*', 'aria-*', 'type', 'lang', 'src', 'sizes', 'role', 'placeholder', 'title', 'width', 'height', 'style'],
                    form: ['method', 'action', 'target', 'accept-charset', 'novalidate'],
                    input: ['value'],
                    a: ['target'],
                    img: ['alt'],
                    video: ['controls', 'preload', 'poster'],
                    meta: ['http-equiv', 'content', 'charset'],
                    link: ['rel']
                },
                selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta'],
                allowedSchemes: ['http', 'https', 'mailto'],
                allowProtocolRelative: true,
                exclusiveFilter: function(frame) {
                    return frame.tag === 'meta' && (frame.attribs['http-equiv'] && frame.attribs['http-equiv'].toUpperCase().indexOf('REFRESH') >= 0) || (frame.attribs['content'] && /data:/gmi.test(frame.attribs['content'])) || frame.tag === 'link' && (frame.attribs['rel'] && frame.attribs['rel'].toUpperCase().indexOf('IMPORT') >= 0)
                }
            },
            "hosts": {
                "tenant": "/b2cgdprtest.onmicrosoft.com/B2C_1_Apple_IDP",
                "policy": "B2C_1_Apple_IDP",
                "static": "https://login.microsoftonline.com/static/"
            },
            "locale": {
                "lang": "en",
                "country": "US"
            },
            "xhrSettings": {
                "retryEnabled": true,
                "retryMaxAttempts": 3,
                "retryDelay": 200,
                "retryExponent": 2,
                "retryOn": ["error", "timeout"]
            }
        };

        if (pageNumber === 1) {
            return {
                type: 2,
                UV_PHONE: {},
                CP: CP,
                SA_FIELDS: SA_FIELDS,
                SETTINGS: SETTINGS,
                CONTENT: CONTENT
            }
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

    // Async method to fetch a resource
    static fetchResourceAsync(url: string): Promise<string> {
        console.log(url);
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.setRequestHeader('Content-Type', 'application/html');
            xhr.send();
            xhr.onload = function() {
                if (xhr.status === 200) {
                    console.log("template loaded");
                    resolve(xhr.responseText)
                }
            };
        })
    }
}