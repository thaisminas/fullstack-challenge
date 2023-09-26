// @ts-nocheck
import DateValidation from "./utils/date-validation";
import { data } from '../files/data';
import PlansValidation from "./utils/plans-validation";
import * as fs from 'fs';
import * as path from "path";
import {Data} from "./interfaces/data-interface";

export default function main(data: Data){
    const validationDate = new DateValidation();
    const plansValidation = new PlansValidation();

    if(!validationDate.isValidDate(data)) {
        return {
            'message': 'Date reported not is valid!',
        }
    }

    const planList = JSON.stringify(plansValidation.validation(data));
    const directory = path.join('./files', 'plans-list-file.json');

    fs.writeFile(directory, planList, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        }
        console.log(`Content successfully written to file, ${directory}`)
    });

    return planList;
}

main(data);
