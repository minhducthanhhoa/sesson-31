function truncate(str, n) {
    // Kiểm tra độ dài của chuỗi gốc
    if (str.length <= n) {
      return str; // Trả về chuỗi gốc nếu n không nhỏ hơn độ dài của chuỗi
    }
  
    // Rút gọn chuỗi và thêm dấu "..."
    var truncatedString = str.slice(0, n) + "...";
    return truncatedString;
  }
  
  console.log(truncate("Hello world, I'm Peter", 11));