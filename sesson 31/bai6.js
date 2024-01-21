function fakeFind(arr, callback) {
    // Duyệt qua từng phần tử trong mảng
    for (var i = 0; i < arr.length; i++) {
      // Gọi callback function với phần tử hiện tại
      var result = callback(arr[i]);
  
      // Nếu callback function trả về true, trả về phần tử đó
      if (result === true) {
        return arr[i];
      }
    }
  
    // Trả về undefined nếu không tìm thấy phần tử thoả mãn
    return undefined;
  }
  
  
  var result1 = fakeFind([1, 2, 3, 4], function(e) {
    if (e % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result1); // 2
  
  var result2 = fakeFind([1, 2, 3, 4], function(e) {
    if (e % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result2); // 1