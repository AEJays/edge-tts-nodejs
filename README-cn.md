<!--
 * @Author: AEJays
 * @Date: 2024-06-28 00:34:13
 * @LastEditors: AEJays
 * @LastEditTime: 2024-06-28 00:55:39
 * @FilePath: /script/edge-tts/README-cn.md
 * @Email: aedgejay@qq.com
-->
<!-- <div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Edge Tts Node" />

  &#xa0;

</div> -->

<h1 align="center">Edge TTS NodeJs</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/AEJays/edge-tts-nodejs?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/AEJays/edge-tts-nodejs?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/AEJays/edge-tts-nodejs?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/AEJays/edge-tts-nodejs?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/AEJays/edge-tts-nodejs?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/AEJays/edge-tts-nodejs?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/AEJays/edge-tts-nodejs?color=56BEB8" />
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Edge Tts Node 🚀 Under construction...  🚧
</h4> 

<hr> -->
<p align="center">
  <a href="./README.md">English</a> &#xa0; | &#xa0; 
  <span>中文</span>
</p>
<p align="center">
  <a href="#关于项目">关于项目</a> &#xa0; | &#xa0; 
  <a href="#开始">开始</a> &#xa0; | &#xa0;
  <a href="#案例">案例</a> &#xa0; | &#xa0;
  <a href="#许可">许可</a> &#xa0; | &#xa0;
  <a href="#依赖">依赖</a> &#xa0; | &#xa0;
  <a href="https://github.com/AEJays" target="_blank">作者</a>
</p>

<br>

## 关于项目 ##

这是一个关于 [EdgeTTS](https://github.com/rany2/edge-tts) 的nodejs库，可以直接调用，适用于无成本AI配音

## 开始 ##

```bash
# 项目引入
$ npm i edge-tts-nodejs --save
```
## 案例 ##

```javascript
const { toVoice, voices } = require("edge-tts-nodejs")
const path = require("path")

// Export different formats
toVoice("你好世界", path.resolve('./wav/helloworld.mp3'))
toVoice("你好世界", path.resolve('./wav/helloworld.wav'))
// Use voice packages
toVoice("你好", path.resolve('./wav/voice.wav'), {
  voice: "zh-CN-liaoning-XiaobeiNeural"
})
// Output helloWorld tts to example.wav and here is the complete item
toVoice("你好", path.resolve('./example.wav'), {
  voice: "zh-CN-liaoning-XiaobeiNeural", // use voices() get voice package
  rate: 30, // +30% speak rate
  volume: 10, // +10% sound
  pitch: 10 // +10Hz pitch
})

// All Voice List
voices()
// about language Voice list
// Option: af am ar az bg bn bs ca cs cy da de el en es et fa fi fil fr ga gl gu he hi hr hu id is it ja jv ka kk km kn ko lo lt lv mk ml mn mr ms mt my nb ne nl pl ps pt ro ru si sk sl so sq sr su sv sw ta te th tr uk ur uz vi zh
voices('zh') // 获取所有中文语音包
```

## 许可 ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/AEJays" target="_blank">AEdge</a>

## 依赖 ##
[edge-tts](https://github.com/rany2/edge-tts)

&#xa0;

<a href="#top">回到顶部</a>
