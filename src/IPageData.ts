import { ISettings } from "./ISettings";
import { IAttributeField } from "./IAttributeField";
import { IResponseData } from "./IResponseData";

export interface IPageData extends IResponseData {
    type: number,
    attributeFields: Array<IAttributeField>,
    settings: ISettings,
    content: any,
    element: string,
    elements: Array<string>
}