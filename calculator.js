function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    const numArray = numbers.split(/[\n,]/); // split by newlines or commas
    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}
