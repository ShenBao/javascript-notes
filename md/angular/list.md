# ClientAngular


```
Angular CLI : 1.5.5
Angular: 5.0.5
```

```
下载依赖
npm install

启动服务
npm run start

开发构建
npm run build:dev

生产构建
npm run build:prod
```

```
-  Angular 应用程序的八个主要构造块的基础知识
    - 模块
    - 组件
    - 模板
    - 元数据
    - 数据绑定
    - 指令
    - 服务
    - 依赖注入
- Angular 特性和服务
    - 动画：用 Angular 的动画库让组件动起来，而不需要对动画技术或 CSS 有深入的了解。
    - 变更检测：变更检测文档会告诉你 Angular 是如何决定组件的属性值变化，什么时候该更新到屏幕， 以及它是如何利用区域 (zone) 来拦截异步活动并执行变更检测策略。
    - 事件：事件文档会告诉你如何使用组件和服务触发支持发布和订阅的事件。
    - 表单：通过基于 HTML 的验证和脏检查机制支持复杂的数据输入场景。
    - HTTP：通过 HTTP 客户端，可以与服务器通讯，以获得数据、保存数据和触发服务端动作。
    - 生命周期钩子：通过实现生命周期钩子接口，可以切入组件生命中的几个关键点：从创建到销毁。
    - 管道：在模板中使用管道转换成用于显示的值，以增强用户体验。例如，currency管道表达式：
    - 路由器：在应用程序客户端的页面间导航，并且不离开浏览器。
    - 测试：使用 Angular 测试平台，在你的应用部件与 Angular 框架交互时进行单元测试。

```

```
- AngularCLI介绍及命令使用
    - ng new xxx
    - ng serve -open
    - ng build --dev 开发构建
    - ng build --prod  生产构建
    - ng g component my-new-component
    - ng g pipe my-new-pipe
    - ng g service my-new-service
    - ng g class my-new-class
    - g interface my-new-interface
    - ng g module my-module
```



