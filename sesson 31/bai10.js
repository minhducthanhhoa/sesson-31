function maxSubArraySum(arr, n) {
    if (n > arr.length) {
      return null; // Trả về null nếu n lớn hơn độ dài của mảng
    }
  
    let maxSum = 0;
    let tempSum = 0;
  
    // Tính tổng của n phần tử đầu tiên
    for (let i = 0; i < n; i++) {
      maxSum += arr[i];
    }
  
    tempSum = maxSum;
  
    // Duyệt qua các phần tử còn lại của mảng
    for (let i = n; i < arr.length; i++) {
      // Bỏ đi phần tử đầu tiên trong mảng con trước đó và cộng thêm phần tử tiếp theo
      tempSum = tempSum - arr[i - n] + arr[i];
      // Cập nhật maxSum nếu tìm được tổng lớn hơn
      maxSum = Math.max(maxSum, tempSum);
    }
  
    return maxSum;
  }
  
  console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
  console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17