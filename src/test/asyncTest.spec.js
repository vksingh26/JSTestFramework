//Implementing test case using chai.

let customer = require('../script/asyncTest');
let chai = require('chai');
let expect = chai.expect;
chai.use(require('chai-shallow-deep-equal'));

describe.only('Aysnc test case',  () => {
    it('if I pass findCustomerById(1), it should return email', async () => {
        const respose = await customer.findCustomerById(1);
        expect('vks0626@gmail.com').to.contains(respose.customer.Email);
    })

    it('If I pass findCustomerById(3), it should throw error', async () => {
        customer.findCustomerById(3).catch(error => {
            expect('Invalid Customer Id').to.throw(Error.message);
        })
    })

    it('If I pass findCustomerById(1), it should return an object', async ()=> {
        const responeObj = await customer.findCustomerById(1);
        const expected = {
            FirstName: 'Vikash',
            Email: 'vks0626@gmail.com'
        }
        expect(responeObj.customer).shallowDeepEqual(expected);
    });
});