import {findCalibrationValue, sumCalibrationValues, sumCalibrationValuesFromFile_2,} from "../../src/day1/part2";

describe('Tests for part 2 of day1', () => {
    describe('findCalibrationValue Tests', () => {
        it('should return the first and last instance of a number when passed a single number',
            () => {
                const result = findCalibrationValue('1');
                expect(result).toEqual(11);
            });

        it('should return the first and last instance of a number when passed in a single number and characters', () => {
            let result = findCalibrationValue('1abcd');
            expect(result).toEqual(11);

            result = findCalibrationValue('abcd1');
            expect(result).toEqual(11);

            result = findCalibrationValue('abcd1abcd');
            expect(result).toEqual(11);
        });

        it('should return the first and last numbers as a single number', () => {
            let result = findCalibrationValue('12');
            expect(result).toEqual(12);

            result = findCalibrationValue('abcd12');
            expect(result).toEqual(12);

            result = findCalibrationValue('abcd1abcd2');
            expect(result).toEqual(12);

            result = findCalibrationValue('a1bcdabc2d');
            expect(result).toEqual(12);

        });

        it('should return the first and last numbers as a single number when the number is written out', () => {
            let result = findCalibrationValue('one');
            expect(result).toEqual(11);

        });

        it('should return the first and last numbers even if there is text', () => {
            let result = findCalibrationValue('two1nine');
            expect(result).toEqual(29);

            result = findCalibrationValue('4nineeightseven2');
            expect(result).toEqual(42);

        });
    });
    describe('sumCalibrationValues tests', () => {
        it('should return the sum of two numbers when passed in', () => {
            const values = ['12', '34'];
            const result = sumCalibrationValues(values);
            expect(result).toEqual(12 + 34);
        });

        it('should return the sum of two numbers when passed in with additional characters', () => {
            const values = ['1abdsasdf2', '3fasdf4fadsfasf'];
            const result = sumCalibrationValues(values);
            expect(result).toEqual(12 + 34);
        });

        it('should return the sum of two numbers when passed in with additional characters and numbers', () => {
            const values = ['1abdfa444dsa6sdf2', '3fasdf238fadsfas4f'];
            const result = sumCalibrationValues(values);
            expect(result).toEqual(12 + 34);
        });

        it('should return the sum of two numbers when passed in with additional characters and numbers', () => {
            const values = ['1abdfa444dsa6sdf2', '3fasdf238fadsfas4f', 'wqerqwerq5lklk6'];
            const result = sumCalibrationValues(values);
            expect(result).toEqual(12 + 34 + 56);
        });
        it('should return the sum of two numbers when passed in with additional characters and numbers', () => {
            const values = ['1abc2',
                'pqr3stu8vwx',
                'a1b2c3d4e5f',
                'treb7uchet'];
            const result = sumCalibrationValues(values);
            expect(result).toEqual(12 + 38 + 15 + 77);
        });
    });
    describe('sumCalibrationValuesFromFile Tests', ()=>{
        it('should return the sum based off the file', async () => {
            const filepath = '/Users/cwillingham/Development/Personal/adventOfCode2023/src/day1/inputs/part2.txt';
            const result = await sumCalibrationValuesFromFile_2(filepath);
            expect(result).toEqual(281);
        });
    })

})