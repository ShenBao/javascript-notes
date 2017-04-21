
# React 常见的面试题


## 当你调用 setState 的时候，发生了什么事？

当调用 setState 时，React会做的第一件事情是将传递给 setState 的对象合并到组件的当前状态。这将启动一个称为一致化处理（reconciliation）的过程。一致化处理（reconciliation）的最终目标是以最有效的方式，根据这个新的状态来更新UI。 为此，React将构建一个新的 React 元素树（您可以将其视为 UI 的对象表示）。

一旦有了这个树，为了弄清 UI 如何响应新的状态而改变，React 会将这个新树与上一个元素树相比较（diff）。

（译注：一致化处理（reconciliation）可理解为 React 内部将虚拟 DOM 同步更新到真实 DOM 的过程，包括新旧虚拟 DOM 的比较及计算最小 DOM 操作）

通过这样， React 将会知道发生的确切变化，并且了解发生什么变化以后，只需在绝对必要的情况下进行更新，即可最小化 UI 的占用空间。


## 在 React 当中 Element 和 Component 有何区别？

简单地说，一个 React element 描述了你想在屏幕上看到什么。换个说法就是，一个 React element 是一些 UI 的对象表示。

一个 React Component 是一个函数或一个类，它可以接受输入并返回一个 React element （通常是通过 JSX ，它被转化成一个 createElement 调用）。


## 什么时候在功能组件( Functional Component )上使用类组件( Class Component)？

如果您的组件具有状态( state )或生命周期方法，请使用 Class 组件。否则，使用功能组件。


## 什么是 React 的 refs ，为什么它们很重要？

refs 就像是一个逃生舱口，允许你直接访问DOM元素或组件实例。为了使用它们，您可以向组件添加一个 ref 属性，该属性的值是一个回调函数，它将接收底层的 DOM 元素或组件的已挂接实例，作为其第一个参数。
```
class UnControlledForm extends Component {
  handleSubmit = () => {
    console.log("Input Value: ", this.input.value)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          ref={(input) => this.input = input} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
```
以上注意到我们的输入字段有一个 ref 属性，其值是一个函数。该函数接收放在实例上实际的 DOM 元素 input，以便在 handleSubmit 函数内部访问它。经常被误解的是，您需要使用类组件才能使用ref ，但 ref 也可以通过利用 JavaScript 中的闭包与 功能组件( functional components )一起使用。
```
function CustomForm ({handleSubmit}) {
  let inputElement
  return (
    <form onSubmit={() => handleSubmit(inputElement.value)}>
      <input
        type='text'
        ref={(input) => inputElement = input} />
      <button type='submit'>Submit</button>
    </form>
  )
}
```

## React 中的 keys 是什么，为什么它们很重要？


## 受控组件( controlled component )与不受控制的组件( uncontrolled component )有什么区别？



## 在哪个生命周期事件中你会发出 AJAX 请求，为什么？

AJAX 请求应该在 componentDidMount 生命周期事件中。 有几个原因:

Fiber，是下一次实施React的和解算法，将有能力根据需要启动和停止渲染，以获得性能优势。其中一个取舍之一是 componentWillMount，而在其他的生命周期事件中出发 AJAX 请求，将是具有 “非确定性的”。 这意味着 React 可以在需要时感觉到不同的时间开始调用 componentWillMount。这显然是AJAX请求的不好方式。

您不能保证在组件挂载之前，AJAX请求已经 resolve。如果这样做，那意味着你会尝试在一个未挂载的组件上设置 SetState，这不仅不会起作用，反而会对你大喊大叫。 在 componentDidMount 中执行 AJAX 将保证至少有一个要更新的组件。


## shouldComponentUpdate 应该做什么，为什么它很重要？

上面我们讨论了 reconciliation ，什么是 React 在 setState 被调用时所做的。在生命周期方法 shouldComponentUpdate 中，允许我们选择退出某些组件（和他们的子组件）的 reconciliation 过程。

我们为什么要这样做？

如上所述，“一致化处理（ reconciliation ）的最终目标是以最有效的方式，根据新的状态更新用户界面”。如果我们知道我们的用户界面（UI）的某一部分不会改变，那么没有理由让 React 很麻烦地试图去弄清楚它是否应该渲染。通过从 shouldComponentUpdate 返回 false，React 将假定当前组件及其所有子组件将保持与当前组件相同。


## 您如何告诉React 构建（build）生产模式，该做什么？

通常，您将使用Webpack的 DefinePlugin 方法将 NODE_ENV 设置为 production。这将剥离像 propType 验证和额外的警告。除此之外，还有一个好主意，可以减少你的代码，因为React使用 Uglify 的 dead-code 来消除开发代码和注释，这将大大减少你的包的大小。



## 为什么要使用 React.Children.map（props.children，（）=>） 而不是 props.children.map（（）=>）

因为不能保证props.children将是一个数组。

以此代码为例，
```
<Parent>
  <h1>Welcome.</h1>
</Parent>
```
在父组件内部，如果我们尝试使用 props.children.map 映射孩子，则会抛出错误，因为 props.children 是一个对象，而不是一个数组。

如果有多个子元素，React 只会使props.children成为一个数组。就像下面这样：
```
<Parent>
  <h1>Welcome.</h1>
  <h2>props.children will now be an array</h2>
</Parent>
```
这就是为什么你喜欢 React.Children.map，因为它的实现考虑到 props.children 可能是一个数组或一个对象。


## 描述事件在React中的处理方式

为了解决跨浏览器兼容性问题，您的 React 中的事件处理程序将传递SyntheticEvent 的实例，它是 React 的浏览器本机事件的跨浏览器包装器。

这些 SyntheticEvent 与您习惯的原生事件具有相同的接口，除了它们在所有浏览器中都兼容。有趣的是，React 实际上并没有将事件附加到子节点本身。React 将使用单个事件监听器监听顶层的所有事件。这对于性能是有好处的，这也意味着在更新DOM时，React 不需要担心跟踪事件监听器。

## createElement 和 cloneElement 有什么区别？

createElement 是 JSX 被转译到的，是 React 用来创建 React Elements 的内容(一些 UI 的对象表示)。cloneElement用于克隆元素并传递新的 props。他们钉住了这两个🙂的命名。



















