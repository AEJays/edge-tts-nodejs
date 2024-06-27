require('colors')
module.exports = {
    elog(...arg){
        console.error("[报错]".bgRed, ...arg)
    },
    slog(...arg){
        console.log("[成功]".bgGreen, ...arg)
    },
    wlog(...arg){
        console.log("[警告]".bgYellow, ...arg)
    }
}