function describeValue(value) {
    if (value === "" || value === 0 || value === null || value === undefined) {
        return `${typeof (value)} | falsy`;
    }
    else {
        return `${typeof (value)} | truthy`;
    }
}