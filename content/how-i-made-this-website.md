---
title: How I made this website
---

These days making something means making something existing your own. 
We do this by building on what other's have built. This website is no different. 

This website is based on [[Aravind]]'s [Notes](https://notes.aravindballa.com/) and is completely [open-source](https://github.com/brittikbasu/brittikbasu.com).

[[Aravind]] is a friend and he helped me figure out how to load tweets. I was really struggling with this. The tweets would load on refresh. There's no way to listen for onchange event of window.location.search. The routes for this website heavily uses window.location.search. But since Aravind is an expert gatsby developer, he pointed out what to paste where in his gatsby theme. And voila, it worked! Not asking for help early gave me the change to learn new things about javascript and gatsby. I tries 4 different ways to load the tweets. In one of my attempts i created a setInterval method that would trigger every 100ms. It worked and the tweets did load but it was definitely not ideal.

I found gatsby to be complicated but everything is complicated in the beginning. The more we get to know something the less complicated it feels.

This website is hosted on [Netlify](https://netlify.com) and i use [Github](https://github.com) for version control.