(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{323:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"npm包管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm包管理","aria-hidden":"true"}},[s._v("#")]),s._v(" npm包管理")]),s._v(" "),a("p",[s._v("npm有两层含义。一层含义是Node的开放式模块登记和管理系统，网址为npmjs.org。另一层含义是Node默认的模块管理器，是一个命令行下的软件，用来安装和管理Node模块。")]),s._v(" "),a("p",[s._v("npm不需要单独安装。在安装Node的时候，会连带一起安装npm。但是，Node附带的npm可能不是最新版本，最好用下面的命令，更新到最新版本。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" npm@latest -g\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 npm 命令列表")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("help")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看各个命令的简单用法")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -l\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 npm 的版本")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 npm 的配置")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config list -l\n")])])]),a("h1",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[s._v("#")]),s._v(" init")]),s._v(" "),a("p",[s._v("npm init用来初始化生成一个新的package.json文件。它会向用户提问一系列问题，如果你觉得不用修改默认配置，一路回车就可以了。")]),s._v(" "),a("p",[s._v("如果使用了-f（代表force）、-y（代表yes），则跳过提问阶段，直接生成一个新的package.json文件。")]),s._v(" "),a("h1",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[s._v("#")]),s._v(" install")]),s._v(" "),a("p",[s._v("Node模块采用npm install命令安装。")]),s._v(" "),a("p",[s._v("每个模块可以“全局安装”，也可以“本地安装”。“全局安装”指的是将一个模块安装到系统目录中，各个项目都可以调用。一般来说，全局安装只适用于工具模块，比如eslint和gulp。“本地安装”指的是将一个模块下载到当前项目的node_modules子目录，然后只有在项目目录之中，才能调用这个模块。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地安装")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("package name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局安装")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -global "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("package name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("package name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("npm install也支持直接输入Github代码库地址。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" git://github.com/package/path.git\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" git://github.com/package/path.git"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#0.1.0")]),s._v("\n")])])]),a("p",[s._v("安装之前，npm install会先检查，node_modules目录之中是否已经存在指定模块。如果存在，就不再重新安装了，即使远程仓库已经有了一个新版本，也是如此。")]),s._v(" "),a("p",[s._v("如果你希望，一个模块不管是否安装过，npm 都要强制重新安装，可以使用-f或--force参数")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("packageName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --force\n")])])]),a("p",[s._v("如果你希望，所有模块都要强制重新安装，那就删除node_modules目录，重新执行npm install。")]),s._v(" "),a("h1",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[s._v("#")]),s._v(" run")]),s._v(" "),a("p",[s._v("npm不仅可以用于模块管理，还可以用于执行脚本。package.json文件有一个scripts字段，可以用于指定脚本命令，供npm直接调用。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myproject"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jshint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"latest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"browserify"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"latest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mocha"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"latest"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jshint **.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mocha test/"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("上面代码中，scripts字段指定了两项命令lint和test。命令行输入npm run-script lint或者npm run lint，就会执行jshint **.js，输入npm run-script test或者npm run test，就会执行mocha test/。npm run是npm run-script的缩写，一般都使用前者，但是后者可以更好地反应这个命令的本质。")]),s._v(" "),a("p",[s._v("npm run命令会自动在环境变量$PATH添加node_modules/.bin目录，所以scripts字段里面调用命令时不用加上路径，这就避免了全局安装NPM模块。")]),s._v(" "),a("p",[s._v("npm run如果不加任何参数，直接运行，会列出package.json里面所有可以执行的脚本命令。")]),s._v(" "),a("p",[s._v("npm内置了两个命令简写，npm test等同于执行npm run test，npm start等同于执行npm run start。")]),s._v(" "),a("p",[s._v("npm run会创建一个Shell，执行指定的命令，并临时将node_modules/.bin加入PATH变量，这意味着本地模块可以直接运行。")]),s._v(" "),a("p",[s._v("写在scripts属性中的命令，也可以在node_modules/.bin目录中直接写成bash脚本。下面是一个bash脚本。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/bash\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" site/main\nbrowserify browser/main.js "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" uglifyjs -mc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" static/bundle.js\n")])])]),a("p",[s._v("假定上面的脚本文件名为build.sh，并且权限为可执行，就可以在scripts属性中引用该文件。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build-js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin/build.sh"')]),s._v("\n")])])]),a("h1",{attrs:{id:"cnpm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cnpm","aria-hidden":"true"}},[s._v("#")]),s._v(" cnpm")]),s._v(" "),a("p",[s._v("本地电脑环境先安装node，因为安装了node就也安装了npm, 然后最好把npm装换成cnpm。方法如下：\n(在国内，npm操作可能会比较慢，建议使用cnpm，在淘宝镜像里面下载就行，用法和npm一样)\ncnpm安装地址，直接安装\nnpm install -g cnpm --registry=https://registry.npm.taobao.org")]),s._v(" "),a("h1",{attrs:{id:"yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn","aria-hidden":"true"}},[s._v("#")]),s._v(" yarn")]),s._v(" "),a("p",[s._v("Yarn 是 Facebook, Google, Exponent 和 Tilde 开发的一款新的 JavaScript 包管理工具。它并没有试图完全取代 npm。Yarn 同样是一个从 npm 注册源获取模块的新的 CLI 客户端。注册的方式不会有任何变化 —— 你同样可以正常获取与发布包。它存在的目的是解决团队在使用 npm 面临的少数问题。当然，在 Node 版本断更替中，Npm 本身也在积极更新。")]),s._v(" "),a("p",[s._v("安装：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --global "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n")])])]),a("p",[s._v("安装默认依赖")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n")])])]),a("p",[s._v("加一些依赖：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" gulp-less  \n\n")])])]),a("p",[s._v("如果加入具体版本可以后面写上@0.x.x\n移除和更新")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" remove gulp-less  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" upgrade "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("package"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n\n")])])])])},[],!1,null,null,null);t.default=e.exports}}]);