import { IPageData } from "./IPageData"

export interface ISection {
    generateServiceContent(pageData: IPageData): string
    initialize(pageData: IPageData): void
}