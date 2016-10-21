var request = require('request');

// request('http://www.baidu.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // 打印google首页
//   }
// })

//https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=shenme&oq=1&rsv_pq=bf6cdea800005074&rsv_t=ce7aLrKNhXXToh3ZNHjXCesRp5iBWCJiqXX%2BpbszagINDIaljVZ0Bk3mAMQ&rqlang=cn&rsv_enter=1&inputT=1496&rsv_sug3=9&rsv_sug1=4&rsv_sug7=100&rsv_sug2=0&rsv_sug4=1872
request.get('http://baidu.com/s', {form:{
    wd: 'shenme'
}}, function (error, response, body) {
    console.log(body);
})
