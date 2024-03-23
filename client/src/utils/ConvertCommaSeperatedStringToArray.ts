

export default function ConvertCommaSeperatedStringToArray(inputString: string) {
    const stringArray = inputString.split(',').map(item => item.trim());
    return stringArray;
}
