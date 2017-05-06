
# React 面试题


单选题:

## 1.以下那个插件可以在浏览器端进行源码调试？

- A:webpack-dev-server
- B:eslint-plugin-react
- C:cheap-source-map
- D:karma-chrome-launcher

C

## 2.以下对react的生命周期方法理解错误的是

- A:componentWillReceiveProps将接收props参数

- B:shouldComponentUpdate方法return false props 就不更新渲染组件了

- C:执行componentWillUpdate方法后就不在进行render渲染方法了

- D:props state改变后都会运行render方法

C


多选题:

## 3.进行代码测试时我们会下载那些插件：

- A:eslint-loader
- B:karma-chrome-launcher
- C:karma-mocha
- D:eslint

B C


## 4.react的Children属性中有哪几种方法：

- A:forEach
- B:map
- C:filter
- D:only

ABD

## 5.一下说法正确的是：

- A:props 组件间的数据传递
- B:props 组件内部传递数据
- C:status 管理组件自己的内部数据
- D:status 组件间的数据传递

BC

## 6.react引入样式时以下写法正确的是

- A:< div classname="container" > 我是className样式 </div>
- B:< div stylename = { styles } > 我是style样式 < div >
- C:< div className="container" > 我是className样式 </div>
- D:< div style = { styles } > 我是style样式 < div >

CD

## 7.react设置props数据类型以下写法正确的是：


- A:PropTypes.string
- B:PropTypes.String
- C:PropTypes.number.isRequired
- D:PropTypes.number.isRequire

AC

## 8.react中以下那些属性可以操纵DOM节点

- A:findDOMNode
- D:unmountComponentAtNode
- C:Children
- D:propTypes

AB

## 9.以下对ref说法正确的是：
- A:ref属性,可以用来绑定到 render() 输出的任何组件上去
- B:ref属性是个数组
- C:使用this.ref获取某个支撑实例
- D:使用this.refs获取某个支撑实例

AC


## 10.react移除节点的两个方法是哪个?

- A: if(this.state.destroy) return null

- B: unmountComponentAtNode(document.getElementById('app'))

- C: if(this.state.destroy) return false 

- D: findDOMNode(document.getElementById('app')) 

AB

##1.compose的结果是什么?

<pre>
    const f = x => x+1
    const g = x => x+2
    const h = x => x+3
    
    var compose =(f,g) => (x => f(g))
      
    var add = x => x+1;
    var multiple = x => x*5
    
    compose(multiple,add)(2)
</pre>


A:8   B:15  C:3   D:4

B




## 2.b的值是什么?

<pre>
  const fn = x => x+1
  
  const highOrderFn = x => y =>{
      return x(y)
  }
  
  调用
  var a=higtOrderFn(fn);
  var b=a(2)()
</pre>

 A:2   B:4   C:3   D:5

C

## 3.函数柯里化的有点,以下错误的是:

A 参数复用:利用柯里化,我们可以固定住其中的部分参数,在调用的时候,这个参数就相当于已经被记住了,不需要再次传递,也就是我们这里说的参数重复用

B 函数柯里化给我们带来的是:解决问题的一种逻辑思维方式

C 性能影响:性能开销非常大,即使不用柯里化也会进行性能的开销,要根据场景进行讨论

D 复杂度的影响:复杂逻辑的函数使用函数柯里化不能帮助我们更好的定义方法,尽量少使用

C D




## 4.所谓的一等公民,是指函数和其他数据类型拥有平等的地位,以下说法正确的是

 - 函数可以赋值给变量
 
 - 函数可以被作为实参传递
 
 - 函数可以被另一个函数返回
 
 - 函数可以返回另一个函数

ABCD
 
 

## 5.函数编程原则,以下说法错误的是

- A 少重复

- B 高内聚低耦合

- C 最小意外原则

- D 团体责任

AD



## 6.使用以下路由写法错误的是:

- A <Router path="/" components={ App } />

- B <Route path="/contact" components={ Contact } />

- C <Route path="/about" components={ About } />

- D <Route path="/about" component={ About } />

A D



## 7.使用activeClassName和activeStyle以下错误的是

- A &lt;Link to={{this.props.url}} activeClassName="active"&gt;首页&lt;/Link&gt;

- B &lt;Link to={this.props.url} activeClassName="active">联系我们&lt;/Link&gt;

- C &lt;Link to={this.props.url} activeStyle={fontSize:"16px",color:"red"}&gt;关于我们&lt;/Link&gt;

- D &lt;Link to={this.props.url} activeStyle={{fontSize:"16px",color:"red"}}&gt;退出&lt;/Link&gt;

AC



##8.以下说法正确的是:

- A:获取的时候通过this.props.param获取参数

- B:Link 组件的缺点:会匹配任何以 / 开始的子路由

- C:<Redirect from="about" to="about/react/router"/>,from匹配哪个路由,to是重定向到哪个路由中去

