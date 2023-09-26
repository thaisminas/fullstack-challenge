import PlansValidation from "../src/utils/plans-validation";
import {Data} from "../src/interfaces/data-interface";
import main from "../src/script";


describe('script', () => {
    it('should return a list of plans correctly', () => {
        const plansValidation = new PlansValidation();
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
                    locale: { name: 'Cidade A', priority: 2 },
                    schedule: { startDate: '2023-09-25' },
                },
                {
                    id: 2,
                    type: 'controle',
                    phonePrice: 2899,
                    phonePriceOnPlan: 2229,
                    installments: 12,
                    monthlyFee: 499,
                    name: 'Plano B',
                    locale: { name: 'Cidade B', priority: 1 },
                    schedule: { startDate: '2023-09-24' },
                },
                {
                    id: 3,
                    type: 'pos',
                    phonePrice: 2899,
                    phonePriceOnPlan: 2229,
                    installments: 12,
                    monthlyFee: 499,
                    name: 'Plano A',
                    locale: { name: 'Cidade A', priority: 2 },
                    schedule: { startDate: '2023-09-23' },
                },
            ],
        };

        const expectedOutput = ["{\"id\":1,\"type\":\"pos\",\"phonePrice\":2899,\"phonePriceOnPlan\":2229,\"installments\":12,\"monthlyFee\":499,\"name\":\"Plano A\",\"locale\":{\"name\":\"Cidade A\",\"priority\":2},\"schedule\":{\"startDate\":\"2023-09-25\"}}", "{\"id\":2,\"type\":\"controle\",\"phonePrice\":2899,\"phonePriceOnPlan\":2229,\"installments\":12,\"monthlyFee\":499,\"name\":\"Plano B\",\"locale\":{\"name\":\"Cidade B\",\"priority\":1},\"schedule\":{\"startDate\":\"2023-09-24\"}}"];
        const result = plansValidation.validation(inputData);
        expect(result).toEqual(expectedOutput);
    });
});
