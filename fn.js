#!/usr/bin/env node

const readline = require('readline');

// 定义可用命令
const commands = ['print'];

// 自动完成函数
const completer = (line) => {
  const hits = commands.filter((c) => c.startsWith(line));
  // 如果没有匹配项，显示所有可能的命令
  return [hits.length ? hits : commands, line];
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'call> ',
  completer: completer
});

const doPrint = (text) => {
  console.log(`your name is: ${text}`);
};

// 提示用户输入命令
rl.prompt();

// 处理用户输入的命令
rl.on('line', (line) => {
  const command = line.trim();
  const match = command.match(/^print\(['"](.+)['"]\)$/);

  if (match) {
    const text = match[1];
    doPrint(text);
  } else if (command === 'exit') {
    rl.close();
  } else {
    console.error('Invalid command format. Use: print(\'your text\') or print("your text")');
  }

  // 再次提示用户输入命令
  rl.prompt();
}).on('close', () => {
  console.log('Exiting fn CLI');
  process.exit(0);
});
