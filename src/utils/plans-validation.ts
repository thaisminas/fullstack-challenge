// @ts-nocheck
import {Data, Plans} from '../interfaces/data-interface';
import {plansReturnType} from "../types/plans-return-type";

export default class PlansValidation {
    public validation({ plans }: Data): plansReturnType[] {
        const filteredPlans = this.filterPlans(plans);
        return this.orderPlans(filteredPlans);
    }
    private filterPlans(plans: Plans): Map {
        const planMap = new Map();
        plans.forEach((plan) => {
            if (!planMap.has(plan.name) && !planMap.has(plan.id)) {
                planMap.set(plan.name, []);
            }
            planMap.get(plan.name).push(plan);
        });
        return planMap;
    }
    private orderPlans(filteredPlans: Map): plansReturnType {
        let orderedPlans = [filteredPlans.values()];
        const plans = Array.from(orderedPlans[0]);

        plans.forEach((plan) => {
            let planPriority = plan.sort((a, b) => {
                if(b.locale.priority === a.locale.priority) {
                    return new Date(b.schedule.startDate) > new Date(a.schedule.startDate) ? 1 : -1;
                }
                return b.locale.priority - a.locale.priority;
            });

            orderedPlans.push(JSON.stringify(planPriority[0]));
        })
        orderedPlans.shift();
        return orderedPlans;
    };

};


