---
template: post
title: 'Go-Go: Fast Development Environment Context Switching'
slug: go-go
draft: true
date: 2019-10-23T04:33:26.388Z
description: >-
  Switching projects is a point of friction. Booting up multiple backends and
  frontends, trying to remember the correct sequence of `npm` commands to get
  something serving, launching the correct port on localhost, booting up
  databases etc.


  Go-Go is a simple set of scripts which can define tmux workspaces for
  individual projects, as well as define a set of commands to be executed in
  each terminal.
category: 'Productivity, Software'
tags:
  - Productivity
  - Software
---
My day to day usually consists of working on my PhD project, working part time as a Software Engineer, or contributing to open-source projects. Ideally (and on paper) I have set days for each, however I often find myself switching between development projects multiple times a day.

I always found the overhead of switching projects to be a point of friction. Booting up multiple backends and frontends, trying to remember the correct sequence of `npm` commands to get something serving, launching the correct port on localhost, booting up databases etc.

The cognitive overload of switching projects is tough. The amount of work required to even start getting work done was too much, and I found myself becoming distracted or convincing myself I didn't have enough time to get anything done anyway. I know speaking to colleagues this is a shared experience.

What I want to do, is go from an empty terminal, to something like this:

![](/media/go-go/go-go.png)

With as little steps as possible.

## Enter [Go-Go](https://github.com/jakerenzella/go-go)

Go-Go is a simple collection of handy scripts and wrappers I developed, using tmuxp as a base, which can define multiple workspaces and easily switch between them.

Here it is in action:

![](/media/go-go/go-go.gif)


