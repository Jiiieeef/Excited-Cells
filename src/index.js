const QUIET = 0;
const EXCITED = 1;

function getNeighbors(index, cells) {
  let previous, nextCell;

  if (index === 0) {
    previous = cells[cells.length - 1];
    nextCell = cells[index + 1];
  } else if (index === cells.length - 1) {
    previous = cells[index - 1];
    nextCell = cells[0];
  } else {
    previous = cells[index - 1];
    nextCell = cells[index + 1];
  }

  return [previous, nextCell];
}

const getNumbersOfExcitedCells = neighbors =>
  neighbors.filter(neighbor => neighbor === EXCITED).length

function emitSignals(cells) {
  return cells.map((cell, index) => {
    const neighbors = getNeighbors(index, cells);
    let newValue = cell;

    if (cell === QUIET) {
      if (getNumbersOfExcitedCells(neighbors) === 1) {
        newValue = EXCITED;
      }
    } else {
      if (getNumbersOfExcitedCells(neighbors) !== 1) {
        newValue = QUIET;
      }
    }

    return newValue;
  });
}

function excitedCells(cells, step) {
  if (typeof step !== 'number') {
    throw new Error('step must be a number.');
  }
  if (step < 1) {
    throw new Error('step must be superior to 0.');
  }

  let currentStep = 1;
  let result = cells;

  while(currentStep <= step) {
    result = emitSignals(result);

    console.log(`Step #${currentStep}: ${result.join(',')}`);

    currentStep++;
  }

  return result.join(',');
}

module.exports = {
  excitedCells,
  getNeighbors,
  getNumbersOfExcitedCells,
  emitSignals
};
