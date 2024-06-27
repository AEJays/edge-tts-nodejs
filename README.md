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
  <span>English</span> &#xa0; | &#xa0; 
  <a href="./README-cn.md">中文</a>
</p>
<p align="center">
  <a href="#about">About</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#example">Example</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="#dependence">Dependence</a> &#xa0; | &#xa0;
  <a href="https://github.com/AEJays" target="_blank">Author</a>
</p>

<br>

## About ##

This is [EdgeTTS](https://github.com/rany2/edge-tts) library with NodeJs

## Starting ##

```bash
# Install
$ npm i edge-tts-nodejs --save
```
## Example ##

```javascript
const { toVoice, voices } = require("edge-tts-nodejs")
const path = require("path")

// Export different formats
toVoice("helloworld", path.resolve('./wav/helloworld.mp3'))
toVoice("helloworld", path.resolve('./wav/helloworld.wav'))
// Use voice packages
toVoice("Hello", path.resolve('./wav/voice.wav'), {
  voice: "en-US-AndrewNeural"
})
// Output helloWorld tts to example.wav and here is the complete item
toVoice("helloWorld", path.resolve('./example.wav'), {
  voice: "en-US-AndrewNeural", // use voices() get voice package
  rate: 30, // +30% speak rate
  volume: 10, // +10% sound
  pitch: 10 // +10Hz pitch
})

// All Voice List
voices()
// about language Voice list
// Option: af am ar az bg bn bs ca cs cy da de el en es et fa fi fil fr ga gl gu he hi hr hu id is it ja jv ka kk km kn ko lo lt lv mk ml mn mr ms mt my nb ne nl pl ps pt ro ru si sk sl so sq sr su sv sw ta te th tr uk ur uz vi zh
voices('en')
```

## License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/AEJays" target="_blank">AEdge</a>

&#xa0;

<a href="#top">Back to top</a>

## Dependence ##
[edge-tts](https://github.com/rany2/edge-tts)

## End
If it helps you, star the project, thanks!