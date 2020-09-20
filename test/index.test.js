const expect = require('chai').expect;
const excitedCells = require('../src/index');

describe('Excited Cells', function () {
  it('should return true', function () {
    expect(excitedCells()).to.be.true;
  });
});