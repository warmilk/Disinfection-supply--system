# 医院消毒供应管理系统        
大四软件工程医院his系统开发相关作业

## Browser support

Modern browsers and IE 10+.

## Usage

用任意命令行工具cd进入项目当前目录（推荐bash）

键入 npm i 命令安装项目所需依赖包（由于npm所在服务器并非中国大陆，为了防止安装依赖时丢包，建议配置cnpm代替npm，股沟一下淘宝cnpm镜像进行配置即可）

if 依赖包未安装报错或失败：
手动删除项目下的node_modules目录后再次cnpm i安装即可

if 所有依赖包安装成功：
键入npm run dev,你将会在浏览器见到 http://localhost:8080/#/login 被自动打开了,输入（录用户名：1111或vuex，密码：123456）进入网站即可验货
