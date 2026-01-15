---
layout: post
title: The Era of Generalization
date: 2025-06-19
description: What's the future of Scaling in AI?
tags: deep learning, ai, future, scaling, energy-based-models, generalization
giscus_comments: true
categories: AI, neuroscience
---

# The Era of Generalization

Status: *[Work in Progress], self-reflective, heavy sarcasm/bad humor*

I recently wrote a paper called "[Energy-Based Transformers are Scalable Learners and Thinkers](https://energy-based-transformers.github.io/static/pdfs/paper.pdf)". As someone who spends too much time thinking, I like to reflect on everything I do, and therefore, I reflected on learnings from this paper. I think reflecting in this manner is important for not only growing as a person but also for anticipating the future.

The TLDR of the paper (taken from the [blog here](https://alexiglad.github.io/blog/2025/ebt/)) is that a new model type called **Energy-Based Transformers** outscaled the existing paradigm (feed-forward Transformers) while also generalizing reasoning capabilities and generalizing to new data better. This is some pretty cool stuff given most of it had never been done before in AI.

*So what are the learnings from this... what should I take away from these results?*

AI progress within the last decade has largely been driven by approaches that scale well with computation. This point is worth emphasizing, as when people say "scale well"

Now, we have Language Models trained on enormous text corpuses that would take humans 1,125 years of NONSTOP READING to finish[^1]. You might now be thinking "oh that's just because LLMs are trained on text, if we get other modalities we'll be fine." Well... bad news. Under a similar vein, we now have [video models](https://arxiv.org/pdf/2506.09985v1) trained on ~114 years of video data (aka more than 100% of people on earth ever see, you can't see more since people need sleep), but yet these models still fall short of human performance across several benchmarks, and we still don't have AGI (human-level intelligence) yet :(. Why?.


<!-- [gif of angry panda from this link https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fangry-panda-gifs&psig=AOvVaw0P-OVjBdNJKnJQzivos_NO&ust=1750468216734000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDIktro_o0DFQAAAAAdAAAAABAL] -->
<!-- ![angry panda gif](https://tenor.com/view/angry-angry-panda-panda-mad-commercial-gif-5416416) -->
<!-- <div style="display: flex; justify-content: center;">
  <div class="tenor-gif-embed" data-postid="5416416" data-share-method="host" data-aspect-ratio="1.45" data-width="30%"><a href="https://tenor.com/view/angry-angry-panda-panda-mad-commercial-gif-5416416">Angry Angry Panda GIF</a>from <a href="https://tenor.com/search/angry-gifs">Angry GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
</div> -->


Well, the only thing we really can blame when we have clearly trained on more data than hundreds of humans would ever see is **Generalization.** That is, if models generalized to the same extent that humans do, they would be as smart (or hopefully even smarter) than humans given the large amount of data they've seen.[^2]

Ok, so what?

Over the last decade the word "generalization" in machine learning has usually meant "generalization" to the same distribution (i.e., generalizing from the train set to the validation/testing set which are drawn from the same distribution). Once this is achieved (which virtually all models can now do), the next most important think people have cared about is the scaling rate of models, that is, how efficiently (with respect to compute/FLOPs) models fit their data. But, now I am going to argue that this trend will end, as eventually the exact learning scaling efficiency of models won't really matter. Why? See the figure below


<figure class="text-center">
<img src="/assets/img/blog/eog/.png" alt="Scaling trends for EBTs vs Transformer++ in Video Modeling" width="600" />
<figcaption><b>All models eventually reach the same loss (~0 or random noise)</b></figcaption>
</figure>



Mention era of fitting with respect to FLOPs (ref mamba, TTT, etc), plot from PPT, mention other things from PPT like 0 loss regime, etc

However, in the quest for human-level intelligence, this type of weak generalization is not enough. Current models succeed at generalizing to the training/validation/testing distributions


In fact




Now, we are starting to see a tradeoff between compute efficiency and generalization. That is exactly what [Energy-Based Transformers](https://alexiglad.github.io/blog/2025/ebt/) are doing as well as "[reasoning models](https://openai.com/o1/)"! If all we cared about was compute efficiency, this would not be the case. 



And this period we are entering, is broadly what I call, the "Era of Generalization." Now, rather than just caring about the learning scalability of models (i.e., how fast they can fit their training/validation data), we're entering an era in which we care more and more about the scalability of models at **generalizing** to new data. 

## Citing this Blog
```
	@online{gladstone2025era,
	author       = {Gladstone, Alexi},
	title        = {The Era of Generalization},
	year         = {2025},
	url          = {https://alexiglad.github.io/blog/2025/era_of_generalization/},
	note         = {Blog post}
	}
```



[^1]: I got this number by using the 15T tokens [Llama3](https://arxiv.org/pdf/2407.21783) was trained on, multiplying by 0.75 (as this is approximately the number of words per token), and then dividing by the number 10,007,424,000 (which is the number of words a human could read in a lifetime if they read nonstop 238 words per minute or the average reading speed, * 60 mins per hours, * 24 hours per day, * 365 days per year, * 80 year life expectancy).

[^2]: Of course, there are many other factors at play here aside from generalization such as data quality, experiential data, hardware quality, etc. But, by far generalization is the biggest culprit behind us not having AGI.