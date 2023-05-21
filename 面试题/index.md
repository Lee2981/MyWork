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
    CSSOM规则树由浏览器解析CSS文件生成

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
    2.link时html标签,没有兼容性 import只有IE5以上才可以识别
    3.link方式样式的权重高于import

# transition 和 animation 的区别

    animation 和 transition 大部分属性相同的,他们都是随时间改变元素的属性值
    transition 需要一个事件才能改变属性   animation 不需要触发事件也可以
    transition 为2帧  animation可以一帧一帧的

# Flex 布局

    属性值:
        1.display:flex
        2.flex-direction: row | row-reverse | column | column-reverse;      决定主轴的方向
        3.flex-wrap: nowrap | wrap | wrap-reverse   是否换行
        4.justify-content：对其方式，水平主轴对齐方式
        5.align-items：对齐方式，竖直轴线方向

# 多行元素的文本省略号

    display: -webkit-box
    -webkit-box-orient:vertical
    -webkit-line-clamp:3
    overflow:hidden

# opacity

    opacity=0，该元素隐藏起来了，但不会改变页面布局

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
