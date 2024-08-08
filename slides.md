---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: ./assets/slide-1/bg.png
# some information about your slides (markdown enabled)
title: Welcome to Slidev
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true

---
# <React/><s>ing</s> to <Angular />

<div>
  an introduction to the best enterprise framework
</div>

---
transition: fade-out
src: ./pages/slide-2.md
---

---
transition: slide-up
src: ./pages/slide-3.md
---

---
transition: slide-up
src: ./pages/slide-4.md
---

---
transition: slide-up
src: ./pages/slide-5.1.md
---

---
transition: slide-left
src: ./pages/slide-5.2.md
layout: two-cols
mdc: true
---

---
transition: slide-right
src: ./pages/slide-5.3.md
layout: two-cols
mdc: true
---

<PoweredBySlidev mt-10 />
