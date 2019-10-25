import { ISettings } from "./ISettings";

export interface IPageData {
    SECTIONTYPE: string,
    SA_FIELDS: any,
    SETTINGS: ISettings,
    CONTENT: any,
    ELEMENT: string,
    ELEMENTS: Array<string>
}