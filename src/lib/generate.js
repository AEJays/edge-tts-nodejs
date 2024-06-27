/*
 * @Author: AEJays
 * @Date: 2024-06-26 18:03:13
 * @LastEditors: AEJays
 * @LastEditTime: 2024-06-27 22:10:48
 * @FilePath: /script/edge-tts/scripts/lib/generate.js
 * @Email: aedgejay@qq.com
 */

const { wlog, elog, slog } = require('../tools')
require('colors')

let exec = require('child_process').exec

const _TTS_COMMAND_ = "edge-tts"

/**
 * @name voices
 * @description 获取语音包列表
 */
function voices(lang) {
    exec(_TTS_COMMAND_+" -l", (error, stdout, stderr)=>{
        if(!error){
            stdout = stdout.replaceAll("Name", '语音包名称')
            stdout = stdout.replaceAll("\nGender", '\t声音类型')
            stdout = stdout.replaceAll("Female", '女声')
            stdout = stdout.replaceAll("Male", '男声')
            stdout = stdout.replaceAll("\n\n", '\n')
            if(!lang){
                console.log(stdout)
            }else{
                let line = stdout.split("\n")
                let filter = line.filter(item => item.indexOf(lang+'-')!=-1)
                let newStd = filter.join("\n")
                console.log(newStd)
            }
        }else{
            console.log(stderr)
        }
    })
}
/**
 * @name toVoice
 * @description 通过文本生成语音
 * @param {String} text 需要生成的文本
 * @param {String} filePath 为生成的文本路径
 * @param {Object} params 各种选择
 * @param {String} params.voice 语音包
 * @param {Number} params.rate 语音速率快或慢
 * @param {String} params.volume 声音大小
 * @param {String} params.pitch 声调、频率大小
 */
function toVoice(text, filePath = './output.mp4', params){
    let execCommand = `${_TTS_COMMAND_}`
    if(!text){
        elog("开发错误：没有 text 变量，请正确配置")
        return ;
    }
    if(!filePath){
        wlog("开发警告：没有 filePath 变量，已默认设置为 output.mp4")
        return ;
    }
    let {
        voice = 'zh-TW-HsiaoYuNeural',
        rate,
        volume,
        pitch
    } = params || {}
    execCommand += ` --text '${text}'`
    if(filePath) execCommand += ` --write-media '${filePath}'`
    if(voice) execCommand += ` -v ${voice}`
    if(rate) execCommand += ` --rate ${rate>0?'+'+rate:rate}%`
    if(volume) execCommand += ` --volume ${volume>0?'+'+volume:volume}%`
    if(pitch) execCommand += ` --pitch ${pitch>0?'+'+pitch:pitch}Hz`
    console.log(execCommand)
    exec(execCommand, (error, stdout, stderr)=>{
        if(!error){
            slog("生成成功，路径在 "+filePath)
            console.log(stdout)
        }else{
            console.log(stderr, error)
        }
    })
}
module.exports = {
    voices,
    toVoice
}