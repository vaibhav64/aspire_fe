import { CardResponse } from "../interfaces/ICardResponse";

export const data : CardResponse[] = [
  {
    "type": "debit",
    "copy": "My Debit Cards",
    "cards": [
      {
        "card_details": {
          "name": "Mark Henary",
          "number": "1234123412341234",
          "validity_month":12,
          "validity_year":20,
          "cvv": 123,
          "freezed": 0,
          "balance":3000
        },
        "transactions": [
          {
          "type": "GIFT",
          "amount": 150,
          "is_debit": 0,
          "for": "Hamleys",
          "desc": "Refund on debit card",
          "on_date":20,
          "on_month": "May",
          "on_year": 2020
         },
        {
          "type": "TRAVEL",
          "amount": 150,
          "is_debit": 1,
          "for": "Hamleys",
          "desc": "Charged to debit card",
          "on_date":20,
          "on_month": "May",
          "on_year": 2020
         },
         {
          "type": "SERVICE",
          "amount": 150,
          "is_debit": 1,
          "for": "Hamleys",
          "desc": "Charged to debit card",
          "on_date":20,
          "on_month": "May",
          "on_year": 2020
         }
        ]
      },
      {
        "card_details": {
          "name": "Google API",
          "number": "1234123412341235",
          "validity_month":12,
          "validity_year":20,
          "cvv": 124,
          "freezed": 1,
          "balance":5000
        },
        "transactions": [
         
        {
          "type": "TRAVEL",
          "amount": 150,
          "is_debit": 1,
          "for": "Chat corner",
          "desc": "Charged to debit card",
          "on_date":21,
          "on_month": "May",
          "on_year": 2020
         },
         {
          "type": "GIFT",
          "amount": 150,
          "is_debit": 0,
          "for": "Chat corner",
          "desc": "Refund on debit card",
          "on_date":22,
          "on_month": "May",
          "on_year": 2020
         },
         {
          "type": "SERVICE",
          "amount": 150,
          "is_debit": 1,
          "for": "Chat corner",
          "desc": "Charged to debit card",
          "on_date":23,
          "on_month": "May",
          "on_year": 2020
         }
        ]
      }
      ],
  },
  {
    "type": "company",
    "copy": "All Company Cards",
    "cards": [
      {
        "card_details": {
          "name": "Mark Henary II",
          "number": "1234123412341234",
          "validity_month":12,
          "validity_year":20,
          "cvv": 123,
          "freezed": 0,
          "balance":5000
        },
        "transactions": [
          {
          "type": "GIFT",
          "amount": 150,
          "is_debit": 0,
          "for": "Hamleys",
          "desc": "Refund on debit card",
          "on_date":20,
          "on_month": "May",
          "on_year": 2020
          },
        {
          "type": "TRAVEL",
          "amount": 150,
          "is_debit": 1,
          "for": "Hamleys",
          "desc": "Charged to debit card",
          "on_date":20,
          "on_month": "May",
          "on_year": 2020
          },
          {
          "type": "SERVICE",
          "amount": 150,
          "is_debit": 1,
          "for": "Hamleys",
          "desc": "Charged to debit card",
          "on_date":20,
          "on_month": "May",
          "on_year": 2020
          }
        ]
      }
      ]
  }
]  
  