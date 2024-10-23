(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{603:function(v,_,e){"use strict";e.r(_);var o=e(10),t=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"web安全问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web安全问题"}},[v._v("#")]),v._v(" Web安全问题")]),v._v(" "),e("p",[v._v("关于Web安全，我们最早听到最多的就是"),e("code",[v._v("SQL注入")]),v._v("。例如用户在系统登录界面输入用户名和密码，提交以后，后端直接拿到数据就拼接SQL语句去查询数据库。如果在输入时进行了恶意的SQL拼装，那么最后生成的"),e("code",[v._v("SQL")]),v._v("就有问题，黑客就可以从数据库中拖出关键信息。")]),v._v(" "),e("p",[v._v("我们可以通过在后端用"),e("code",[v._v("PDO扩展")]),v._v("的方式访问数据库和对用户输入数据进行多重验证的方式来避免"),e("code",[v._v("SQL注入")]),v._v("。")]),v._v(" "),e("p",[v._v("而现在前端我们遇到的web安全问题比较典型的有"),e("code",[v._v("XSS攻击")]),v._v("和"),e("code",[v._v("CSRF攻击")]),v._v("这两种。本次主要来说说对于这两种攻击，先解释其实现原理还有我们都有哪些方法可以来应对。")]),v._v(" "),e("h2",{attrs:{id:"xss攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xss攻击"}},[v._v("#")]),v._v(" XSS攻击")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("XSS(Cross-site Scripting, 跨站脚本攻击)")])])]),v._v(" "),e("p",[v._v("避免与"),e("code",[v._v("CSS")]),v._v("重名，所以简写成"),e("code",[v._v("XSS")]),v._v("了。原理就是通过发布文章、发布评论等方式，将一段恶意的JS代码输入进去。然后别人再看这篇文章、评论时，之前注入的这段恶意JS代码就执行了。JS代码一旦执行就跟网页原有的JS有同样的权限，可以获取"),e("code",[v._v("cookie")]),v._v("等。")]),v._v(" "),e("p",[e("strong",[v._v("解决办法有四个：")])]),v._v(" "),e("ol",[e("li",[e("code",[v._v("CSP(Content-Security-Policy)")])])]),v._v(" "),e("p",[v._v("内容安全策略是"),e("code",[v._v("http")]),v._v("协议中协议头的一个字段，也可以通过"),e("code",[v._v("html")]),v._v("的"),e("code",[v._v("meta")]),v._v("标签进行控制。只要在返回的"),e("code",[v._v("http")]),v._v("头中定义：")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("'Content-type':'text/html',\n'Content-Security-Policy':'default-src http: https:'\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br")])]),e("p",[v._v("那么返回的"),e("code",[v._v("html")]),v._v("文件就只能通过"),e("code",[v._v("http")]),v._v("和"),e("code",[v._v("https")]),v._v("外链加载"),e("code",[v._v("js")]),v._v("脚本的方式来执行"),e("code",[v._v("js")]),v._v("代码，而不能执行内联的"),e("code",[v._v("js")]),v._v("代码。")]),v._v(" "),e("p",[v._v("这样就防止了恶意内联js代码的执行。此外这个标签还可以设置加载哪些域名下的js文件等，更多信息请查阅 MDN CSP文档。")]),v._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[v._v("对"),e("code",[v._v("cookie")]),v._v("设置"),e("code",[v._v("http-only")])])]),v._v(" "),e("p",[v._v("可以对"),e("code",[v._v("cookie")]),v._v("设置"),e("code",[v._v("http-only")]),v._v("来禁止通过JS访问"),e("code",[v._v("cookie")]),v._v("，减少"),e("code",[v._v("XSS")]),v._v("攻击。")]),v._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[v._v("对用户输入的内容进行"),e("code",[v._v("escape")]),v._v("验证")])]),v._v(" "),e("p",[v._v("目前已经有一些"),e("code",[v._v("npm")]),v._v("库例如"),e("code",[v._v("xss-escape")]),v._v(",通过把有"),e("code",[v._v("XSS")]),v._v("攻击危险的字符转换成"),e("code",[v._v("html")]),v._v("实体字符，再放到后端存储，下次在前端渲染的时候，浏览器就不会把实体字符当做脚本来执行了，而是当成实体编码解码之后进行显示。")]),v._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[v._v("后端对有"),e("code",[v._v("XSS")]),v._v("嫌疑的内容进行过滤")])]),v._v(" "),e("h2",{attrs:{id:"csrf攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csrf攻击"}},[v._v("#")]),v._v(" CSRF攻击")]),v._v(" "),e("blockquote",[e("p",[v._v("CSRF(Cross-site request forgery，跨站请求伪造)")])]),v._v(" "),e("p",[e("code",[v._v("CSRF")]),v._v("是借用了当前操作者的身份来偷偷完成了某个请求操作，而不是为了拿到用户信息。")]),v._v(" "),e("p",[v._v("攻击者盗用了你的身份，以你的名义发送恶意请求，对服务器来说这个请求是完全合法的，但是却完成了攻击者所期望的一个操作，比如以你的名义发送邮件、发消息，盗取你的账号，添加系统管理员，甚至于购买商品、虚拟货币转账等。")]),v._v(" "),e("h3",{attrs:{id:"csrf攻击攻击原理及过程如下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csrf攻击攻击原理及过程如下"}},[v._v("#")]),v._v(" "),e("code",[v._v("CSRF攻击")]),v._v("攻击原理及过程如下：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("用户C打开浏览器，访问受信任网站A，输入用户名和密码请求登录网站A；")])]),v._v(" "),e("li",[e("p",[v._v("在用户信息通过验证后，网站A产生Cookie信息并返回给浏览器，此时用户登录网站A成功，可以正常发送请求到网站A；")])]),v._v(" "),e("li",[e("p",[v._v("用户未退出网站A之前，在同一浏览器中，打开一个TAB页访问网站B；")])]),v._v(" "),e("li",[e("p",[v._v("网站B接收到用户请求后，返回一些攻击性代码，并发出一个请求要求访问第三方站点A；")])]),v._v(" "),e("li",[e("p",[v._v("浏览器在接收到这些攻击性代码后，根据网站B的请求，在用户不知情的情况下携带"),e("code",[v._v("Cookie")]),v._v("信息，向网站A发出请求。网站A并不知道该请求其实是由B发起的，所以会根据用户C的"),e("code",[v._v("Cookie")]),v._v("信息以C的权限处理该请求，导致来自网站B的恶意代码被执行。")])])]),v._v(" "),e("h3",{attrs:{id:"csrf漏洞检测"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csrf漏洞检测"}},[v._v("#")]),v._v(" "),e("code",[v._v("CSRF")]),v._v("漏洞检测：")]),v._v(" "),e("p",[v._v("检测"),e("code",[v._v("CSRF")]),v._v("漏洞是一项比较繁琐的工作，最简单的方法就是抓取一个正常请求的数据包，去掉"),e("code",[v._v("Referer")]),v._v("字段后再重新提交，如果该提交还有效，那么基本上可以确定存在"),e("code",[v._v("CSRF")]),v._v("漏洞。")]),v._v(" "),e("h3",{attrs:{id:"防御csrf攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防御csrf攻击"}},[v._v("#")]),v._v(" 防御CSRF攻击：")]),v._v(" "),e("p",[v._v("目前防御 "),e("code",[v._v("CSRF")]),v._v(" 攻击主要有三种策略：验证 "),e("code",[v._v("HTTP Referer")]),v._v(" 字段；在请求地址中添加 "),e("code",[v._v("token")]),v._v(" 并验证；在 "),e("code",[v._v("HTTP")]),v._v("头中自定义属性并验证。")]),v._v(" "),e("ol",[e("li",[v._v("验证 "),e("code",[v._v("HTTP Referer")]),v._v(" 字段")])]),v._v(" "),e("p",[v._v("根据 "),e("code",[v._v("HTTP")]),v._v(" 协议，在 "),e("code",[v._v("HTTP")]),v._v(" 头中有一个字段叫 "),e("code",[v._v("Referer")]),v._v("，它记录了该 "),e("code",[v._v("HTTP")]),v._v(" 请求的来源地址。")]),v._v(" "),e("p",[v._v("在通常情况下，访问一个安全受限页面的请求来自于同一个网站，比如需要访问 "),e("code",[v._v("http://bank.example/withdraw?account=bob&amount=1000000&for=Mallory")]),v._v("，用户必须先登陆 bank.example，然后通过点击页面上的按钮来触发转账事件。这时，该转帐请求的 "),e("code",[v._v("Referer")]),v._v(" 值就会是转账按钮所在的页面的 URL，通常是以 bank.example 域名开头的地址。而如果黑客要对银行网站实施 CSRF 攻击，他只能在他自己的网站构造请求，当用户通过黑客的网站发送请求到银行时，该请求的 "),e("code",[v._v("Referer")]),v._v(" 是指向黑客自己的网站。")]),v._v(" "),e("p",[v._v("因此，要防御 "),e("code",[v._v("CSRF")]),v._v(" 攻击，银行网站只需要对于每一个转账请求验证其 "),e("code",[v._v("Referer")]),v._v(" 值，如果是以 bank.example 开头的域名，则说明该请求是来自银行网站自己的请求，是合法的。如果 "),e("code",[v._v("Referer")]),v._v(" 是其他网站的话，则有可能是黑客的 "),e("code",[v._v("CSRF")]),v._v(" 攻击，拒绝该请求。")]),v._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[v._v("在请求地址中添加 "),e("code",[v._v("token")]),v._v(" 并验证")])]),v._v(" "),e("p",[e("code",[v._v("CSRF")]),v._v(" 攻击之所以能够成功，是因为黑客可以完全伪造用户的请求，该请求中所有的用户验证信息都是存在于 "),e("code",[v._v("cookie")]),v._v(" 中，因此黑客可以在不知道这些验证信息的情况下直接利用用户自己的 "),e("code",[v._v("cookie")]),v._v(" 来通过安全验证。要抵御 "),e("code",[v._v("CSRF")]),v._v("，关键在于在请求中放入黑客所不能伪造的信息，并且该信息不存在于 "),e("code",[v._v("cookie")]),v._v(" 之中。")]),v._v(" "),e("p",[v._v("可以在 "),e("code",[v._v("HTTP")]),v._v(" 请求中以参数的形式加入一个随机产生的 "),e("code",[v._v("token")]),v._v("，并在服务器端建立一个拦截器来验证这个 "),e("code",[v._v("token")]),v._v("，如果请求中没有 "),e("code",[v._v("token")]),v._v(" 或者 "),e("code",[v._v("token")]),v._v("内容不正确，则认为可能是 "),e("code",[v._v("CSRF")]),v._v(" 攻击而拒绝该请求。")]),v._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[v._v("在 "),e("code",[v._v("HTTP")]),v._v(" 头中自定义属性并验证")])]),v._v(" "),e("p",[v._v("这种方法也是使用 "),e("code",[v._v("token")]),v._v(" 并进行验证，和上一种方法不同的是，这里并不是把 "),e("code",[v._v("token")]),v._v(" 以参数的形式置于 "),e("code",[v._v("HTTP")]),v._v(" 请求之中，而是把它放到 "),e("code",[v._v("HTTP")]),v._v(" 头中自定义的属性里。")]),v._v(" "),e("p",[v._v("通过 "),e("code",[v._v("XMLHttpRequest")]),v._v(" 这个类，可以一次性给所有该类请求加上 "),e("code",[v._v("csrftoken")]),v._v(" 这个 "),e("code",[v._v("HTTP")]),v._v(" 头属性，并把 "),e("code",[v._v("token")]),v._v(" 值放入其中。这样解决了上种方法在请求中加入 "),e("code",[v._v("token")]),v._v(" 的不便，同时，通过 "),e("code",[v._v("XMLHttpRequest")]),v._v(" 请求的地址不会被记录到浏览器的地址栏，也不用担心 "),e("code",[v._v("token")]),v._v("会透过 "),e("code",[v._v("Referer")]),v._v(" 泄露到其他网站中去。")])])}),[],!1,null,null,null);_.default=t.exports}}]);