```
- NgModule 是一个装饰器函数，它接收一个用来描述模块属性的元数据对象。
    - declarations - 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
    - exports - declarations 的子集，可用于其它模块的组件模板。
    - imports - 本模块声明的组件模板需要的类所在的其它模块。
    - providers - 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
    - bootstrap - 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。

- 组件
- 模板
- 元数据
        @Component({
        selector:    'app-list',
        templateUrl: './list.component.html',
        <!-- template:  `<h1>{{title}}</h1>`, -->
        providers:  [ ListService ]
        })
- 为数据创建一个类:new出该类的一个实例时，把该属性初始化为相应的参数值


- 数据绑定
    - {{id}} 插值表达式
    - [name] 属性绑定
    - (click) 事件绑定
    - 自定义事件（EventEmitter ）
    - 事件绑定
    - DOM属性
    - html属性


- 指令 (directive)：结构型指令和属性 (attribute) 型指令。
    - ngFor          <div *ngFor="let item of list;let i=index">{{item.name}}</div>
    - ngIf           *ngIf="isActive"
    - ngSwitch
    - ngForOf
    - ngStyle       [style.font-size]="isSpecial ? 'x-large' : 'smaller'"   
    - ngClass       [class.special]="isSpecial"  [ngClass]="{'text-success':true}"
    - [(ngModel)]="name"> ngModel指令就是属性型指令，又称之“盒子里的香蕉”

- ngFor
    $implicit: T: The value of the individual items in the iterable (ngForOf).
    ngForOf: NgIterable<T>: The value of the iterable expression. Useful when the expression is more complex then a property access, for example when using the async pipe (userStreams | async).
    index: number: The index of the current item in the iterable.
    first: boolean: True when the item is the first item in the iterable.
    last: boolean: True when the item is the last item in the iterable.
    even: boolean: True when the item has an even index in the iterable.
    odd: boolean: True when the item has an odd index in the iterable.

- 带trackBy的*ngFor 的优化
    trackByHeroes(index: number, hero: Hero): number { return hero.id; }
    <div *ngFor="let hero of heroes; trackBy: trackByHeroes">
        ({{hero.id}}) {{hero.name}}
    </div>

- NgSwitch指令   NgSwitch是主控指令  NgSwitchCase 和 NgSwitchDefault 指令都是结构型指令，因为它们会从DOM中添加或移除元素。
    <div [ngSwitch]="currentHero.emotion">
        <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="currentHero"></app-happy-hero>
        <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="currentHero"></app-sad-hero>
        <app-confused-hero *ngSwitchCase="'confused'" [hero]="currentHero"></app-confused-hero>
        <app-unknown-hero  *ngSwitchDefault           [hero]="currentHero"></app-unknown-hero>
    </div>

- 模板引用变量 ( #var )
    <input #phone placeholder="phone number">
    <button (click)="callPhone(phone.value)">Call</button>
    也可以用ref-前缀代替#
    <input ref-fax placeholder="fax number">
    <button (click)="callFax(fax.value)">Fax</button>

- 模板表达式
- 表达式上下文
- 模板的$event对象、模板输入变量 (let hero)和模板引用变量 (#heroForm)

- 绑定语法：括号中 ([]、()) 还是用前缀形式 (bind-、on-、bindon-)
    - 单向：从数据源到视图目标     插值表达式、Property、Attribute、类、样式
        {{expression}}
        [target]="expression"
        bind-target="expression"
    - 单向从视图目标到数据源   事件
        (target)="statement"
        on-target="statement"
    - 双向
        [(target)]="expression"
        bindon-target="expression"
    注：HTML attribute 与 DOM property 的对比

- 绑定目标
    - Property  
        元素的 property    <img [src]="heroImageUrl">
                           <img bind-src="heroImageUrl">
        组件的 property    <app-hero-detail [hero]="currentHero"></app-hero-detail>
        指令的 property    <div [ngClass]="{'special': isSpecial}"></div>
    - 事件
        元素的事件           <button (click)="onSave()">Save</button>
                            <button on-click="onSave()">On Save</button>
                            <input [value]="currentHero.name"
                                (input)="currentHero.name=$event.target.value" >
        组件的事件           <app-hero-detail (deleteRequest)="deleteHero()"></app-hero-detail>
        指令的事件           <div (myClick)="clicked=$event" clickable>click me</div>
    - 双向
        事件与property        <input [(ngModel)]="name">
    - Attribute
        attribute（例外情况） <button [attr.aria-label]="help">help</button>
    - CSS 类
        class property      <div [class.special]="isSpecial">Special</div>
                            <div class="bad curly special">Bad curly special</div>
    - 样式
        style property      <button [style.color]="isSpecial ? 'red' : 'green'">
                            <button [style.font-size.em]="isSpecial ? 3 : 1" >Big</button>
                            <button [style.font-size.%]="!isSpecial ? 150 : 50" >Small</button>
    - [innerHTML]           <span [innerHTML]="title"></span>

- 输入输出属性 ( @Input 和 @Output )
- 声明输入和输出属性
- 在指令元数据的inputs或outputs数组中标记出这些成员
    <app-list [data]="data" (req)="req"></app-list>
                input        output
- 给输入/输出属性起别名  
    @Output('myClick') clicks = new EventEmitter<string>()
    @Directive({
        outputs: ['clicks:myClick']  // propertyName:alias
    })

- 模板表达式操作符
    - 管道   
    - 安全导航操作符   {{nullHero && nullHero.name}}  简化 {{nullHero?.name}}
    - 非空断言操作符（!）  {{hero!.name}}


- 生命周期钩子
    ngOnChanges()           当Angular（重新）设置数据绑定输入属性时响应。 
                            该方法接受当前和上一属性值的SimpleChanges对象
                            当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在ngOnInit()之前。
    ngOnInit()              在Angular第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。
                            在第一轮ngOnChanges()完成之后调用，只调用一次。
    ngDoCheck()	            检测，并在发生Angular无法或不愿意自己检测的变化时作出反应。
                            在每个Angular变更检测周期中调用，ngOnChanges()和ngOnInit()之后。
    ngAfterContentInit()    当把内容投影进组件之后调用。
                            第一次ngDoCheck()之后调用，只调用一次。
                            只适用于组件。
    ngAfterContentChecked() 每次完成被投影组件内容的变更检测之后调用。
                            ngAfterContentInit()和每次ngDoCheck()之后调用
                            只适合组件。
    ngAfterViewInit()	    初始化完组件视图及其子视图之后调用。
                            第一次ngAfterContentChecked()之后调用，只调用一次。
                            只适合组件。
    ngAfterViewChecked()    每次做完组件视图和子视图的变更检测之后调用。
                            ngAfterViewInit()和每次ngAfterContentChecked()之后调用。
                            只适合组件。
    ngOnDestroy             当Angular每次销毁指令/组件之前调用并清扫。
                            在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。
                            在Angular销毁指令/组件之前调用。


- 组件交互
    - @Input装饰器
            @Input() hero: Hero;
            @Input('master') masterName: string;
    - setter截听输入属性值的变化
            private _name = '';
            @Input()
            set name(name: string) {
                this._name = (name && name.trim()) || '<no name set>';
            }
            get name(): string { return this._name; }
    - ngOnChanges()来截听输入属性值的变化
    - 父组件监听子组件的事件
    - 父组件与子组件通过本地变量互动
    - 父组件调用@ViewChild()
    - 父组件和子组件通过服务来通讯
    - 输入属性
    - 输出属性
    - 中间人模式（事件广播的形式）

- 组件样式
    - styles: ['h1 { font-weight: normal; }']
    - 影子(Shadow) DOM
        - :host 选择器
        - :host-context 选择器
    - 样式加载进组件
        - 设置styles或styleUrls元数据
        - 内联在模板的 HTML 中
        - 通过 CSS 文件导入（模板中的link标签）
        - CSS @imports 语法


- 动态组件
    - 指令
        import { Directive, ViewContainerRef } from '@angular/core';
        @Directive({
        selector: '[ad-host]',
        })
        export class AdDirective {
        constructor(public viewContainerRef: ViewContainerRef) { }
        }
    - 加载组件 template/templateUrl
    - 解析组件
    - 公共的AdComponent接口

- 属性型指令
- 结构型指令
    - *ngIf
    - *ngFor
    - [ngSwitch]
        - *ngSwitchCase
        - *ngSwitchDefault
    - <ng-template>
    - <ng-container>

- 管道
    - DatePipe
    - UpperCasePipe
    - LowerCasePipe
    - slice
    - number 数字管道
    - 百分比管道
    - CurrencyPipe
    - PercentPipe
    - 管道进行参数化
    - 链式管道
    - 纯管道
    - 非纯管道
    - json 
    - 货币管道
    - 自定义管道

```

