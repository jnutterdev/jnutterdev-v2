---
layout: post
title: Drums In Space
date: 2021-02-25 15:34:00 -05:00
description: 
image: "../../assets/images/drumsinspace.jpg"
published: true
excerpt_separator: <!--more-->
---

One of our first projects in the course was a group project where we used HTML, CSS, [Bootstrap](https://getbootstrap.com/), [p5 library](https://p5js.org/libraries/), [Tone.js](https://tonejs.github.io/), and vanilla JavaScript to create a functional website. My group consisted of two other folks and myself. Since we all enjoyed music, we decided to develop an<!--more--> interactive drum machine with a space theme. What we created is called [Drums in space](https://github.com/jnutterdev/drums-in-space).

We divided up responsibilities creating different parts of the website. One person handled the HTML/CSS and integrated a third-party API to pull in space quotes. Another person worked on some JavaScript to create a sound visualizer and the planets, and I was in charge of putting together the drum machine and sample player. 

For the drum sampler on the main page, this was created with some simple JavaScript to listen for the keypresses and mouse clicks to trigger a sound and then used the Web Audio API to play the sounds. Nothing too fancy. I hadn't discovered Tone.js yet, so I just went with something simple to get the job done. 

To create the drum machine, I searched around a bit more to find inspiration. This is when I stumbled on Tone.js and decided to use that library to play the sounds. For the player portion, I used an HTML form for the main structure. Then I used checkbox inputs as the drum pattern to play the sounds. I used some simple JavaScript to loop through the inputs and play the sound using the Tone.js library.

All in all, while it wasn't a very practical project, it was pretty fun and allowed me to get my feet wet, creating something interactive in the browser and working as a group—two things I had yet to do in learning to code. In the future, I'm going to try and use Tone.js a bit more. I want to create a synthesizer, and this library is perfect. 

> This blog post is part of a series of posts giving some background on a few projects that I've worked on during my courses at [DigitalCrafts](https://www.digitalcrafts.com/).