export default function createArrayFromNumber(number: number): number[] {
    const resultArray: number[] = [];
    for (let i = 0; i <= number; i++) {
      resultArray.push(i);
    }
    return resultArray;
  }