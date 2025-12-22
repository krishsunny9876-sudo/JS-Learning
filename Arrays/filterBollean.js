let arr = [1, 0, "kirten", "", null, undefined, true, NaN];

let cleaned = arr.filter(Boolean);

console.log(cleaned);
// [1, "kirten", true]