2017已来，最全面试总结——这些Android面试题你一定需要


三金四银，又到了一年一度的跳槽季。也许有不少Android程序员开始摩拳擦掌蠢蠢欲动了。结合以往自己的经历，今天给大家总结下Android面试题，希望有帮助。

1：Activity生命周期？

这几乎是个老少咸宜，永远不会过时的问题，而且极有可能是第一个问题。这个问题当然没什么好讲的啦，死记硬背是没什么用的了，关键是理解。本人就曾遇到这个问题的变种问题，问onStart(),与onResume()有什么区别？如果面试官抛出这个问题，是不是有点措手不及。今天又听说有同学遭遇了更变态的问题：什么情况下Activity走了onCreat()，而不走onStart()，这简直就是脑筋急转弯嘛。

2：service生命周期？

这里要注意service有两种启动方式，startService()和bindService()



3：如何理解Activity，View，Window三者之间的关系？

这个问题真的很不好回答。所以这里先来个算是比较恰当的比喻来形容下它们的关系吧。Activity像一个工匠（控制单元），Window像窗户（承载模型），View像窗花（显示视图）LayoutInflater像剪刀，Xml配置像窗花图纸。

- 1：Activity构造的时候会初始化一个Window，准确的说是PhoneWindow。

- 2：这个PhoneWindow有一个“ViewRoot”，这个“ViewRoot”是一个View或者说ViewGroup，是最初始的根视图。

- 3：“ViewRoot”通过addView方法来一个个的添加View。比如TextView，Button等

- 4：这些View的事件监听，是由WindowManagerService来接受消息，并且回调Activity函数。比如onClickListener，onKeyDown等。

4：Activity的几种LaunchMode及使用场景

standard 模式
这是默认模式，每次激活Activity时都会创建Activity实例，并放入任务栈中。使用场景：大多数Activity。

singleTop 模式
如果在任务的栈顶正好存在该Activity的实例，就重用该实例( 会调用实例的 onNewIntent() )，否则就会创建新的实例并放入栈顶，即使栈中已经存在该Activity的实例，只要不在栈顶，都会创建新的实例。使用场景如新闻类或者阅读类App的内容页面。

singleTask 模式
如果在栈中已经有该Activity的实例，就重用该实例(会调用实例的 onNewIntent() )。重用时，会让该实例回到栈顶，因此在它上面的实例将会被移出栈。如果栈中不存在该实例，将会创建新的实例放入栈中。使用场景如浏览器的主界面。不管从多少个应用启动浏览器，只会启动主界面一次，其余情况都会走onNewIntent，并且会清空主界面上面的其他页面。

singleInstance 模式
在一个新栈中创建该Activity的实例，并让多个应用共享该栈中的该Activity实例。一旦该模式的Activity实例已经存在于某个栈中，任何应用再激活该Activity时都会重用该栈中的实例( 会调用实例的 onNewIntent() )。其效果相当于多个应用共享一个应用，不管谁激活该 Activity 都会进入同一个应用中。使用场景如闹铃提醒，将闹铃提醒与闹铃设置分离。singleInstance不要用于中间页面，如果用于中间页面，跳转会有问题，比如：A -> B (singleInstance) -> C，完全退出后，在此启动，首先打开的是B。

5：View的绘制流程

measure过程
layout过程
draw过程

http://blog.csdn.net/yanbober/article/details/46128379/

6：Touch事件的传递机制
publicbooleandispatchTouchEvent(MotionEventev);  //用来分派eventpublicbooleanonInterceptTouchEvent(MotionEventev);//用来拦截eventpublicbooleanonTouchEvent(MotionEventev);//用来处理event
其中Activity和View控件（TextView）拥有分派和处理事件方法，View容器（LinearLayout）具有分派，拦截，处理事件方法。这里也有个比喻：领导都会把任务向下分派，一旦下面的人把事情做不好，就不会再把后续的任务交给下面的人来做了，只能自己亲自做，如果自己也做不了，就只能告诉上级不能完成任务，上级又会重复他的过程。另外，领导都有权利拦截任务，对下级隐瞒该任务，而直接自己去做，如果做不成，也只能向上级报告不能完成任务。
http://gold.xitu.io/entry/56af0ba0c24aa800547b60ea
http://blog.csdn.net/morgan_xww/article/details/9372285

