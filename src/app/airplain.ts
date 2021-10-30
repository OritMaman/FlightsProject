export class Airplain {
    id :number;
    destination: string;
    price :number;
    date : string;
    numOfCards : number;

    constructor(id?,destination?,price?,date?,numOfCards?){
    this.id=id;
    this.destination=destination;
    this.price=price;
    this.date=date;
    this.numOfCards=numOfCards;
    }
}