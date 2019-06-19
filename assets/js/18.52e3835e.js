(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{141:function(t,a,o){"use strict";o.r(a);var e=o(0),s=Object(e.a)({},function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"prototype-原型"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prototype-原型","aria-hidden":"true"}},[t._v("#")]),t._v(" prototype 原型")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("__proto__用来在原型链上查找你需要的方法的实际对象,所有的对象都有这个属性.这个属性被JavaScript引擎用作继承使用. 根据ECMA的规范,这个属性应该是一个内在的属性,但是大多数的浏览器厂商都允许我们去访问和修改它.")])]),t._v(" "),o("li",[o("p",[t._v("prototype是函数独有的属性.当我们使用关键词new并且将函数作为构造函数来构造对象的时候, 它被用来构建对象的__proto__属性.")])]),t._v(" "),o("li",[o("p",[t._v("__proto__属性和prototype属性都是一个对象")])]),t._v(" "),o("li",[o("p",[t._v("(new A())."),o("strong",[t._v("proto")]),t._v(" === A.prototype的结果为true,(new A()).prototype === undefined的结果也为true,其中A表示一个函数(也就是构造函数)")])])]),t._v(" "),o("p",[t._v("javaScript的prototype属性是一个对象，每一个函数在定义后，都会自动获得这个属性，其初始值是一个空的对象(Object)，可以看看下面这个例子：")]),t._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("Dog")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tail "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dog")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype \n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// constructor: function Dog()")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// __proto__: Object")]),t._v("\n")])])]),o("p",[t._v("上面新建了一个名为Dog的构造函数，其prototype为一个对象，constructor和proto都是在prototype创建时，默认的自带属性，创建一个新对象时，就会带有这两个属性，无论其是否为空，例如：")]),t._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\na\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     __prototype: Objcet")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a.constructor")]),t._v("\n")])])]),o("p",[t._v("每个对象都有一个constructor,每个constructor又有一个prototype对象\n例如 a对象为空对象，但在a上却有valueof方法和toString方法。这是因为a对象的prototype是Object")]),t._v(" "),o("h2",{attrs:{id:"原型链"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#原型链","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),o("p",[t._v("讲原型一个不可避免的概念就是原型链，原型链是通过前面两种创建原型的方式 Object.create() 或 DOG.prototype 时生成的一个 "),o("em",[t._v("proto")]),t._v(" 指针来实现的。\n"),o("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/1594437-b8ecf1d9daf0e963.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"原型链"}})]),t._v(" "),o("p",[t._v("红色的箭头就是原型链。DOG 对象有一个 prototype 对象，而实例对象 dogA 通过一个 "),o("em",[t._v("proto")]),t._v(" 对象引用这个 prototype 对象。")]),t._v(" "),o("p",[t._v("可以看出 dogA 能访问到的 species 属性实际上是在 DOG 的原型电源线 prototype 中，因此才能实现实例对象属性共享访问却不能修改。")]),t._v(" "),o("p",[t._v("但是在 DOG.prototype 中还存在一个 "),o("em",[t._v("proto")]),t._v(" 属性，这又是指向谁呢？\n"),o("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/1594437-08f3b7b4b12212f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"原型链"}})]),t._v(" "),o("p",[t._v("指向 Object 对象，这样 DOG 对象就拥有 Object 对象中原型属性和方法。比如说 toString() 就在其中。")]),t._v(" "),o("p",[t._v("还有一点，那就是 Js 的函数也是对象啊，我们每个创建的函数其实也继承了一个函数对象，而函数则继承了 Object 对象。。")]),t._v(" "),o("p",[o("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/1594437-cd1666fde005589b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"原型链"}})]),t._v(" "),o("p",[t._v("以上就是一个简单的 Dog 类完整的原型链。")]),t._v(" "),o("p",[t._v("总结一下原型链作用：对象属性的访问修改和删除。")]),t._v(" "),o("ul",[o("li",[t._v("访问。优先在对象本身查找，没有则顺着原型链向上查找")]),t._v(" "),o("li",[t._v("修改。只能修改跟删除自身属性，不会影响到原型链上的其他对象。")])])])},[],!1,null,null,null);a.default=s.exports}}]);