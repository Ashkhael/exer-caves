function identifyCaves(input) {
  var outerArrayLength = input.length;

  if (input === undefined || typeof input === "string") {
    return "Invalid grid";
  }

  if (outerArrayLength < 2) {
    return "Invalid grid";
  }

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] != 1 && input[i][j] != 0) {
        return "Invalid grid";
      }
      /*
      ALTERNATIVNO S FUNKCIJOM
      function checkElement(number) {
        return number != 1 && number != 0;
          if (input[i].some(checkElement) === true) {
              return "Invalid grid";
              }
      }*/
    }
  }

  var count = 0;
  const checked = new Set();
  const width = input[0].length; //prebrojava broj elemenata Arraya 0 i uzima ih kao širinu
  const height = input.length;
  const getKey = (x, y) => `${x}_${y}`;

  const getAllAdjacent = function (x, y, numToFind, matches = []) {
    numToFind = 0;
    if (x >= width || x < 0 || y >= height || y < 0) {
      return matches;
    }
    const key = getKey(x, y);
    if (!checked.has(key) && input[y][x] == 0) {
      checked.add(key);
      matches.push({ x, y });
      getAllAdjacent(x + 1, y, numToFind, matches);
      getAllAdjacent(x, y + 1, numToFind, matches);
      getAllAdjacent(x + 1, y + 1, numToFind, matches);
    }
    return matches;
  };

  input.forEach(function (innerRowArr, y) {
    innerRowArr.forEach(function (num, x) {
      const allAdjacent = getAllAdjacent(x, y, num);
      if (allAdjacent.length >= 4) {
        return (count += 1);
      }
    });
  });

  console.log(count);
}

identifyCaves([
  [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);

identifyCaves([
  [0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0],
]);

identifyCaves([
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);

/*
  
  const numberArray = input.map((subarr) => subarr.slice()); - metoda kako da ne sjebe original
  const checked = new Set();
  const width = input[0].length;
  const height = input.length;
  const getKey = (x, y) => `${x}_${y}`;
  
  
  const getAllAdjacent = (x, y, numToFind, matches = []) => {
    if (x >= width || x < 0 || y >= height || y < 0) {
      return matches;
    }
    const key = getKey(x, y);
    if (!checked.has(key) && input[y][x] === numToFind) {
      checked.add(key);
      matches.push({ x, y });
      getAllAdjacent(x + 1, y, numToFind, matches);
      getAllAdjacent(x - 1, y, numToFind, matches);
      getAllAdjacent(x, y + 1, numToFind, matches);
      getAllAdjacent(x, y - 1, numToFind, matches);
    }
    return matches;
  };

  output.forEach((innerRowArr, y) => {
    innerRowArr.forEach((num, x) => {
      const allAdjacent = getAllAdjacent(x, y, num);
      if (allAdjacent.length <= 2) {
        return;
      }
      allAdjacent.forEach(({ x, y }) => {
        output[y][x] = 1;
      });
    });
  });
  console.log(output);
  */
