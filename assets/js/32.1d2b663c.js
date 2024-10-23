(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{589:function(e,v,s){"use strict";s.r(v);var a=s(10),_=Object(a.a)({},(function(){var e=this,v=e.$createElement,s=e._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"docker的基本介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker的基本介绍"}},[e._v("#")]),e._v(" docker的基本介绍")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/ELUr5M5Yp1Y7n_sw1e_F4Q",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文链接"),s("OutboundLink")],1)]),e._v(" "),s("hr"),e._v(" "),s("ol",[s("li",[e._v("讲个故事")]),e._v(" "),s("li",[e._v("虚拟机与容器")]),e._v(" "),s("li",[e._v("认识 "),s("code",[e._v("Docker")])]),e._v(" "),s("li",[e._v("核心概念")]),e._v(" "),s("li",[e._v("安装 Docker")]),e._v(" "),s("li",[e._v("快速开始")]),e._v(" "),s("li",[e._v("常规操作")]),e._v(" "),s("li",[e._v("最佳实践")])]),e._v(" "),s("h3",{attrs:{id:"讲个故事"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲个故事"}},[e._v("#")]),e._v(" 讲个故事")]),e._v(" "),s("p",[e._v("为了更好的理解 "),s("code",[e._v("Docker")]),e._v(" 是什么，我们先来讲个故事：")]),e._v(" "),s("p",[e._v("我需要盖一个房子，于是我搬石头、砍木头、画图纸、盖房子。一顿操作，终于把这个房子盖好了。")]),e._v(" "),s("p",[s("img",{attrs:{src:"/images/docker1.png",alt:"讲个故事."}})]),e._v(" "),s("p",[e._v("结果，住了一段时间，心血来潮想搬到海边去。这时候按以往的办法，我只能去海边，再次搬石头、砍木头、画图纸、盖房子。")]),e._v(" "),s("p",[s("img",{attrs:{src:"/images/docker2.png",alt:"讲个故事2"}})]),e._v(" "),s("p",[e._v("烦恼之际，跑来一个魔法师教会我一种魔法。这种魔法可以把我盖好的房子复制一份，做成「镜像」，放在我的背包里。")]),e._v(" "),s("p",[s("img",{attrs:{src:"/images/docker3.png",alt:"讲个故事3"}})]),e._v(" "),s("p",[e._v("等我到了海边，就用这个「镜像」，复制一套房子，拎包入住。")]),e._v(" "),s("p",[e._v("是不是很神奇？对应到我们的项目中来，房子就是项目本身，镜像就是项目的复制，背包就是镜像仓库。如果要动态扩容，从仓库中取出项目镜像，随便复制就可以了。Build once，Run anywhere!")]),e._v(" "),s("p",[e._v("不用再关注版本、兼容、部署等问题，彻底解决了「上线即崩，无休止构建」的尴尬。")]),e._v(" "),s("h3",{attrs:{id:"虚拟机与容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机与容器"}},[e._v("#")]),e._v(" 虚拟机与容器")]),e._v(" "),s("p",[e._v("开始之前，我们来做一些基础知识的储备：")]),e._v(" "),s("ol",[s("li",[s("strong",[e._v("虚拟机")]),e._v("：虚拟化硬件")])]),e._v(" "),s("p",[e._v("虚拟机 Virtual Machine 指通过软件模拟的"),s("strong",[e._v("具有完整硬件系统功能的")]),e._v("、"),s("strong",[e._v("运行在一个完全隔离环境中的完整计算机系统")]),e._v("。在实体计算机中能够完成的工作在虚拟机中都能够实现。")]),e._v(" "),s("p",[e._v("在计算机中创建虚拟机时，需要将实体机的部分硬盘和内存容量作为虚拟机的硬盘和内存容量。"),s("strong",[e._v("每个虚拟机都有独立的 CMOS、硬盘和操作系统，可以像使用实体机一样对虚拟机进行操作")]),e._v("。在容器技术之前，业界的网红是虚拟机。")]),e._v(" "),s("p",[e._v("虚拟机技术的代表，是 "),s("code",[e._v("VMWare")]),e._v(" 和 "),s("code",[e._v("OpenStack")]),e._v("。更多请"),s("a",{attrs:{href:"https://baike.baidu.com/item/%E8%99%9A%E6%8B%9F%E6%9C%BA/104440?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[e._v("参看"),s("OutboundLink")],1),e._v("：")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[s("strong",[e._v("容器")]),e._v("：将操作系统层虚拟化，是一个标准的软件单元")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("随处运行：容器可以将代码与配置文件和相关依赖库进行打包，从而确保在任何环境下的运行都是一致的。")])]),e._v(" "),s("li",[s("p",[e._v("高资源利用率：容器提供进程级的隔离，因此可以更加精细地设置 CPU 和内存的使用率，进而更好地利用服务器的计算资源。")])]),e._v(" "),s("li",[s("p",[e._v("快速扩展：每个容器都可作为单独的进程予以运行，并且可以共享底层操作系统的系统资源，这样一来可以加快容器的启动和停止效率。")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("区别与联系")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("虚拟机虽然可以隔离出很多「子电脑」，但占用空间更大，启动更慢。虚拟机软件可能还要花钱，例如"),s("code",[e._v("VMWare")]),e._v("；")])]),e._v(" "),s("li",[s("p",[e._v("容器技术不需要虚拟出整个操作系统，只需要虚拟一个小规模的环境，类似「沙箱」；")])]),e._v(" "),s("li",[s("p",[e._v("运行空间，虚拟机一般要几 GB 到 几十 GB 的空间，而容器只需要 MB 级甚至 KB 级；")])])])])]),e._v(" "),s("p",[e._v("与虚拟机相比，容器更轻量且速度更快，因为它利用了 "),s("code",[e._v("Linux")]),e._v(" 底层操作系统在隔离的环境中运行。虚拟机的 "),s("code",[e._v("Hypervisor")]),e._v(" 创建了一个非常牢固的边界，以防止应用程序突破它，而容器的边界不那么强大")]),e._v(" "),s("p",[e._v("物理机部署不能充分利用资源，造成资源浪费。虚拟机方式部署，虚拟机本身会占用大量资源，导致资源浪费，另外虚拟机性能也很差。而容器化部署比较灵活，且轻量级，性能较好。")]),e._v(" "),s("p",[e._v("虚拟机属于虚拟化技术，而 "),s("code",[e._v("Docker")]),e._v(" 这样的容器技术，属于轻量级的虚拟化。")]),e._v(" "),s("h3",{attrs:{id:"认识-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识-docker"}},[e._v("#")]),e._v(" 认识 "),s("code",[e._v("Docker")])]),e._v(" "),s("ol",[s("li",[e._v("概念")])]),e._v(" "),s("p",[s("code",[e._v("Docker")]),e._v(" 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。")]),e._v(" "),s("p",[s("code",[e._v("Docker")]),e._v(" 技术的"),s("strong",[e._v("三大核心概念")]),e._v("，分别是："),s("code",[e._v("镜像 Image")]),e._v("、"),s("code",[e._v("容器 Container")]),e._v("、"),s("code",[e._v("仓库 Repository")]),e._v("。")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("code",[e._v("Docker")]),e._v(" 轻量级的原因？")])]),e._v(" "),s("p",[e._v("相信你也会有这样的疑惑：为什么 "),s("code",[e._v("Docker")]),e._v(" 启动快？如何做到和宿主机共享内核？")]),e._v(" "),s("p",[e._v("当我们请求 "),s("code",[e._v("Docker")]),e._v(" 运行容器时，"),s("code",[e._v("Docker")]),e._v(" 会在计算机上设置一个资源隔离的环境。然后将打包的应用程序和关联的文件复制到 "),s("code",[e._v("Namespace")]),e._v(" 内的文件系统中，此时环境的配置就完成了。之后 "),s("code",[e._v("Docker")]),e._v(" 会执行我们预先指定的命令，运行应用程序。")]),e._v(" "),s("p",[e._v("镜像不包含任何动态数据，其内容在构建之后也不会被改变。")]),e._v(" "),s("h3",{attrs:{id:"核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[e._v("#")]),e._v(" 核心概念")]),e._v(" "),s("ol",[s("li",[s("p",[s("code",[e._v("Build")]),e._v(", "),s("code",[e._v("Ship and Run")]),e._v("（搭建、运输、运行）；")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Build once")]),e._v(", "),s("code",[e._v("Run anywhere")]),e._v("（一次搭建，处处运行）；")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Docker")]),e._v(" 本身并不是容器，它是创建容器的工具，是应用容器引擎；")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Docker")]),e._v(" 三大核心概念，分别是："),s("code",[e._v("镜像 Image")]),e._v("，"),s("code",[e._v("容器 Container")]),e._v("、"),s("code",[e._v("仓库 Repository")]),e._v("；")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Docker")]),e._v(" 技术使用 "),s("code",[e._v("Linux")]),e._v(" 内核和内核功能（例如 "),s("code",[e._v("Cgroups")]),e._v(" 和 "),s("code",[e._v("namespaces")]),e._v("）来分隔进程，以便各进程相互独立运行。")])]),e._v(" "),s("li",[s("p",[e._v("由于 "),s("code",[e._v("Namespace")]),e._v(" 和 "),s("code",[e._v("Cgroups")]),e._v(" 功能仅在 "),s("code",[e._v("Linux")]),e._v(" 上可用，因此容器无法在其他操作系统上运行。那么 "),s("code",[e._v("Docker")]),e._v(" 如何在 "),s("code",[e._v("macOS")]),e._v(" 或 "),s("code",[e._v("Windows")]),e._v(" 上运行？ "),s("code",[e._v("Docker")]),e._v(" 实际上使用了一个技巧，并在非 "),s("code",[e._v("Linux")]),e._v(" 操作系统上安装 "),s("code",[e._v("Linux")]),e._v(" 虚拟机，然后在虚拟机内运行容器。")])]),e._v(" "),s("li",[s("p",[e._v("镜像是一个可执行包，其包含运行应用程序所需的代码、运行时、库、环境变量和配置文件，容器是镜像的"),s("strong",[e._v("运行时实例")]),e._v("。")])])]),e._v(" "),s("h3",{attrs:{id:"安装-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker"}},[e._v("#")]),e._v(" 安装 Docker")]),e._v(" "),s("ol",[s("li",[s("strong",[e._v("命令行安装")])])]),e._v(" "),s("p",[e._v("Homebrew 的 Cask 已经支持 Docker for Mac，因此可以很方便的使用 Homebrew Cask 来进行安装，执行如下命令：")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("brew cask install docker\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("更多安装方式，请查看"),s("a",{attrs:{href:"https://www.docker.com/get-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),s("OutboundLink")],1)]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("查看版本")])]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker -v  \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[e._v("配置镜像加速")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("镜像源介绍")]),e._v(" "),s("ul",[s("li",[e._v("当运行容器时，使用的镜像如果在本地中不存在，就会自动从docker镜像仓库中下载，默认从"),s("code",[e._v("Docker Hub(https://hub.docker.com/ )")]),e._v("公共镜像源下载；")]),e._v(" "),s("li",[e._v("为加快拉取镜像速度，建议设置 "),s("code",[e._v("docker")]),e._v(" 国内镜像源；")])])]),e._v(" "),s("li",[s("strong",[e._v("修改docker下载的镜像源")]),e._v(" "),s("ul",[s("li",[e._v("修改文件（没有则新增）\n"),s("code",[e._v("touch /etc/docker/daemon.json")]),e._v(" "),s("code",[e._v("vim /etc/docker/daemon.json")])]),e._v(" "),s("li",[e._v("添加或修改如下内容")])]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('  {\n\n   　　　　"registry-mirrors": ["https://docker.mirrors.ustc.edu.cn" ]\n\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])])]),e._v(" "),s("p",[e._v("}\n```")]),e._v(" "),s("ul",[s("li",[s("strong",[s("code",[e._v("Docker")]),e._v("国内镜像源")]),e._v(" "),s("ul",[s("li",[e._v("Docker中国区官方镜像:"),s("code",[e._v("https://registry.docker-cn.com")])]),e._v(" "),s("li",[e._v("网易:"),s("code",[e._v("http://hub-mirror.c.163.com")])]),e._v(" "),s("li",[e._v("ustc:"),s("code",[e._v("https://docker.mirrors.ustc.edu.cn")])]),e._v(" "),s("li",[e._v("中国科技大学:"),s("code",[e._v("https://docker.mirrors.ustc.edu.cn")])]),e._v(" "),s("li",[e._v("阿里云:"),s("code",[e._v("https://cr.console.aliyun.com/")])])])])])])]),e._v(" "),s("p",[e._v("设置 Docker Engine 写入配置：")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n  "registry-mirrors": [\n    "http://hub-mirror.c.163.com/",\n    "https://registry.docker-cn.com"\n  ],\n  "insecure-registries":[],\n  "experimental": false,\n  "debug": true\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[e._v("安装桌面端\n桌面端操作非常简单，先去官网下载。通过 "),s("code",[e._v("Docker")]),e._v(" 桌面端，我们可以方便的操作：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("clone")]),e._v("：克隆一个项目")]),e._v(" "),s("li",[s("code",[e._v("build")]),e._v("：打包镜像")]),e._v(" "),s("li",[s("code",[e._v("run")]),e._v("：运行实例")]),e._v(" "),s("li",[s("code",[e._v("share")]),e._v("：共享镜像")])])])]),e._v(" "),s("h3",{attrs:{id:"快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[e._v("#")]),e._v(" 快速开始")]),e._v(" "),s("p",[e._v("安装完 "),s("code",[e._v("Docker")]),e._v(" 之后，我们先打个实际项目的镜像，边学边用。")]),e._v(" "),s("ol",[s("li",[e._v("首先需要大致了解一下我们将会用到的 11 个命令")])]),e._v(" "),s("p",[s("img",{attrs:{src:"!%5B%E8%AE%B2%E4%B8%AA%E6%95%85%E4%BA%8B3%5D(/images/docker4.png)",alt:"11 个命令"}})]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("新建项目")])]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm create vite@latest my-vue-app --template vue\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("运行项目没问题进行打包")]),e._v(" "),s("p",[e._v("这时候，项目目录下的 "),s("code",[e._v("dist")]),e._v(" 就是我们要部署的静态资源了，我们继续下一步。")]),e._v(" "),s("p",[e._v("需要注意：前端项目一般分两类，一类直接 "),s("code",[e._v("Nginx")]),e._v(" 静态部署，一类需要启动 "),s("code",[e._v("Node")]),e._v(" 服务。本节我们只考虑第一种。")]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v("新建 Dockerfile")])]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd docker-demo &amp;&amp; touch Dockerfile  || cd docker-demo &amp;&amp; md Dockerfile  \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("此时的项目目录如下：")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".  \n├── Dockerfile  \n├── README.md  \n├── babel.config.js  \n├── dist  \n├── node_modules  \n├── package.json  \n├── public  \n├── src  \n└── yarn.lock  \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("p",[e._v("可以看到我们已经在 docker-demo 目录下成功创建了 Dockerfile 文件。")]),e._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[e._v("准备 Nginx 镜像")])]),e._v(" "),s("p",[e._v("运行你的 Docker 桌面端，就会默认启动实例，我们在控制台拉取 Nginx 镜像：")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker pull nginx  \n// 如果没报错\ntouch default.conf  \n// 并且写入\nserver {\n    listen       80;\n    server_name  localhost;\n\n    #charset koi8-r;\n    access_log  /var/log/nginx/host.access.log  main;\n    error_log  /var/log/nginx/error.log  error;\n\n    location / {\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n    }\n\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br")])]),s("ol",{attrs:{start:"5"}},[s("li",[e._v("配置镜像")])]),e._v(" "),s("p",[e._v("打开 Dockerfile ，写入如下内容：")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("FROM nginx  \nCOPY dist/ /usr/share/nginx/html/  \nCOPY default.conf /etc/nginx/conf.d/default.conf  \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("* FROM nginx 指定该镜像是基于 nginx:latest 镜像而构建的；\n\n* COPY dist/ /usr/share/nginx/html/ 命令的意思是将项目根目录下 dist 文件夹中的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下；\n\n* COPY default.conf /etc/nginx/conf.d/default.conf 将 default.conf 复制到 etc/nginx/conf.d/default.conf，用本地的 default.conf 配置来替换 Nginx 镜像里的默认配置。\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[e._v("构建镜像")])]),e._v(" "),s("p",[e._v("Docker 通过 build 命令来构建镜像：")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker build -t jartto-docker-demo .  \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("按照惯例，我们解释一下上述代码：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("*-t 参数给镜像命名 jartto-docker-demo\n\n*. 是基于当前目录的 Dockerfile 来构建镜像\n")])])]),s("p",[e._v("执行成功后，将会输出：")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Sending build context to Docker daemon  115.4MB\nStep 1/3 : FROM nginx\n ---\x3e 2622e6cca7eb\nStep 2/3 : COPY dist/ /usr/share/nginx/html/\n ---\x3e Using cache\n ---\x3e 82b31f98dce6\nStep 3/3 : COPY default.conf /etc/nginx/conf.d/default.conf\n ---\x3e 7df6efaf9592\nSuccessfully built 7df6efaf9592\nSuccessfully tagged jartto-docker-demo:latest\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("p",[e._v("镜像只做成功，查看一下容器")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker image ls | grep jartto-docker-demo  \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ol",{attrs:{start:"7"}},[s("li",[e._v("运行容器")])]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker run -d -p 3000:80 --name docker-vue jartto-docker-demo\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这里解释一下参数：")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("-d")]),e._v(" 设置容器在后台运行")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("-p")]),e._v(" 表示端口映射，把本机的 3000 端口映射到 "),s("code",[e._v("container")]),e._v(" 的 80 端口（这样外网就能通过本机的 3000 端口访问了。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("--name")]),e._v(" 设置容器名 "),s("code",[e._v("docker-vue")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("jartto-docker-demo")]),e._v(" 是我们上面构建的镜像名字")])])]),e._v(" "),s("p",[e._v("补充一点：\n在控制台，我们可以通过 "),s("code",[e._v("docker ps")]),e._v(" 查看刚运行的 "),s("code",[e._v("Container")]),e._v(" 的 ID：")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker ps -a  \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("控制台会输出：")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('CONTAINER ID IMAGE              COMMAND                  CREATED       STATUS PORTS  NAMES\nab1375befb0b jartto-docker-demo "/docker-entrypoint.…"   8 minutes ago Up 7 minutes  0.0.0.0:3000->80/tcp  docker-vue\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("如果你使用桌面端，那么打开 Docker Dashboard 就可以看到容器列表了，如下图：\n![查看Container的ID]("),s("img",{attrs:{src:"/images/docker5.png",alt:"讲个故事3"}})]),e._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[e._v("访问项目")])]),e._v(" "),s("p",[e._v("因为我们映射了本机 3000 端口，所以执行：")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("curl -v -i localhost:3000  \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("或者打开浏览器，访问：localhost:3000")]),e._v(" "),s("ol",{attrs:{start:"9"}},[s("li",[e._v("发布镜像")])]),e._v(" "),s("p",[e._v("如果你想为社区贡献力量，那么需要将镜像发布，方便其他开发者使用。")]),e._v(" "),s("p",[e._v("发布镜像需要如下步骤：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("* 登陆 [dockerhub](https://hub.docker.com)，注册账号；\n\n* 命令行执行 docker login，之后输入我们的账号密码，进行登录；\n\n* 推送镜像之前，需要打一个 Tag，执行 docker tag <image> <username>/<repository>:<tag>\n")])])]),s("p",[e._v("全流程结束，以后我们要使用，再也不需要「搬石头、砍木头、画图纸、盖房子」了，拎包入住。这也是 "),s("code",[e._v("docker")]),e._v(" 独特魅力所在。")]),e._v(" "),s("h3",{attrs:{id:"常规操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常规操作"}},[e._v("#")]),e._v(" 常规操作")]),e._v(" "),s("ol",[s("li",[s("strong",[e._v("参数使用")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("FROM")])]),e._v(" "),s("ul",[s("li",[e._v("指定基础镜像，所有构建的镜像都必须有一个基础镜像，且 "),s("code",[e._v("FROM")]),e._v(" 命令必须是 "),s("code",[e._v("Dockerfile")]),e._v(" 的第一个命令")]),e._v(" "),s("li",[s("code",[e._v("FROM <image> [AS <name>]")]),e._v(" 指定从一个镜像构建起一个新的镜像名字")]),e._v(" "),s("li",[s("code",[e._v("FROM <image>[:<tag>] [AS <name>]")]),e._v(" 指定镜像的版本 "),s("code",[e._v("Tag")])]),e._v(" "),s("li",[e._v("示例："),s("code",[e._v("FROM mysql:5.0 AS database")])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("MAINTAINER")])]),e._v(" "),s("ul",[s("li",[e._v("镜像维护人的信息")]),e._v(" "),s("li",[s("code",[e._v("MAINTAINER <name>")])]),e._v(" "),s("li",[e._v("示例："),s("code",[e._v("MAINTAINER Jartto Jartto@qq.com")])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("RUN")])]),e._v(" "),s("ul",[s("li",[e._v("构建镜像时要执行的命令")]),e._v(" "),s("li",[s("code",[e._v("RUN <command>")])]),e._v(" "),s("li",[e._v("示例："),s("code",[e._v('RUN ["executable", "param1", "param2"]')])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("ADD")])]),e._v(" "),s("ul",[s("li",[e._v("将本地的文件添加复制到容器中去，压缩包会解压，可以访问网络上的文件，会自动下载")]),e._v(" "),s("li",[s("code",[e._v("ADD <src> <dest>")])]),e._v(" "),s("li",[e._v("示例："),s("code",[e._v("ADD *.js /app")]),e._v(" 添加 "),s("code",[e._v("js")]),e._v(" 文件到容器中的 "),s("code",[e._v("app")]),e._v(" 目录下")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("COPY")])]),e._v(" "),s("ul",[s("li",[e._v("功能和 "),s("code",[e._v("ADD")]),e._v(" 一样，只是复制，不会解压或者下载文件")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("CMD")])]),e._v(" "),s("ul",[s("li",[e._v("启动容器后执行的命令，和 "),s("code",[e._v("RUN")]),e._v(" 不一样，"),s("code",[e._v("RUN")]),e._v(" 是在构建镜像是要运行的命令")]),e._v(" "),s("li",[e._v("当使用 "),s("code",[e._v("docker run")]),e._v(" 运行容器的时候，这个可以在命令行被覆盖")]),e._v(" "),s("li",[e._v("示例："),s("code",[e._v('CMD ["executable", "param1", "param2"]')])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("ENTRYPOINT")])]),e._v(" "),s("ul",[s("li",[e._v("也是执行命令，和 "),s("code",[e._v("CMD")]),e._v(" 一样，只是这个命令不会被命令行覆盖")]),e._v(" "),s("li",[s("code",[e._v('ENTRYPOINT ["executable", "param1", "param2"]')])]),e._v(" "),s("li",[e._v("示例："),s("code",[e._v('ENTRYPOINT ["donnet", "myapp.dll"]')])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("LABEL")]),e._v("：为镜像添加元数据，"),s("code",[e._v("key-value")]),e._v(" 形式")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("LABEL <key>=<value> <key>=<value> ...")])]),e._v(" "),s("li",[e._v("示例："),s("code",[e._v('LABEL version="1.0" description="')]),e._v('这是一个web应用"')])])])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("ENV")]),e._v("：设置环境变量，有些容器运行时会需要某些环境变量\n"),s("ul",[s("li",[s("code",[e._v("ENV <key> <value>")]),e._v(" 一次设置一个环境变量")]),e._v(" "),s("li",[s("code",[e._v("ENV <key>=<value> <key>=<value> <key>=<value>")]),e._v(" 设置多个环境变量")]),e._v(" "),s("li",[e._v("示例："),s("code",[e._v("ENV JAVA_HOME /usr/java1.8/")])])])])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("EXPOSE")]),e._v("：暴露对外的端口（容器内部程序的端口，虽然会和宿主机的一样，但是其实是两个端口）\n"),s("ul",[s("li",[s("code",[e._v("EXPOSE <port>")])]),e._v(" "),s("li",[e._v("示例："),s("code",[e._v("EXPOSE 80")])]),e._v(" "),s("li",[e._v("容器运行时，需要用 -p 映射外部端口才能访问到容器内的端口")])])]),e._v(" "),s("li",[s("code",[e._v("VOLUME")]),e._v("：指定数据持久化的目录，官方语言叫做挂载\n"),s("ul",[s("li",[s("code",[e._v("VOLUME /var/log")]),e._v(" 指定容器中需要被挂载的目录，会把这个目录映射到宿主机的一个随机目录上，实现数据的持久化和同步。")]),e._v(" "),s("li",[s("code",[e._v('VOLUME ["/var/log","/var/test".....]')]),e._v(" 指定容器中多个需要被挂载的目录，会把这些目录映射到宿主机的多个随机目录上，实现数据的持久化和同步")]),e._v(" "),s("li",[s("code",[e._v("VOLUME /var/data var/log")]),e._v(" 指定容器中的 "),s("code",[e._v("var/log")]),e._v(" 目录挂载到宿主机上的 "),s("code",[e._v("/var/data")]),e._v(" 目录，这种形式可以手动指定宿主机上的目录")])])]),e._v(" "),s("li",[s("code",[e._v("WORKDIR")]),e._v("：设置工作目录，设置之后 ，"),s("code",[e._v("RUN")]),e._v("、"),s("code",[e._v("CMD")]),e._v("、"),s("code",[e._v("COPY")]),e._v("、"),s("code",[e._v("ADD")]),e._v(" 的工作目录都会同步变更\n"),s("ul",[s("li",[s("code",[e._v("WORKDIR <path>")])]),e._v(" "),s("li",[e._v("示例："),s("code",[e._v("WORKDIR /app/test")])])])]),e._v(" "),s("li",[s("code",[e._v("USER")]),e._v("：指定运行命令时所使用的用户，为了安全和权限起见，根据要执行的命令选择不同用户\n"),s("ul",[s("li",[s("code",[e._v("USER <user>:[<group>]")])]),e._v(" "),s("li",[e._v("示例："),s("code",[e._v("USER test")])])])]),e._v(" "),s("li",[s("code",[e._v("ARG")]),e._v("：设置构建镜像是要传递的参数\n"),s("ul",[s("li",[s("code",[e._v("ARG <name>[=<value>]")])]),e._v(" "),s("li",[s("code",[e._v("ARG name=sss")]),e._v("\n更多操作，请移步"),s("a",{attrs:{href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方使用文档"),s("OutboundLink")],1)])])])])])]),e._v(" "),s("h3",{attrs:{id:"最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[e._v("#")]),e._v(" 最佳实践")]),e._v(" "),s("p",[e._v("在掌握 "),s("code",[e._v("Docker")]),e._v(" 常规操作之后，我们很容易就可以打出自己想要的项目镜像。然而不同的操作打出的镜像也是千差万别。")]),e._v(" "),s("p",[e._v("究竟是什么原因导致镜像差异，我们不妨继续探索。")]),e._v(" "),s("p",[e._v("以下是在应用 "),s("code",[e._v("Docker")]),e._v(" 过程中整理的最佳实践，请尽量遵循如下准则：")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("Require")]),e._v(" 明确：需要什么镜像")]),e._v(" "),s("li",[e._v("步骤精简：变化较少的 "),s("code",[e._v("Step")]),e._v(" 优先")]),e._v(" "),s("li",[e._v("版本明确：镜像命名明确")]),e._v(" "),s("li",[e._v("说明文档：整个镜像打包步骤可以重现")])]),e._v(" "),s("p",[e._v("推荐如下两篇文章：")]),e._v(" "),s("ul",[s("li",[e._v("https://www.docker.com/blog/intro-guide-to-dockerfile-best-practices/")]),e._v(" "),s("li",[e._v("https://docs.docker.com/develop/develop-images/dockerfile_best-practices/")])]),e._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),s("p",[e._v("容器化技术必将是云时代不可或缺的技能之一，而 Docker 只是沧海一粟。随之而来的还有集群容器管理 K8s、Service Mesh 、Istio 等技术。打开 Docker 的大门，不断"),s("strong",[e._v("抽丝剥茧，逐层深入")]),e._v("，你将感受到容器化的无穷魅力。")])])}),[],!1,null,null,null);v.default=_.exports}}]);