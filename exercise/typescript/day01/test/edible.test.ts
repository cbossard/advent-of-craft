import { Food } from "../src/food";
import { add, sub } from "date-fns";
import {v4 as uuid} from 'uuid';

describe('edible tests', () => {
    const expirationDate: Date = new Date(2023, 11, 1);
    const inspector = uuid();
    const notFreshDate = add(expirationDate, {
        days: 7,
    });
    const freshDate = sub(expirationDate, {
        days: 7,
    });

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
    });

    it('should return true if food is edible', () => {
        const food = new Food( expirationDate,
                true,
                inspector);
        expect(food.isEdible(freshDate)).toBeTruthy();
    });
})

