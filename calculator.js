function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiter = /[\n,]/; // default delimiters: newlines or commas

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
        numbers = numbers.substring(delimiterEndIndex + 1); // remove delimiter definition
    }

    const numArray = numbers.split(delimiter);
    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}
