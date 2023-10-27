// @ts-nocheck
import DateValidation from "./utils/date-validation";
import {inputData} from '../files/input-data';
import {Data} from "./interfaces/data-interface";
import {GenerateFile} from "./utils/generate-file";

export default async function main(data: Data) {
    const validationDate = new DateValidation();
    const generateFile = new GenerateFile();

    if (!validationDate.areAllPlanStartDatesValid(data)) {
        return {
            message: 'Date reported is not valid!',
        };
    }

    return  await generateFile.create(data);
}

main(inputData);
