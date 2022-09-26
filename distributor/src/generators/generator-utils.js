export function smartJoin(list, separator) {
    let joined = list.map(s => s.trim()).join(separator);
    if (joined.endsWith(separator)) {
        joined = joined.slice(0, -separator.length);
    }
    return joined;
}

export function flattenGeneratedCode(genCode) {
    const flatArray = genCode.flat(Infinity);
    let ret = '';
    flatArray.forEach((s) => ret += s);
    return ret;
}