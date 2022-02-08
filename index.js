// Write your solution in this file!

//ABOUT: A word of warning. In this lab, you will practice doing some bad things. For example, we'll ask you to declare variables in global scope, and write functions that break down. You'll also need to use var to declare all variables except when specifically instructed otherwise. We do this because, by testing the limits and exposing the underbelly of a language, you can better understand it and know what to avoid in the future.

var customerName = 'bob'
const leastFavoriteCustomer = 'nobody'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = 'not bob'
    return bestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'nobody 2'
    return leastFavoriteCustomer
}