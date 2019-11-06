import { IAttributeFieldLegacy } from "./IAttributeFieldLegacy";
import { ISettingsLegacy } from "./ISettingsLegacy";
import { IPhoneNumberLegacy } from "./IPhoneNumberLegacy";
import { IContent } from "./IContent";
import { ISocialProvider } from "./ISocialProvider";

export interface IPageDataLegacy {
    CP: {
        list: Array<ISocialProvider>
    },
    UV_PHONE: any
    SA_FIELDS: {
        AttributeFields: Array<IAttributeFieldLegacy>
    },
    CONTENT: IContent,
    SETTINGS: ISettingsLegacy
}