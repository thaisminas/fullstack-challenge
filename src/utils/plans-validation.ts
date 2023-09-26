// @ts-nocheck
import {Data, Plans} from '../interfaces/data-interface';
import {plansReturnType} from "../types/plans-return-type";

export default class PlansValidation {
    public validation({ plans }: Data): plansReturnType[] {
        const planMap = this.combineIdenticalPlans(plans);
        return this.orderPlans(planMap);
    }

    private combineIdenticalPlans(plans: Plans): Map {
        const planMap = new Map();
        plans.forEach((plan) => {
            if (!planMap.has(plan.name) && !planMap.has(plan.id)) {
                planMap.set(plan.name, []);
            }
            planMap.get(plan.name).push(plan);
        });
        return planMap;
    }

    private orderPlans(planMap): plansReturnType {
        let planList = [planMap.values()];
        const plan = Array.from(planList[0]);

        plan.forEach((plan) => {
            let planPriority = plan.sort((a, b) => {
                if(b.locale.priority === a.locale.priority){
                    return new Date(b.schedule.startDate) > new Date(a.schedule.startDate) ? 1 : -1;
                }
                return b.locale.priority - a.locale.priority;
            });

            planList.push(JSON.stringify(planPriority[0]));
        })
        planList.shift()
        return planList;
    }

};


