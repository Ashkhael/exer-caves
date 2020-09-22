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
    }
  }

  var count = 0;
  let width = input[0].length;
  let height = input.length;

  for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
      if (input[i][j] != 0) {
        continue;
      }
      if (j == width - 1 || i == height - 1) {
        continue;
      }
      if (
        input[i + 1][j] == 0 &&
        input[i][j + 1] == 0 &&
        input[i + 1][j + 1] == 0
      ) {
        count++;
        if (i > 0 && input[i - 1][j] == 2) {
          count--;
        }
        for (k = i; k < height; k++) {
          if (input[k][j] == 1) {
            break;
          } else if (input[k][j] == 2) {
            count--;
            break;
          }
          for (l = j; l < width; l++) {
            if (input[k][l] == 0) {
              input[k][l] = 2;
            } else {
              break;
            }
          }
        }
      }
    }
  }
  console.log(count);
}

identifyCaves([
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);
