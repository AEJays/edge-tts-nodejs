let childProcess = require('child_process')
const platfrom = process.platform
let exec
if(platfrom == "win32"){
    exec = childProcess.execSync('cmd /c install.bat')
}
else{
    exec = childProcess.execSync('sh ./install.sh')
}
console.log(exec.toString())