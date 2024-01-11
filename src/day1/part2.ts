import fs from "fs";
import readline from "readline";
import retryTimes = jest.retryTimes;

const digitObject = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
};

const digitMap = new Map(Object.entries(digitObject));


export function findCalibrationValue(search: string): number {
    const first = findFirstDigit(search);
    const last = findLastDigit(search);
    console.log(`First: ${first} Last: ${last}`);
    const calibrationValue = +(first + last);
    console.log("Search: " + search + " calibration value: " + calibrationValue);
    return calibrationValue;
}


function findFirstDigit(search: string): string {
    //read the seach string starting with the first character
    //and then adding an additional character until we
    //find either a number or a word that represents a number.
    let firstDigit = '';
    for (let i = 0; i < search.length; i++) {
        //is this a number?
        if (isNaN(Number(search.charAt(i)))) {
            const substring = search.substring(0, i + 1);
            for (const key of digitMap.keys()) {
                if (substring.includes(key)) {
                    return <string>digitMap.get(key)?.toString();

                }
            }
        }
        // Return the first digit found
        else {
            return search.charAt(i);
        }


    }

    return firstDigit;
}

function findLastDigit(search: string): string {
    //read the seach string starting with the last character
    //and then adding an additional character until we
    //find either a number or a word that represents a number.
    let lastDigit = '';
    for (let i = search.length - 1; i > -1; i--) {
        //is this a number?
        if (isNaN(Number(search.charAt(i)))) {
            const substring = search.substring(i, search.length);
            console.log(substring);
            for (const key of digitMap.keys()) {
                if (substring.includes(key)) {
                    return <string>digitMap.get(key)?.toString();
                }
            }
        } else {
            // Return the first digit found
            return search.charAt(i);
        }

    }
    return lastDigit;
}

export function sumCalibrationValues(values: string[]): number {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum = sum + findCalibrationValue(values[i])
    }
    return sum;
}

export async function sumCalibrationValuesFromFile_2(filepath: string): Promise<number> {
    const fileStream = fs.createReadStream(filepath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    let sum = 0;
    for await (const line of rl) {
        const calibration = line;
        sum = sum + findCalibrationValue(calibration);
    }
    return sum;
}