- D:使用IndexRoute组件的时候,我们会在 React中引入 IndexRoute组件

BC



##9.关于hashHistory,bowerHistory,createMemoryHistory以下说法错误的是:

- A:hashHistory支持服务器渲染

- B:bowerHistory通过URL变化来改变路由,调用的是浏览器的history

- C:bowerHistory一般用于开发环境

- D:Memory history并不会从地址栏中操作或是读取,他能帮助我们完成服务器的渲染,或者用于测试以及其他渲染环境(比如React Native)

AC


##10.路由切换以下说法错误的是:

- A:link:我们使用IndexLink,Link进行页面跳转

- B:我们使用browserHistory组件的时候,会在react中引入该组件

- C:我们可以使用this.context.router.push(path)进行手动跳转页面

- D:我们使用this.context.router.setRouteLeaveHook进行路由跳转前进行确认,是否保存数据,专场动画等

B


##1.以下对mvc模式理解正确的是：
A: M是model负责保存应用数据,和后端交互同步应用数据
B: V是model的可视化表示,表示当前状态的视图
C: V是model负责保存应用数据,和后端交互同步应用数据
D: C是controller负责连接view和model

ABD


##2.以下对于flux说法正确的是：
A: flux是一个框架，在react应用中有许多这样的框架
B: 一个flux应用由三大部分组成:dispatch,store,view
C: dispatch负责分发事件
D:store负责保存应用数据,并响应事件后更新数据

BCD

##3.对于redux以下说法正确的是：

A: 目前应用最广泛的flux思想实现的应用状态管理,开源社区最火的前端应用架构
B: 多个数据源,整个应用数据只保存在多个store中
C: store中的状态是只读取的,唯一改变state的方法就是出发action
D: 使用纯函数来执行应用状态的修改,即定义reducer来修改状态,每个reducer都是纯函数

ABD

##4.下列哪些属于Redux API里的方法

A:applyMiddleware
B:bindActionCreators
C:dispatch
D:getState
E:createStore

ABE

##5.下列哪些属于createStore API里的方法？

A:dispatch
B:getState
C:replaceReducer
D:compose
E:bindActionCreators

ABC

##6.以下说法正确的是：

A:createStore的第一个参数reducer必须是一个纯函数
B:var store = redux.createStore(reducer);通过 store.getState() 可以获取当前store的状态(state)
C：在redux里,唯一能够修改state的方法,就是通过 store.dispatch(action)
D:store.dispatch(action);action必须有一个type字段来标识这个行为的类型

ABCD

##7.关于react-redux的connect方法以下说法正确的是

A:React-Redux 提供connect方法，用于从UI组件生成容器组件。
B:connect的意思，就是将这两种组件连起来。
C:connect方法只接受两个参数，他们是mapStateToProps和mapDispatchToProps
D:connect方法有三个参数，他们是mapStateToProps和mapDispatchToProps，mergeProps

ABC

##8.关于mapStateToProps以下说法正确的是：
A：mapStateToProps是一个函数。
B: mapStateToProps它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
C:mapStateToProps执行后应该返回一个对象，里面的每一个键值对就是一个映射
D:mapStateToProps是一个对象。

ABC

##9.关于mapDispatchToProps以下说法正确的是：
A:mapDispatchToProps是connect函数的第一个参数
B:mapDispatchToProps用来建立 UI 组件的参数到store.dispatch方法的映射。
C:它定义了哪些用户的操作应该当作 Action，传给 Store。
D:它可以是一个函数，也可以是一个对象。

ABCD

##10.关于react-redux的<Provider> 组件以下说法正确的是：
A:connect方法生成容器组件以后，需要让容器组件拿到state对象，才能生成 UI 组件的参数。
B:React-Redux 提供Provider组件，可以让容器组件拿到state
C:<Provider> 组件的原理是React组件的context属性
D:<Provider> 组件的原理是React组件的contextType属性

ABC

## 问答题

    state和props的用法和区别?
    stateless component的定义和有点是什么？
    写jsx语法,是怎么引入样式名称和style的
    react render方法中 return一个组件的时候需要注意什么?
    react 怎么引入一个变量
    如何实现组件接口规范约束？
    怎么设置组件默认参数
    ref是什么?怎么获取ref对应的实例
    react怎么获取DOM节点
    react移除节点的两个方法是哪个?
    介绍一下React Router
    使用react router的时候使用那几个属性,这几个属性的是做什么的?
    使用Link组件的方法,以及它的缺点
    切换路由的几种方式
    如何手动切换路由,写个例子
    怎么使组件具有context属性
    什么是函数式编程?
    什么是纯函数?怎么写一个纯函数
    什么是函数柯里化?好处是什么
    说一说高阶函数与柯里化函数的区别
    redux是什么?有哪些API
    写一个 有加减乘除功能的计算器



























































