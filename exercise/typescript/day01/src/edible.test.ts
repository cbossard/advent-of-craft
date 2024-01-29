import { Food } from "./food";

describe('edible tests', () => {
    const expirationDate: Date = new Date(2023, 11, 1);
    const inspector = "randomUUID";
    const notFreshDate: Date = new Date(2023, 11, 8);
    const freshDate: Date = new Date(2023, 10, 24);

    it.each([
        [true, inspector, notFreshDate],
        [false, inspector, freshDate],
        [true, null, freshDate],
        [false, null, notFreshDate],
        [false, null, freshDate],
    ])('should not be edible if not fresh', (approvedForConsumption: boolean, inspectorId: string, now: Date) => {
        const food = new Food(
            expirationDate,
            approvedForConsumption,
            inspectorId);

        expect(food.isEdible(now)).toBeFalsy();
    })
})

