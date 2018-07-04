#! /usr/bin/env node

const program = require("commander");

/*
* program.option('short, long', description, callback, defaultValue)
*
* 第一个参数中， short option和long option, 二者的分割符是","。可以在程序里通过program.apkPath 的方式取到该option的值,以由-分隔的变量会转成骆驼形式,即apk-path -> apkPath
* 第二个为option描述, 会在help信息里展示出来
* 第三个参数为回调函数，当在命令行有传入相应的short option或long option时调用此回调。
* 第四个参数为默认值，当在命令行有传入相应的short option或long option时，此参数作为long option的默认值
* */

// https://aotu.io/notes/2016/08/09/command-line-development/index.html  命令行工具

dev = () => {
  console.log("开发模式");
};

prod = () => {
  console.log("生产模式");
};

program
  .version('0.0.1')
  .option('-d, --dev', 'development environment', dev)
  .option('-p, --prod', 'product environment', prod)

program.parse(process.argv);

if(process.argv.length <= 2){
  program.outputHelp()
}

console.log('process.argv', process.argv);
console.log('process.cwd()', process.cwd());