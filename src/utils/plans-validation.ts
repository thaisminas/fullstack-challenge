// @ts-nocheck
import {Data, Plans} from '../interfaces/data-interface';
import {plansReturnType} from "../types/plans-return-type";

export default class PlansValidation {
    /**
     * Validação dos planos
     * @param data - Dados contendo os planos
     * @returns Array com os planos ordenados
     */
    public validation({ plans }: Data): plansReturnType[] {
        return this.orderPlans(this.filterPlans(plans));
    }

    /**
     * Filtra os planos e agrupa-os pelo nome
     * @param plans - Array com os planos
     * @returns Mapa com os planos agrupados pelo nome
     */
    private filterPlans(plans: Plans[]): Map<string, Plans[]> {
        const planMap = new Map<string, Plans[]>();
        plans.forEach((plan) => {
            const planArray = planMap.get(plan.name) || [];
            planArray.push(plan);
            planMap.set(plan.name, planArray);
        });
        return planMap;
    }
    /**
     * Ordena os planos de acordo com a prioridade e a inputData de início
     * @param filteredPlans - Mapa com os planos agrupados pelo nome
     * @returns Array com os planos ordenados
     */
    private orderPlans(filteredPlans: Map<string, Plans[]>): plansReturnType[] {
        const orderedPlans: plansReturnType[] = [];
        filteredPlans.forEach((plans) => {
            const sortedPlans = plans.sort(this.comparePlans);
            orderedPlans.push(JSON.stringify(sortedPlans[0]));
        });
        return orderedPlans;
    }
    /**
     * Função de comparação para ordenar os planos
     * @param a - Primeiro plano a ser comparado
     * @param b - Segundo plano a ser comparado
     * @returns Valor negativo se a < b, valor positivo se a > b, ou zero se a = b
     */
    private comparePlans(a: Plans, b: Plans): number {
        if (b.locale.priority === a.locale.priority) {
            return new Date(b.schedule.startDate) > new Date(a.schedule.startDate) ? 1 : -1;
        }
        return b.locale.priority - a.locale.priority;
    }
};


