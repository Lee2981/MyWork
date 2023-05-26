<!-- 2023-05-24 -->

<!-- 2023-05-23 -->

# 性能优化

    1.减少 HTTP 请求
    2.使用内容发布网络（CDN）
    3.添加本地缓存
    4.压缩资源文件
    5.将 CSS 样式表放在顶部，把 javascript 放在底部（浏览器的运行机制决定）
    6.避免使用 CSS 表达式
    7.减少 DNS 查询
    8.使用外部 javascript 和 CSS
    9.避免重定向
    10.图片 lazyLoad

# JS 基本数据类型

        1.undefined
        2.null
        3.number
        4.boolean
        5.string
        6.symbol

# 跨域的原理

    跨域，是指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对 JavaScript 实施的安全限制，那么只要协议、域名、端口有任何一个不同，都被当作是不同的域。跨域原理，即是通过各种方式，避开浏览器的安全限制。

# JS 中继承实现的几种方式

    1.原型链继承
    2.构造继承
    3.实例继承
    4.拷贝继承
    5.组合继承
    6.寄生组合继承

# Vue 生命周期

    Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、销毁等一系列过程，我们称这是 Vue 的生命周期。
    通俗说就是 Vue 实例从创建到销毁的过程，就是生命周期

# 事件委托以及冒泡原理

    事件委托是利用冒泡阶段的运行机制来实现的，就是把一个元素响应事件的函数委托到另一个元素，一般是把一组元素的事件委托到他的父元素上，委托的优点是减少内存消耗，节约效率动态绑定事件事件冒泡，就是元素自身的事件被触发后，如果父元素有相同的事件，如 onclick 事件，那么元素本身的触发状态就会传递，也就是冒到父元素，父元素的相同事件也会一级一级根据嵌套关系向外触发，直到 document/window，冒泡过程结束。

# 知道 private 和 public 吗

    public：public 表明该数据成员、成员函数是对所有用户开放的，所有用户都可以直接进行调用
    private：private 表示私有，私有的意思就是除了 class 自己之外，任何人都不可以直接使用

# Ajax

## ajax 返回的状态

    0 － （未初始化）还没有调用 send()方法
    1 － （载入）已调用 send()方法，正在发送请求
    2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
    3 － （交互）正在解析响应内容
    4 － （完成）响应内容解析完成，可以在客户端调用了

## 实现一个 Ajax

    AJAX 创建异步对象 XMLHttpRequest
    操作 XMLHttpRequest 对象
        （1）设置请求参数（请求方式，请求页面的相对路径，是否异步）
        （2）设置回调函数，一个处理服务器响应的函数，使用 onreadystatechange ，类似函数指针
        （3）获取异步对象的 readyState 属性：该属性存有服务器响应的状态信息。每当readyState 改变时，onreadystatechange 函数就会被执行。
        （4）判断响应报文的状态，若为 200 说明服务器正常运行并返回响应数据。
        （5）读取响应数据，可以通过 responseText 属性来取回由服务器返回的数据。

# CSS3 选择器有哪些

    1.属性选择器
    2.伪类选择器
    3.伪元素选择器

<!-- 2023-05-22 -->

# get 和 post 请求在缓存方面的区别

    get:请求类似于查找的过程,用户获取数据,可以不用每次都与数据库连接,所以可以使用缓存
    post:post一般做的是修改和删除的工作,所以必须与数据库交互,所以不能使用缓存,因此get比较适合请求缓存

# 说一下闭包

    闭包就是能够读取其他函数内部变量的函数,或者子函数在外调用,子函数所在的父函数的作用域不会被释放

# 说说前端中的事件流

    什么是事件流:事件流描述的是从页面中接收的事件的顺序,
        DOM2级事件流包括:
            1.事件捕获阶段
            2.处于目标阶段
            3.事件冒泡阶段

# 说一下图片的懒加载和预加载

    预加载:提前加载图片,当用户需要查看时可直接从本地缓存中渲染
    懒加载:懒加载的主要目的时作为服务器前端的优化,减少请求数或延迟请求数
    两者的区别:两者的行为是相反的,一个是提前加载,一个是迟缓甚至不加载
    懒加载对服务器有一定的缓解压力的作用,预加载会增加服务器前端压力

# mouseOver 和 mouseEnter 的区别

    mouseOver:当鼠标移入元素或其子元素都会触发事件,所以会有一个重复触发,冒泡的过程.
    mouseout
    mouseEnter:当鼠标移入元素本身(不包含元素的子元素)会触发事件,也就是不会冒泡
    mouseLeave

# new 操作符都做了什么事

    new操作符新建立了一个新对象,这个对象原型指向构造函数的prototype,执行构造函数后返回这个对象

# 改变函数内部 this 指针的指向函数(bind,apply,call 的区别)

    通过apply和call改变函数的this指向,
    他们两个函数的
        第一个参数:都是改变指向的那个对象
        第二个参数:apply是数组,
                  call是arg1,arg2,arg3
    通过bind改变this作用域会返回一个新的函数,这个函数不会马上执行

