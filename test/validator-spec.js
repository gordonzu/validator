var chai      = require('chai');
var expect    = chai.expect;
var validator = require('../lib/validator');

describe('A Validator', function () {
  
    it('will return no errors for valid numbers', function  () {
        expect(validator(7)).to.be.empty;
    });
    
    describe('will include error.nonpositive for non-positive numbers:', function () {

        it('like 0', function  () {
            expect(validator(0)).to.include('error.nonpositive');
        });
        
        it('like -2', function  () {
            expect(validator(-2)).to.include('error.nonpositive');
        });
    });
    
    describe('will include error.three for divisible by three numbers:', function () {

        it('like 3', function  () {
            expect(validator(3)).to.include('error.three');
        });
        
        it('like 15', function  () {
            expect(validator(15)).to.include('error.three');
        });
    });
    
    describe('will include error.five for divisible by five numbers:', function () {

        it('like 5', function  () {
            expect(validator(5)).to.include('error.five');
        });
        
        it('like 15', function  () {
            expect(validator(15)).to.include('error.five');
        });
    });
    
    it('will return one error for each rule the number violates', function  () {
        expect(validator(15)).to.be.deep.equal(['error.three', 'error.five']);
    });
});
          


