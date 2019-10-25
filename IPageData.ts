import { ISettings } from "./ISettings";
import { ISA_FIELD } from "./ISA_FIELD";

export interface IPageData {
    SECTION_TYPE: string,
    SA_FIELDS: Array<ISA_FIELD>,
    SETTINGS: ISettings,
    CONTENT: any,
    ELEMENT: string,
    ELEMENTS: Array<string>
}