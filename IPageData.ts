import { ISettings } from "./ISettings";
import { IAttributeFields } from "./IAttributeFields";

export interface IPageData {
    SECTION_TYPE: number,
    ATTRIBUTE_FIELDS: Array<IAttributeFields>,
    SETTINGS: ISettings,
    CONTENT: any,
    ELEMENT: string,
    ELEMENTS: Array<string>
}