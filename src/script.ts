// @ts-nocheck
import ValidationDate from "./utils/validation-date";
import { data } from '../files/data';
import PlansValidation from "./utils/plans-validation";
import * as fs from 'fs';
import * as path from "path";

export default function main(){
    const validationDate = new ValidationDate();
    const plansValidation = new PlansValidation();

    if(!validationDate.isValidDate(data)) {
        return {
            'message': 'Data reported is not validated!',
        }
    }

    const planList = plansValidation.validation(data).join();

    const directory = path.join('./files', 'plan-file.txt');

    fs.writeFile(directory, planList, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        }
        console.log(`Content successfully written to file, ${directory}`)
    });

    return planList;
}

main();
