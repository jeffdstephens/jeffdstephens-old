---
title: 'How to integrate UiPath with GitLab'
date: '2020-10-19T11:34:03.284Z'
layout: post
draft: false
path: '/posts/uipath-gitlab/'
category: 'automation'
tags:
  - 'automation'
description: Discover how to configure UiPath to use GitLab as its code repository and how you can manage your code for UiPath Studio.
---

Building bots can be fun. Losing your code, not so much.

I've recently been building random attended bots using UiPath to automate things in my life and to generally play around with the technology. As some of these projects have matured to the point of utility, I've since started thinking about how to protect my code. Building "hello world" bots is one thing, but when you start using the bot for repeatable tasks, it's time to check your code in.

We use GitLab at work and the bots I was experimenting with were for the job. As such, I wanted to use our existing GitLab instance and just plug in UiPath. After doing some cursory searches on the Internet, I really didn't find much related to how to integrate and use these two tools together. I found some generic articles on git and UiPath and a quite a few using GitHub for UiPath, but nothing really for GitLab.

So, I decided to figure it out. Once I did, I figured I might as well share the knowledge in case others are looking for the same setup. I put together a quick tutorial that you can check out on my YouTube channel and which is embedded below. If you have questions, just let me know.

`youtube: https://youtu.be/YNQKRns9wVk`

The steps are pretty straightforward once you know what you are doing. At a high level, these are the steps.

## GitLab Setup

1. Have your GitLab code repo ready. In this video I create a `New Project` in GitLab as a test but the same steps would be used for an established project.
2. You'll need to create an `Access Token` that you can use to configure UiPath for connecting and authenticating to GitLab
3. Store this `Access Token` somewhere safe as you'll need to use it in the process and may want to be able to reference it again in the future. GitLab does not allow you to see the value after you have generated it.

## UiPath Setup

4. On the UiPath side, you'll want to add your project to source control by clicking on the `Add to Source Control` taskbar menu item in the bottom right. Then click on `git init` to initialize your local codebase for git.
5. Once code management is initialized you'll want to populate your new GitLab project with the baseline code. To do this, establish a connection to GitLab by clicking on `Push` from the taskbar menu in the bottom right showing `master` branch. This will bring up a dialog box to enter your repo name and URL and your authentication credentials (username, `Access Token`).
6. This pushes your baseline code to GitLab and your local codebase is now successfully connected to the GitLab backend. You are good to go with normal git/development operations from this point. I do cover the creation of a feature branch and how that integrates with GitLab as well.

**NOTE:** If you receive an error that says something like, "pre-receive hook declined" you'll need to change some parameters on your repo. Go to GitLab->Settings->Repository->Protected Branches and unprotect the branch.

Hopefully the video provides you the information you need to make sure your code is protected and managed. If you have any questions or need clarification of any of the steps, just let me know.
