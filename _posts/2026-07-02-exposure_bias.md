---
layout: post
title: Training for Marathons by Sprinting---Why Exposure Bias is Evil
date: 2026-07-02
description: Autoregressive and diffusion models are trained on a single step but inferenced on thousands. Why does this work at all?
tags: generative_models, generalization, diffusion, autoregression
giscus_comments: true
categories: AI
og_image: https://alexiglad.github.io/assets/img/blog/exposure_bias/evil_exposure_bias_social.jpg
---

Let me tell you about a friend of mine. He's a big runner---he loves marathons and he's actually pretty good at them.

But he's pretty dumb.

He practices for marathons by sprinting 100M dashes, even though this is 0.237% (1/422nd) of a marathon...

Somehow this works for him, but it's very clearly suboptimal.

You'd think he would practice for marathons by running a couple miles, or even a half marathon. But nope, 1/422nd of the marathon. 

I keep telling him to practice for longer distances, but he won't listen...

Actually, you may know this friend, he's pretty famous.

His name is Autoregression... and it turns out his best friend Diffusion does the same thing.

Sound crazy...? Let me take a step back.

When we train autoregressive models, we train them to predict a *single step*---given some real context, predict the next token/patch. Diffusion models are the exact same story---take a real image/sequence, add some noise, and train the model to undo *just that single step of noise.*

<img src="/assets/img/blog/exposure_bias/diffusion_ar_training.webp" alt="Autoregressive and Diffusion Models are Trained to predict a single step" width="600" />

But at inference time, these models are used completely differently... Autoregressive models generate thousands of tokens sequentially, feeding every prediction back in as context for the next one. Diffusion models start from pure noise and denoise step by step, where each step builds on the last. In other words, at inference these models run *like RNNs*---their own (possibly wrong) outputs become their next inputs.

<img src="/assets/img/blog/exposure_bias/diffusion_ar_rnns.webp" alt="Autoregressive and Diffusion Models are inferenced as RNNs" width="600" />

The analogy here is we train the models to run 100M dashes (a single prediction step), and then inference them on marathons (thousands or even more steps).

This sucks in pretty much every way, shape, and form. During training, models only ever see *ground-truth* data, but at inference, they see their own predictions, which are never perfect. This results in inputs that slowly drift away from anything the model saw during training (a distribution shift), and because every step feeds the next, small errors compound into larger ones. The longer a model generates, the worse things get---you've probably seen this firsthand with video generation models that melt into mush after ten seconds, or LLMs that get less coherent over really long generations.

<img src="/assets/img/blog/exposure_bias/evil_exposure_bias.webp" alt="Exposure bias: the model's generation trajectory drifts away from the ground truth trajectory seen during training and ends completely out-of-distribution" width="600" />

We know neural networks don't generalize out-of-distribution very well. Yet, the BIG TWO generative models we use every day go out-of-distribution *by design*; they are trained on a single step and inferenced on thousands or even millions of steps.

Your gut instinct here should be: wtf?!?! How do these models even work?

It turns out this is a well-known problem, broadly referred to as **exposure bias**: models are only ever trained on ground-truth data (this is broadly called teacher forcing), but then suffer from *exposure* at inference to their own mistakes.

People have been trying to solve the exposure bias problem for a while now... and unfortunately, nothing very elegant has come of it. Lots of solutions can reduce the exposure bias issue for a couple of steps (i.e., like the rollout loss with [VJepa2](https://arxiv.org/pdf/2506.09985), or [self-forcing](https://arxiv.org/pdf/2506.08009)/[diffusion forcing](https://arxiv.org/pdf/2407.01392) for diffusion models), but nothing can reduce exposure bias indefinitely in a pre-training aligned manner.

Readers familiar with consistency models or MeanFlow models may be tempted to believe these single-step models fix the exposure bias issue, since they can perform inference in a single step. But they actually suffer from the same problem in a different form---their training mostly consists of small jumps along the trajectory, while inference asks for one giant jump. This still leads to a large mismatch between training and inference.

If we take a step back, it's kind of amazing that these models even work. A model never takes its own outputs as input during training---then at inference, that's basically all it does, and it does that **thousands of times.**

It turns out there's a fundamental reason that modern generative models are trained this way, and getting rid of this nastiness is not easy. 

Our paper on [Explorative Modeling](https://alexiglad.github.io/blog/2026/explorative_modeling/) demonstrates a new way of generative modeling that enables solving this, check it out :)