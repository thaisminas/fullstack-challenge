import {Data} from "../src/interfaces/data-interface";
import main from "../src/script";

describe('script', () => {
    it('should return a list of plans correctly',  async () => {
        const inputData: Data = {
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
                {
                    "id":2,
                    "type":"pos",
                    "name":"Família 50GB",
                    "phonePrice":2899,
                    "phonePriceOnPlan":2229,
                    "installments":12,
                    "monthlyFee":499,
                    "schedule":{
                        "startDate":"2019-05-23 00:00"
                    },
                    "locale": {
                        "name": "MINAS GERAIS",
                        "priority" : 2
                    }
                },
                {
                    "id":3,
                    "type":"pos",
                    "name":"Família 50GB",
                    "phonePrice":2899,
                    "phonePriceOnPlan":2229,
                    "installments":12,
                    "monthlyFee":499,
                    "schedule":{
                        "startDate":"2019-05-23 00:00"
                    },
                    "locale": {
                        "name": "BELO HORIZONTE",
                        "priority" : 3
                    }
                },
                {
                    "id":4,
                    "type":"controle",
                    "name":"Controle 2GB",
                    "phonePrice":2799,
                    "phonePriceOnPlan":2129,
                    "installments":12,
                    "monthlyFee":39.99,
                    "schedule":{
                        "startDate":"2022-01-01 00:00"
                    },
                    "locale": {
                        "name": "MINAS GERAIS",
                        "priority" : 2
                    }
                },
                {
                    "id":5,
                    "type":"controle",
                    "name":"Controle 2GB",
                    "phonePrice":2899,
                    "phonePriceOnPlan":2229,
                    "installments":12,
                    "monthlyFee":49.99,
                    "schedule":{
                        "startDate":"2019-01-01 00:00"
                    },
                    "locale": {
                        "name": "MINAS GERAIS",
                        "priority" : 2
                    }
                },
                {
                    "id":6,
                    "type":"controle",
                    "name":"Controle 2GB",
                    "phonePrice":2899,
                    "phonePriceOnPlan":2229,
                    "installments":12,
                    "monthlyFee":44,
                    "schedule":{
                        "startDate":"2019-05-23 00:00"
                    },
                    "locale": {
                        "name": "BELO HORIZONTE",
                        "priority" : 3
                    }
                }
            ]
        };
        const expectedOutput = "[\"{\\\"id\\\":3,\\\"type\\\":\\\"pos\\\",\\\"name\\\":\\\"Família 50GB\\\",\\\"phonePrice\\\":2899,\\\"phonePriceOnPlan\\\":2229,\\\"installments\\\":12,\\\"monthlyFee\\\":499,\\\"schedule\\\":{\\\"startDate\\\":\\\"2019-05-23 00:00\\\"},\\\"locale\\\":{\\\"name\\\":\\\"BELO HORIZONTE\\\",\\\"priority\\\":3}}\",\"{\\\"id\\\":6,\\\"type\\\":\\\"controle\\\",\\\"name\\\":\\\"Controle 2GB\\\",\\\"phonePrice\\\":2899,\\\"phonePriceOnPlan\\\":2229,\\\"installments\\\":12,\\\"monthlyFee\\\":44,\\\"schedule\\\":{\\\"startDate\\\":\\\"2019-05-23 00:00\\\"},\\\"locale\\\":{\\\"name\\\":\\\"BELO HORIZONTE\\\",\\\"priority\\\":3}}\"]";
        const result = await main(inputData)
        expect(inputData.plans[0].locale.priority).toEqual(1);
        expect(inputData.plans[1].locale.priority).toEqual(2);
        expect(inputData.plans[2].locale.priority).toEqual(3);
        expect(result).toEqual(expectedOutput);
    });

    it('should not return a list of plans when the date entered is greater than the current date', async () => {
        const inputData: Data = {
            device: {
                name: 'Samsung',
            },
            plans: [
                {
                    id: 1,
                    type: 'pos',
                    phonePrice: 2899,
                    phonePriceOnPlan: 2229,
                    installments: 12,
                    monthlyFee: 499,
                    name: 'Plano A',
                    locale: { name: 'Betim', priority: 3 },
                    schedule: { startDate: '2024-09-25' },
                },
                {
                    id: 2,
                    type: 'controle',
                    phonePrice: 2899,
                    phonePriceOnPlan: 2229,
                    installments: 12,
                    monthlyFee: 499,
                    name: 'Plano B',
                    locale: { name: 'Minas Gerais', priority: 2 },
                    schedule: { startDate: '2024-09-24' },
                },
                {
                    id: 3,
                    type: 'pos',
                    phonePrice: 2899,
                    phonePriceOnPlan: 2229,
                    installments: 12,
                    monthlyFee: 499,
                    name: 'Plano A',
                    locale: { name: 'Brasil', priority: 1 },
                    schedule: { startDate: '2024-09-23' },
                },
            ],
        };
        const expectedOutput = {
            message: 'Date reported is not valid!',
        };

        const result = await main(inputData)
        expect(inputData.plans[0].locale.priority).toEqual(3);
        expect(inputData.plans[1].locale.priority).toEqual(2);
        expect(inputData.plans[2].locale.priority).toEqual(1);
        expect(result).toEqual(expectedOutput);
    });

    it('should return a list of plans with the most recent date when they have equal priority', async () => {
        const inputData: Data = {
            device: {
                name: 'Samsung',
            },
            plans: [
                {
                    id: 1,
                    type: 'pos',
                    phonePrice: 2899,
                    phonePriceOnPlan: 2229,
                    installments: 12,
                    monthlyFee: 499,
                    name: 'Plano A',
                    locale: { name: 'Minas Gerais', priority: 1 },
                    schedule: { startDate: '2020-09-25' },
                },
                {
                    id: 2,
                    type: 'controle',
                    phonePrice: 2899,
                    phonePriceOnPlan: 2229,
                    installments: 12,
                    monthlyFee: 499,
                    name: 'Plano B',
                    locale: { name: 'Cidade B', priority: 3 },
                    schedule: { startDate: '2021-09-24' },
                },
                {
                    id: 3,
                    type: 'pos',
                    phonePrice: 2899,
                    phonePriceOnPlan: 2229,
                    installments: 12,
                    monthlyFee: 499,
                    name: 'Plano A',
                    locale: { name: 'Cidade A', priority: 3 },
                    schedule: { startDate: '2023-09-26' },
                },
            ],
        };
        const expectedOutput = "[\"{\\\"id\\\":3,\\\"type\\\":\\\"pos\\\",\\\"phonePrice\\\":2899,\\\"phonePriceOnPlan\\\":2229,\\\"installments\\\":12,\\\"monthlyFee\\\":499,\\\"name\\\":\\\"Plano A\\\",\\\"locale\\\":{\\\"name\\\":\\\"Cidade A\\\",\\\"priority\\\":3},\\\"schedule\\\":{\\\"startDate\\\":\\\"2023-09-26\\\"}}\",\"{\\\"id\\\":2,\\\"type\\\":\\\"controle\\\",\\\"phonePrice\\\":2899,\\\"phonePriceOnPlan\\\":2229,\\\"installments\\\":12,\\\"monthlyFee\\\":499,\\\"name\\\":\\\"Plano B\\\",\\\"locale\\\":{\\\"name\\\":\\\"Cidade B\\\",\\\"priority\\\":3},\\\"schedule\\\":{\\\"startDate\\\":\\\"2021-09-24\\\"}}\"]";

        const result = await main(inputData)
        expect(inputData.plans[0].locale.priority).toEqual(1);
        expect(inputData.plans[1].locale.priority).toEqual(3);
        expect(inputData.plans[2].locale.priority).toEqual(3);
        expect(result).toEqual(expectedOutput);
    });
});
