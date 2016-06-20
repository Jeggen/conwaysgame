// create grid
var grid = [];
//fill the grid
grid = [
  [0,0,0,1,0],
  [0,0,1,0,1],
  [0,1,1,0,0],
  [0,0,0,0,1],
  [1,0,0,1,0],
];

//render the grid (print it)
console.log(grid);

//loop over the grid in steps, after each step you render etc.
grid[y],[x]

    for (y = 0; y < 5; y++) {
             // each column in rows
        for (x = 0; x < 5; x++) {
        var cell = current_gen[y][x];
               // Calculate above/below/left/right row/column values
         var row_above = (y-1 >= 0) ? y-1 : length_y-1; // If current cell is on first row, cell "above" is the last row (stitched)
         var row_below = (y+1 <= length_y-1) ? y+1 : 0; // If current cell is in last row, then cell "below" is the first row
         var column_left = (x-1 >= 0) ? x-1 : length_x - 1; // If current cell is on first row, then left cell is the last row
         var column_right = (x+1 <= length_x-1) ? x+1 : 0; // If current cell is on last row, then right cell is in the first row
}
//you need to loop inside the loop, because you have an array inside an array.

//for (var row=0; row; )
//for (var column=0; column<)
//grid[row][column]
}
