var sourceArray = [
    { group: 1, name: "a" },
    { group: 2, name: "b" },
    { group: 2, name: "c" },
];
function groupByKey(array, key) {
    return array.reduce(function (result, item) {
        var fieldKey = item[key];
        var fieldValue = result[fieldKey.toString()];
        if (!fieldValue) {
            result[fieldKey.toString()] = [];
        }
        result[fieldKey.toString()].push(item);
        return result;
    }, {});
    var result = {};
    array.forEach(function (item) {
        var fieldKey = item[key];
        var fieldValue = result[fieldKey.toString()];
        if (!fieldValue) {
            result[fieldKey.toString()] = [];
        }
        result[fieldKey.toString()].push(item);
    });
    return result;
}
console.log("result", groupByKey(sourceArray, "group"));
/*function groupByKey<T extends Record<string, unknown>, K extends keyof T>(
  array: T[],
  key: K
) {
  return array.reduce((result: { [key: string]: T[] }, item: T) => {
    if (!result[item[key]]) {
        result[item[key]] = [];
    }
    
    result[item[key]].push(item);
  
    return result;
  }, {});
}*/
