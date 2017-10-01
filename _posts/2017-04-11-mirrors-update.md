---
layout: post
title: "Kali, Deepin 同步方式更新"
date: 2017-04-11
author: ckj
categories: news
---

## changelog

1. `kali` 和 `deepin` 同步方式由 `debmirror` 改为 `rsync`
2. 完全弃用 debmirror
  * 优点：
    1. 可以按版本、架构筛选 deb 发行版软件源。
    2. 校验签名，Hash
  * 缺点：
    1. 软件源结构调整后导致无法完成同步（需要修改 debmirror）。
    2. 解析 Release 速度慢。
3. 目前的解决方案
  * rsync + filter （粗粒度过滤，易过滤架构，难过滤版本）

## kali

* 说明：Kali Linux 软件源
* 收录架构：`x86_64`, `i386`
* 上游：[TUNA](https://mirrors.tuna.tsinghua.edu.cn/kali/)

## deepin

* 说明：Deepin Linux 软件源
* 收录架构：`x86_64`, `i386`
* 上游：[TUNA](https://mirrors.tuna.tsinghua.edu.cn/deepin/)

## 欢迎测试、反馈

* [xdlinux issues](https://git.xdlinux.info/xdlinux/issues)

## FAQ
Q: 为什么要过滤，不全部同步？  
A: `x86_64` 之外的架构使用很少，硬盘和带宽有限。

Q: 同步失败一般是什么原因？  
A: some files vanished before they could be transferred.
