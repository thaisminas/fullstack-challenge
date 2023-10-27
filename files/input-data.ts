export const inputData = {
  device: {
    name: "Samsung Galaxy S8"
  },
  plans: [
    createPlan(1, "pos", "Família 50GB", 2899, 2229, 12, 499, "2019-06-23 00:00", "BRASIL", 1),
    createPlan(2, "pos", "Família 50GB", 2899, 2229, 12, 499, "2019-05-23 00:00", "MINAS GERAIS", 2),
    createPlan(3, "pos", "Família 50GB", 2899, 2229, 12, 499, "2019-05-23 00:00", "BELO HORIZONTE", 3),
    createPlan(4, "controle", "Controle 2GB", 2799, 2129, 12, 39.99, "2022-01-01 00:00", "MINAS GERAIS", 2),
    createPlan(5, "controle", "Controle 2GB", 2899, 2229, 12, 49.99, "2019-01-01 00:00", "MINAS GERAIS", 2),
    createPlan(6, "controle", "Controle 2GB", 2899, 2229, 12, 44, "2019-05-23 00:00", "BELO HORIZONTE", 3)
  ]
};
function createPlan(id: number, type: string, name: string, phonePrice: number,
                    phonePriceOnPlan: number, installments: number,
                    monthlyFee: number, startDate: string,
                    localeName: string, localePriority: number) {
  return {
    id,
    type,
    name,
    phonePrice,
    phonePriceOnPlan,
    installments,
    monthlyFee,
    schedule: createSchedule(startDate),
    locale: createLocale(localeName, localePriority)
  };
}
function createSchedule(startDate: string) {
  return {
    startDate
  };
}

function createLocale(name: string, priority: number) {
  return {
    name,
    priority
  };
}
