# ruff

说明书： https://ruff.io/sparrow/

文档： https://ruff.io/zh-cn/

社区： http://community.ruff.io/

可用包： https://rap.ruff.io/

demo：https://github.com/RuffApps/Apps

https://github.com/putaoshu/hello-ruff

开发辅助工具：https://github.com/runinspring/ruffhelper

## 起步走

- 第一步：下载安装 Ruff SDK 
```
rap --version
```
- 第二步：创建 “Hello Ruff” 项目
```
mkdir hello-ruff
rap init
```
- 第三步：应用开发
```
打开由 rap 自动生成的 src/index.js 文件：
'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('#led-r').turnOn();
});

$.end(function () {
    $('#led-r').turnOff();
});
```
- 第四步：连接设备

1. 将 Ruff 开发板上的 micro USB 接口与 USB 电源线连接，Ruff 开发板随即启动。
1. 开发板成功启动后，会搭建一个名为 Ruff-[SN]（[SN] 为设备序列号）的无线热点。使用开发机连接该热点，成功后进行后续操作（该热点没有因特网接入）。

- 第五步：应用部署
开发机接入开发板架设的无线热点后，我们就可以进行应用的部署了。在命令行中继续执行如下命令：`rap deploy -s`
- 第六步：添加外设
在应用目录执行如下命令
```
rap device add button
```
其中，button 是在程序中操作这个外设的 ID。
- 第七步：硬件布局
```
rap layout    重新对硬件进行布局（layout）和连接
rap layout --visual  rap 会下载设备的图片及针脚信息，以可视化的方式展示出来。
```
- 第八步：绑定事件
修改 src/index.js

- 第九步：再次部署应用
```
rap deploy -s
```
- 第十步：查看应用日志
```
rap log    打印日志
```
- 第十一步：配置开发板的网络访问能力
1. 在浏览器中访问 console.ruff.io（当域名不可用时，请访问 192.168.78.1）。
1. 填写常用无线网络的 SSID 和密码并确认（注意开发板仅支持 2.4G 无线网络）。

- 第十二步：编写应用
- 第十三步：部署应用
```
rap deploy -s    部署并启动
rap log   日志
```


## 命令

- 新建项目文件夹   `mkdir hello-ruff`
- 创建项目    `rap init`
- 添加设备    `rap device add <your-device-id>`
- 添加程序库   `rap install package-name --save`
- 开发依赖  `rap install your-rap-name --save-dev`
- 安装    `rap install`
- 硬件准备    `rap layout`
- 部署至硬件   `rap deploy`














