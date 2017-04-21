
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












