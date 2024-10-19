function testAddEmptyString() {
    console.assert(add("") === 0, "Test failed: Input '' should return 0");
}

function add(numbers) {
    if (numbers === "") return 0;
    return -1; // Placeholder for other cases
}

testAddEmptyString();
