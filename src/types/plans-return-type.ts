
export type plansReturnType = {
    id: number;
    type: string;
    name: string;
    phonePrice: number;
    phonePriceOnPlan: number;
    installments: number;
    monthlyFee: number;
    schedule: {
        startDate: string;
    };
    locale: {
        name: string;
        priority: number;
    };
};
