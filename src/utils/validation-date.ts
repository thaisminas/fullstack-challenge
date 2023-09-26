import {Data} from "../interfaces/data-interface";

export default class ValidationDate {
    isValidDate(data: Data) {
        for(const plan of data.plans) {
            const currentDate = new Date();
            return new Date(plan.schedule.startDate) <= currentDate;
        }
    }
}
