---
layout: post
title: "Biological Intelligence May Have an Advantage Over Digital Intelligence"
---

How does creativity come about? 

# Biological Intelligence May Have an Advantage Over Digital Intelligence
10/04/2023

I found Geoffrey Hinton’s [“Two Paths to Intelligence”](https://www.youtube.com/watch?app=desktop&v=rGgGOccMEiY&ab_channel=CSERCambridge) talk particularly fascinating. In addition to his strong sense of humor, despite discussing the possible end of the world, I was thoroughly impressed by Dr. Hinton’s ability to reason about the differences in biological and digital intelligence.

<!-- Dr. Hinton discussed  -->
<!-- TODO detail here brief synposis of the talk -->

One point stuck out to me the most - particularly his point that digital intelligence can be shared rapidly. Currently, it takes less than 30 seconds to upload a mini (not quite as capable as humans yet) digital intelligence using websites such as Github. Once uploaded, almost anyone on the internet can access, download, and use this digital intelligence. This simplified weight sharing takes advantage of the [deterministic nature](https://www.hoppersroppers.org/fundamentals/Hardware/2-ComputersareDeterministic.html) of computers for a given instruction set.

In contrast, humans cannot currently upload our knowledge to a server or share our 'weights'. As such, the transfer of biological intelligence occurs through the slow process of communication-based knowledge distillation, where around 39-60 bits of information can be transferred per second \[[1](#1)\]\[[2](#2)\]. This rate of information transfer in biological intelligence is significantly less than the rate of information transfer in digital intelligence - where billions or more bits per second can be shared due to the deterministic nature of computers operating on specific instruction sets. This constraint poses a huge restraint on the spread of human intelligence. *Imagine if as children information from the encyclopedia and all scientific papers was immediately uploaded to our brains.*

Despite the information transfer bottleneck imposed by knowledge distillation, I believe there is a key benefit of this slow knowledge transfer that I will argue has helped make humans successful as a species: creativity.

The gradual accumulation of knowledge in humans begins in early childhood. From the moment of birth, our internal models of the world start to take shape. As we reach developmental milestones, where our understanding of the world has achieved a general comprehension level, a more structured form of learning is introduced. Paricularly, in educational settings, a curriculum incrementally exposes students to various subjects, methodically building upon prior knowledge. 

This slow and structured learning approach in humans stands in stark contrast to the learning mechanisms in digital intelligence - where AI systems often undergo a different training process. Except in cases of [Curriculum Learning](https://ai.stackexchange.com/questions/40241/what-is-curriculum-learning-in-reinforcement-learning#:~:text=Curriculum%20learning%20is%20a%20training,of%20tasks%20or%20training%20samples.), where AI is taught using a gradual increase in the complexity of training samples to mimic human learning, these systems are usually exposed to an entire training dataset at once with varying levels of difficulty. This method allows them to absorb large amounts of information non-sequentially, contrasting with the human method of progressively building knowledge upon itself.

Although these characteristics of digital intelligence may sound beneficial, I believe the slow and organic development of knowledge in biological intelligence has distinct advantages. It allows for diverse interpretations and intuitions to flourish - laying the groundwork for creativity. In biological intelligence, each individual develops their understanding and internal representations of information over time through personal experiences and learning. This process results in unique interpretations and perspectives, essential for the development of new ideas.

For example, in learning a specific subject, people's grasp and internalization of concepts can vary significantly. Some may quickly and intuitively understand the material, while others might need more time and structured guidance to achieve the same level of comprehension. This variance can be attributed to different internal representations of prior knowledge. While this diversity in understanding and representation may present challenges in teaching, I believe that it is precisely this diversity in addition to the slow building of an intuition through curriculum learning that breeds creativity. Particularly, this diversity results in a rich landscape of perspectives, where each person's intuition, shaped by their unique experiences and knowledge, guides them towards exploring different ideas and solutions - eventually leading to what we call innovation.

If we accept this viewpoint that diversity in beliefs and representation as well as slow curriculum learning are all potentially responsible for human creativity, some questions arise:
* Is human hardware being non-uniform, or its potential non-determinism[^1], an advantage in innovative capabilities? 
* Does the diversity and complexity of biological neural hardware in humans play a crucial role in fostering creativity, suggesting that modern computers, with their current deterministic hardware architectures, may inherently lack the capability to exhibit creativity in the same manner as humans?
* How can we increase the creative capabilities of digital intelligences? Is curriculum learning, being similar to how humans learn, a possible solution? Is reinforcement learning a solution to increasing creativity, [as stated by Ilya Sutskever](https://www.youtube.com/watch?v=OPZxs6IXH00&ab_channel=AlignmentWorkshop)?

I hope this blog sparked some thoughts regarding what differences currently exist between biological and digital intelligence -- and how this impacts characteristics of intelligence such as creativity!

## Updates
<!-- these updates were added after my initial opinion developed on this hypothesis regarding advantage of biological intelligence over digital intelligence -->
This idea is further supported by a work comparing the capabilities of AI and children with regards to innovation \[[3](#3)\]. This work found that children were able to find novel causal relationships - or innovate - better than the best of today's Large Language Models (LLMs). In contrast, they found that modern LLMs excel at tasks involving imitation - relying on their large pretraining corpus. Therefore, this work further supports the idea that modern digital intelligences do not have the same creative abilities that humans do.

## References

<a name="1"></a>[1] Christophe Coupé et al. , "Different languages, similar encoding efficiency: Comparable information rates across the human communicative niche." Sci. Adv. 5, eaaw2594 (2019). DOI: 10.1126/sciadv.aaw2594

<a name="2"></a>[2] Reed, Charlotte M., and Nathaniel I. Durlach. "Note on information transfer rates in human communication." Presence 7, no. 5 (1998): 509-518.

<a name="3"></a>[3] Yiu, Eunice, Eliza Kosoy, and Alison Gopnik. "Imitation versus Innovation: What children can do that large language and language-and-vision models cannot (yet)?." arXiv preprint arXiv:2305.07666 (2023).

*This blog was developed with the assistance of ChatGPT.*

## Footnotes

[^1]: I believe that humans do not impose randomness onto the universe and therefore are completely deterministic ([hard-determinism](https://en.wikipedia.org/wiki/Hard_determinism)). However, the question of humans imposing randomness versus determinism remains a subject of ongoing philosophical debate.
