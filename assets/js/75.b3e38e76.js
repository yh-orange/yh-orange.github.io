(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{630:function(s,e,a){"use strict";a.r(e);var n=a(10),r=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"rxjs-异步数据流编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rxjs-异步数据流编程"}},[s._v("#")]),s._v(" Rxjs 异步数据流编程")]),s._v(" "),a("h2",{attrs:{id:"rxjs-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rxjs-介绍"}},[s._v("#")]),s._v(" Rxjs 介绍")]),s._v(" "),a("p",[s._v("RxJS 是 ReactiveX 编程理念的 JavaScript 版本。ReactiveX 来自微软，它是一种针对异步数据流的编程。简单来说，它将一切数据，包括 HTTP 请求，DOM 事件或者普通数据等包装成流 的形式，然后用强大丰富的操作符对流进行处理，使你能以同步编程的方式处理异步数据， 并组合不同的操作符来轻松优雅的实现你所需要的功能。")]),s._v(" "),a("p",[s._v("RxJS 是一种针对异步数据流编程工具，或者叫响应式扩展编程；可不管如何解释 RxJS 其目 标就是异步编程，Angular 引入 RxJS 为了就是让异步可控、更简单。")]),s._v(" "),a("p",[s._v("RxJS 里面提供了很多模块。这里我们主要给大家讲 RxJS 里面最常用的 Observable 和 fromEvent。")]),s._v(" "),a("p",[s._v("目前常见的异步编程的几种方法：")]),s._v(" "),a("ol",[a("li",[s._v("回调函数")]),s._v(" "),a("li",[s._v("事件监听/发布订阅")]),s._v(" "),a("li",[s._v("Promise 是 ES6")]),s._v(" "),a("li",[s._v("async/await 是 ES7")]),s._v(" "),a("li",[s._v("Rxjs 是一个 js 库")])]),s._v(" "),a("h2",{attrs:{id:"promise-和-rxjs-处理异步对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-和-rxjs-处理异步对比"}},[s._v("#")]),s._v(" Promise 和 RxJS 处理异步对比")]),s._v(" "),a("p",[s._v("Promise 处理异步:")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v('let promise = new Promise(resolve => {\n  setTimeout(() => {\n    resolve("---promisetimeout---");\n  }, 2000);\n});\n\npromise.then(value => console.log(value));\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("RxJS 处理异步：")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v('import { Observable } from "rxjs";\nlet stream = new Observable(observer => {\n  setTimeout(() => {\n    observer.next("observabletimeout");\n  }, 2000);\n});\n\nstream.subscribe(value => console.log(value));\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("从上面列子可以看到 RxJS 和 Promise 的基本用法非常类似，除了一些关键词不同。 Promise 里面用的是 then() 和 resolve()，而 RxJS 里面用的是 next() 和 subscribe()。")]),s._v(" "),a("p",[s._v("从上面例子我们感觉 Promise 和 RxJS 的用法基本相似。其实 Rxjs 相比 Promise 要强大很多。 比如 Rxjs 中可以中途撤回、Rxjs 可以发射多个值、Rxjs 提供了多种工具函数等等。")]),s._v(" "),a("h2",{attrs:{id:"rxjs-unsubscribe-取消订阅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rxjs-unsubscribe-取消订阅"}},[s._v("#")]),s._v(" Rxjs unsubscribe 取消订阅")]),s._v(" "),a("p",[s._v("Promise 的创建之后，动作是无法撤回的。Observable 不一样，动作可以通过 unsbscribe() 方法中途撤回，而且 Observable 在内部做了智能的处理.")]),s._v(" "),a("p",[s._v("Promise 创建之后动作无法撤回")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v('let promise = new Promise(resolve => {\n  setTimeout(() => {\n    resolve("---promisetimeout---");\n  }, 2000);\n});\npromise.then(value => console.log(value));\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("Rxjs 可以通过 unsubscribe() 可以撤回 subscribe 的动作")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v('let stream = newObservable(observer => {\n  let timeout = setTimeout(() => {\n    clearTimeout(timeout);\n    observer.next("observabletimeout");\n  }, 2000);\n});\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("let disposable = stream.subscribe(value => console.log(value));\nsetTimeout(() => {\n  //取消执行\n  disposable.unsubscribe();\n}, 1000);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"rxjs-订阅后多次执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rxjs-订阅后多次执行"}},[s._v("#")]),s._v(" Rxjs 订阅后多次执行")]),s._v(" "),a("p",[s._v("如果我们想让异步里面的方法多次执行，比如下面代码。")]),s._v(" "),a("p",[s._v("这一点 Promise 是做不到的，对于 Promise 来说，最终结果要么 resolve（兑现）、要么 reject （拒绝），而且都只能触发一次。如果在同一个 Promise 对象上多次调用 resolve 方法， 则会抛异常。而 Observable 不一样，它可以不断地触发下一个值，就像 next() 这个方法的 名字所暗示的那样。")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v('let promise = new Promise(resolve => {\n  setInterval(() => {\n    resolve("---promisesetInterval---");\n  }, 2000);\n});\n\npromise.then(value => console.log(value));\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("Rxjs")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v('let stream =\n  new Observable() <\n  number >\n  (observer => {\n    let count = 0;\n    setInterval(() => {\n      observer.next(count++);\n    }, 1000);\n  });\n\nstream.subscribe(value => console.log("Observable>" + value));\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"angualr6-x-之前使用-rxjs-的工具函数-map-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#angualr6-x-之前使用-rxjs-的工具函数-map-filter"}},[s._v("#")]),s._v(" Angualr6.x 之前使用 Rxjs 的工具函数 map,filter")]),s._v(" "),a("p",[s._v("注意：Angular6 以后使用以前的 rxjs 方法，必须安装 rxjs-compat 模块才可以使用 map、 filter 方法。 angular6 后官方使用的是 RXJS6 的新特性，所以官方给出了一个可以暂时延缓我们不需要修改 rsjx 代码的办法。")]),s._v(" "),a("p",[a("code",[s._v("npm install rxjs-compat")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("import {Observable} from 'rxjs';\nimport 'rxjs/Rx';\n\nlet stream =\n  new Observable() <any>\n  (observer => {\n    let count = 0;\n    setInterval(() => {\n      observer.next(count++);\n    }, 1000);\n  });\n\nstream\n  .filter(val => val % 2 == 0)\n  .subscribe(value => console.log(\"filter>\" + value));\nstream\n  .map(value => {\n    return value * value;\n  })\n  .subscribe(value => console.log(\"map>\" + value));\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"angualr6-x-以后-rxjs6-x-的变化以及使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#angualr6-x-以后-rxjs6-x-的变化以及使用"}},[s._v("#")]),s._v(" Angualr6.x 以后 Rxjs6.x 的变化以及使用")]),s._v(" "),a("p",[s._v("RXJS6 改变了包的结构，主要变化在 import 方式和 operator 上面以及使用 pipe()")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("import {Observable} from 'rxjs';\nimport {map,filter} from 'rxjs/operators';\n\nlet stream = new Observable<any>(observer => {\n    let count = 0;\n    setInterval(() => {\n      observer.next(count++);\n    }, 1000);\n  });\n\nstream\n  .pipe(filter(val => val % 2 == 0))\n  .subscribe(value => console.log(\"filter>\" + value));\n\nstream\n  .pipe(\n    filter(val => val % 2 == 0),\n    map(value => {\n      return value * value;\n    })\n  )\n  .subscribe(value => console.log(\"map>\" + value));\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);