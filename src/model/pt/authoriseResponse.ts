/**
 * PTAPI
 * Payment Device API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AuthoriseResponseData } from './authoriseResponseData';
import { PtResult } from './ptResult';

export interface AuthoriseResponse { 
    error: string;
    result: PtResult;
    data?: AuthoriseResponseData;
}