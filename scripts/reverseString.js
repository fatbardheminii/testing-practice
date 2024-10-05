export function reverseString(input) {
    if (typeof input !== 'string') {
        return '';
    }
    return input.split('').reverse().join('');
}