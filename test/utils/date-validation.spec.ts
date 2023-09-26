import DateValidation from "../../src/utils/date-validation";
import {Data} from "../../src/interfaces/data-interface";

describe('DateValidation', () => {
    it('should return true when a plan has a valid date', () => {
        const validationDate = new DateValidation();

        const inputData : Data = {
            "device" : {
                "name": "Samsung Galaxy S8"
            },
            "plans":[
                {
                    "id":1,
                    "type":"pos",
                    "name":"Família 50GB",
                    "phonePrice":2899,
                    "phonePriceOnPlan":2229,
                    "installments":12,
                    "monthlyFee":499,
                    "schedule":{
                        "startDate":"2019-06-23 00:00"
                    },
                    "locale": {
                        "name": "BRASIL",
                        "priority" : 1
                    }
                },
            ]
        }

        const result = validationDate.isValidDate(inputData);

        expect(result).toBe(true);
    });

    it('should return false when a plan has an invalid date', () => {
        const validationDate = new DateValidation();

        const inputData : Data = {
            "device" : {
                "name": "Samsung Galaxy S8"
            },
            "plans":[
                {
                    "id":1,
                    "type":"pos",
                    "name":"Família 50GB",
                    "phonePrice":2899,
                    "phonePriceOnPlan":2229,
                    "installments":12,
                    "monthlyFee":499,
                    "schedule":{
                        "startDate":"2056-01-01"
                    },
                    "locale": {
                        "name": "BRASIL",
                        "priority" : 1
                    }
                },
            ]
        }

        const result = validationDate.isValidDate(inputData);

        expect(result).toBe(false);
    });
});
