# 把 CSS 预编译器改成 SASS/LESS

目前@angular/cli 创建项目的时候没有自动使用 SASS/LESS 作为预编译器，我们需要自己手动修改一些配置文件.

## 改成SASS

SASS 是一款非常好用的 CSS 预编译器，Bootstrap 官方从4.0开始已经切换到了 SASS。


### 第一步

angular-cli.json 里面的 styles.css 后缀改成 .scss
```
"styles": [
    "styles.scss"
],
```

当你后面再使用 ng g c *** 自动创建组件的时候，默认就会生成 .scss 后缀的样式文件了。

### 第二步

angular-cli.json 里面的 styleExt 改成 scss

```
"defaults": {
    "styleExt": "scss",
    "component": {}
}
```
### 第三步

src 下面 style.css 改成 style.scss

### 第四部

app.component.css 改为 app.component.scss

### 第五步

app.component.ts 里面对应修改
```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
```

改完之后，重新 ng serve，打开浏览器查看效果。


## 改成LESS

less修改方法和sass修改方式类似

### 第一步

angular-cli.json 里面的 styles.css 后缀改成 .less
```
"styles": [
    "styles.less"
],
```

当你后面再使用 ng g c *** 自动创建组件的时候，默认就会生成 .less 后缀的样式文件了。

### 第二步

angular-cli.json 里面的 styleExt 改成 less

```
"defaults": {
    "styleExt": "less",
    "component": {}
}
```
### 第三步

src 下面 style.css 改成 style.less

### 第四部

app.component.css 改为 app.component.less

### 第五步

app.component.ts 里面对应修改
```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
```


## 附

- [SASS官方网站](http://sass-lang.com)
  [SASS中文网站](https://www.sass.hk/)
- [LESS官方网站](http://lesscss.org)

SASS/LESS只是一个预编译器，它支持所有 CSS 原生语法。利用 SASS/LESS 可以提升CSS 编码效率，增强 CSS 代码的可维护性。

