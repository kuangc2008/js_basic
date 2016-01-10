var preloadImage = function(path) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', path);
    request.responseType = 'blob';
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(new Error('图片加载失败：' + request.statusText));
      }
    };
    request.onerror = function() {
      reject(new Error('发生网络错误'));
    };
    request.send();
  });
};

preloadImage('123')
  .then(()=>console.log("haha"), function() {
    console.log("gggggggggggggggg");
    return 0;
  })
  .then(()=>console.log("gggg"));




//一个问题Promise对象中的then方法构造方法，如何做的？
//现在对我来说可能有点深。  所以放到以后吧.
