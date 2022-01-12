function multipleBy10(number) {
    return function() {
      return document.getElementById('result').innerHTML = number*10;
    };
  }
  
  
  var two = multipleBy10(2);
  var four = multipleBy10(4);
  var eight = multipleBy10(8);
  
  document.getElementById('number-2').onclick = two;
  document.getElementById('number-4').onclick = four;
  document.getElementById('number-8').onclick = eight;
  