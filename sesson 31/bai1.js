function findLongestWordLength(str) {
    // Tách chuỗi thành một mảng các từ
    var words = str.split(" ");
  
    // Khởi tạo biến để lưu giữ từ dài nhất và độ dài của nó
    var longestWord = "";
    var longestLength = 0;
  
    // Duyệt qua từng từ trong mảng
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
  
      // Nếu độ dài của từ hiện tại lớn hơn từ dài nhất đã lưu trữ trước đó
      if (word.length > longestLength) {
        longestWord = word;
        longestLength = word.length;
      }
    }
  
    // Trả về một mảng chứa từ dài nhất và độ dài của nó
    return [longestWord, longestLength];
  }
  
  var result = findLongestWordLength("The quick brown fox jumped over the lazy dog");
  console.log(result);