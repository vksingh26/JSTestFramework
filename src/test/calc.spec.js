const assert = require('assert');
const calc = require('../script/calc');

describe('Calculator Test suit', function() {
  describe('Testing add function add(a, b)', () => {
    it('If I pass add(5, 5), it should return 10', ()=> {
        let actual = calc.add(5, 5);
        let expected = 10;
        assert.equal(actual, expected);
    })
    it('If I donot pass anything in add(), it should throw error', () => {
        assert.throws(() => {
            calc.add();
        })
    });
  });

  describe.only('Testing substract function substract(a, b)', () => {
      it('Pass substract(10, 5), it should return 5', () => {
            actual = calc.substract(10, 5);
            expected = 5;
            assert.equal(actual, expected);
      });

      it('Donot pass anything in substract(), it should throw error', () => {
            assert.throws(() =>{
                calc.substract();
            });
      });
  });
});