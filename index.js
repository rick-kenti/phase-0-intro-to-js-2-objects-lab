// Write your solution in this file!
// Initialize employee object
const employee = {
    name: 'Sam'
};

// Non-destructive: returns a new object with the added key-value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Destructive: modifies the original employee object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Non-destructive: returns a new object without the specified key
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

// Destructive: removes the key from the original employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}