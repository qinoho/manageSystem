# 搭建项目

### 一、配置 editorconfig 文件

```bash
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

- 使不同电脑之间在同一项目编写规则保持一致
- vscode 安装插件 editorconfig
- webstom 不需要

### 二、代码美化 prettier

```bash
npm install prettier -D
```

- ##### prettier 配置文件 格式化规则

  .prettierrc

```
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

- ##### prettier 配置文件 选择忽略的文件

```
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

- 插件使用 prettier-code-formatter

- 设置修改
  - format on save
  - default auto formatter 选择 prettier
  - 保存无反应- 多个格式化规则冲突 -格式化选择默认方式

### 二.一 、eslint 和 prettier 之间冲突解决

- **安装依赖**

```
npm install eslint-config-prettier -D
npm install eslint-plugin-prettier -D
```

- **配置 eslintrc 文件- 追加 **

```
'plugin:prettier/recommended'
```

- vue 最新的版本选择 prettier+eslint 会直接默认配置

### 三、husky 规避 git 提交代码时提交错误代码

```
npx husky-init && npm install
```

- 对项目进行初始化
  - husky 可以在 git 命令的阶段进行监听
  - pre-commit 阶段可以配置执行 npm run lint

### 四、.安装 Commitizen - 提交代码的时候对说明信息进行规范检测

1. 安装

```shell
npm install commitizen -D
```

2. 安装 cz-conventional-changelog，并且初始化 cz-conventional-changelog：

   对项目的初始化

```shell
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

有以下的选项

![1664887358015](../../../img/1664887358015.png)

![1664887436285](../../../img/1664887436285.png)

3. 使用 cz 命令的阶段，使用 hushy 对提交的信息进行拦截

- https://github.com/conventional-changelog/commitlint
- 按照 github 上操作来
- 结合 husky 进行 commit 时候 msg 的检测
