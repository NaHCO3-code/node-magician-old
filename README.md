# node-magician

## 一些概念

### `Node`

node(节点)是构成整个程序的基本元素。

### `DataSocket`

几乎每个node都需要有输入和输出。

而dataSocket就是节点输入输出的门户，也可以理解为“插槽”。

数据依靠dataSocket被接收。

### `PowerSocket`

要让节点运转，需要为他们提供“动力”。

Node相当于用电器，PowerSocket相当于插口

实际上，PowerSocket是为了搞清楚节点的执行顺序。

### `Line`

Line用于连结两个Socket

相当于电线，电源线……

### `Block`

Block是所有行为的入口。

Node必须（直接或间接）连接到Block上才能被执行。

