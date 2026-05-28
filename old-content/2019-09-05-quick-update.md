---
layout: post
title: Quick update
date: 2019-09-05 19:41:00 -05:00
description: The circle of development life
image: 
excerpt_separator: <!--more-->
---

While updating the new website, I came across an issue building the links for my website. To rewind a bit, I previously used Jekyll on version 3.3.0 or even earlier.<!--more--> Sometime between now and then, a new update rolled out that started using Bundler to bundle the gem dependencies for the project. 


I read through the documentation and noticed that this would build a local development environment when using the build command. This part I understood somewhat. But I didn't realize what that meant exactly. When I started building my site links, I notice that any URLs that I had set a variable on with `absolute_url` would get written to the site as `localhost:4000`. I found this strange because I was using `bundle exec jekyll serve` each time, and it gave me `127.0.0.1:4000` as the server where my site is hosted. While it is technically the same as `localhost:4000`, I could not for the life of me figure out why and where it was getting rendered as localhost. 

I looked in my `_config.yml` file and set the `url:` to `https://www.jnutterdev.com`, and then made sure my `baseurl:` config was empty. I looked through every freaking file I could think of and still could not figure out how my URLs were getting written as localhost. I was debating removing the `absolute_url` variable and then using static links instead, but that wasn't really great because there were many links that relied on `absolute_url`. 

I scoured stack overflow and even the Jekyll community forum for answers, and no one mentioned anything related. Until finally, I saw that someone mentioned needing to pass a production variable when using bundle exec, BUT this person placed the variable after the bundle exec command, and resulted in an error for me. I was getting closer, I knew it. Eventually, I looked through Jekyll's documentation again and found the environment variable:

`JEKYLL_ENV="production" bundle exec jekyll b` 

This command used the environment variables at the _beginning_ of the command. After building the new production site, I then used scp to copy the `_site` folder to my server, and hey presto, it finally worked!

All this time, I was missing one key detail. `JEKYLL_ENV="production"`. The documentation said that you should run this command. But nowhere did it say, "RUN THIS COMMAND IF YOU WANT YOUR ABSOLUTE URLS WRITTEN WITH YOUR SITE URL." Jeebus. What a relief. I wish things would be a little clearer sometimes. That's the part of learning new technology, I guess. 

It dawned on me later that this is also the reason why another site of mine could never fully work as I wanted it to. I spent a week trying to get a site up, but eventually gave up on it since I could never figure out why my links weren't working. I went back to my old site, re-cloned the repo, updated all the gem dependencies, ran the environment variable on build and what do you know... this worked! I feel so accomplished. It's the little wins, right? I'm only operating on five hours of sleep because of this one little thing. 