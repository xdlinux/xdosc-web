---
layout: post
title: "软件源URL永久更新"
date: 2017-09-30
author: ckj
categories: news
---

由于非技术上的原因，

* `xdlinux.info`
* `mirrors.xdlinux.info`
* `ftp.xdlinux.info`

已经无法正常解析。

请使用西电开源软件镜像站的老师和同学及时切换到新的链接：

* [linux.xidian.edu.cn/mirrors/](https://linux.xidian.edu.cn/mirrors/)

支持 HTTP 和 HTTPS。

一行命令修改（以 `deb系` 为例）

{% highlight bash %}

# sed -i 's/mirrors\.xdlinux\.info/linux.xidian.edu.cn\/mirrors/g' /etc/apt/sources.list

{% endhighlight %}

> Live long and prosper!
