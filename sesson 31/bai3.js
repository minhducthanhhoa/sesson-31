function confirmEnding(str, target) {
    // Kiểm tra độ dài của chuỗi con target
    var targetLength = target.length;
  
    // So sánh chuỗi con target với phần cuối của chuỗi gốc str
    var ending = str.slice(-targetLength);
  
    // Kiểm tra xem phần cuối của chuỗi gốc có bằng chuỗi con target hay không
    return ending === target;
  }
  
  
  console.log(confirmEnding("Hello world", "world")); // true
  console.log(confirmEnding("Hello world", "orld")); // true
  console.log(confirmEnding("Hello world", "world2")); // false