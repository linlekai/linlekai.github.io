(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{308:function(t,e,s){"use strict";s.r(e);var a=s(17),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"js事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js事件循环","aria-hidden":"true"}},[t._v("#")]),t._v(" JS事件循环")]),t._v(" "),s("p",[t._v("讲事件循环前，先了解执行栈。可以把执行栈理解成执行函数的栈，遵循先进后出的原则。\n"),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/13/1670d2d20ead32ec?imageslim",alt:""}})]),t._v(" "),s("p",[t._v("执行上面的代码时，逐个将函数压入栈内，遵循后进入的函数先出来。")]),t._v(" "),s("h2",{attrs:{id:"浏览器中的-event-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中的-event-loop","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器中的 Event Loop")]),t._v(" "),s("p",[t._v("JS代码执行的时候就是压入栈内进行的，当遇到异步的代码的时候，会被挂起并在需要执行的时候加入到Task队列中，一旦执行栈为空，就会从Task队列中拿出需要执行的代码放入执行栈，本质上来说JS的异步还是同步行为。\n不同的任务源会被分配到不同的 Task 队列中，任务源可以分为 微任务（microtask） 和 宏任务（macrotask）")]),t._v(" "),s("p",[t._v("MacroTask（宏任务）")]),t._v(" "),s("ul",[s("li",[t._v("script全部代码、setTimeout、setInterval、setImmediate（浏览器暂时不支持，只有IE10支持，具体可见MDN）、I/O、UI Rendering。")])]),t._v(" "),s("p",[t._v("MicroTask（微任务）")]),t._v(" "),s("ul",[s("li",[t._v("Process.nextTick（Node独有）、Promise")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/18/1686078c7a2f63e5?imageslim",alt:""}}),t._v("\n执行栈在执行完同步任务后，查看执行栈是否为空，如果执行栈为空，就会去检查微任务(microTask)队列是否为空，如果为空的话，就执行Task（宏任务），否则就一次性执行完所有微任务。\n每次单个宏任务执行完毕后，检查微任务(microTask)队列是否为空，如果不为空的话，会按照先入先出的规则全部执行完微任务(microTask)后，设置微任务(microTask)队列为null，然后再执行宏任务，如此循环。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5c3d8956e51d4511dc72c200",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考地址"),s("OutboundLink")],1)])])},[],!1,null,null,null);e.default=r.exports}}]);