### 404 We Found前端技术分享会

​                                                             2020/5/10

# CSS的定位和浮动

CSS定位机制：

- 普通流
- 定位
- 浮动

## 定位

- static
- relative
- absolute
- fixed
- sticky







❓使用absolute一定要加一个属性为relative的父元素❓

​		❌绝对定位元素的包含块是距离它最近的定位祖先。绝对定位也可以不依赖特定给它的父元素去定位。

## 浮动

- left
- right
- inline-start
- inline-end

浮动有一个特性叫做“**父元素坍塌**”。解决“父元素坍塌“影响后面定位的好办法有:

1. 直接给父元素设置高宽

2. clear:both

3. 建立伪类选择器清除浮动(用时还解决了父元素的高度问题)

   .container:after { 
   				content: '';
   				display: block;
   				clear: both;

   ​	} 

## BFC

BFC（Block　Formatting Context）,也就是“块级格式化上下文”。

当元素在页面上水平或垂直排布时，它们之间如何相互影响，CSS有几套不同的规则，其中一套规则叫做“格式化上下文”。

所以BFC就是一些规则适用于块级盒子的叠放。它决定了元素如何去对其内容进行定位 以及与其他元素的关系和作用 。当涉及到可视化布局的时候， BFC提供了一个环境HTML元素在这个环境中按照一定规则进行布局。

触发BFC的条件(满足其一即可):

- float的值不是none
- position的值不是static或者relative
- display的值是inline-block、table-cell、flex、table-caption或者inline-flex
- overflow的值不是visible的块级元素 
- html根元素

BFC的布局规则

- 内部的Box会在垂直方向，一个接一个地放置。
- Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。
- BFC的区域不会与float box重叠。
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- 计算BFC的高度时，浮动元素也参与计算。

BFC的应用

- 解决浮动元素令父元素高度坍塌带来的的问题
- 实现更好的自适应布局效果
- 解决外边距垂直重合的问题