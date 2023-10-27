import {Data} from "../interfaces/data-interface";

export default class DateValidation {
    public areAllPlanStartDatesValid(inputData: Data) {
        let dateInvalid = [];
        const currentDate = new Date();

        for(const currentPlan of inputData.plans) {
            if(!this.isStartDateValid(new Date(currentPlan.schedule.startDate), currentDate)){
                dateInvalid.push(1)
            }
        }

        return dateInvalid.length === 0;
    }

    private isStartDateValid(startDate: Date, currentDate: Date): boolean {
        return startDate <= currentDate;
    }

}
