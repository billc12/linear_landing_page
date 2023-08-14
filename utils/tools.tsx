export default function delArrayEmpty(array) {
    return array.filter(value => Object.keys(value).length !== 0);
}
