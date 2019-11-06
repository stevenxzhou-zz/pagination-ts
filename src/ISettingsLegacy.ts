export interface ISettingsLegacy {
    remoteResource: string,
    retryLimit: number,
    trimSpacesInPassword: boolean,
    api: string,
    csrf: string,
    transId: string,
    pageViewId: string,
    suppressElementCss: boolean,
    isPageViewIdSentWithHeader: boolean,
    allowAutoFocusOnPasswordField: boolean,
    pageMode: number,
    config: {
        showSignupLink: string,
        operatingMode: string,
        sendHintOnSignup: string,
        forgotPasswordLinkLocation: string,
        includePasswordRequirements: string,
        announceVerCompleteMsg: string
    },
    sanitizerPolicy: {
        allowedTags: Array<string>,
        allowedAttributes: {
            '*': Array<string>,
            form: Array<string>,
            input: Array<string>,
            a: Array<string>,
            img: Array<string>,
            video: Array<string>,
            meta: Array<string>,
            link: Array<string>
        },
        selfClosing: Array<string>,
        allowedSchemes: Array<string>,
        allowProtocolRelative: boolean,
        exclusiveFilter: Function 
    },
    hosts: {                
        tenant: string,
        policy: string,
        static: string
    },
    locale: {
        lang: string,
        country: string
    },
    xhrSettings: {
        retryEnabled: boolean,
        retryMaxAttempts: number,
        retryDelay: number,
        retryExponent: number,
        retryOn: Array<string>
    }
}