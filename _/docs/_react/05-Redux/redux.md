

# 介绍及入门

中文站：http://cn.redux.js.org

## 安装稳定版：

npm install --save redux

## 附加：

npm install --save react-redux
npm install --save-dev redux-devtools


## 要点

应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。
惟一改变 state 的办法是触发 action，一个描述发生什么的对象。
为了描述 action 如何改变 state 树，你需要编写 reducers。

## 动机

这里的复杂性很大程度上来自于：我们总是将两个难以理清的概念混淆在一起：变化和异步。

## 核心概念

## 三大原则

- 单一数据源:整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

- State 是只读的:惟一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

- 使用纯函数来执行修改:为了描述 action 如何改变 state tree ，你需要编写 reducers。

## 先前技术

- Flux : Redux 前身

- Elm ：函数式编程语言

- Immutable ： 可实现持久数据结构的 JavaScript 库。它性能很好，并且命名符合 JavaScript API 的语言习惯 。

- Baobab ： 实现了数据不可变特性的 API，用以更新纯 JavaScript 对象

- Rx ： 管理复杂异步应用非常优秀的方案

## 生态系统

### 不同框架绑定

react-redux — React

ng-redux — Angular

ng2-redux — Angular 2

backbone-redux — Backbone

redux-falcor — Falcor

deku-redux — Deku

polymer-redux - Polymer

ember-redux - Ember.js

### 中间件

redux-thunk — 用最简单的方式搭建异步 action 构造器

redux-promise — 遵从 FSA 标准的 promise 中间件

redux-axios-middleware — 使用 axios HTTP 客户端获取数据的 Redux 中间件

redux-observable — Redux 的 RxJS 中间件

redux-rx — 给 Redux 用的 RxJS 工具，包括观察变量的中间件

redux-logger — 记录所有 Redux action 和下一次 state 的日志

redux-immutable-state-invariant — 开发中的状态变更提醒

redux-unhandled-action — 开发过程中，若 Action 未使 State 发生变化则发出警告

redux-analytics — Redux middleware 分析

redux-gen — Redux middleware 生成器

redux-saga — Redux 应用的另一种副作用 model

redux-action-tree — Redux 的可组合性 Cerebral-style 信号

apollo-client — 针对 GraphQL 服务器及基于 Redux 的 UI 框架的缓存客户端

### 路由

redux-simple-router — 保持 React Router 和 Redux 同步

redux-router — 由 React Router 绑定到 Redux 的库

### 组件

redux-form — 在 Redux 中时时持有 React 表格的 state

react-redux-form — 在 React 中使用 Redux 生成表格

### 增强器（Enhancer）

redux-batched-subscribe — 针对 store subscribers 的自定义批处理与防跳请求

redux-history-transitions — 基于独断的 action 的 history 库转换

redux-optimist — 使 action 可稍后提交或撤销

redux-optimistic-ui — A reducer enhancer to enable type-agnostic optimistic updates 允许对未知类型进行更新的 reducer 增强器

redux-undo — 使 reducer 便捷的重做/撤销，以及 action 记录功能

redux-ignore — 通过数组或过滤功能忽略 redux action

redux-recycle — 在确定的 action 上重置 redux 的 state

redux-batched-actions — 单用户通知去 dispatch 多个 action

redux-search — 自动 index 站点资源并实现即时搜索

redux-electron-store — Store 增强器， 可同步不同 Electron 进程上的多个 Redux store

redux-loop — Sequence effects purely and naturally by returning them from your reducers

redux-side-effects — Utilize Generators for declarative yielding of side effects from your pure reducers

### 工具集

reselect — 受 NuclearJS 启发，有效派生数据的选择器

normalizr — 为了让 reducers 更好的消化数据，将API返回的嵌套数据范式化

redux-actions — 在初始化 reducer 和 action 构造器时减少样板代码 (boilerplate)

redux-act — 生成 reducer 和 action 创建函数的库

redux-transducers — Redux 的编译器工具

redux-immutablejs — 将Redux 和 Immutable 整合到一起的工具

redux-tcomb — 在 Redux 中使用具有不可变特性、并经过类型检查的 state 和 action

redux-mock-store - 模拟 redux 来测试应用

redux-actions-assertions — Redux actions 测试断言

### 开发者工具

redux-devtools — 一个使用时间旅行 UI 、热加载和 reducer 错误处理器的 action 日志工具，最早演示于 React Europe 会议

Redux DevTools Extension — 打包了 Redux DevTools 及附加功能的 Chrome 插件

### 开发者工具监听器

Log Monitor — Redux DevTools 默认监听器，提供树状视图

Dock Monitor — A resizable and movable dock for Redux DevTools monitors

Slider Monitor — Redux DevTools 自定义监听器，可回放被记录的 Redux action

Inspector — Redux DevTools 自定义监听器，可筛选、区分 action，深入 state 并监测变化

Diff Monitor — 区分不同 action 的 store 变动的 Redux Devtools 监听器

Filterable Log Monitor — 树状可筛选视图的 Redux DevTools 监听器

Chart Monitor — Redux DevTools 图表监听器

Filter Actions — 可筛选 action 、可组合使用的 Redux DevTools 监听器






# 基础

## Action




## ReDucer



## Store


## 数据流



## 搭配react































