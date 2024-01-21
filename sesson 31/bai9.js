function sumZero(arr) {
    var left = 0;
    var right = arr.length - 1;
  
    // Duyệt qua mảng từ hai đầu
    while (left < right) {
      // Tính tổng của hai phần tử tại vị trí left và right
      var sum = arr[left] + arr[right];
  
      // Nếu tổng bằng 0, trả về cặp số tại vị trí left và right
      if (sum === 0) {
        return [arr[left], arr[right]];
      }
      // Nếu tổng lớn hơn 0, di chuyển con trỏ right sang trái
      else if (sum > 0) {
        right--;
      }
      // Nếu tổng nhỏ hơn 0, di chuyển con trỏ left sang phải
      else {
        left++;
      }
    }
  
    
    return undefined;
  }
  
  console.log(sumZero([-1, 0, 1, 2])); // [-1, 1]
  console.log(sumZero([1, 2, 3])); // undefined