# Fn

不需要考虑 JavaScript 模块区别，命令行直接调用 JavaScript 文件内部函数（主要用于函数式编程的项目）

```bash

# enter function env
fn

# test function
print('foo')

# exit fn env
exit
```

和 node -e / babel-node -e 类似

但是 do 想做的事情主要是帮助开发者做到环境无关。

在实际的开发中，有时候我们得到了入参，想快速验证函数返回值是否符合预期会用到类似的能力


- [ ] 向上寻找JavaScript文件最近的package.json作为根目录
- [ ] 处理不同模块语法
- [ ] 全局缓存代码快照(主要用于提高下次调用的速度，文件级缓存)

```bash
# 在JavaScript项目中运行，将会自动分析项目中所有可执行的函数
fn add

# 列出所有已添加的JavaScript项目
fn list

# 进入项目
fn <project-name>

call> foo('xxx')
```
