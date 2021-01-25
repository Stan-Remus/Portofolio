export class Payment {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `I owe ${this.recipient} $${this.amount} for ${this.details}`;
    }
}
