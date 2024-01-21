function largestOfArrs(...arrays) {
    
    var largestNumbers = [];
  
    // Duyệt qua mỗi mảng con
    for (var i = 0; i < arrays.length; i++) {
      var currentArray = arrays[i];
  
      // Kiểm tra xem mảng con có phần tử hay không
      if (currentArray.length === 0) {
        continue;
      }
  
      // Tìm số lớn nhất trong mảng con
      var largestNumber = currentArray[0];
      for (var j = 1; j < currentArray.length; j++) {
        if (currentArray[j] > largestNumber) {
          largestNumber = currentArray[j];
        }
      }
  
      // Thêm số lớn nhất vào mảng kết quả
      largestNumbers.push(largestNumber);
    }
  
    
    return largestNumbers;
  }
  
  console.log(largestOfArrs([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]));
  console.log(largestOfArrs([1, 2, 3, 4], [5, 1, 2, 9]));
  console.log(largestOfArrs());