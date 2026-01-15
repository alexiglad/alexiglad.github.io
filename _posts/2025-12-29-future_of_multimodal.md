---
layout: post
title: The Future of Multimodal Does not Involve Text
date: 2025-12-29
description: What multimodal paradigm will win out?
tags: multimodal, llms, vllms, video, audio, text
giscus_comments: true
categories: AI
---

**Higher-order thoughts:** *This is a belief I've had for ~2 years now, that I got after working primarily in multimodal learning for ~1 year. My belief has only strengthened with time :).*

There's a concept in multimodal learning called *cross-modal transfer*---the idea that models trained on multiple modalities (like text and images) could gain *shared benefits* from learning across them. Basically, learnings from one modality (say, images) would help the model better understand another modality (say, text). This has been a holy grail for a while now, and recently it's become something of an obsession at frontier labs---both for those working on large multimodal models and those chasing [The Platonic Representation Hypothesis](https://arxiv.org/pdf/2405.07987).

This characteristic has been sought after for good reason. Achieving strong cross-modal transfer at scale would make models so much better at understanding ... well everything. Us humans do this effortlessly---a child who learns the word "dog" from a picture book can instantly recognize a real dog they've never seen before, and vice versa.

One great example of where cross-modal transfer would *really* benefit models is LLMs, where text-only LLMs are pretty [terrible at reasoning about the physical world](https://arxiv.org/pdf/2310.07018). Ideally, adding the capacity for LLMs to see via images would make (V)LLMs both better at seeing images (of course), but also *better at reasoning solely through text.* After all, we'd be giving models more data, and us humans benefit massively from our visual system in learning how to reason.

Unfortunately, this phenomenon has not been observed at all. In fact, often the opposite is observed, where adding vision to base LLMs [makes](https://arxiv.org/abs/2412.03467) [their](https://arxiv.org/abs/2309.10313) [text](https://arxiv.org/abs/2402.10884) [reasoning worse](https://arxiv.org/abs/2505.19616) :O. While this can partially be attributed to catastrophic forgetting, where text-based LLMs forget some text knowledge due to training on image-text data, this result is completely sad.

*So why don't current models succeed at cross-modal transfer?*

I'd argue the reason isn't tied to model architecture or scale---it's **data alignment**, or how well different modalities match up in their representation, structure, and content.

To understand why, consider what we're actually asking models to do when we train them on text and images together. Text is *discrete* and operates at a high level of abstraction---it's pure semantics. An image, on the other hand, is *continuous* and incredibly low-level---raw pixel values encoding edges, textures, colors. These two modalities are fundamentally different in structure.

Now, you might say "but we have tons of image-text pairs on the internet!" And that's true---we do have *some* alignment between text and images thanks to the labeling humans have done (alt-text, captions, etc.) and the work of data labeling companies. But this alignment exists on a spectrum, and text-image pairs sit pretty low on it. The core issue is that captions are *very lossy*---they compress images down to a handful of semantic concepts while discarding almost everything else. The text caption "a dog playing in a park" throws away the dog's breed, pose, the lighting, the texture of the grass, the spatial layout---basically all the rich, continuous information in the actual image. We're forcing models to learn a mapping between two wildly different representations.

To really drive this home, consider the image below:

![water and boat with landscape](/assets/img/blog/forest_lake.jpg)

How would you describe this *exactly* in text? Let me try: "An aerial view of a deep teal-green water cutting between two steep mountainsides covered in dense evergreen forest. A small white boat near the center-right is moving away from the camera, leaving a long V-shaped wake that spreads across the water's surface, creating rippled reflections of sunlight on the left side. The left cliff face is partially exposed gray rock with vegetation clinging to ledges. In the background, a thin waterfall cascades down the right mountainside. The water transitions from darker blue-green in the foreground to lighter teal where the sunlight hits the wake."

That's 90+ words, and I *still* haven't captured the exact shade of green on each tree, the precise pattern of the ripples, the shape of every rock formation, the subtle gradients in the water, and a ton of other features. A single large image encodes millions of pixels of continuous information---it takes a massive amount of text to come close to even approximate just the content, let alone the spatial/temporal structure.


So if text and images are so poorly aligned, what modalities *are* well aligned?

Fortunately, nature has already given us a pair of modalities that are *beautifully* aligned: **video and audio**. Both are continuous signals. Both are high-dimensional and contain low-level information. They share the same temporal structure---when a door slams in a video, you hear it at exactly the same moment. The alignment isn't something humans had to create through labeling; it's just there.

What makes this even better is that video-audio data exists *for free* in the real world. No expensive labeling or data curation[^1]. You want aligned multimodal data? Just go outside and hit record, or strap a camera on a baby (I'm slightly joking with this, but not really, see [SAYCam](https://direct.mit.edu/opmi/article/doi/10.1162/opmi_a_00039/97495/SAYCam-A-Large-Longitudinal-Audiovisual-Dataset)).

A great example of people exploiting this inherent alignment is [Veo 3](https://deepmind.google/models/veo/). Unlike previous video generation models that output silent videos (looking at you, Sora), Veo 3 *natively* generates synchronized audio---dialogue, sound effects, ambient noise---all from a single model. The lip sync is surprisingly good, and sounds actually match what's happening on screen. This isn't post-hoc audio slapped onto generated video; the model is learning from the natural alignment of video and audio in its training data. I'd bet this shared modality is a big part of why Veo 3 works so well, and scaling this up with better architectures will only widen the gap.

If the hypothesis that data alignment is the true bottleneck for cross-modal transfer is correct, the implications for text aren't great. Text simply doesn't occur at scale in natural alignment with other modalities. Sure, we have audiobooks and podcasts with transcripts, but that's a tiny fraction of the video-audio data out there. Even when text *is* aligned with other modalities, the structural mismatch remains---you're still mapping between discrete, abstract symbols and high-dimensional very noisy continuous signals that contain much more information. 

Therefore, my prediction is that in the long-term future of multimodal AI (maybe the next 5-10 years), text takes a back seat. The most powerful multimodal systems will be built on video and audio, with text serving as an interface for human convenience rather than a core modality for learning. These changes would enable us to train large models at scale with data that is gathered completely unsupervised--just audio and video from the real world.

<!-- *Okay, I'll admit the title is slightly clickbait---maybe it should have been "The Long-Term Future of Multimodal." But I hope the message remains.* -->

## Footnotes

[^1]: Data curation pipelines aren't strictly necessary for video-audio data, though people may still use them to improve quality.