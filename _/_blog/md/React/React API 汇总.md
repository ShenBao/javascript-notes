
# React API 汇总

ES6
```
import React from 'react'
```
ES5
```
var React = require('react')
```

## React.js

```
ES6
    React.Component
    React.PureComponent

ES5
    createClass()


Creating React Elements
    createElement()
    createFactory()


Transforming Elements API
    cloneElement()
    isValidElement()
    React.Children
```

## 参考用法

### React.Component
```
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### React.PureComponent
```
用法同上，多了shouldComponentUpdate()
```

### createClass()
```
React.createClass(specification)
即：
var Greeting = React.createClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
```

### createElement()
```
React.createElement(
  type,
  [props],
  [...children]
)
```

### cloneElement()
```
React.cloneElement(
  element,
  [props],
  [...children]
)
废弃了 React.addons.cloneWithProps()
```

### createFactory()
```
React.createFactory(type)
```

### isValidElement()
```
React.isValidElement(object)
返回true或false
```

### React.Children
```
React.Children: object
```

#### React.Children.map
```
React.Children.map(children, function[(thisArg)])
```

#### React.Children.forEach
```
React.Children.forEach(children, function[(thisArg)])
```

#### React.Children.count
```
React.Children.count(children)
```

#### React.Children.only
```
React.Children.only(children)
```

#### React.Children.toArray
```
React.Children.toArray(children)
```


### React.PropTypes

```
MyComponent.propTypes = {
  // 可以声明 prop 为指定的 JS 基本类型。默认
  // 情况下，这些 prop 都是可传可不传的。
  optionalArray: React.PropTypes.array,
  optionalBool: React.PropTypes.bool,
  optionalFunc: React.PropTypes.func,
  optionalNumber: React.PropTypes.number,
  optionalObject: React.PropTypes.object,
  optionalString: React.PropTypes.string,
  optionalSymbol: React.PropTypes.symbol,

  // 所有可以被渲染的对象：数字，
  // 字符串，DOM 元素或包含这些类型的数组。
  optionalNode: React.PropTypes.node,

  // React 元素
  optionalElement: React.PropTypes.element,

  // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
  optionalMessage: React.PropTypes.instanceOf(Message),

  // 用 enum 来限制 prop 只接受指定的值。
  optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

  // 指定的多个对象类型中的一个
  optionalUnion: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.instanceOf(Message)
  ]),

  // 指定类型组成的数组
  optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

  // 指定类型的属性构成的对象
  optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

  // 指定Object对象内各属性的类型
  optionalObjectWithShape: React.PropTypes.shape({
    color: React.PropTypes.string,
    fontSize: React.PropTypes.number
  }),

  // 加上 `isRequired` 来要求该 prop 不可为空
  requiredFunc: React.PropTypes.func.isRequired,

  // 不可为空的任意类型
  requiredAny: React.PropTypes.any.isRequired,

  // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接
  // 使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // You can also supply a custom validator to `arrayOf` and `objectOf`.
  // It should return an Error object if the validation fails. The validator
  // will be called for each key in the array or object. The first two
  // arguments of the validator are the array or object itself, and the
  // current item's key.
  customArrayProp: React.PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};
```

#### 示例

```
class MyComponent extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}

MyComponent.propTypes = {
  children: React.PropTypes.element.isRequired
};
```

## React.addons
```
React.addons

注：引入 react-with-addons.js.
```


## React.Component

```
Mounting
    constructor()
    componentWillMount()
    render()
    componentDidMount()

Updating
    componentWillReceiveProps()
    shouldComponentUpdate()
    componentWillUpdate()
    render()
    componentDidUpdate()

Unmounting
    componentWillUnmount()

Other APIs
    setState()
    forceUpdate()

Class Properties
    defaultProps
    displayName
    propTypes

Instance Properties
    props
    state
```

## 参考用法

### constructor
```
constructor(props) {
  super(props);
  this.state = {
    color: props.initialColor
  };
}  
```

### componentWillReceiveProps()
```
componentWillReceiveProps(nextProps)
```

### shouldComponentUpdate()
```
shouldComponentUpdate(nextProps, nextState)
```

### componentWillUpdate()
```
componentWillUpdate(nextProps, nextState)

注：不能 this.setState()，若使用改用 componentWillReceiveProps()
    如果shouldComponentUpdate（）返回false，则不会调用componentWillUpdate（）
```

### componentDidUpdate()
```
componentDidUpdate(prevProps, prevState)

注：如果shouldComponentUpdate（）返回false，则不会调用componentDidUpdate（）
```

### componentWillUnmount()
```
componentWillUnmount()

