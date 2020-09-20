const expect = require('chai').expect;
const { getNeighbors, getNumbersOfExcitedCells, emitSignals, excitedCells } = require('../src/index');

describe('Excited Cells', function () {
  describe('getNeighbors', function() {
    const array = [1, 2, 3, 4, 5];

    it('should return [5, 2] when idex is 0', function() {
      expect(getNeighbors(0, array)).to.eql([5, 2]);
    });

    it('should return [2, 4] when idex is 2', function() {
      expect(getNeighbors(2, array)).to.eql([2, 4]);
    });

    it('should return [4, 1] when idex is 4', function() {
      expect(getNeighbors(4, array)).to.eql([4, 1]);
    });
  });

  describe('getNumbersOfExcitedCells', function() {
    it('should return 0 when there is no excited cells', function() {
      expect(getNumbersOfExcitedCells([0, 0])).to.equal(0);
    });

    it('should return 1 when the array is [0, 1]', function() {
      expect(getNumbersOfExcitedCells([0, 1])).to.equal(1);
    });

    it('should return 2 when the array is [1, 1]', function() {
      expect(getNumbersOfExcitedCells([1, 1])).to.equal(2);
    });
  });

  describe('emitSignals', function() {
    it('should return [1, 0, 1, 0] when the array is [1, 0, 1, 1]', function() {
      expect(emitSignals([1, 0, 1, 1])).to.eql([1, 0, 1, 0]);
    });

    it('should return [0, 0, 0, 0] when the array is [1, 0, 1, 0]', function() {
      expect(emitSignals([1, 0, 1, 0])).to.eql([0, 0, 0, 0]);
    });
  });

  describe('excitedCells', function() {
    it('should return a string with the new state of the cells', function () {
      expect(excitedCells([1, 0, 1, 1], 1)).to.equal('1,0,1,0');
      expect(excitedCells([1, 0, 1, 1], 2)).to.equal('0,0,0,0');
    });

    it('should return an error when the step is inferior to 1', function() {
      expect(() => excitedCells([1, 1, 1], 0)).to.throw('step must be superior to 0.');
    });

    it('should return an error when the step is not a number', function() {
      expect(() => excitedCells([1, 1, 1], 'hey')).to.throw('step must be a number.');
    });
  });
});