# JS 的垃圾回收机制

    JS的解释器可以检测到程序不再使用一个对象,当它确定这个对象是无用的时候,他就会把这个对象的占用内存释放
    垃圾回收的方法:
        1.标记清除
        2.计数引用

# 如何理解前端模块化

    前端模块化就是复杂的文件变成一个一个独立的模块
    分成的独立模块有利于重用(复用性)和维护(版本迭代),这样会引来模块之间相互依赖的问题

# setTimeout,setInterval 和 requestAnimationFrame

    1.setTimeout和setInterval都需要设置时间间隔
      requestAnimationFrame不需要设置时间间隔
    2.requestAnimationFrame会把每一帧的所有的DOM操作集中起来,在一次重绘或回流中就完成,并且重绘和回流的时间间隔紧紧跟随浏览器的刷新频率
    3.在隐藏和不可见的元素中,requestAnimationFrame将不会进行重绘或回流,这意味着更少的CPU,GPU和内存使用量
    4.requestAnimationFrame是浏览器专门为动画提供的API,在运行时浏览器会自动优化方法的调用,并且页面不是激活状态下,动画会自动暂停,有效节省了CPU开销

<!-- 2023-05-21 -->

# Http 支持的方法

GET POST HEAD OPTIONS PUT DELETE TRACE CONTENT

# 说一下浏览器缓存

    缓存分为两种:强缓存,协商缓存,根据响应头决定
    强缓存相关字段:expires cache-control 如果 cache-control 与 expires 同时存在的话,cache-control 的优先级高于 expires
    协商缓存相关字段:Last-Modified/If-Modified-Since,Etag/Id-None-Match

# 浏览器在生成页面的时候,会生成哪两棵树

    DOM树和CSSOM树
    当浏览器接收到服务器响应来的HTML文档后,会遍历文档节点,生成DOM树
    CSSOM 规则树由浏览器解析CSS文件生成

# 输入 URL 到页面加载显示完成发生了什么

    1.DNS解析
    2.TCP连接
    3.发送HTTP请求
    4.服务器处理请求并返回HTTP报文
    5.浏览器解析渲染页面
    6.连接结束

# link 和 import 的区别

    link是html标签,import是css提供的
    1.页面被加载时,link会同时被加载,import引用的css会等到页面加载结束后加载
    2.link是html标签,没有兼容性 import只有IE5以上才可以识别
    3.link方式样式的权重高于import

# transition 和 animation 的区别

    animation 和 transition 大部分属性相同的,他们都是随时间改变元素的属性值
    transition 需要一个事件才能改变属性   animation 不需要触发事件也可以
    transition 为2帧  animation可以一帧一帧的

# Flex 布局

    属性值:
        1.display:flex
        // 决定主轴的方向
        2.flex-direction: row | row-reverse | column | column-reverse;
        // 是否换行
        3.flex-wrap: nowrap | wrap | wrap-reverse
        // 对其方式，水平主轴对齐方式
        4.justify-content：center | left | right
        // 对齐方式，竖直轴线方向
        5.align-items：center

# 多行元素的文本省略号

    display: -webkit-box
    -webkit-box-orient:vertical
    -webkit-line-clamp:3
    overflow:hidden

# opacity 和 display:none 的区别

    opacity=0，元素隐藏，不会改变页面布局
    display:none    元素隐藏,会改变布局

# position 属性

    1.固定定位 fixed
    2.相对定位 relative
    3.绝对定位 absolute
    4.粘性定位 sticky
    5.默认定位 Static

<!-- 2023-05-18 -->

# BOM 属性对象方法

## location 对象

    1.location.href -- 返回或设置当前文档的URL
    2.location.search --返回URL中的查询字符串部分
    3.location.hash --返回URL#后面的东西,没有则返回空
    4.location.host --返回URL中的主域名部分
    5.location.hostname --返回URL的域名后的部分
    6.location.port --返回端口号
    7.location.protocol --返回协议部分
    8.location.assign --返回当前文档的URL
    9.location.replace() --设置当前文档的URL
    10.location.reload() --刷新页面

## history 对象

    1.history.go() --前进或后退指定页数
    2.history.back() --后退一页
    3.history.forward() --前进一页

## Navigator 对象

    1.navigator.userAgent --返回用户代理头的字符串表示
    2.navigator.cookieEnabled --返回浏览器是否支持(启用)cookie

# 400,401,403 状态码

    1.400:请求无效(数据类型错误)
    2.401:账户未进行验证
    3.403:服务器已经取得请求,但拒绝执行

# fetch 发送两次请求的原因

    第一次发送询问服务器是否支持修改的请求头,如果支持发送第二次请求请求数据

# Cookie,SessionStorage,LocalStorage 的区别

    1.共同点:都是保存在浏览器端,并且是同源的
    2.Cookie:
        cookie数据始终在同源的http请求中携带,即cookie在浏览器和服务器之间来回传递
        sessionStorage和localStorage不会自动把数据发给服务器,仅保存本地
    3.sessionStorage:仅在浏览器窗口关闭前有效
    4.localStorage:始终有效,窗口和浏览器关闭也保存
    5.cookie:可以设置过期时间
    6.cookie应用场景:保存用户登录状态等