注：componentWillUnmount（）在组件被卸载和销毁之前立即被调用。
    在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清理在componentDidMount中创建的任何DOM元素
```

### setState()
```
setState(nextState, callback)
```


## ReactDOM
```
render()
unmountComponentAtNode()
findDOMNode()
```

## 参考用法

### render()
```
ReactDOM.render(
  element,
  container,
  [callback]
)
```

### unmountComponentAtNode()
```
ReactDOM.unmountComponentAtNode(container)
```

### findDOMNode()
```
ReactDOM.findDOMNode(component)

注： 避免使用findDOMNode。
    当render返回null或false时，findDOMNode返回null
```


## ReactDOMServer
```
renderToString()
renderToStaticMarkup()
```

## 示例用法

### renderToString()
```
ReactDOMServer.renderToString(element)
```

###  renderToStaticMarkup()
```
ReactDOMServer.renderToStaticMarkup(element)
```


## DOM Elements

```
checked     =>   defaultChecked 

className

dangerouslySetInnerHTML     注：HTML中的innerHTML
        示例：
            function createMarkup() {
              return {__html: 'First &middot; Second'};
            }

            function MyComponent() {
              return <div dangerouslySetInnerHTML={createMarkup()} />;
            }

htmlFor   注：HTML中本来的for

onChange

selected   用于 <option>

style
        示例：
          const divStyle = {
            color: 'blue',
            backgroundImage: 'url(' + imgUrl + ')',
          };

          function HelloWorldComponent() {
            return <div style={divStyle}>Hello World!</div>;
          }

          const divStyle = {
            WebkitTransition: 'all', // note the capital 'W' here
            msTransition: 'all' // 'ms' is the only lowercase vendor prefix
          };

          function ComponentWithTransition() {
            return <div style={divStyle}>This should work cross-browser</div>;
          }


suppressContentEditableWarning 

value   =》     defaultValue    用于<input> and <textarea>


```

### HTML Attributes

data-* 
aria-* 

```
accept acceptCharset accessKey action allowFullScreen allowTransparency alt
async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
charSet checked cite classID className colSpan cols content contentEditable
contextMenu controls coords crossOrigin data dateTime default defer dir
disabled download draggable encType form formAction formEncType formMethod
formNoValidate formTarget frameBorder headers height hidden high href hrefLang
htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label
lang list loop low manifest marginHeight marginWidth max maxLength media
mediaGroup method min minLength multiple muted name noValidate nonce open
optimum pattern placeholder poster preload profile radioGroup readOnly rel
required reversed role rowSpan rows sandbox scope scoped scrolling seamless
selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step
style summary tabIndex target title type useMap value width wmode wrap
```

RDFa
```
about datatype inlist prefix property resource typeof vocab
```

非标准属性
```
autoCapitalize autoCorrect for Mobile Safari.
color for <link rel="mask-icon" /> in Safari.
itemProp itemScope itemType itemRef itemID for HTML5 microdata.
security for older versions of Internet Explorer.
unselectable for Internet Explorer.
results autoSave for WebKit/Blink input fields of type search.
```

### SVG Attributes 

```
accentHeight accumulate additive alignmentBaseline allowReorder alphabetic
amplitude arabicForm ascent attributeName attributeType autoReverse azimuth
baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight
clip clipPath clipPathUnits clipRule colorInterpolation
colorInterpolationFilters colorProfile colorRendering contentScriptType
contentStyleType cursor cx cy d decelerate descent diffuseConstant direction
display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground
end exponent externalResourcesRequired fill fillOpacity fillRule filter
filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize
fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy
g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef
gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic
imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength
kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor
limitingConeAngle local markerEnd markerHeight markerMid markerStart
markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode
numOctaves offset opacity operator order orient orientation origin overflow
overlinePosition overlineThickness paintOrder panose1 pathLength
patternContentUnits patternTransform patternUnits pointerEvents points
pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits
r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions
requiredFeatures restart result rotate rx ry scale seed shapeRendering slope
spacing specularConstant specularExponent speed spreadMethod startOffset
stdDeviation stemh stemv stitchTiles stopColor stopOpacity
strikethroughPosition strikethroughThickness string stroke strokeDasharray
strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity
strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor
textDecoration textLength textRendering to transform u1 u2 underlinePosition
underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic
vHanging vIdeographic vMathematical values vectorEffect version vertAdvY
vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing
writingMode x x1 x2 xChannelSelector xHeight xlinkActuate xlinkArcrole
xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlns xmlnsXlink xmlBase
xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan
```





















