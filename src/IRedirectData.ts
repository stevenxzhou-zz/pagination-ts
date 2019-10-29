import { IResponseData } from "./IResponseData";

export interface IRedirectData extends IResponseData{
    type: number,
    redirectUri: string
}