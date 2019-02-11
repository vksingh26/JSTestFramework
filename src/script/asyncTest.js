//Implementing test cases using chai.
const customers = require('../db/customer');

function findCustomerById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let customer = customers.find(x => x.id === id);
            if(!customer){
                reject(new Error('Invalid Customer Id'))
            }
            resolve({ message: "Message successful",customer})
        }, 1000);
    });
}

module.exports = {
    findCustomerById
}