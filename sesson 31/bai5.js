function chunkArrayInGroups(arr, n) {
    // Khởi tạo một mảng trống để chứa các mảng con
    var result = [];
  
    // Duyệt qua mảng gốc với bước nhảy là n
    for (var i = 0; i < arr.length; i += n) {
      // Tạo mảng con bằng cách sử dụng phương thức slice
      var chunk = arr.slice(i, i + n);
  
      // Thêm mảng con vào mảng kết quả
      result.push(chunk);
    }
  
    // Trả về mảng chứa các mảng con
    return result;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]]
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3)); // [["a", "b", "c"], ["d"]]