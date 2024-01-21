function fakeFilter(arr, callback) {
    var result = [];
  
    // Duyệt qua từng phần tử trong mảng
    for (var i = 0; i < arr.length; i++) {
      // Gọi callback function với phần tử hiện tại
      var condition = callback(arr[i]);
  
      // Nếu callback function trả về true, thêm phần tử vào mảng kết quả
      if (condition === true) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  
  
  var result1 = fakeFilter([1, 2, 3, 4], function(e) {
    if (e % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result1); // [2, 4]
  
  var result2 = fakeFilter([1, 2, 3, 4], function(e) {
    if (e % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result2); // [1, 3]