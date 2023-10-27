// @ts-nocheck
import PlansValidation from "./plans-validation";
import {Data} from "../interfaces/data-interface";
import * as path from "path";
import * as fs from "fs";


export class GenerateFile{

    public async create(data: Data): Promise<string>{
        const plansValidation = new PlansValidation();
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
}
