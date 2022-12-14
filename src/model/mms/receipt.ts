/**
 * MMS
 * Merchandise Management System -  API first approach
 *
 * OpenAPI spec version: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Payment } from './payment';
import { ReceiptItem } from './receiptItem';
import { ReceiptStatus } from './receiptStatus';
import { ReceiptType } from './receiptType';
import { TotalAmounts } from './totalAmounts';

export interface Receipt { 
    /**
     * the item code has a fixed length of 20 characters  and consists of register ID, date and time format: [RRRRRR][YYYYMMDD][HHMMSS]
     */
    code: string;
    status: ReceiptStatus;
    nature: ReceiptType;
    itemlist?: Array<ReceiptItem>;
    total: TotalAmounts;
    payments?: Array<Payment>;
}