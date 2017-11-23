
# Bower：客户端库管理工具


## 概述

随着网页功能变得越来越复杂，同一张网页加载多个JavaScript函数库早已是家常便饭。开发者越来越需要一个工具，对浏览器端的各种库进行管理，比如搜索、自动安装\卸载、检查更新、确保依赖关系等等。Bower就是为了解决这个问题而诞生的针对浏览器端的库管理工具。

Bower基于node.js，所以安装之前，必须先确保已安装node.js。

```

$ sudo npm install bower --global

```

运行上面的命令以后，Bower就已经安装在你的系统中了。运行帮助命令，查看Bower是否安装成功。

```

$ bower help

```

下面的命令可以更新或卸载Bower。

```

# 更新
$ sudo npm update -g bower

# 卸载
$ sudo npm uninstall --global bower

```

## 常用操作

### 项目初始化

在项目根目录下，运行下面的命令，进行初始化。

```bash
$ bower init
```

通过回答几个问题，就会自动生成bower.json文件。这是项目的配置文件，下面是一个例子。

```javascript
{
  "name": "app-name",
  "version": "0.1.0",
  "main": ["path/to/app.html", "path/to/app.css", "path/to/app.js"],
  "ignore": [".jshintrc","**/*.txt"],
  "dependencies": {
    "sass-bootstrap": "~3.0.0",
    "modernizr": "~2.6.2",
    "jquery": "latests"
  },
  "devDependencies": {"qunit": ">1.11.0"}
}
```

有了bower.json文件以后，就可以用bower install命令，一下子安装所有库。

```

$ bower install

```

bower.json文件存放在库的根目录下，它的作用是（1）保存项目的库信息，供项目安装时使用，（2）向Bower.com提交你的库，该网站会读取bower.json，列入在线索引。

```bash
$ bower register <my-package-name> <git-endpoint>

# 实例：在 bower.com 登记jquery
$ bower register jquery git://github.com/jquery/jquery
```

注意，如果你的库与现有的库重名，就会提交失败。

### 库的安装

bower install命令用于安装某个库，需要指明库的名字。

```

$ bower install backbone

```

Bower会使用库的名字，去在线索引中搜索该库的网址。某些情况下，如果一个库很新（或者你不想使用默认网址），可能需要我们手动指定该库的网址。

```

$ bower install git://github.com/documentcloud/backbone.git
$ bower install http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js
$ bower install ./some/path/relative/to/this/directory/backbone.js

```

上面的命令说明，指定的网址可以是github地址、http网址、本地文件。

默认情况下，会安装该库的最新版本，但是也可以手动指定版本号。

```

$ bower install jquery-ui#1.10.1

```

上面的命令指定安装jquery-ui的1.10.1版。

如果某个库依赖另一个库，安装时默认将所依赖的库一起安装。比如，jquery-ui依赖jquery，安装时会连jquery一起安装。

安装后的库默认存放在项目的bower_components子目录，如果要指定其他位置，可在.bowerrc文件的directory属性设置。

### 库的搜索和查看

bower search命令用于使用关键字，从在线索引中搜索相关库。

```

bower search jquery

```

上面命令会得到下面这样的结果。

```

Search results:

    jquery git://github.com/components/jquery.git
    jquery-ui git://github.com/components/jqueryui
    jquery.cookie git://github.com/carhartl/jquery-cookie.git
    jquery-placeholder git://github.com/mathiasbynens/jquery-placeholder.git
    jquery-file-upload git://github.com/blueimp/jQuery-File-Upload.git
    jasmine-jquery git://github.com/velesin/jasmine-jquery
    jquery.ui git://github.com/jquery/jquery-ui.git
    ...

```

bower info命令用于查看某个库的详细信息。

```

bower info jquery-ui

```

查看结果会列出该库的依赖关系（dependencies），以及可以得到的版本（Available versions）。

### 库的更新和卸载

bower update用于更新一个库，将其更新为最新版本。

```

$ bower update jquery-ui

```

如果不给出库名，则更新所有库。

bower uninstall命令用于卸载指定的库。

```

$ bower uninstall jquery-ui

```

注意，默认情况下会连所依赖的库一起卸载。比如，jquery-ui依赖jquery，卸载时会连jquery一起卸载，除非还有别的库依赖jquery。

### 列出所有库

bower list或bower ls命令，用于列出项目所使用的所有库。

```

Bower list
Bower ls

```

## 配置文件.bowerrc

项目根目录下（也可以放在用户的主目录下）的.bowerrc文件是Bower的配置文件，它大概像下面这样。

{% highlight javascript %}

{
  "directory" : "components",
  "json"      : "bower.json",
  "endpoint"  : "https://Bower.herokuapp.com",
  "searchpath"  : "",
  "shorthand_resolver" : ""
}

```

其中的属性含义如下。

- directory：存放库文件的子目录名。
- json：描述各个库的json文件名。 
- endpoint：在线索引的网址，用来搜索各种库。
- searchpath：一个数组，储存备选的在线索引网址。如果某个库在endpoint中找不到，则继续搜索该属性指定的网址，通常用于放置某些不公开的库。
- shorthand_resolver：定义各个库名称简写形式。
