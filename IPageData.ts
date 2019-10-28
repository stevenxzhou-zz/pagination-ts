import { ISettings } from "./ISettings";
import { IAttributeFields } from "./IAttributeFields";
import { IResponseData } from "./IResponseData";

export interface IPageData extends IResponseData {
    TYPE: number,
    ATTRIBUTE_FIELDS: Array<IAttributeFields>,
    SETTINGS: ISettings,
    CONTENT: any,
    ELEMENT: string,
    ELEMENTS: Array<string>
}