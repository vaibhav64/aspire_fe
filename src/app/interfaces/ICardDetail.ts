export interface CardDetails {
    name : string,
    number: string,
    validity_month: number,
    validity_year: number,
    cvv: number,
    freezed : 0|1,
    balance : number
}