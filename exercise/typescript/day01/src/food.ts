
export class Food {
    expirationDate: Date;
    approvedForConsumption: boolean;
    inspectorId: string;

    constructor(expirationDate: Date, approvedForConsumption: boolean, inspectorId: string) {
        this.expirationDate = expirationDate;
        this.approvedForConsumption = approvedForConsumption;
        this.inspectorId = inspectorId;
    }

    isEdible(now: Date): boolean {
        if (this.expirationDate > now &&
            this.approvedForConsumption &&
            this.inspectorId != null) {
            return true;
        } else {
            return false;
        }
    }
}