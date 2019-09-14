(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{167:function(t,e,s){},210:function(t,e,s){"use strict";var a=s(167);s.n(a).a},288:function(t,e,s){"use strict";s.r(e);var a=[{excerpt:"  什么是 Loader ？  在撸Loader之前，我们先要了解Loader是什么。Loader是webpack模块，通过模块可以导出某些功能，可以对指定文件类型进行转换。如对sass文件进行转换得到css。对JSX文件转换得到Js。对markdown文件转换得到html。   Loader的开发须知  单一职责   一个Loader的功能是单一的，只做好自己的事情。如果有多个功能，那就多调......",tags:["node","webpack"],id:0,title:"撸一个webpack的Loader",lastUpdated:"2019-09-14 20:20:00",path:"/posts/node/loader.html"},{excerpt:"  什么是CLI  CLI的英语是 Command-Line Interface,就是命令行界面。通常不支持鼠标操作，只使用键盘输入指令，计算机收到指令后执行。  与其对应的是GUI，可视化界面。可视化界面开发比较麻烦，但可以让所有人方便上手使用，而CLI适合程序员，开发容易，具有效率高，操作明确的特点。  像node出现后，像Vue、React、Angular等框架为了让使用者快速搭建项目，......",tags:["node","CLI"],id:1,title:"打造自己的CLI",lastUpdated:"2019-09-12 20:47:00",path:"/posts/node/cli.html"},{excerpt:"  快速排序  快速排序作为排序算法里比较常见的算法，而且相对于其他的排序算法会稍微复杂一些。  快速排序这个名字是针对其性能来起的，但很难让人做到见名知意。  所以，我给它重新起了个名字：归分排序。  与归并算法一样，归分算法也是分而治之算法，讲究分、归、并。前者的重头戏在于如何去合并，后者的重头戏在于如何去划分  它的核心就是把大的东西拆分成小的，小的再拆成更小的，直到处理了再合并在一起。 ......",tags:["算法","排序"],id:2,title:"快速排序",lastUpdated:"2019-09-12 10:15:00",path:"/posts/algorithm/quickSort.html"},{excerpt:"  记一次爬虫  前段时间大学同学说想创业搞扫脸支付，需要美团嘉兴（平湖）的商家信息，问我能不能搞。我看了需要的信息觉得能搞。于是开始爬虫了。 通过接口去爬的话，确实能拿到大部分信息，但缺少最重要的商家手机号。大概率是某个字段在前端解密过才能展示手机号。所以我决定通过页面爬虫去爬。 通过无头浏览器可以实现无窗口的浏览器，使用js去操纵无头浏览器，再解析dom内容。最后将需要的内容导出成json......",tags:["node","puppeteer"],id:3,title:"记一次爬虫",lastUpdated:"2019-09-11 21:25:00",path:"/posts/node/reptile.html"},{excerpt:"  Express  [Express](https://expressjs.com/)和Koa都是node社区很有名的node服务器框架。他们的特点是小而灵活，具有丰富的中间件用于扩展。   Express Demo  ```js var express = require('express'); var app = express();  app.get('/', function (r......",tags:["node","Express","Koa2"],id:4,title:"Express and Koa2",lastUpdated:"2019-09-01 02:10:00",path:"/posts/node/express.html"},{excerpt:"  闭包与作用域链  要理解闭包，首先必须理解Javascript特殊的变量作用域。 变量的作用域无非就是两种：全局变量和局部变量。  Javascript语言的特殊之处，就在于函数内部可以直接读取全局变量。  ``` js 　　var n=999;  　　function f1(){ 　　　　alert(n); 　　}  　　f1(); // 999 ``` 另一方面，在函数外部自然无法读取函......",tags:["js"],id:5,title:"闭包与作用域链",lastUpdated:"2019-07-12 16:40:00",path:"/posts/js/closure.html"},{excerpt:"  Ajax  Ajax 全称 Asynchronous JavaScript and XML, 即异步JS与XML. 它最早在IE5中被使用, 然后由Mozilla, Apple, Google推广开来. 典型的代表应用有 Outlook Web Access, 以及 GMail. 现代网页中几乎无ajax不欢. 前后端分离也正是建立在ajax异步通信的基础之上.   浏览器为ajax做了......",tags:["js"],id:6,title:"Ajax",lastUpdated:"2019-07-12 16:40:00",path:"/posts/js/ajax.html"},{excerpt:"  原型继承和 Class 继承   组合继承  组合继承是最常用的继承方式，  ``` js function Parent(value) {   this.val = value } Parent.prototype.getValue = function() {   console.log(this.val) } function Child(value) {   Parent.cal......",tags:["js"],id:7,title:"原型继承和 Class 继承",lastUpdated:"2019-07-12 16:40:00",path:"/posts/js/class.html"},{excerpt:"  new的过程以及实现new  * new 通过构造函数 Test 创建出来的实例可以访问到构造函数中的属性 * new 通过构造函数 Test 创建出来的实例可以访问到构造函数原型链中的属性，也就是说通过 new 操作符，实例与构造函数通过原型链连接了起来  ```js js//方法1 function create(){    //1.创建一个空对象    let obj={}    //......",tags:["js"],id:8,title:"new的过程以及实现new",lastUpdated:"2019-07-12 16:40:00",path:"/posts/js/new.html"},{excerpt:"  var、let 及 const 区别  ``` js console.log(a) // undefined var a = 1  ```  从上述代码中我们可以发现，虽然变量还没有被声明，但是我们却可以使用这个未被声明的变量，这种情况就叫做提升，并且提升的是声明。  对于这种情况，我们可以把代码这样来看  ``` js var a console.log(a) // undefined a......",tags:["js"],id:9,title:"var、let 及 const 区别",lastUpdated:"2019-07-12 16:40:00",path:"/posts/js/let.html"},{excerpt:"  JS事件循环  讲事件循环前，先了解执行栈。可以把执行栈理解成执行函数的栈，遵循先进后出的原则。 ![](https://user-gold-cdn.xitu.io/2018/11/13/1670d2d20ead32ec?imageslim)  执行上面的代码时，逐个将函数压入栈内，遵循后进入的函数先出来。   浏览器中的 Event Loop  JS代码执行的时候就是压入栈内进行的，当......",tags:["js"],id:10,title:"JS事件循环",lastUpdated:"2019-07-12 16:40:00",path:"/posts/js/eventloop.html"},{excerpt:"  Promise   什么是 Promise  Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。  所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以......",tags:["js"],id:11,title:"Promise",lastUpdated:"2019-07-12 16:40:00",path:"/posts/js/promise.html"},{excerpt:"  this  由于其运行期绑定的特性，JavaScript 中的 this 含义要丰富得多，它可以是全局对象、当前对象或者任意对象，这完全取决于函数的调用方式。JavaScript 中函数的调用有以下几种方式：作为对象方法调用，作为函数调用，作为构造函数调用，和使用 apply 或 call 调用。下面我们将按照调用方式的不同，分别讨论 this 的含义。   this 被分为三种情况：全局对......",tags:["js"],id:12,title:"this",lastUpdated:"2019-07-12 16:40:00",path:"/posts/js/this.html"},{excerpt:"  prototype 原型  * __proto__用来在原型链上查找你需要的方法的实际对象,所有的对象都有这个属性.这个属性被JavaScript引擎用作继承使用. 根据ECMA的规范,这个属性应该是一个内在的属性,但是大多数的浏览器厂商都允许我们去访问和修改它.  * prototype是函数独有的属性.当我们使用关键词new并且将函数作为构造函数来构造对象的时候, 它被用来构建对象的__......",tags:["js"],id:13,title:"prototype 原型",lastUpdated:"2019-07-12 16:40:00",path:"/posts/js/prototype.html"},{excerpt:"  JS变量类型  JavaScript 是一种弱类型脚本语言，所谓弱类型指的是定义变量时，不需要什么类型，在程序运行过程中会自动判断类型。 ECMAScript 中定义了 6 种原始类型： * Boolean * String * Number * Null * Undefined * Symbol（ES6 新定义）  和1种引用类型 * object  ::: tip 类型判断用到哪些方法？......",tags:["js"],id:14,title:"JS变量类型",lastUpdated:"2019-07-12 16:40:00",path:"/posts/js/type.html"},{excerpt:"  语义化HTML是什么？有什么意义？   所谓语义化HTML，就是从代码层次表达程序员的想法、思路，同时描绘出网站页面的结构：  * 与同为人类的程序员沟通，帮助程序员快速掌握当前代码。这一点其实是可以通过注释来实现的，不过用上语义化HTML多多少少可以省点注释，哈哈。 * 与同为代码构筑的系统（例如残疾人士阅读器以及搜索引擎爬虫等）沟通，帮助其快速、准确达到目的。由于这类系统与人类的智能相......",tags:["HTML"],id:15,title:"HTML",lastUpdated:"2019-07-11 15:20:00",path:"/posts/html/"},{excerpt:"  盒模型与box-sizing  盒模型又称框模型（Box Model）,包含了元素内容（content）、内边距（padding）、边框（border）、外边距（margin）几个要素。  ![](https://segmentfault.com/img/remote/1460000013069519)  content-box又称标准盒模型，是浏览器的默认盒模型 标准模型元素宽度width......",tags:["CSS"],id:16,title:"盒模型与box-sizing",lastUpdated:"2019-07-08 14:10:00",path:"/posts/css/box.html"},{excerpt:"  前端工程化 前端经过那么多年的发展，变化的过程非常迅速。从Node.js出现起，涌现了各种工具、框架，使得前端能解决非常多的问题。 Gulp/Grunt/Webpack 这类打包工具，使得工程化变得规范。   何为工程化 工程化的推进只是为了提高效率和降低成本。这里说的效率和成本，并不只是公司层面，还包括个人。良好的工程化，能降低沟通成本，实现更好的协同，节省开发和测试人员的重复劳动，降低......",tags:["前端工程化"],id:17,title:"前端工程化",lastUpdated:"2019-07-08 14:10:00",path:"/posts/engineering/"},{excerpt:"  [webpack](https://webpack.js.org/)   可以看做一个模块化打包机，分析项目结构，处理模块化依赖，转换成为浏览器可运行的代码。  代码转换: TypeScript 编译成 JavaScript、SCSS,LESS 编译成 CSS. 文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片。 代码分割：提取多个页面的公共代码、提取首屏不需要执行......",tags:["webpack","前端工程化"],id:18,title:"webpack",lastUpdated:"2019-07-08 14:10:00",path:"/posts/engineering/webpack.html"},{excerpt:"  CSS流体布局下的宽度分离原则  所谓“宽度分离原则”，就是CSS中的width属性不与影响宽度的padding/border（有时候包含margin）属性共存，也就是不能出现下面的组合 ```css .box {     width: 100px;     border: 1px solid; } 或者 .box {     width: 100px;     padding: 20px;......",tags:["CSS"],id:19,title:"CSS流体布局下的宽度分离原则",lastUpdated:"2019-07-08 14:10:00",path:"/posts/css/flow-width-rule.html"},{excerpt:"  前端框架   前端框架的根本意义  前端框架的根本意义是解决了UI 与状态同步问题  组件化: 其中以 React 的组件化最为彻底,甚至可以到函数级别的原子组件,高度的组件化可以是我们的工程易于维护、易于组合拓展。 天然分层: JQuery 时代的代码大部分情况下是面条代码,耦合严重,现代框架不管是 MVC、MVP还是MVVM 模式都能帮助我们进行分层，代码解耦更易于读写。 生态: 现......",tags:["前端框架"],id:20,title:"前端框架的根本意义",lastUpdated:"2018-11-08 04:10:03",path:"/posts/library/"},{excerpt:"  [Vue](https://cn.vuejs.org/index.html)   使用方法请参考官方文档   响应式系统的基本原理  Vue是一个MVVM框架，当修改数据层的数据时，对应的视图层的数据也会跟着修改，同样修改视图层的数据也会对数据层的数据进行修改。这样的双向绑定，它的核心实现就是**响应式系统**。我们深入了解响应式系统。   Object.definePropert......",tags:["前端框架","Vue"],id:21,title:"vue",lastUpdated:"2018-11-08 04:10:03",path:"/posts/library/vue.html"},{excerpt:"  常用模块......",tags:["node"],id:22,title:"node常用模块",lastUpdated:"2018-11-08 04:10:03",path:"/posts/node/module.html"},{excerpt:"  npm包管理  npm有两层含义。一层含义是Node的开放式模块登记和管理系统，网址为npmjs.org。另一层含义是Node默认的模块管理器，是一个命令行下的软件，用来安装和管理Node模块。  npm不需要单独安装。在安装Node的时候，会连带一起安装npm。但是，Node附带的npm可能不是最新版本，最好用下面的命令，更新到最新版本。  ```sh  $ npm install npm......",tags:["npm","node"],id:23,title:"npm包管理",lastUpdated:"2018-11-08 04:10:03",path:"/posts/node/npm.html"}],i={name:"Layout",data:function(){return{isHide:!1,needOverlay:!1,content:a}},methods:{clickMenu:function(){this.isHide=!this.isHide,"undefined"!=typeof window&&window.innerWidth<=1190&&(this.needOverlay=!this.needOverlay)},close:function(){this.needOverlay=!this.needOverlay,this.isHide=!this.isHide}}},p=(s(210),s(17)),o=Object(p.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{height:"100%"}},[s("el-container",{staticClass:"main-container"},[s("my-aside",{attrs:{isHide:t.isHide}}),t._v(" "),s("el-container",{staticClass:"container-warp"},[s("my-header",{attrs:{showIcon:t.isHide},on:{clickMenu:t.clickMenu}},[t._v("\n        >")]),t._v(" "),s("my-main",{attrs:{isHide:t.isHide,content:t.content}})],1),t._v(" "),s("go-top")],1),t._v(" "),s("my-footer",{attrs:{content:t.content,isHide:t.isHide}}),t._v(" "),s("div",{staticClass:"overlay",class:{"overlay--active":t.needOverlay},on:{click:t.close}})],1)}),[],!1,null,"60762676",null);e.default=o.exports}}]);