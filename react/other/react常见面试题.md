
# React 常见的面试题


## 当你调用 setState 的时候，发生了什么事？

当调用 setState 时，React会做的第一件事情是将传递给 setState 的对象合并到组件的当前状态。这将启动一个称为一致化处理（reconciliation）的过程。一致化处理（reconciliation）的最终目标是以最有效的方式，根据这个新的状态来更新UI。 为此，React将构建一个新的 React 元素树（您可以将其视为 UI 的对象表示）。

一旦有了这个树，为了弄清 UI 如何响应新的状态而改变，React 会将这个新树与上一个元素树相比较（diff）。

（译注：一致化处理（reconciliation）可理解为 React 内部将虚拟 DOM 同步更新到真实 DOM 的过程，包括新旧虚拟 DOM 的比较及计算最小 DOM 操作）

通过这样， React 将会知道发生的确切变化，并且了解发生什么变化以后，只需在绝对必要的情况下进行更新，即可最小化 UI 的占用空间。























