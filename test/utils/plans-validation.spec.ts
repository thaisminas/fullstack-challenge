// @ts-nocheck
import main from "../../src/script";
import PlansValidation from "../../src/utils/plans-validation";
import {Data} from "../../src/interfaces/data-interface";


describe('PlansValidation', () => {
    test("Should validate and return a list of plans", function () {
        const plansValidation = new PlansValidation()

        const data : Data = {
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
        }

        expect(plansValidation.validation(data)).toEqual([
            "{\"id\":3,\"type\":\"pos\",\"name\":\"Família 50GB\",\"phonePrice\":2899,\"phonePriceOnPlan\":2229,\"installments\":12,\"monthlyFee\":499,\"schedule\":{\"startDate\":\"2019-05-23 00:00\"},\"locale\":{\"name\":\"BELO HORIZONTE\",\"priority\":3}}",
            "{\"id\":6,\"type\":\"controle\",\"name\":\"Controle 2GB\",\"phonePrice\":2899,\"phonePriceOnPlan\":2229,\"installments\":12,\"monthlyFee\":44,\"schedule\":{\"startDate\":\"2019-05-23 00:00\"},\"locale\":{\"name\":\"BELO HORIZONTE\",\"priority\":3}}"
        ]);
    });

    test("Should return the plan with the latest data when the priority of all plans is equal", function () {
        const plansValidation = new PlansValidation()

        const data : Data = {
            "device" : {
                "name": "Samsung Galaxy S8"
            },
            "plans":[
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
                        "name": "BELO HORIZONTE\"",
                        "priority" : 3
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
                        "name": "BELO HORIZONTE\"",
                        "priority" : 3
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
                        "startDate":"2023-05-23 00:00"
                    },
                    "locale": {
                        "name": "BELO HORIZONTE",
                        "priority" : 3
                    }
                }
            ]
        }

        expect(plansValidation.validation(data)).toEqual([
            "{\"id\":6,\"type\":\"controle\",\"name\":\"Controle 2GB\",\"phonePrice\":2899,\"phonePriceOnPlan\":2229,\"installments\":12,\"monthlyFee\":44,\"schedule\":{\"startDate\":\"2023-05-23 00:00\"},\"locale\":{\"name\":\"BELO HORIZONTE\",\"priority\":3}}"
        ]);
    });

    test("Should return the plan with the latest data when the priority of all plans ", function () {
        const plansValidation = new PlansValidation()

        const data : Data = {
            "device" : {
                "name": "Samsung Galaxy S8"
            },
            "plans":[
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
                        "name": "BELO HORIZONTE\"",
                        "priority" : 3
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
                        "name": "BELO HORIZONTE\"",
                        "priority" : 3
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
                        "startDate":"2055-05-23 00:00"
                    },
                    "locale": {
                        "name": "BELO HORIZONTE",
                        "priority" : 3
                    }
                }
            ]
        }

        expect(plansValidation.validation(data)).toEqual();
    });

});
