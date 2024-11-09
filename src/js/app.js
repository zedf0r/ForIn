export function orderByProps(obj, array) {
    const sortKeys = Object.keys(obj).sort();
    const sortObj = {};
    sortKeys.forEach((key) => {
        sortObj[key] = obj[key];
    });

    const sortArray = [];

    for (const prop in obj) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === prop) {
                sortArray.push({ key: prop, value: obj[prop] });
            }
        }
    }

    for (const prop in sortObj) {
        if (!array.includes(prop)) {
            sortArray.push({ key: prop, value: sortObj[prop] });
        }
    }

    return sortArray
}