## 动画（官方demo很不错）

## 表单
```
- 表单
    - 用户输入
        - 事件绑定 input click key
        - $event 对象取得用户输入
        - $event的类型
        - 按键事件过滤（通过key.enter
        - 失去焦点事件 (blur)
    - 模板式表单
        - FormsModule 
        - ngModel 进行双向数据绑定
        - NgForm指令
        - ngSubmit
        - #heroForm="ngForm"
    - 模板式表单验证
    - 响应式表单
        - ReactiveFormsModule
        - FormGroup
        - FormBuilder
        - Validators.required 验证器
        - FormControl
        - setValue和patchValue来操纵表单模型
        - ngOnChanges
        - this.heroForm.reset() 重置表单的标识
        - 用FormArray来表示FormGroup数组
        - 丢弃（撤销修改） revert() { this.ngOnChanges(); }
    - 响应式表单验证
    - 动态表单

状态              为真时的 CSS 类      为假时的 CSS 类
控件被访问过。     ng-touched	        ng-untouched
控件的值变化了。    ng-dirty	        ng-pristine
控件的值有效。     ng-valid	        ng-invalid

表示控件状态的 CSS 类
    .ng-valid
    .ng-invalid
    .ng-pending
    .ng-pristine
    .ng-dirty
    .ng-untouched
    .ng-touched

```

