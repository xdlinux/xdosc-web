---
layout: post
title: hello (again)
date: 2017-09-26
author: ckj
categories: blog
---
## misc

* **strong**
* _italic_
* ~~delele~~
* `backquote`

## links

1. [mirrors](https://mirrors.xdlinux.info)
2. [wiki](https://wiki.xdlinux.info)
3. [forum](https://bbs.xdlinux.info)
4. [git](https://git.xdlinux.info)

## code highlight

### Haskell

{% highlight haskell %}
sort [] = []
sort (x:xs) = sort lower ++ [x] ++ sort higher
    where
        lower = filter (< x) xs
        higher = filter (>= x) xs
{% endhighlight %}

### Julia

{% highlight julia %}
function mandel(z)
    c = z
    maxiter = 80
    for n = 1:maxiter
        if abs(z) > 2
            return n-1
        end
        z = z^2 + c
    end
    return maxiter
end

function randmatstat(t)
    n = 5
    v = zeros(t)
    w = zeros(t)
    for i = 1:t
        a = randn(n,n)
        b = randn(n,n)
        c = randn(n,n)
        d = randn(n,n)
        P = [a b c d]
        Q = [a b; c d]
        v[i] = trace((P.'*P)^4)
        w[i] = trace((Q.'*Q)^4)
    end
    std(v)/mean(v), std(w)/mean(w)
end
{% endhighlight %}

## quote

> Those who do not understand Unix are condemned to reinvent it, poorly
