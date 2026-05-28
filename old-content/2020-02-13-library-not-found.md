---
layout: post
title: Library not found
date: 2020-02-13 21:59:00 -05:00
description: "It's been awhile since I've worked on any projects lately, so I decided that if I start writing about a project it will get me back into the swing of things."
image: 
excerpt_separator: <!--more-->
---

It's been a while since I've worked on any projects lately, so I decided that it will get me back into the swing of things if I start writing about a project. I didn't have the repo cloned or this site, so the first thing I did was pull it down from GitHub.<!--more-->


Next, I tried to fire up [Jekyll](https://jekyllrb.com/). I get an error, "library not found for class Digest::SHA2 -- digest/sha2 (LoadError)". Crap. What is that all about? Nothing has changed since my last post; what gives? 

I searched around for a little while, but stack overflow was letting me down. Some folks were saying to try this thing or edit that module—many things that didn't seem relevant to my situation. To see if it may have been specific to my ruby versions, I tried using an older version with [rbenv](https://github.com/rbenv/rbenv). No luck. I get a host of other errors. 

Finally, I did the only sensible thing I can think of. rbenv uninstall ruby 2.5.1. Afterward, I re-installed Jekyll and bundler. I updated my gems. Ran bundle install. It works! I was so relieved. 

Now that I have a working Jekyll setup expect more posts to come soon. I will be looking into a few different projects, either with ruby on rails or flask. Stay tuned. 