# cookie 如何防范 XSS 攻击

    XSS(跨站脚本攻击)是指攻击者在返回的HTML中嵌入JS脚本,为了减轻这些攻击,需要在http头部配上set-cookie
    httponly 可以防止XSS,它会禁止js脚本访问cookie
    secure 告诉浏览器仅在请求为https的时候发送cookie

# addEventListener 参数

    addEventListener(event,funciton,useCapture)
    event:事件名
    function:事件触发时执行的函数
    useCapture:事件是否在捕获或者冒泡阶段执行

# 前端优化

    1.降低请求量:合并资源,减少http请求数,minify/gzip 压缩,webP,lazyLoad
    2.加快请求速度:预解析DNS,较少域名数,并行加载,CDN分发
    3.缓存:HTTP协议缓存请求,离线缓存manifest,离线数据缓存localStorage
    4.渲染:JS/CSS优化,加载顺序,服务器渲染,pipeline

# get 和 post 区别

    1.get参数通过url传递    post放在request body中
    2.get请求在url中传递的参数有长度限制    post没有
    3.get比post更不安全
    4.get只能进行url编码    post支持多种编码
    5.get请求参数会完整保存在浏览器记录里   post不会
    6.get会产生一个TCP数据包    post会产生两个TCP包

<!-- 2023-05-17 -->

# HTTP 和 HTTPS

## 1.http 和 https 的基本概念

    http:超文本传输协议,是服务器端请求和应答的标准(TCP),用于从WWW服务器传输超文本到本地浏览器的传输协议,使浏览器更加高效,使网络传输减少

    https:以安全为目标的HTTP通道,在HTTP基础上加入了SSL层加密

## 2.http 和 https 的区别

    http的传输是没有加密的
    https的协议是由http和SSL协议构建的可进行加密传输和身份验证的网络协议
    https需要ca证书,费用较高

    http的端口一般为80
    https端口一般为443

## 3.https 协议的工作原理

    1.当客户端使用https协议访问服务器时,会要求web服务器与SSL协议链接
    2.web服务器接收到请求后会将网站的证书(包含公钥)返回给客户端
    3.客户端和web服务器会开始协商SSL加密等级
    4.客户端通过协商后的加密等级建立会话密钥,然后通过网站的公钥加密会话密钥,并传送给网站
    5.web服务器通过自己的私钥解密出会话密钥
    6.web服务器通过会话密钥加密与客户端之间的通信

## 4.https 协议的优点

    1.https协议可以认证用户和服务器,保证数据传输到正确的客户机和服务器
    2.https是由http和SSL协议构建的网络协议,可防止数据在传输过程中被盗取或改变,确保数据完整性
    3.https协议大大增加了中间人的攻击成本

## 5.https 协议的缺点

    1.https握手阶段比较费时,会使页面加载时间延长50%,耗电增加10% ~ 20%
    2.https的缓存不如http高效,会增加数据开销
    3.SSL证书需要钱,功能越强大的证书费用越高
    4.SSL证书需要绑定IP,不能在一个IP上绑定多个域名,ipv4资源不支持这种消耗

# TCP 和 UDP

## 1.TCP(传输控制协议)的三次握手

    客户端和服务端都需要知道各自可收发,因此需要3次握手
    简述:C发起请求连接S确认,也发起连接C确认
    第一次握手:S只可以确认自己可以接受C发送的报文段
    第二次握手:C可以确认S收到了自己发送的报文段,并且可以确认自己可以接受S发送的报文段
    第三次握手:S可以确认C收到了自己发送的报文段

## 2.TCP 和 UDP(面向消息的传输层协议) 的区别

    TCP是面向连接的
    UDP是无连接的,即发送数据前不需要先建立连接

    TCP连接传送的数据,无差错,不丢失,不重复,按序到达(适合大数据量的交换)
    UDP不保证可靠交付

    TCP是面向字节流
    UDP是面向报文

    TCP只能1对1
    UDP可以1对1也可以1对多

    TCP是面向连接的可靠性传输
    UDP是不可靠的

# WebSocket 的实现和应用

## 什么是 WebSocket

    WebSocket是H5中的协议,支持持久连接,Http协议不支持持久性连接
    Http1.0和Http1.1都不支持持久性连接,Http1.1中的keep-alive,将多个http请求可以合并为1个

## WebSocket 是什么样的协议,具体有什么优点

    Http1.0中的生命周期通过Request来界定,一个Request一个Response算请求结束
    Http1.1中有一个connection:Keep-alive(可以发送多个Request,接收多个Response,但是一个Request只能接收一个Response,Response是被动产生的,不能主动发起)

## Http 请求的方式,Head 方式

    Head:类似于get请求,不过返回的响应没有具体内容
    Options:允许客户端查看服务器性能(比如:服务器支持的请求方式等)
