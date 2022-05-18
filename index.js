var customerName = 'bob';
customerName;

// const upperCaseCustomerName = function () {customerName.toUpperCase;}

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    return bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    return bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'bach';

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'not bach';
}