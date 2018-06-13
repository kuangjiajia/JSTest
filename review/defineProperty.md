# 理解Object.defineProperty#

>难受啊… 本来想看mvvm的源码，但是发现对这个属性的理解并不深入，所以决定重新复习一下此属性，好气啊啊啊啊啊...

首先 让我抄点儿代码吧...

## 语法

```javascript
Object.defineProperty(obj, prop, descriptor)
```

### 参数

- `obj`

  要在其上定义属性的对象。

- `prop`

  要定义或修改的属性的名称。

- `descriptor`

  将被定义或修改的属性描述符。

- - 

这些都是mdn上抄的...

当然，之前对这个属性有过了解到朋友应该知道，前面两个参数都是来打酱油的…，所以 我们把重点放在第三个参数。

>  descriptor(属性描述符)是一个对象,分别有一下属性

`configurable`

当且仅当该属性的 configurable 为 true 时，该属性`描述符`才能够被改变，同时该属性也能从对应的对象上被删除。**默认为 false**。   

> 当configurable 为 true 时

```javascript
var obj = {}

Object.defineProperty(obj,"name",{
  configurable: true,
  enumerable: true,
  value: "kjj",
  writable: true
})

console.log(obj)
delete obj.name
console.log(obj)

执行结果是
[object Object] {
  name: "kjj"
}
[object Object] { ... }
```

可见 `configurable`为true时,对象定义的属性是可以删除的。

> 当configurable 为 false 时

```javascript
var obj = {}

Object.defineProperty(obj,"name",{
  configurable: false,
  enumerable: true,
  value: "kjj",
  writable: true
})

console.log(obj)
delete obj.name
console.log(obj)

执行结果是
[object Object] {
  name: "kjj"
}
[object Object] {
  name: "kjj"
}
```

 可见`configurable`为false时,对象定义的属性是不可以删除的

`enumerable` 

当且仅当该属性的`enumerable`为`true`时，该属性才能够出现在对象的枚举属性中。**默认为 false**。

数据描述符同时具有以下可选键值： 

> 什么是枚举呢,啊啊啊啊…反正我记得好像是用for … in 来区分  

 ```javascript 
Object.defineProperty(obj,"name",{
  configurable: true,
  enumerable: true,
  value: "kjj",
  writable: true
})

Object.defineProperty(obj,"age",{
  configurable: true,
  enumerable: false,
  value: 20,
  writable: true
})

obj.hobby = "sleep"

for(var i in obj) {
  console.log(i)
}

执行结果为 
"name"
"hobby"
所以 大家应该理解了吧,2333333...
 ```

`value` 

该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。**默认为 undefined**。 

> 这个应该好理解，就是定义属性的指 

`writable` 

当且仅当该属性的`writable`为`true`时，`value`才能被[赋值运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)改变。**默认为 false**。 

> 这个属性就是决定该属性是否可以改变,话不多说，直接上例子

```javascript
var obj = {}
Object.defineProperty(obj,"name",{
  configurable: true,
  enumerable: true,
  value: "hahha",
  writable: true
})

Object.defineProperty(obj,"age",{
  configurable: true,
  enumerable: true,
  value: 20,
  writable: false
})

obj.name = "zzx"
obj.age = 30

console.log(obj)

答案是
[object Object] {
  age: 20,
  name: "zzx"
}
因为 name 属性的writable为true所以可以改变，而age属性的writable属性为false，所以 age 不能改变啊
```

> 在讲set和get之前 我们要明白一个东西,下面图抄自mdn

|            | configurable | enumerable | value | writable | get  | set  |
| ---------- | ------------ | ---------- | ----- | -------- | ---- | ---- |
| 数据描述符 | Yes          | Yes        | Yes   | Yes      | No   | No   |
| 存取描述符 | Yes          | Yes        | No    | No       | Yes  | Yes  |

**存取描述符同时具有以下可选键值**：

`get` 

```Javascript
var obj = {}
var name = "kuangjiajia"

Object.defineProperty(obj,'name',{
  configurable: true,
  enumerable: true,
  get: function() {
    console.log("I get the Value")
    return name
  },
  set: function(val) {
    console.log("I change it")
    name = val
  }
})

console.log(obj.name)
obj.name = "zhuzhanxuan"
console.log(obj.name)

执行答案
"I get the Value"
"kuangjiajia"
"I change it"
"I get the Value"
"zhuzhanxuan"
```



一个给属性提供 getter 的方法，如果没有 getter 则为 `undefined`。该方法返回值被用作属性值。**默认为 undefined**。

`set`

一个给属性提供 setter 的方法，如果没有 setter 则为 `undefined`。该方法将接受唯一参数，并将该参数的新值分配给该属性。**默认为 undefined**。

## 默认情况

> 情况一 obj直接赋值

```javascript
var obj = {}
obj.name = "kuangjiajia"
for(var i in obj) {
  console.log(i)
}

delete obj.name
console.log(obj)

执行结果 
"name"
[object Object] { ... }
所以可以看出 enumrable 的值为true,writable 的值为 true, configurable为true
```

> 情况2 使用了Object.defineProperty 但是什么都没有用

```javascript
var obj = {}

Object.defineProperty(obj,'name',{})
console.log(obj)
obj.name = "asd"
for(var i in obj) {
  console.log(i)
}

执行的结果
[object Object] { ... }
```

