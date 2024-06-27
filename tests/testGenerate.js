const { toVoice,voices } = require("../src/lib/generate");
const path = require("path")

// 查看语音包列表
voices()
// 查看某个语言对应的语音包 可选项 af am ar az bg bn bs ca cs cy da de el en es et fa fi fil fr 
// ga gl gu he hi hr hu id is it ja jv ka kk km kn ko lo lt lv mk ml mn mr ms mt my nb ne 
// nl pl ps pt ro ru si sk sl so sq sr su sv sw ta te th tr uk ur uz vi zh
voices('zh')

// 导出不同格式
toVoice("你好世界", path.resolve('./wav/helloworld.mp3'))
toVoice("helloworld", path.resolve('./wav/helloworld.wav'))
// 使用语音包
toVoice("你好，请问有什么能帮你的吗", path.resolve('./wav/voice.wav'), {
    voice: "zh-CN-liaoning-XiaobeiNeural"
})
// 加快语速
toVoice("你好，请问有什么能帮你的吗", path.resolve('./wav/rate.wav'), {
    voice: "zh-CN-liaoning-XiaobeiNeural",
    rate: 30 // 30% 速率
})
// 小声说话
toVoice("你好，请问有什么能帮你的吗", path.resolve('./wav/volume.wav'), {
    voice: "zh-CN-liaoning-XiaobeiNeural",
    volume: 10 // 10% 声音
})
// 更改频率
toVoice("你好，请问有什么能帮你的吗", path.resolve('./wav/pitch.wav'), {
    voice: "zh-CN-liaoning-XiaobeiNeural",
    pitch: 10 // 10频率
})