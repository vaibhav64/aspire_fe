import { Transaction } from "./ITransaction";
import { CardDetails } from "./ICardDetail";

export interface CardResponse{
    type: string,
    copy: string,
    cards: Card[]
}

export interface Card{
    card_details: CardDetails,
    transactions: Transaction[]
}