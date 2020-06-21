/**
*Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.
*Example:
*multiplication_table(3,3)
*1 2 3
*2 4 6
*3 6 9
*-->[[1,2,3],[2,4,6],[3,6,9]]
*Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.
*/

function multiplicationTable(row,col){
  let array = [], arrayCol = [];
  for (let x = 1; x <= row; x++){
    for (let y = 1; y <= col; y++){
      arrayCol.push(y * x);
    }
    array.push(arrayCol);
    arrayCol = [];
  }
  return array;
}

multiplicationTable(2,2); // Answer [[1,2],[2,4]]
multiplicationTable(3,3); // Answer [[1,2,3],[2,4,6],[3,6,9]]
multiplicationTable(3,4); // Answer [[1,2,3,4],[2,4,6,8],[3,6,9,12]]
multiplicationTable(4,4); // Answer [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]]
multiplicationTable(2,5); // Answer [[1,2,3,4,5],[2,4,6,8,10]]
