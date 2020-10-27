(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{427:function(t,s,a){"use strict";a.r(s);var v=a(25),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"杂项修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#杂项修改"}},[t._v("#")]),t._v(" 杂项修改")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("1、什么是同源策略和跨域问题")]),t._v(" "),a("p",[t._v("浏览器因为安全的原因，有一套策略，叫做同源策略，这套策略只有在浏览器端才会有，当你的请求协议、域名或者端口有一个不同就会跨域")]),t._v(" "),a("p",[t._v("跨域时，浏览器实际上是拿到数据的，但是浏览器不会将数据给你，所以你也就没有办法获取到数据")]),t._v(" "),a("p",[t._v("跨域主要的作用是防止CSRF攻击，简单来说，CSRF攻击是利用用户的登陆状态发起恶意请求")]),t._v(" "),a("p",[t._v("解决跨域的方案：")]),t._v(" "),a("ul",[a("li",[t._v("jsonp使用script标签向后台请求数据，但是只适合用于get请求")]),t._v(" "),a("li",[t._v("cors是让服务端设置access-control-allow-origin，这样浏览器就不会报跨域错误。")]),t._v(" "),a("li",[t._v("反向代理，是搭建一个自己的服务器，让服务器请求到数据后，按到数据之后再返回")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("2、http和https的区别")]),t._v(" "),a("ol",[a("li",[t._v("https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用")]),t._v(" "),a("li",[t._v("http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议")]),t._v(" "),a("li",[t._v("http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443")]),t._v(" "),a("li",[t._v("http的连接很简单，是无状态的，https协议是由ssl+http协议构建的可进行加密传输，身份认证的网络协议，比http协议安全")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("3、https的工作原理")]),t._v(" "),a("ol",[a("li",[t._v("客户端使用https的url访问web服务器，要求与web服务器建立ssl连接")]),t._v(" "),a("li",[t._v("web服务器收到客户端请求后，会将网站的证书信息（证书中包含公钥）传送一份给客户端")]),t._v(" "),a("li",[t._v("客户端的浏览器与web服务器开始协商ssl连接的安全等级，也就是信息加密的等级")]),t._v(" "),a("li",[t._v("客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送给网站")]),t._v(" "),a("li",[t._v("web服务器利用自己的私钥解密出会话密钥")]),t._v(" "),a("li",[t._v("web服务器利用会话密钥加密与客户端之间的通信")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("4、Jenkins")]),t._v(" "),a("p",[t._v("基于java开发的一种持续集成工具，用于监控持续重复的工作，旨在提供一个开放易用的软件平台，使软件的持续集成变成可能。Jenkins配合git可以自动化部署项目")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("5、gos")]),t._v(" "),a("p",[t._v("git管理平台，部署在公司内部")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("6、restful api")]),t._v(" "),a("p",[t._v("API 设计规范，用于web数据接口的设计")]),t._v(" "),a("ol",[a("li",[t._v("GET：读取（read）")]),t._v(" "),a("li",[t._v("POST：新建（create）")]),t._v(" "),a("li",[t._v("PUT：更新（update）整体")]),t._v(" "),a("li",[t._v("PATCH ：更新（update）通常是部分更新")]),t._v(" "),a("li",[t._v("DELETE：删除（delete）")]),t._v(" "),a("li",[t._v("/getAllCars")]),t._v(" "),a("li",[t._v("/createNewCar")]),t._v(" "),a("li",[t._v("/deleteAllRedCars")]),t._v(" "),a("li",[t._v("1xx相关信息")]),t._v(" "),a("li",[t._v("2xx操作成功")]),t._v(" "),a("li",[t._v("3xx重定向")]),t._v(" "),a("li",[t._v("4xx客户端错误")]),t._v(" "),a("li",[t._v("5xx服务器错误")]),t._v(" "),a("li",[t._v("http://www.artech.com/employees/c001(编号C001的员工)")]),t._v(" "),a("li",[t._v("http://www.artech.com/sales/2013/12/31(2013年12月31的销售额)")]),t._v(" "),a("li",[t._v("http://www.artech.com/orders/2013/q4(2013年第4季度签订的订单)")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("7、http缓存")]),t._v(" "),a("p",[t._v("http在请求资源的时候会对资源进行缓存，其中缓存主要两种，强制缓存和对比缓存")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("强制缓存：主要是在缓存数据未失效的情况下，可以直接使用缓存数据，后台主要通过修改响应头的数据说明缓存资源的失效规则，从而达到的一种缓存效果，当资源被存储到缓存数据库中的时候，浏览器就不会再向服务器请求资源的，而是直接从缓存数据库中获取资源")])]),t._v(" "),a("li",[a("p",[t._v("对比缓存和强制换大致相同，但是对比缓存每一次获取资源的时候都会去向后台确认，缓存的资源是否失效，如果失效就不从缓存数据库中拿数据")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("8、js对象的三大特性")]),t._v(" "),a("p",[t._v("扩展、密封、冻结")]),t._v(" "),a("ul",[a("li",[t._v("扩展：如果一个对象可以添加新的属性，则这个对象时可扩展的")])]),t._v(" "),a("p",[t._v("让这个对象变得不可扩展，也就是不能再有新的属性\nObject.isExtensible、Object.preventExtensions方法")]),t._v(" "),a("ul",[a("li",[t._v("密封：密封对象是指那些不可扩展的，且所有自身属性都不可配置的（non-configurable）对象")])]),t._v(" "),a("p",[t._v("Object.isSealed方法、Object.seal方法")]),t._v(" "),a("ul",[a("li",[t._v("冻结：一个对象时冻结的是指它不可扩展，所有属性都是不可配置的，且所有数据属性都是不可写的")])]),t._v(" "),a("p",[t._v("Object.isFrozen、Object.freeze、浅冻结和深冻结")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("9、去重")]),t._v(" "),a("p",[t._v("已知如下数组，编写一个程序将数组扁平化并去除其中重复部分数据，最终得到一个升序且不重复的数组")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("10、http/2")]),t._v(" "),a("p",[t._v("2015, http2发布。http2是现行http协议（http1.x）的替代，但它不是重写，http方法、状态码、语义都和http1.x一样。http2基于spdy3，专注于性能，最大的一个目标是在用户和网站间只用一个连接（connection）")]),t._v(" "),a("p",[t._v("http2的特性：头部压缩，server push，多路复用，二进制传输")]),t._v(" "),a("p",[t._v("http2采用二进制格式传输数据，而非http1.x的文本格式，二进制协议解析起来更高效。http1的请求和响应报文，都是由起始行，首部和实体正文（可选）组成，各部分之间以文本换行符分隔。http2将请求和响应数据分割为更小的帧，并且它们采用的是二进制编码")]),t._v(" "),a("p",[t._v("在http2中，有了二进制分帧之后，HTTP2不再依赖tcp链接去实现多流并行了，在http2中：")]),t._v(" "),a("ul",[a("li",[t._v("同域名下所有通信都在单个连接上完成")]),t._v(" "),a("li",[t._v("单个连接可以承载任意数量的双向数据流")]),t._v(" "),a("li",[t._v("数据流以消息的形式发送，而消息又由一个或者多个帧组成，多个帧之间可以乱序发送，因为根据帧首部的流标识可以重新组装")])]),t._v(" "),a("p",[t._v("这个特性，使得性能有了极大的提升")]),t._v(" "),a("ul",[a("li",[t._v("同个域名只需要占用一个tcp连接，使用一个连接并行发送多个请求和响应，消除了因多个tcp连接而带来的延时和内存消耗")]),t._v(" "),a("li",[t._v("并行交错地发送多个请求，请求之间互不影响")]),t._v(" "),a("li",[t._v("并行交错地发送多个响应，响应之间互不干扰")]),t._v(" "),a("li",[t._v("在http2中，每个请求都可以带一个31bit的优先值，0表示最高优先级，数值越大优先级越低，有了这个优先值，客户端和服务器就可以在处理不同的流时采取不同的策略，以最优的方式发送流、消息和帧")])]),t._v(" "),a("p",[t._v("在http1中，我们使用文本的形式传输header，在header携带cookie的情况下，可能每次都需要重复传输几百到几千的字节。为了减少这块的资源消耗并且提升性能，http2对这些首部采取了压缩的策略：")]),t._v(" "),a("ul",[a("li",[t._v("http2在客户端和服务端使用了“首部表”来跟踪和存储之前发送的键值对，对相同的数据，不在通过每次的请求和响应发送")]),t._v(" "),a("li",[t._v("每个新的首部键值对要么被追加到当前表的末尾，要么替换表中之前的值")])]),t._v(" "),a("p",[t._v("server push即服务端能通过push的方式将客户端的内容预先推送过去，也叫’cache push‘")]),t._v(" "),a("ul",[a("li",[t._v("可以想象一下情况，某些资源客户端是一定会请求的，这时就可以采取服务端push的技术，提前给客户端推送必要的资源，这样就可以相对减少一点延迟事件。当然在浏览器兼容的情况下你也可以使用prefetch")]),t._v(" "),a("li",[t._v("例如服务端可以主动把js和css文件推送给客户端，而不需要客户端解析html时再发送这些请求")]),t._v(" "),a("li",[t._v("服务端可以主动推送，客户端也有权利选择是否接收。如果服务端推送的资源已经被浏览器缓存过，浏览器可以通过发送rst_stream帧来拒收。主动推送也遵守同源策略，换句话说，服务器不能随便将第三方资源推送给客户端，而必须是经过双方确认才行")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("11、http/3")]),t._v(" "),a("p",[t._v("虽然http2解决了很多之前旧版本的问题，但是它还是存在一个巨大的问题，主要是底层支撑的TCP协议造成的。")]),t._v(" "),a("p",[t._v("http2使用了多路复用，一般来说同一域名下只需要使用一个TCP连接，但当这个连接中出现了丢包的情况，那就会导致http2的表现情况反倒不如http1")]),t._v(" "),a("p",[t._v("因为在出现丢包的情况下，整个TCP都要开始等待重传，也就导致了后面的所有数据都被阻塞了。但是对于http1.1来说，可以开启多个TCP连接，出现这种情况反倒只会影响其中一个连接，剩余的TCP连接还可以正常传输数据")]),t._v(" "),a("p",[t._v("那么可能就会有人去考虑修改TCP协议，其实这已经是一件不可能完成的任务了，因为TCP存在的时候太长了，已经充斥在各种设备中。并且这个协议是由操作系统实现的，更新起来不太现实")]),t._v(" "),a("p",[t._v("基于这个原因，Google就开发了一个基于UDP协议的QUIC协议，并且使用在了http3上，http3之前名为http-over-quic，所以http3最大的改造就是使用了quic")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("12、谈谈你对TCP三次握手和四次挥手的理解")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("13、服务器和客户端建立连接，服务器瘫痪了，客户端会出现什么情况")]),t._v(" "),a("ul",[a("li",[t._v("服务端不重启，客户端继续工作，就会发现对方没有回应，如果路由器设置得当，就会返回目标地址不可达")]),t._v(" "),a("li",[t._v("服务器重启后，客户端继续关注，然后服务器就会丢失用户数据，收到客户端数据之后就会响应")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("14、前端模块化开发")]),t._v(" "),a("p",[t._v("IIFE 函数自调用")]),t._v(" "),a("p",[t._v("AMD：使用requireJS来编写模块化，特点：依赖必须提前声明好")]),t._v(" "),a("p",[t._v("CMD：使用seaJS来编写模块化，特点：支持动态引入依赖文件")]),t._v(" "),a("p",[t._v("CommonJS :nodeJS中自带的模块化")]),t._v(" "),a("p",[t._v("UMD：兼容AMD，commonjs模块化语法")]),t._v(" "),a("p",[t._v("webpack(require.ensure)：webpack 2.x版本中代码分割")]),t._v(" "),a("p",[t._v("ES Modules：ES6引入的，支持import来引入另一个js。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("15、cookie和token都放在header中，为什么会劫持cookie，不会劫持token")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("cookie登陆后后端生成一个sessionid放在cookie中返回给客户端，并且服务端一直记录着这个sessionid，客户端以后每次请求都会带上这个sessionid，服务端通过这个sessionid来验证身份之类的操作。所以别人拿到了cookie中的sessionid后，就可以完全替代你")])]),t._v(" "),a("li",[a("p",[t._v("token：登陆后，后端返回一个token给客户端，客户端将这个token存储起来，然后每次客户端请求都需要开发者手动将token放在header中带过去，服务端每次只需要对这个token进行验证就能使用token中的信息来进行下一步操作了")])]),t._v(" "),a("li",[a("p",[t._v("xxs：用户通过各种凡是将恶意代码注入到其他用户的页面中，就可以通过脚本获取信息，发起请求等操作")])]),t._v(" "),a("li",[a("p",[t._v("csrf：跨站请求攻击，简单来说，是攻击者通过一些技术手段欺骗用户，让浏览器去访问一个自己曾经认证过的网站并运行一些操作，由于浏览器曾经认证过，所以被访问的网站会认为是真正的用户操作而去运行，这利用了web中用户身份验证的一个漏洞，简单的身份验证只能保证请求发自某个用户的浏览器，却不能保证请求本身是用户自愿发出的。csrf并不能够拿到用户的任何信息，他只是欺骗用户浏览器，让其以用户的名义进行操作")])])]),t._v(" "),a("p",[t._v("cookie如果未失效，导致发送请求后，后端以为是用户的正常操作，于是进行了后续操作")]),t._v(" "),a("p",[t._v("token，由于浏览器不会自动带上token，所以即使发送请求，后端的token验证不会通过。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("16、浏览器缓存机制")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("service worker：是运行在浏览器背后的独立线程，一般可以用来实现缓存功能，使用service worker的话，传输协议必须为https，因为service worker中涉及到请求拦截，所以必须使用https协议来保障安全，service worker的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件，如何匹配缓存，如何读取缓存，并且缓存是持续性的")])]),t._v(" "),a("li",[a("p",[t._v("memory cache也就是内存中的缓存，主要包含的是当前页面中已经抓取的资源，例如页面上已经下载的样式，脚本，图片等，读取内存中的数据肯定比磁盘快，内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。一旦我们关闭Tab页面，内存中的缓存也就释放了。")])]),t._v(" "),a("li",[a("p",[t._v("disk cache是存储在硬盘的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之memory cache胜在容量和存储时效性上。在所有浏览器缓存中，disk cache覆盖面基本是最大的，它会根据http header中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据，绝大部分的缓存都是来自disk cache。")])]),t._v(" "),a("li",[a("p",[t._v("push cache是http2中的内容，当以上三种缓存都没有命中时，他才会被使用。它只在会话（session）中存在，一旦会话结束就被释放，并且缓存时间也很短暂，在chrome浏览器中只有5分钟左右，同时它也并非严格执行HTTP头中的缓存指令。")])]),t._v(" "),a("li",[a("p",[t._v("强缓存：不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的network选项中可以看到该请求返回200的状态码，并且size显示来自disk cache或者memory cache。强缓存可以通过设置两种http header实现expires和cache-control")])]),t._v(" "),a("li",[a("p",[t._v("协商缓存：就是强缓存失效后，浏览器携带缓存标识向服务器发送请求，由服务器根据缓存标识决定是否使用缓存的过程。last-modified和if-modified-since、etag和if-none-match")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("17、为什么通常在发送数据埋点请求的时候使用的是1x1像素的透明gif图片")]),t._v(" "),a("ul",[a("li",[t._v("能够完成整个http请求+响应（尽管不需要响应内容）")]),t._v(" "),a("li",[t._v("触发get请求之后不需要获取和处理数据，服务器也不需要发送数据")]),t._v(" "),a("li",[t._v("避免跨域（img天然支持跨域）")]),t._v(" "),a("li",[t._v("执行过程无阻塞")]),t._v(" "),a("li",[t._v("相比xmlhttprequest对象发送get请求，性能上更好")]),t._v(" "),a("li",[t._v("gif的最低合法体积最小（最小的bmp文件需要74字节，png需要67字节，合法的gif只需要43字节）")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("18、token加密")]),t._v(" "),a("ul",[a("li",[t._v("需要一个secret（随机数）")]),t._v(" "),a("li",[t._v("后端利用secret和加密算法对payload（如账号密码）生成一个字符串（token）返回前端")]),t._v(" "),a("li",[t._v("前端每次request在header中带上token")]),t._v(" "),a("li",[t._v("后端用同样的算法解密")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("19、es6代码转es5代码")]),t._v(" "),a("p",[t._v("es6转es5目前行业标配是babel，转换流程大致如下：")]),t._v(" "),a("ul",[a("li",[t._v("解析：解析代码字符串，生成ast")]),t._v(" "),a("li",[t._v("转换：按一定的规则转换，修改ast")]),t._v(" "),a("li",[t._v("生成：将修改后的ast转换成普通代码")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("20、中间人攻击")]),t._v(" "),a("ul",[a("li",[t._v("服务器向客户端发送公钥")]),t._v(" "),a("li",[t._v("攻击者截获公钥，保留下来")]),t._v(" "),a("li",[t._v("然后攻击者自己生成一个伪造的公钥，发给客户端")]),t._v(" "),a("li",[t._v("客户端收到伪造的公钥后，生成加密hash值发给服务器")]),t._v(" "),a("li",[t._v("攻击者获得加密hash值，用自己的私钥解密获得真密钥")]),t._v(" "),a("li",[t._v("同时生成假的加密hash值，发给服务器")]),t._v(" "),a("li",[t._v("服务器用私钥解密获取假密钥")]),t._v(" "),a("li",[t._v("服务器用假密钥加密传输信息")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("21、前端加密")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用base64/Unicode+1等方式加密成非明文，后端解开之后再存它的MD5/6")])]),t._v(" "),a("li",[a("p",[t._v("直接使用MD5/6之类的方式取hash，让后端存hash的hash")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("22、https页面接收http请求")]),t._v(" "),a("p",[t._v("开始加密通信之前，客户端和服务器首先必须建立连接和交换参数，这个过程叫做握手（handshake）。")]),t._v(" "),a("p",[t._v("假定客户端叫做爱丽丝，服务器叫做鲍勃。")]),t._v(" "),a("p",[t._v("第一步，爱丽丝给出协议版本号、一个客户端生成的随机数（Client random），以及客户端支持的加密方法。")]),t._v(" "),a("p",[t._v("第二步，鲍勃确认双方使用的加密方法，并给出数字证书、以及一个服务器生成的随机数（Server random）。")]),t._v(" "),a("p",[t._v("第三步，爱丽丝确认数字证书有效，然后生成一个新的随机数（Premaster secret），并使用数字证书中的公钥，加密这个随机数，发给鲍勃。")]),t._v(" "),a("p",[t._v("第四步，鲍勃使用自己的私钥，获取爱丽丝发来的随机数（即Premaster secret）。")]),t._v(" "),a("p",[t._v('第五步，爱丽丝和鲍勃根据约定的加密方法，使用前面的三个随机数，生成"对话密钥"（session key），用来加密接下来的整个对话过程')])]),t._v(" "),a("h1",{attrs:{id:"数据结构、设计模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构、设计模式"}},[t._v("#")]),t._v(" 数据结构、设计模式")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("1、数据结构")]),t._v(" "),a("p",[t._v("是互相之间存在一种或多种特定关系的数据元素的集合")]),t._v(" "),a("p",[t._v("数据是描述客观事物的符号，是计算机中可以操作的对象，是能被计算机识别，并输入给计算机处理的符号集合")]),t._v(" "),a("p",[t._v("程序设计=数据结构+算法")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("2、算法")]),t._v(" "),a("p",[t._v("解决特定问题求解步骤的描述，在计算机中表现为指令的有限序列，并且每条指令表示一个或多个操作")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("3、数组")]),t._v(" "),a("p",[t._v("就是相同数据类型（可以是基本类型也可以说自定义对象）的元素按一定顺序排列的集合，他们是内存中按照这个先后顺序连续存放一起，前提是相同")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("4、链表")]),t._v(" "),a("p",[t._v("链表是继数组之后第二种最通用的数据结构，是一种物理存储单元上非连续，非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("5、线性表")]),t._v(" "),a("p",[t._v("零个或多个数据元素的有限序列")]),t._v(" "),a("p",[t._v("栈：有系统自动分配，速度较快，但是程序员是无法控制的")]),t._v(" "),a("p",[t._v("堆：是由new分配的内存，一般速度比较慢，而且容易产生内存碎片不过用起来方便")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("6、观测者模式和订阅-发布模式的区别，各自适用于什么场景")]),t._v(" "),a("p",[t._v("观察者设计模式：在软件设计中是一个对象，维护一个依赖列表，当任何状态发生改变自动通知他们")]),t._v(" "),a("p",[t._v("发布——订阅模式：")]),t._v(" "),a("ul",[a("li",[t._v("在发布——订阅模式中，消息的发送方，叫做发布者，消息不会直接发送给特定的接受者，叫做订阅者")]),t._v(" "),a("li",[t._v("发布者和订阅者不知道对方的存在，需要一个第三方组件，叫做信息中介，它将订阅者和发布者串联起来，它过滤和分配所以输入的消息，换句话说，发布-订阅模式用来处理不同系统组件的信息交流，即使这些组件不知道对方的存在")])]),t._v(" "),a("p",[t._v("两种模式本质都是一样的，主要关键点在于注册（添加到注册数组中）和触发（触发注册数组中内容），只是订阅、发布模式对注册和触发进行看解耦。可以看到，使用订阅发布模式中发布者触发publish的时候，可以选择触发哪一些订阅者集合（因为publish参数传递了中间集合，可以定义多个pubsub集合），而观察者模式则只能触发所有的被观察对象。")])])])}),[],!1,null,null,null);s.default=_.exports}}]);