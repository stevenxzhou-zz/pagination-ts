import { IAttributeFieldLegacy } from "./IAttributeFieldLegacy";
import { ISettingsLegacy } from "./ISettingsLegacy";
import { IPhoneNumberLegacy } from "./IPhoneNumberLegacy";

export interface IPageDataLegacy {
    CP: Map<string, Map<string, Array<Map<string, string>>>>,
    UV_PHONE: Map<string, Array<IPhoneNumberLegacy>>
    SA_FIELDS: Array<IAttributeFieldLegacy>,
    CONTENT: Map<string, string>,
    SETTINGS: ISettingsLegacy
}