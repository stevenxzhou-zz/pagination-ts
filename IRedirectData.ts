import { IResponseData } from "./IResponseData";

export interface IRedirectData extends IResponseData{
    TYPE: number,
    REDIRECT_URI: string
}