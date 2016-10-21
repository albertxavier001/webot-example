var express = require('express');
var app = express();

var webot = require('weixin-robot');

var log = require('debug')('webot-example:log');
var verbose = require('debug')('webot-example:verbose');

var WechatAPI = require('wechat-api');

var appid = 'wx0044d409081e3e83';
var appsecret = '0f3ef72de0ee2ff6405064f5809d9604';
var WechatAPI = require('wechat-api');
var token = 'albertxavierALBERT987';
var encodingAESKey = 'iXbe1shwqbPaY5SI0p55UVIbVF241WaBnIeiw9mckvn';
var api = new WechatAPI(appid, appsecret);

// var wechat = require('wechat');



// create menu
var menu = {
     "button":[
     {
          "type":"click",
          "name":"今日歌曲",
          "key":"V1001_TODAY_MUSIC"
      },
      {
           "name":"菜单",
           "sub_button":[
           {
               "type":"view",
               "name":"搜索",
               "url":"http://www.soso.com/"
            },
            {
               "type":"view",
               "name":"视频",
               "url":"http://v.qq.com/"
            },
            {
               "type":"click",
               "name":"赞一下我们",
               "key":"V1001_GOOD"
            }]
       }]
 };
// var menuJson =   JSON.parse(menu);
// console.log('menu json = ', menu);


// api.createMenu(menu, function (err, res) {
//     if (err.errcode!=0) {
//         console.log("err msg = ", err.errmsg);
//     }
//     console.log("result = ", res);
// });


// 启动服务

// 实际使用时，这里填写你在微信公共平台后台填写的 token
var wx_token = process.env.WX_TOKEN || token;
// var wx_token2 = process.env.WX_TOKEN_2 || 'albertxavierALBERT111';

// 建立多个实例，并监听到不同 path ，
// var webot2 = new webot.Webot();

// 载入webot1的回复规则
require('./rules')(webot);
// 为webot2也指定规则
webot.set('1', 'hi..');

// 启动机器人, 接管 web 服务请求
// webot.watch(app, { token: wx_token, path: '/wechat' });
// 若省略 path 参数，会监听到根目录
webot.watch(app, { token: wx_token });

// 后面指定的 path 不可为前面实例的子目录
// webot2.watch(app, { token: wx_token2, path: '/wechat_2' });

// 如果需要 session 支持，sessionStore 必须放在 watch 之后
app.use(express.cookieParser());
// 为了使用 waitRule 功能，需要增加 session 支持
app.use(express.session({
  secret: 'abced111',
  store: new express.session.MemoryStore()
}));
// 在生产环境，你应该将此处的 store 换为某种永久存储。
// 请参考 http://expressjs.com/2x/guide.html#session-support

// 在环境变量提供的 $PORT 或 3000 端口监听
var port = process.env.PORT || 80;
app.listen(port, function(){
  log("Listening on %s", port);
});

// 微信接口地址只允许服务放在 80 端口
// 所以需要做一层 proxy
app.enable('trust proxy');

// 当然，如果你的服务器允许，你也可以直接用 node 来 serve 80 端口
// app.listen(80);

if(!process.env.DEBUG){
  console.log("run as ` PORT=80 DEBUG=webot-example:* WX_TOKEN=albertxavierALBERT987 n as 6.9.1 app.js`");
}
