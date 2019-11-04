import { IAttributeFieldLegacy } from "./IAttributeFieldLegacy";
import { ISettingsLegacy } from "./ISettingsLegacy";

export interface IPageDataLegacy {
    CP: Map<string, Map<string, Array<Map<string, string>>>>,
    SA_FIELDS: Array<IAttributeFieldLegacy>,
    CONTENT: Map<string, string>,
    SETTINGS: ISettingsLegacy
}