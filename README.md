## 觉得好用就给我个 star 呗

https://github.com/hsmustard/youxueyuan ##本脚本的功能：
@author Mustard

- 同步到码云
- 增加视频自动换 P
- 更新了谷歌插件
- 在页面添加了工具栏显示按钮
- 优学院的题目可以直接显示正确答案
- 填空题可以自动填充。
- 自动添加 5.00x 播放速度。（觉得不够可以继续往下看）

## 使用方法

#### 无需手动加载代码方式

1. 下载插件压缩包：[点击下载][1]
2. 手动加载插件（教程[点击这里查看加载教程][2]）
3. 进入课程页面自动加载了

#### 手动添加代码方式

具有 ** 开发者工具（按一下键盘 F12 键） ** 的浏览器
在 ** console ** 粘贴以下内容：

```javascript
var script = document.createElement("script");
script.src = "https://hsmus.gitee.io/youxueyuan/yxy.min.js";
document.getElementsByTagName("head")[0].appendChild(script);
```

然后回车即可

![开发者工具][3]

**然后在 console 输入**
** `showAnswer();` 是显示答案。**
** `fillBlanks();` 是自动填充*填空题*答案。 **
** `quickVideo(10);` 是手动设定视频播放速度，括号内填加速的倍数 **
** `autoNextVideo();` 自动换视频 P **

## 老版本 Chrome 插件

@author FuckSky.
![插件预览][4]
下载地址：
[Chrome 插件][5]

[1]: https://github.com/hsmustard/youxueyuan/releases/download/chrome_ext/new_chrome_ext.zip
[2]: https://blog.csdn.net/yshenhua/article/details/80901677
[3]: https://hsmus.top/usr/uploads/2019/04/476501903.png
[4]: https://hsmus.top/usr/uploads/2019/04/2080446546.png
[5]: https://hsmustard.github.io/youxueyuan/chrome/fuckyxy.crx
