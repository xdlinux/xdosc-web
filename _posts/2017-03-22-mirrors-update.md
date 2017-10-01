---
layout: post
title: "Ubuntu, Debian 同步方式更新"
date: 2017-03-22
author: ckj
categories: news
---

## changelog

1. `Ubuntu` 和 `Debian` 源同步方式由 `debmirror` 改为 `rsync`

## Ubuntu

* 收录版本：所有 Ubuntu 当前支持的版本，包括开发版，详见 [Ubuntu Wiki](https://wiki.ubuntu.com/Releases)
* 收录架构：`x86_64`, `i386`
* 上游：[TUNA](https://mirrors.tuna.tsinghua.edu.cn/ubuntu/)

## Debian

* 收录版本：`oldstable`, `stable`, `testing`, `unstable (sid)`
* 收录架构：`x86_64`, `i386`
* 去除了 `kfreebsd` 和 `hurd` 的支持
* 上游：[TUNA](https://mirrors.tuna.tsinghua.edu.cn/debian/)

## 欢迎测试、反馈

* [XDLinux issues](https://git.xdlinux.info/xdlinux/issues)
