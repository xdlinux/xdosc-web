---
layout: post
title: "XDLinux 域名更新小记"
date: 2017-10-02
author: ckj
categories: blog
---
> The Domain is dead, long live The Domain!

## 时间轴

* 2017.09.29 晚上 - CloudXNS 紧急通知实名
* 2017.09.29 晚上 - 更换 NS 到 dns.he.net
* 2017.09.30 上午 - xdlinux.info 无法解析，在邮件列表发公告
* 2017.09.30 下午 - 接到老师通知，工信部要求 xdlinux.info 备案
* 2017.09.30 下午 - 开始迁移服务至 linux.xidian.edu.cn，在邮件列表公告
* 2017.09.30 下午 - Git 和 主页 迁移完毕
* 2017.09.30 晚上 - Mirrors 和 Forum 迁移完毕，在论坛、QQ群公告
* 2017.10.01 下午 - 调整网页，改 Wiki.js 源码
* 2017.10.01 晚上 - Wiki 迁移完毕
* 2017.10.01 晚上 - NS 生效，通过VPS 301 跳转回 246
* 2017.10.01 晚上 - 西电导航发出镜像站地址变更公告

## 变化

| 旧域名   | 新目录    |
| ----     | ----      |
| @        | /         |
| mirrors. | /mirrors/ |
| git.     | /git/     |
| bbs.     | /forum/   |
| wiki.    | /wiki/    |
| status.  | /status/  |

## 感谢

* 服务器维护小组、web小组
* 改源码 & 提供 VPS 的 river大哥
* 西电导航李隐峰老师
* 所有支持西电开源社区的人
