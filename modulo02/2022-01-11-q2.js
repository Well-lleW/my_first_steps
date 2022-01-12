function makeSizer(size) {
    return function() {
      document.body.style.fontSize = size + 'px';
    };
  }
  
  var size12 = makeSizer(12);
  var size20 = makeSizer(20);
  var size32 = makeSizer(32);
  
  document.getElementById('size-12').onclick = size12;
  document.getElementById('size-20').onclick = size20;
  document.getElementById('size-32').onclick = size32;