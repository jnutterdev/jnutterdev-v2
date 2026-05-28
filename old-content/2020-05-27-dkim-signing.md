---
layout: post
title: DKIM signing
date: 2020-05-27 19:28:00 -05:00
description: ""
image: 
published: True
excerpt_separator: <!--more-->
---

Recently I went down a rabbit hole that lead me to learn more about SPF, DKIM, DMARC, and BIMI. While many resources cover the benefit of setting up these records, some information is still not quite as readily available. Here's what I learned on my quest. <!--more-->

One day, I looked through my inbox and noticed that some emails have an avatar displayed next to their sender name. I wondered how one goes about setting an avatar; how hard could that be? After doing a bit of searching around, I stumbled across an article on [BIMI](https://www.dmarcanalyzer.com/how-to-implement-bimi-record/), or Brand Indicators for Message Identification. The article suggested that the sending domain must have SPF, DKIM, and DMARC enabled first. I work in technical support for an email delivery company, so I have some familiarity with how SPF/DKIM works. One of the addresses I use outside of work already has a DMARC policy that I setup.  

One thing that occurred to me is that I will also need to setup DKIM on my server so that the messages are signed when sending them out. I started to read into implementing DKIM. You will need to set up a public key and a private key stored on your sending server for authentication. There are plenty of resources that walk through creating a public key and even some walk through how to create the private key. Where lies my confusion is where the private key is stored on my server. I looked to my hosting provider for answers. In their knowledge base, there were some notes that DKIM and ARC signing were available. So I thought, "Ok, great. I'll go ahead and create the DKIM record and then add the private key to the server later. Easy peasy." 

In my DNS panel, I added the DKIM key and saved it. Just as an experiment, I thought I would send an email to see what would happen. I thought maybe my emails will still pass since SPF passes, and DMARC only requires either SPF or DKIM to pass. Nope. I sent a test to a gmail.com address, and the message went straight to junk. "Sorry, we couldn't verify sending from the domain." Just for comparison, I have a separate email address with DMARC and an SPF record and no DKIM record. Pretty much the same settings minus DKIM. I sent an email to Gmail, and it passed. My suspicions were confirmed. 

So I sent an email to my hosting provider and asked what was up with DKIM signing. DKIM signing hasn't been rolled out yet as they are running into some issues getting the kinks worked out. Great. At this point, I decided to delete the DKIM record from my DNS panel and continue sending without it. Instead of deleting it, there was some bug in the control panel that duplicated the record. I reached back out to the hosting provider to let them know, and they removed both records without any explanation--not sure if it was them, or the 2048 bit key length I used, or maybe the way the value was copied into the control panel? Who knows. 

I learned a lot about the records and how to set them up. I'll have to revisit this once my hosting provider allows setting up a DKIM record. To be continued.


