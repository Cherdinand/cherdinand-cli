#! /usr/bin/env node

const program = require("commander");


function range(val) {
  return val.split('..').map(Number);
}

function list(val) {
  return val.split(',');
}

function collect(val, memo) {
  memo.push(val);
  return memo;
}

function increaseVerbosity(v, total) {
  return total + 1;
}

/*
* program.option('short, long', description, callback, defaultValue)
*
* 第一个参数中， short option和long option, 二者的分割符是","。可以在程序里通过program.apkPath 的方式取到该option的值,以由-分隔的变量会转成骆驼形式,即apk-path -> apkPath
* 第二个为option描述, 会在help信息里展示出来
* 第三个参数为回调函数，当在命令行有传入相应的short option或long option时调用此回调。
* 第四个参数为默认值，当在命令行有传入相应的short option或long option时，此参数作为long option的默认值
* */

program
  .version('0.0.1')
  .usage('[options] <file ...>')
  .option('-i, --integer <n>', 'An integer argument', parseInt, 10)
  .option('-f, --float <n>', 'A float argument', parseFloat, 1.2)
  .option('-r, --range <a>..<b>', 'A range', range)
  .option('-l, --list <items>', 'A list', list)
  .option('-o, --optional [value]', 'An optional value')
  .option('-c, --collect [value]', 'A repeatable value', collect, [])
  .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
  .action(function(option){
    console.log('option____________________', option);
  })
  .parse(process.argv);

// console.log("_________",JSON.stringify(program,null,2))


console.log(' int: %j', program.integer);
console.log(' float: %j', program.float);
console.log(' optional: %j', program.optional);
program.range = program.range || [];
console.log(' range: %j..%j', program.range[0], program.range[1]);
console.log(' list: %j', program.list);
console.log(' collect: %j', program.collect);
console.log(' verbosity: %j', program.verbose);
console.log(' args: %j', program.args);


console.log("___________________________")

