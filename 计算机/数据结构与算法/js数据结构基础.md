---
# navbar: false
# title: 关于我
sidebarDepth: 2
---

# js 数据结构基础

:::tip 写在前面
整理这个是因为上次看到字节面试问数组的类方法和实例方法，我也很懵。找个资料看看，顺便记一下。

参考于《学习 JavaScript 数据结构与算法》

把数组排序放在前面，因为后面越来越看不懂了
:::

## 数组排序算法

- 基本排序:冒泡、选择、插入
- 高级排序:希尔、归并排序、快排、堆排序、计数排序、桶排序、基数排序

1. 冒泡(bubbleSort)

```js
let arr = [2, 3, 452, 12, 1, 5, 0];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        // let temp = arr[j + 1]
        // arr[j + 1] = arr[j]
        // arr[j] = temp
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));
```

参考：

[十大经典排序算法（动图演示）](https://www.cnblogs.com/onepixel/p/7674659.html)

[漫画：什么是希尔排序？](https://juejin.im/post/5de087ede51d452515148003)

## 大 O 表示法

- 理解：用于描述算法的性能和复杂程度的技术，提出了一些函数来表示算法复杂度与数组元素数量之间的关系

- 常见的函数

<img :src="$withBase('/计算机/数据结构与算法/常见的函数1.png')">

<img :src="$withBase('/计算机/数据结构与算法/常见的函数2.png')">

- 排序算法的比较

<img :src="$withBase('/计算机/数据结构与算法/排序算法的比较.png')">

## 数组的 API

1. 静态方法

- from()
- of()
- isArray()

2. 更新的方法（改变了原数组）

- push()
- pop()
- unshift()
- shift()
- sort()
- reverse()
- splice()

3. 遍历相关的声明式方法

- forEach()=>不返回
- find()
- findIndex()=>找符合条件的
- filter()
- map()
- reduce()
- some()
- every()
- slice()

4. 其它

- length
- join()
- concat()
- indexOf()=>直接找元素
- lastIndexOf()

## 栈的结构

后进先出，先进后出

栈的实现

```js
function Stack() {
  // 用于保存元素数据的数组
  const arr = [];

  /* 
        1. 如果不判断, 问题是创建多个stack总是使用最后创建的arr
        2. 如果有判断, 问题是创建多个stack总是使用第一个创建的arr
          原型对象上的方法不要重新定义
      */
  // if (Stack.prototype.push) return

  // 压栈: push()
  // Stack.prototype.push = function (element) {
  this.push = function(element) {
    arr.push(element);
  };

  // 出栈: pop()
  this.pop = function() {
    // return arr.splice(arr.length-1, 1)
    return arr.pop();
  };

  // 查看栈顶: peek()
  this.peek = function() {
    return arr[arr.length - 1];
  };
  // 栈中元素个数: size()
  this.size = function() {
    return arr.length;
  };
  // 是否是空栈: isEmpty()
  this.isEmpty = function() {
    return arr.length === 0;
  };
}

const stack = new Stack();

stack.push(6);
stack.push(5);
stack.pop();
stack.push(4);
stack.pop();
stack.push(3);
console.log(stack.peek(), stack.size(), stack.isEmpty());

const stack2 = new Stack();
stack2.push("a");
stack2.push("b");
stack2.pop();
console.log(stack2.peek(), stack2.size(), stack2.isEmpty());
```

栈的应用=>十进制转二进制

```js
/* 
    使用Stack封装一个功能函数: 十进制(decimal)转二进制(binary)
    */
function Stack() {
  // 用于保存元素数据的数组
  const arr = [];

  this.push = function(element) {
    arr.push(element);
  };

  // 出栈: pop()
  this.pop = function() {
    // return arr.splice(arr.length-1, 1)
    return arr.pop();
  };

  // 查看栈顶: peek()
  this.peek = function() {
    return arr[arr.length - 1];
  };
  // 栈中元素个数: size()
  this.size = function() {
    return arr.length;
  };
  // 是否是空栈: isEmpty()
  this.isEmpty = function() {
    return arr.length === 0;
  };
}

function dec2bin(decNumer) {
  // 创建一个空栈
  const stack = new Stack();

  // 将得到的所有二进制位压栈
  while (decNumer > 0) {
    let remainder = decNumer % 2;
    stack.push(remainder);
    decNumer = Math.floor(decNumer / 2);
  }

  // 取出栈中所有元素组拼成二进制数
  let binayriStrng = "";
  while (!stack.isEmpty()) {
    binayriStrng += stack.pop();
  }

  return binayriStrng;
}

// 测试
console.log(dec2bin(10));
console.log(dec2bin(233));
```

## 队列

1. 是一种运算受限的线性表,先进先出(FIFO First In First Out)

2. 只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作

队列实现

```js
/* 
自定义队列类型
使用数组封装
    入队列: enqueue()
    出队列: dequeue()
    查看队头: front()
    查看元素的个数: size()
    判断队列是否为空: isEmpty()
*/
function Queue() {
  // 用于保存元素数据的数组
  const arr = [];

  // 入队列: enqueue()
  this.enqueue = function(element) {
    arr.push(element);
  };

  // 出队列: dequeue()
  this.dequeue = function() {
    return arr.shift();
  };

  // 查看队头: front()
  this.front = function() {
    return arr[0];
  };
  // 查看元素的个数: size()
  this.size = function() {
    return arr.length;
  };
  // 判断队列是否为空: isEmpty()
  this.isEmpty = function() {
    return arr.length === 0;
  };
}

// 创建队列对象
var queue = new Queue();

// 在队列中添加元素
queue.enqueue("abc");
queue.enqueue("cba");
queue.enqueue("nba");

// 查看一下队列前端元素
console.log(queue.front());

// 查看队列是否为空和元素个数
console.log(queue.isEmpty());
console.log(queue.size());

// 从队列中删除元素
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
```

链表的应用=>击鼓传花

```js
function Queue() {
  // 用于保存元素数据的数组
  const arr = [];

  // 入队列: enqueue()
  this.enqueue = function(element) {
    arr.push(element);
  };

  // 出队列: dequeue()
  this.dequeue = function() {
    return arr.shift();
  };

  // 查看队头: front()
  this.front = function() {
    return arr[0];
  };
  // 查看元素的个数: size()
  this.size = function() {
    return arr.length;
  };
  // 判断队列是否为空: isEmpty()
  this.isEmpty = function() {
    return arr.length === 0;
  };
}

/* 
    利用自定义队列实现击鼓传花游戏函数
    */
function passGame(names, num) {
  const queue = new Queue();
  names.forEach((name, index) => {
    queue.enqueue({
      name,
      index,
    });
  });
  while (queue.size() > 1) {
    // 将队列的前num-1个依次转移到队列后面去
    for (let index = 0; index < num - 1; index++) {
      queue.enqueue(queue.dequeue());
    }
    // 移除列头元素(也就是数到num的人)
    queue.dequeue();
  }
  // 队列现在只剩下一个元素, 也就是最后剩下的人
  const { name, index } = queue.front();
  alert(`最后剩下${name}, 第${index + 1}个`);
}

// 测试
var names = ["A", "B", "C", "D", "E"];
passGame(names, 4);
```

优先级队列（设定越小优先级越高【0-100】）

总体是实现了，但还是有问题，优先级相同的问题的比较问题。

```js
/* 
自定义一个优先级队列
*/

function PriorityQueue() {
  // 用于保存元素数据的数组
  const arr = []; // 保存的元素结构: {data, priority}

  /* 队列每个元素的类型 */
  function QueueElement(data, priority) {
    this.data = data;
    this.priority = priority;
  }

  // 入队列: enqueue()
  this.enqueue = function(data, priority) {
    // 要求priority在[0, 100]之间, 否则抛出异常
    if (priority < 0 || priority > 100) {
      throw new Error("优先级值必须在0到100之间");
    }
    // 创建一个新的元素
    const element = new QueueElement(data, priority);

    // 将element添加到内部的arr中
    // 如果当前是空的, 直接添加
    if (arr.length === 0) {
      arr.push(element);
    } else {
      // 将当前element插入到arr中的一个合适: 在priority值大于当前值的左边
      for (let index = 0; index < arr.length; index++) {
        if (arr[index].priority > priority) {
          arr.splice(index, 0, element);
          return;
        }
      }
      // 当前要添加的priority是最大的
      arr.push(element);
    }
  };

  // 出队列: dequeue()
  this.dequeue = function() {
    return arr.shift();
  };

  // 查看队头: front()
  this.front = function() {
    return arr[0];
  };
  // 查看元素的个数: size()
  this.size = function() {
    return arr.length;
  };
  // 判断队列是否为空: isEmpty()
  this.isEmpty = function() {
    return arr.length === 0;
  };
}

// 创建优先级队列对象
var pQueue = new PriorityQueue();

// 添加元素
pQueue.enqueue("abc", 10);
pQueue.enqueue("cba", 5);
pQueue.enqueue("nba", 12);
pQueue.enqueue("mba", 3);

// 遍历所有的元素
var size = pQueue.size();
for (var i = 0; i < size; i++) {
  var item = pQueue.dequeue();
  console.log(item.data, item.priority);
}
```

## 链表(下面开始搞不定了，搞不定了)

单向链表

```js
/* 
单向链表实现
*/

// 封装一个Node类, 用于保存每个节点信息
function Node(element) {
  this.element = element;
  this.next = null;
}

// 封装链表的构造函数
function LinkedList() {
  // 链表中的属性
  this.length = 0;
  this.head = null;
}

// 链表尾部追加元素方法
LinkedList.prototype.append = function(element) {
  // 1.根据新元素创建节点
  var newNode = new Node(element);

  // 2.判断原来链表是否为空
  if (this.head === null) {
    // 链表尾空
    this.head = newNode;
  } else {
    // 链表不为空
    // 2.1.定义变量, 保存当前找到的节点
    var current = this.head;
    while (current.next) {
      current = current.next;
    }

    // 2.2.找到最后一项, 将其next赋值为node
    current.next = newNode;
  }

  // 3.链表长度增加1
  this.length++;
};

// 链表的toString方法
LinkedList.prototype.toString = function() {
  // 1.定义两个变量
  var current = this.head;
  var listString = "";

  // 2.循环获取链表中所有的元素
  while (current) {
    listString += "," + current.element;
    current = current.next;
  }

  // 3.返回最终结果
  return listString.slice(1);
};

// 根据下标删除元素
LinkedList.prototype.insert = function(position, element) {
  // 1.检测越界问题: 越界插入失败
  if (position < 0 || position > this.length) return false;

  // 2.定义变量, 保存信息
  var newNode = new Node(element);
  var current = this.head;
  var previous = null;
  var index = 0;

  // 3.判断是否列表是否在第一个位置插入
  if (position == 0) {
    newNode.next = current;
    this.head = newNode;
  } else {
    while (index++ < position) {
      previous = current;
      current = current.next;
    }

    newNode.next = current;
    previous.next = newNode;
  }

  // 4.length+1
  this.length++;

  return true;
};

// 根据位置移除节点
LinkedList.prototype.removeAt = function(position) {
  // 1.检测越界问题: 越界移除失败, 返回null
  if (position < 0 || position >= this.length) return null;

  // 2.定义变量, 保存信息
  var current = this.head;
  var previous = null;
  var index = 0;

  // 3.判断是否是移除第一项
  if (position === 0) {
    this.head = current.next;
  } else {
    while (index++ < position) {
      previous = current;
      current = current.next;
    }

    previous.next = current.next;
  }

  // 4.length-1
  this.length--;

  // 5.返回移除的数据
  return current.element;
};

// 根据元素获取链表中的位置
LinkedList.prototype.indexOf = function(element) {
  // 1.定义变量, 保存信息
  var current = this.head;
  var index = 0;

  // 2.找到元素所在的位置
  while (current) {
    if (current.element === element) {
      return index;
    }
    index++;
    current = current.next;
  }

  // 3.来到这个位置, 说明没有找到, 则返回-1
  return -1;
};

// 根据元素删除信息
LinkedList.prototype.remove = function(element) {
  var index = this.indexOf(element);
  return this.removeAt(index);
};

// 判断链表是否为空
LinkedList.prototype.isEmpty = function() {
  return this.length == 0;
};

// 获取链表的长度
LinkedList.prototype.size = function() {
  return this.length;
};

// 获取第一个节点
LinkedList.prototype.getFirst = function() {
  return this.head.element;
};

// 测试链表
// 1.创建链表
var list = new LinkedList();

// 2.追加元素
list.append(15);
list.append(10);
list.append(20);

// 3.打印链表的结果
// console.log(list) // 15,10,20

// 4.测试insert方法
list.insert(0, 100);
list.insert(4, 200);
list.insert(2, 300);
// console.log(list) // 100,15,300,10,20,200

// 5.测试removeAt方法
list.removeAt(0);
list.removeAt(1);
list.removeAt(3);
// console.log(list)

// 6.测试indexOf方法
// console.log(list.indexOf(15))
// console.log(list.indexOf(10))
// console.log(list.indexOf(20))
// console.log(list.indexOf(100))

// 7.测试remove方法
list.remove(15);
// console.log(list)

// 8.测试其他方法
console.log(list.isEmpty());
console.log(list.size());
console.log(list.getFirst());
```

双向链表

```js
/* 
双向链表实现
*/

// 创建节点构造函数
function Node(element) {
  this.element = element;
  this.next = null;
  this.prev = null; // 新添加的
}

// 创建双向链表的构造函数
function DoublyLinkedList() {
  this.length = 0;
  this.head = null;
  this.tail = null; // 新添加的
}

// 在尾部追加数据
DoublyLinkedList.prototype.append = function(element) {
  // 1.根据元素创建节点
  var newNode = new Node(element);

  // 2.判断列表是否为空列表
  if (this.head == null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  // 3.length+1
  this.length++;
};

// 在任意位置插入数据
DoublyLinkedList.prototype.insert = function(position, element) {
  // 1.判断越界的问题
  if (position < 0 || position > this.length) return false;

  // 2.创建新的节点
  var newNode = new Node(element);

  // 3.判断插入的位置
  if (position === 0) {
    // 在第一个位置插入数据
    // 判断链表是否为空
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  } else if (position === this.length) {
    // 插入到最后的情况
    // 思考: 这种情况是否需要判断链表为空的情况呢? 答案是不需要, 为什么?
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  } else {
    // 在中间位置插入数据
    // 定义属性
    var index = 0;
    var current = this.head;
    var previous = null;

    // 查找正确的位置
    while (index++ < position) {
      previous = current;
      current = current.next;
    }

    // 交换节点的指向顺序
    newNode.next = current;
    newNode.prev = previous;
    current.prev = newNode;
    previous.next = newNode;
  }

  // 4.length+1
  this.length++;

  return true;
};

// 根据位置删除对应的元素
DoublyLinkedList.prototype.removeAt = function(position) {
  // 1.判断越界的问题
  if (position < 0 || position >= this.length) return null;

  // 2.判断移除的位置
  var current = this.head;
  if (position === 0) {
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  } else if (position === this.length - 1) {
    current = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {
    var index = 0;
    var previous = null;

    while (index++ < position) {
      previous = current;
      current = current.next;
    }

    previous.next = current.next;
    current.next.prev = previous;
  }

  // 3.length-1
  this.length--;

  return current.element;
};

// 根据元素获取在链表中的位置
DoublyLinkedList.prototype.indexOf = function(element) {
  // 1.定义变量保存信息
  var current = this.head;
  var index = 0;

  // 2.查找正确的信息
  while (current) {
    if (current.element === element) {
      return index;
    }
    index++;
    current = current.next;
  }

  // 3.来到这个位置, 说明没有找到, 则返回-1
  return -1;
};

// 根据元素删除
DoublyLinkedList.prototype.remove = function(element) {
  var index = this.indexOf(element);
  return this.removeAt(index);
};

// 判断是否为空
DoublyLinkedList.prototype.isEmpty = function() {
  return this.length === 0;
};

// 获取链表长度
DoublyLinkedList.prototype.size = function() {
  return this.length;
};

// 获取第一个元素
DoublyLinkedList.prototype.getHead = function() {
  return this.head.element;
};

// 获取最后一个元素
DoublyLinkedList.prototype.getTail = function() {
  return this.tail.element;
};

// 遍历方法的实现
// 正向遍历的方法
DoublyLinkedList.prototype.forwardString = function() {
  var current = this.head;
  var forwardStr = "";

  while (current) {
    forwardStr += "," + current.element;
    current = current.next;
  }

  return forwardStr.slice(1);
};

// 反向遍历的方法
DoublyLinkedList.prototype.reverseString = function() {
  var current = this.tail;
  var reverseStr = "";

  while (current) {
    reverseStr += "," + current.element;
    current = current.prev;
  }

  return reverseStr.slice(1);
};

// 实现toString方法
DoublyLinkedList.prototype.toString = function() {
  return this.forwardString();
};
// 1.创建双向链表对象
var list = new DoublyLinkedList();

// 2.追加元素
list.append("abc");
list.append("cba");
list.append("nba");
list.append("mba");

// 3.获取所有的遍历结果
console.log(list.forwardString()); // abc,cba,nba,mba
console.log(list.reverseString()); //
console.log(list); // abc,cba,nba,mba

// 4.insert方法测试
list.insert(0, "100");
list.insert(2, "200");
list.insert(6, "300");
console.log(list); // 100,abc,200,cba,nba,mba,300

// 5.removeAt方法测试
console.log(list.removeAt(0)); // 100
console.log(list.removeAt(1)); // 200
console.log(list.removeAt(4)); // 300
console.log(list); // abc,cba,nba,mba

// 6.indexOf方法测试
console.log(list.indexOf("abc")); // 0
console.log(list.indexOf("cba")); // 1
console.log(list.indexOf("nba")); // 2
console.log(list.indexOf("mba")); // 3

// 7.remove方法测试
console.log(list.remove("abc")); // abc
console.log(list); // cba,nba,mba

// 8.测试最后四个方法
console.log(list.getHead());
console.log(list.getTail());
console.log(list.isEmpty());
console.log(list.size());
```

## 树

<img :src="$withBase('/计算机/数据结构与算法/树.png')">

树是一种分层数据的抽象模型

树的遍历:中序遍历、先序遍历、后序遍历

二叉树与二叉搜索树

- 二叉树中的节点最多只能有两个子节点：一个是左侧子节点，另一个是右侧子节点
- 二叉搜索树（BST）是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大（或者等于）的值

二叉搜索树的实现

```js
/*
二叉搜索树(BinarySearchTree)的实现
*/

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BinarySearchTree() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getmin = getmin;
  this.getmax = getmax;
  this.getSmallest = getSmallest;
  this.getBigest = getBigest;
  this.find = find;
  this.remove = remove;
  this.removeNode = removeNode;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}

function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + " ");
  }
}

function getmin() {
  var current = this.root;
  while (current.left != null) {
    current = current.left;
  }
  return current.data;
}

function getSmallest(node) {
  if (node.left == null) {
    return node;
  } else {
    return getSmallest(node.left);
  }
}

function getmax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

function getBigest(node) {
  if (node.right == null) {
    return node;
  } else {
    return getBigest(node.right);
  }
}

function find(data) {
  var current = this.root;
  while (current.data != data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if (current == null) {
      return null;
    }
  }
  return current;
}

function remove(data) {
  this.root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node == null) {
    return null;
  }
  if (data == node.data) {
    // node has no children
    if (node.left == null && node.right == null) {
      return null;
    }
    // node has no left child
    if (node.left == null) {
      return node.right;
    }
    // node has no right child
    if (node.right == null) {
      return node.left;
    }
    // node has two children
    //
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}
var tree = new BinarySearchTree();
//     23
//    /  \
//   16   45
//  / \  / \
// 3 22 37  99

// 插入
tree.insert(23);
tree.insert(45);
tree.insert(16);
tree.insert(37);
tree.insert(3);
tree.insert(99);
tree.insert(22);

// 遍历
tree.inOrder(tree.root); // 3 16 22 23 37 45 99
tree.preOrder(tree.root); // 23 16 3 22 45 37 99
tree.postOrder(tree.root); // 3 22 16 37 99 45 23

// 根结点
console.log(tree.root.show()); //23
// 获取最小最大值
console.log(tree.getmin()); //3
console.log(tree.getSmallest(tree.root).show()); //3
console.log(tree.getmax()); //99
console.log(tree.getBigest(tree.root).show()); //99
// 查找结点
console.log(tree.find(16).left.show()); //3

// 删除结点
tree.remove(16);
tree.inOrder(tree.root); // 3 22 23 37 45 99
```

## 集合

集合是由一组无序且唯一（即不能重复）的项组成的

ES6 实现了集合类型: Set

实现 Set 类型

```js
/*
封装数组实现Set类型
*/

function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union; //并集
  this.contains = contains; //辅助方法
  this.intersect = intersect;
  this.subset = subset; //交集
  this.difference = difference; //补集
  this.show = show;
}

function add(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
    return true;
  } else {
    return false;
  }
}

function remove(data) {
  var pos = this.dataStore.indexOf(data);
  if (pos > -1) {
    this.dataStore.splice(pos, 1);
    return true;
  } else {
    return false;
  }
}

function size() {
  return this.dataStore.length;
}

function show() {
  return "[" + this.dataStore + "]";
}

function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
  } else {
    return false;
  }
}

function union(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    tempSet.add(this.dataStore[i]);
  }
  for (var i = 0; i < set.dataStore.length; ++i) {
    if (!tempSet.contains(set.dataStore[i])) {
      tempSet.dataStore.push(set.dataStore[i]);
    }
  }
  return tempSet;
}

function intersect(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

function subset(set) {
  if (this.size() > set.size()) {
    return false;
  } else {
    for (var member in this.dataStore) {
      if (!set.contains(this.dataStore[member])) {
        return false;
      }
    }
  }
  return true;
}

function difference(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (!set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}
// const {Set} = Set()

var set1 = new Set();
var set2 = new Set();
var union = new Set();
var intersect = new Set();
var diff = new Set();

set1.add("data1");
set1.add("data2");
set1.add("data3");
set2.add("data2");
set2.add("data3");
set2.add("data4");
set2.remove("data3");
console.log(set1.size(), set1.show()); //3 "[data1,data2,data3]"
console.log(set2.size(), set2.show()); //2 "[data2,data4]"
console.log(set1.contains("data1")); //true

union = set1.union(set2);
intersect = set1.intersect(set2);
diff = set1.difference(set2);
// 并集
console.log(union.show()); //[data1,data2,data3,data4]
// 交集
console.log(intersect.show()); //[data2]
// 差集
console.log(diff.show()); //[data1,data3]

// 判断子集
var set3 = new Set();
set3.add("data1");
subset1 = set2.subset(set1);
console.log(subset1); //false
subset2 = set3.subset(set1);
console.log(subset2); //true
```

## 字典

在字典中，存储的是[键，值]对，其中键名是用来查询特定元素的。字和集合很相似，集合以[值，值]的形式存储元素，字典则是以[键，值]的形式来存储元素。字典也称作映射。

## 哈希表/散列表

HashTable 类，也叫 HashMap 类，它是 Dictionary 类的一种散列表实现方式。

散列算法的作用是尽可能快地在数据结构中找到一个值。在之前的章节中你已经知道如果要在数据结构中获得一个值（使用 get 方法），需要遍历整数据结构来找到它。如果使用散列函数，就知道值的具体位置，因此能够快检索到该值。散列函数的作用是给定一个键值，然后返回值在表中的地址。

## 图

图是网络结构的抽象模型。图是一组由边连接的节点（或顶点）。
