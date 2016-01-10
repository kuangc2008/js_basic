function async(arg, callback) {
  console.log('参数为' + arg + ', 1s后返回结果');
  setTimeout(function() {
    callback(arg * 2);
  }, 1000);
};

function final(value) {
  console.log('完成: ', value);
}

//1 普通调用
// async(5, final);

//2  所有任务完成后，执行final
// async(1, function(value) {
//   async(value, function(value) {
//     async(value, function(value){
//       async(value, function(value) {
//         async(value, function(value) {
//           async(value, final);
//         });
//       });
//     });
//   });
// });

// 3顺序执行
// var items = [1, 2, 3, 4, 5, 6];
// var results = [];
// function series(item) {
//   if(item) {
//     async(item, function(result){
//       results.push(result);
//       return series(items.shift());
//     });
//   } else {
//       return final(results);
//   }
// }
// series(items.shift());

//4 并行执行，消耗资源大，但速度快
// var items = [1, 2, 3, 4, 5, 6];
// var results = [];
//
// items.forEach(function(item){
//   async(item, function(result) {
//     results.push(result);
//     if(results.length == items.length) {
//       final(results);
//     }
//   });
// });

//5 并行和串行的结合
var items = [1, 2, 3, 4, 5, 6];
var results = [];
var running = 0;
var limit = 2;

function launcher() {
  while( running < limit && items.length > 0) {
    var item = items.shift();
    async(item, function(result) {
      results.push(result);
      running--;
      if(items.length > 0) {
        launcher();
      } else if (running == 0) {
        final(results);
      }
    });
    running++;
  }
}
launcher();
