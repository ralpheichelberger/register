/**
 * MMS
 * Merchandise Management System -  API first approach
 *
 * OpenAPI spec version: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Timestamp } from './timestamp';

/**
 * the customers account balance
 */
export interface CustomerAccountBalance { 
    /**
     * the customer ID
     */
    customerId: number;
    timestamp?: Timestamp;
    /**
     * the credit account balance amount in cents
     */
    balance: number;
}