7：Android中的几种动画

曾被问到Android中有几种动画，这个问题也好难回答。Android3.0之前有2种，3.0后有3种。

FrameAnimation（逐帧动画）：将多张图片组合起来进行播放，类似于早期电影的工作原理，很多App的loading是采用这种方式。

TweenAnimation（补间动画）：是对某个View进行一系列的动画的操作，包括淡入淡出（Alpha），缩放（Scale），平移（Translate），旋转（Rotate）四种模式。

PropertyAnimation（属性动画）：属性动画不再仅仅是一种视觉效果了，而是一种不断地对值进行操作的机制，并将值赋到指定对象的指定属性上，可以是任意对象的任意属性。

http://blog.csdn.net/yanbober/article/details/46481171

8：Android中跨进程通讯有几种方式

- 1：访问其他应用程序的Activity
如调用系统通话应用
IntentcallIntent=newIntent(Intent.ACTION_CALL,Uri.parse("tel:12345678");startActivity(callIntent);

- 2：Content Provider
如访问系统相册

- 3：广播（Broadcast）
如显示系统时间

- 4：AIDL服务

9：AIDL理解

http://bbs.51cto.com/thread-1086040-1.html

10：Handler的原理

http://blog.csdn.net/lmj623565791/article/details/38377229

11：Binder机制原理

http://blog.csdn.net/boyupeng/article/details/47011383

12：热修复的原理

- 1：JavaSisst
- 2：AspectJ
- 3：Xposef
这里给出Xposef方案
http://mp.weixin.qq.com/s?__biz=MzA3Mjk1MjA4Nw==&mid=400452659&idx=1&sn=841b49b875ec3b307f261ed52a7d9c4e&scene=23&srcid=1119JWRt0adNwGxTHiyok460#rd

13：设计一套图片异步加载缓存方案
http://www.cnblogs.com/zyw-205520/p/4997863.html
http://blog.csdn.net/boyupeng/article/details/47127605

14：Android内存泄露及管理
http://gold.xitu.io/entry/56d64b9e816dfa005943a55c

15：Activity与Fragment通信
http://gold.xitu.io/entry/56a87b2b2e958a0051906227

16：Fragment的那些坑
http://www.jianshu.com/p/d9143a92ad94
http://www.jianshu.com/p/fd71d65f0ec6
http://www.jianshu.com/p/38f7994faa6b

16：Android UI适配
这里给出hongyang大神的方案
http://blog.csdn.net/lmj623565791/article/details/45460089

17：布局优化
http://www.jianshu.com/p/145fc61011cd

18：Http Https
http://www.jianshu.com/p/93fdebe5fef1

19：网络请求优化
http://www.jianshu.com/p/3141d4e46240

20：数据库优化
http://www.jianshu.com/p/3b4452fc1bbd

21：图片优化
http://www.jianshu.com/p/5bb8c01e2bc7

22：HybridJAVA 与JS交互
http://droidyue.com/blog/2014/09/20/interaction-between-java-and-javascript-in-android/

23：单例
http://www.jianshu.com/p/a956024629cb

24：Java GC原理
http://www.jianshu.com/p/d75a32ac5bed?

25：ANR
http://www.jianshu.com/p/124f3b75e164

26：Volley
http://www.jianshu.com/p/9e17727f31a1

27：JAVA注解反射原理
http://www.jianshu.com/p/3968ffabdf9d

28：算法
http://www.jianshu.com/p/ae97c3ceea8d

29：设计模式
http://gold.xitu.io/entry/56ebb4ad5bbb50004c440972

30：RxJava
http://gank.io/post/560e15be2dca930e00da1083?from=timeline&isappinstalled=0#toc_1
