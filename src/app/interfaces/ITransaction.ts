export interface Transaction {
    type : 'GIFT' | 'TRAVEL' | 'SERVICE',
    amount: number,
    is_debit : 0|1,
    for: string,
    desc : string,
    on_date : number,
    on_month : string,
    on_year : number
}