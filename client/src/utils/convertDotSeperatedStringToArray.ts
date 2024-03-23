

export default function convertDotSeperatedStringToArray(inputString: string) {
    const stringArray = inputString.split('.').map(item => item.trim());
    return stringArray;
}