## AppModule
```
- app.module.ts
    @NgModule({ 
    providers?: Provider[]
    declarations?: Array<Type<any>|any[]>
    imports?: Array<Type<any>|ModuleWithProviders|any[]>
    exports?: Array<Type<any>|any[]>
    entryComponents?: Array<Type<any>|any[]>
    bootstrap?: Array<Type<any>|any[]>
    schemas?: Array<SchemaMetadata|any[]>
    id?: string
    })
- main.ts
    - JIT(Just-In-Time)
    - AOT(Ahead-Of-Time)

- 声明指令和组件、管道需要加入declarations数组中
- 服务提供商 需要加入providers属性
- 导入支持性模块  到imports
- 表单需要导入 FormsModule到imports
- 解决命名冲突 import {HighlightDirective as ContactHighlightDirective } from './contact/highlight.directive';
- 用路由器实现惰性 (lazy) 加载
- RouterModule.forRoot 方法
```



```
- 服务（Service）

- 依赖注入
    - 注入器
    - app.module.ts注册一个提供商（provider）
    - @Component元数据中的providers属性中把它注册在组件层
    - 依赖注入的好处
    - 提供器
    - 使用工厂模式和值声明提供器


- HTTPClient
    - http.get
    - 响应体的类型检查
    - 读取完整的响应体
    - 错误处理
    - 获取错误详情
    - .retry() 操作符
    - 请求非 JSON 数据
    - http.post
    - 请求中其他参数的配置
        - 头 headers
        - URL 参数
    - 拦截所有的请求和响应
    - 记日志
    - 缓存
    - 监听进度事件 reportProgress: true
    - web scoket
    - 使用rxjs的http
    - 不使用rxjs的http
    - 使用Promise的http
    - josnp
    - 测试 HTTP 请求

   

- 路由（Router）
    - <base href> 元素
    - 配置路由
    - RouterModule.forRoot的配置（AppRoutingModule）
    - 路由出口 router-outlet
    - 路由器链接 <a routerLink="/crisis-center" routerLinkActive="active">routerLink</a>
    - 路由选中
    - 路由器状态 routerState
    - 激活的路由 ActivatedRoute
        - url	        路由路径的Observable对象，是一个由路由路径中的各个部分组成的字符串数组。
        - data	        一个Observable，其中包含提供给路由的data对象。也包含由解析守卫（resolve guard）解析而来的值。
        - paramMap	    一个Observable，其中包含一个由当前路由的必要参数和可选参数组成的map对象。用这个map可以获取来自同名参数的单一值或多重值。
            - has(name)     如果参数名位于参数列表中，就返回 true 。
            - get(name)	    如果这个map中有参数名对应的参数值（字符串），就返回它，否则返回null。如果参数值实际上是一个数组，就返回它的第一个元素。
            - getAll(name)	如果这个map中有参数名对应的值，就返回一个字符串数组，否则返回空数组。当一个参数名可能对应多个值的时候，请使用getAll。
            - keys	        返回这个map中的所有参数名组成的字符串数组。
        - queryParamMap	一个Observable，其中包含一个对所有路由都有效的查询参数组成的map对象。 用这个map可以获取来自查询参数的单一值或多重值。
        - fragment	    An Observable of the URL fragment available to all routes.
        - outlet	    要把该路由渲染到的RouterOutlet的名字。对于无名路由，它的路由名是primary，而不是空串。
        - routeConfig	用于该路由的路由配置信息，其中包含原始路径。
        - parent	    当该路由是一个子路由时，表示该路由的父级ActivatedRoute。
        - firstChild	包含该路由的子路由列表中的第一个ActivatedRoute。
        - children	    包含当前路由下所有已激活的子路由。
        - params —— 一个Observable对象，其中包含当前路由的必要参数和可选参数。请改用paramMap。
        - queryParams —— 一个Observable对象，其中包含对所有路由都有效的查询参数。请改用queryParamMap。
    - 路由事件
        - NavigationStart	    本事件会在导航开始时触发。
        - RoutesRecognized	    本事件会在路由器解析完URL，并识别出了相应的路由时触发
        - RouteConfigLoadStart	本事件会在Router对一个路由配置进行惰性加载之前触发。
        - RouteConfigLoadEnd	本事件会在路由被惰性加载之后触发。
        - NavigationEnd	        本事件会在导航成功结束之后触发。
        - NavigationCancel	    本事件会在导航被取消之后触发。 这可能是因为在导航期间某个路由守卫返回了false。
        - NavigationError	    这个事件会在导航由于意料之外的错误而失败时触发。
    - 通配符路由：404路由
    - 默认路由
    - 重定向路由
    - 路由的嵌套、父子路由
    - 辅助路由(第二路由)
    - 动态路由 获取动态路由数据
    - 带参数的路由 :id
    - 路由get参数 获取数据
    - js的路由跳转、get路由
    - Snapshot（快照)
    - CanActivate守卫（检查路由的访问权限）。
    - CanActivateChild守卫（检查子路由的访问权限）。
    - CanDeactivate守卫（询问是否丢弃未保存的更改）。
    - CanLoad守卫（在加载特性模块之前进行检查）
    - Resolve守卫（预先获取路由数据）
    - 惰性加载特性模块。
    - { enableTracing: true }  
    - 惰性加载路由配置  loadChildren: 'app/admin/admin.module#AdminModule'
    - CanLoad会阻塞预加载
    - 自定义预加载策略
    - 路由返回



路由名词
    Router（路由器）                 为激活的URL显示应用组件。管理从一个组件到另一个组件的导航
    RouterModule（路由器模块）         一个独立的Angular模块，用于提供所需的服务提供商，以及用来在应用视图之间进行导航的指令。
    Routes（路由数组）                定义了一个路由数组，每一个都会把一个URL路径映射到一个组件。
    Route（路由）                   定义路由器该如何根据URL模式（pattern）来导航到组件。大多数路由都由路径和组件类构成。
    RouterOutlet（路由出口）          该指令（<router-outlet>）用来标记出路由器该在哪里显示视图。
    RouterLink（路由链接）            该指令用来把一个可点击的HTML元素绑定到路由。 点击带有绑定到字符串或链接参数数组的routerLink指令的元素就会触发一次导航。
    RouterLinkActive（活动路由链接）    当HTML元素上或元素内的routerLink变为激活或非激活状态时，该指令为这个HTML元素添加或移除CSS类。
    ActivatedRoute（激活的路由）       为每个路由组件提供提供的一个服务，它包含特定于路由的信息，比如路由参数、静态数据、解析数据、全局查询参数和全局碎片（fragment）。
    RouterState（路由器状态）          路由器的当前状态包含了一棵由程序中激活的路由构成的树。它包含一些用于遍历路由树的快捷方法。
    链接参数数组                      这个数组会被路由器解释成一个路由操作指南。我们可以把一个RouterLink绑定到该数组，或者把它作为参数传给Router.navigate方法。
    路由组件                        一个带有RouterOutlet的Angular组件，它根据路由器的导航来显示相应的视图。

```

```
- 多环境
    - environments.prod
    - environments.test
    - environments

- 其他
    - 基于class的数据类型验证

- 响应式编程
```

## 测试
```

```



```
ls -alh
du -h


```












