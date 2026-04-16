---
layout: post
title: The Future of Benchmarking and the Meaning of Life
date: 2026-01-30
description: What's a benchmarking paradigm that'll scale to human-level intelligence? What's the meaning of life? How are these related?
tags: benchmarking, agi, human-level intelligence, life meaning, consciousness
giscus_comments: true
categories: AI, philosophy
scholar: true
citation: true
---


**Higher-order thoughts:** *A philosophical thought experiment that I thought of around the end of 2023, that has meaningfully shaped my view of benchmarking AI and life. There are a surprising amount of practical takeaways from this thought experiment, described later on. Although I came up with this independently, much of this shares structure and beliefs from [Nick Bostrom's simulation argument](https://simulation-argument.com/simulation.pdf), just with a bit of a different perspective and some spice added to explain what the meaning of life is.*


I'm going to begin this blog by making three relatively weak assumptions, that I'll use for a somewhat deductive argument on what the meaning of life is, and how this directly relates to the future of benchmarking AI. Then I'll write some clarification, talk about the assumptions, and end with some practical takeaways.


First, the three assumptions:
* Assumption 1: *all civilizations will eventually study intelligence*
* Assumption 2: *any civilization studying intelligence will use simulations (plural is key here) primarily to further understand high-level intelligence and civilization. As a consequence, civilizations will emerge in those simulations*
* Assumption 3: *high-level intelligences being studied will eventually develop (relative) consciousness*

Later, I'll explain why these assumptions are relatively weak, but let's start with a question---"what do these assumptions imply?"


Under assumptions 1 and 2, every civilization eventually creates simulations to study intelligence---and new civilizations emerge *inside* those simulations. Those civilizations, seeking to study intelligence, will run their own simulations to study intelligence/civilization, and civilizations within those simulations will run their own simulations to study intelligence/civilization. This cycle continues... and, because of assumption 3, the intelligences studied at each layer develop (relative) consciousness. 

Think of this as a tree: a universe at level N spawns many simulated universes at level N+1, each of which spawns even more. The number of universes, and conscious entities, grows exponentially as you go deeper.

<figure class="text-center">
<img src="/assets/img/blog/meaning_of_life/simulations.png" alt="higher order simulation tree" style="transform: rotate(90deg); width: 350px; margin: 60px auto;" />
</figure>

Here's the crazy part: **the only thing we know for certain is that we're conscious.** Across all orders of (relative) universes, the vast majority of conscious entities sit near the *bottom* of that tree (there are exponentially more of them there, by a long shot[^1]). So, given no other information about where we are in the hierarchy, we're likely somewhere near the bottom... and probabilistically, there's a very small chance we're at the top.

If we're not at the top of this "consciousness/universe tree", then our universe exists inside of a simulation. If that's the case, then we can actually deduce why our universe exists through assumption 2. Particularly, assumption 2 tells us that our universe primarily exists to study intelligence and civilization. Sure, it's possible we're some higher-order being's pet project for other reasons---but given that assumption 2 says simulations are *primarily* for studying intelligence (i.e., most computation goes towards that), that's the most likely bet. This means we likely exist primarily for some higher-order universe trying to understand intelligence. **In other words, the meaning of our lives is to serve as an intelligence/civilization benchmark for a higher-order being.**


The meaning of our lives is to benchmark intelligence.



<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% --> 

Now there are a couple of questions you may be thinking:

1) **"How does this account for consciousness?"**

The key is that we focus on [consciousness as a *relative* term,](https://pmc.ncbi.nlm.nih.gov/articles/PMC9255957/) not an absolute one (this is a pretty mainstream view of consciousness). "We're conscious" really just means "we feel conscious to ourselves", we don't necessarily have (good) ways to verify the consciousnesses of other beings as third party observers. A great example of this is NPCs in a video game, who may appear completely unconscious from our vantage point, but may feel consciousness themselves. Our observation of other beings doesn't tell us anything about how they experience (or don't experience) their own world. The same applies in both directions: higher-order beings observing *us* might see us the same way we see those NPCs, as unconscious robots just running a python script. Our feeling of consciousness alone doesn't imply we're at the top of the consciousness hierarchy.[^2]


2) **"What if civilizations end?"**

This is where the definition of "civilization" gets tricky. You can view all of evolution---from bacteria to humans---as one continuous civilization, which hasn't had an ending yet (and I pretty strongly believe won't, until the heat death of our solar system or our universe). That's why I intentionally use the word **eventually**. It may be that a specific "chunk" of our civilization gets wiped out, such as when the [dinosaur "chunk" of our civilization's history was wiped out by a meteor](https://en.wikipedia.org/wiki/Chicxulub_crater) 66 million years ago, but our entire civilization of biological life on Earth has not yet been wiped out.


3) **"Ok, the assumptions have to be too strong, right?"**

Fortunately/unfortunately (depending on your worldview :), they're not that strong.

*Assumption 1* is probably the weakest. Civilization and automation are essentially synonymous---every major leap in human history has been a leap in automation. The transition from hunter-gatherers to farmers automated food acquisition, freeing up time for specialization and trade. The industrial revolution automated physical labor. The digital revolution automated information work. The logical completion of this chain is automating the thing that *makes* all of this automation possible---intelligence itself. In other words, any civilization on this trajectory will eventually study intelligence.[^3]

*Assumption 2* is also relatively weak---just look at us. There are probably millions to trillions of simulations launched daily to study intelligence (including [OpenAI Gym](https://gymnasium.farama.org/), [Isaac Lab](https://isaac-sim.github.io/IsaacLab/), and many others). While most of these environments are nowhere near the level of studying intelligences that are close to being conscious, they will get better over time, and the intelligences inside them will too. If we eventually achieve AGI, there is almost no doubt that we will benchmark it inside several simulations.

*Assumption 3* leans heavily on the idea of relative consciousness, i.e., that not all consciousness is the same, and what matters is that simulated intelligences eventually feel conscious *to themselves*. One argument that supports this idea is that consciousness is less of a special ingredient and more of an emergent consequence of having goals and a world model (Yann [has argued](https://lexfridman.com/yann-lecun-2/) for this perspective, which I agree with, but deserves more discussion). Consciousness is essentially an executive control mechanism that arises from having a single world model that needs to be configured for different situations---any system capable of anticipating outcomes via a world model will develop something like emotions as a side effect because it can predict whether things will end up good or bad. This perspective implies that we don't need to engineer consciousness separately for AGI to be conscious, but rather that it'll just be conscious as a side effect of having a world model, goals, and a sufficient amount of intelligence/agency.

So... are we just an AI benchmark? Are we being watched right now? 

<figure class="text-center">
<img src="/assets/img/blog/meaning_of_life/observers.png" alt="higher order simulation observers" width="400" />
</figure>

<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% -->

Maybe... I can't prove otherwise :). But either way, there are some surprisingly practical takeaways.


1) The first implication that sticks out for AI researchers is that benchmarking with agency (and not supervised learning) is probably the only true scalable benchmarking paradigm.

The simulation argument offers one illustration of this: given the probabilistic argument from earlier, we're probably towards the bottom of the universe hierarchy---meaning *we are likely* an agentic benchmark. Therefore, if humans are indeed AGI, we are evidence that benchmarking with agency works and scales to AGI. 

*We are likely proof that agentic benchmarking scales to AGI.*

<!-- No one annotated our history; the higher-order civilization just ran the simulation and watched what came out. -->

Even without the simulation argument, supervised benchmarking has several fundamental problems, that make it more likely that agentic benchmarking needs to be used for benchmarking intelligence. If we think about what it would actually take to create a supervised benchmark for near-human or superhuman intelligence: you'd need evaluators *at least as smart as the model* to know what "correct" looks like (at least, for non-easily verifiable tasks, which most creativity-bottlenecked jobs are). But if you had those, you'd have already solved the problem. Additionally, high-level intelligence is *defined* by producing novel, unanticipated behavior. You can't label breakthroughs before they exist---there was no way to benchmark the scientific breakthroughs made by Einstein before they happened. If future AI models make scientific breakthroughs, we won't be able to have supervised labels for those breakthroughs beforehand, we'll only ever be able to test if they work out in the longer-term future. Additionally, fixed supervised benchmarks almost always just get gamed over time via models overfitting or leaking information. 
<!-- *There is no cheating or reward-hacking in the real world.* -->

Eventually, if we were to continue to rely on supervised benchmarking, the amount of human labor needed to benchmark intelligences with supervised learning would become the biggest bottleneck in making progress. This is already becoming evident, where benchmarks such as [Humanity's Last Exam](https://agi.safe.ai/) took an enormous amount of human labor to create. Alternatively, benchmarking intelligences with agency (i.e., in a simulation) is essentially free, there is no manual annotation required. We can just run simulations indefinitely until intelligences do something impressive (i.e., the civilization running our universe :), where we discovered relativity and hopefully ASI soon).

I don't think enough people have caught onto this. In the current era of AI, benchmarks are becoming more and more meaningless, with the most accurate measure of performance basically becoming vibes ([here](https://x.com/karpathy/status/1896266683301659068?s=20) is a good tweet from Karpathy hinting at this). It's also becoming clear to me that this is the case in vision, where world model/policy evaluation is a mess and there really are no great standards. I think [ARC-AGI 3](https://arcprize.org/arc-agi/3/) is a great example of people starting to realize that benchmarking with agency is the future, but not enough work has been done on this front to really push the frontier of agency based benchmarking.

In the limit, benchmarking with agency will primarily involve determining whether AI can make big breakthroughs or discoveries, as these are the main intellectual drivers of human progress. Ideally we'd have accurate simulations to be able to run this quickly, so I could put my AI on a simulated island with no prior human knowledge, and it would eventually be able to discover general relativity or AGI/ASI ([reference](https://x.com/AlexiGlad/status/2026098685503844435?s=20)).


2) Achieving true Artificial Superintelligence is likely an inevitable part of any civilization. The easiest way to automate progress for any given civilization is to automate the thing that enables progress---intelligence.


<details markdown="1">
<summary><strong>More takeaways for the curious</strong></summary>

<br>

3) Each order of universe may have vastly different sizes, physical principles, and amounts of computation available. We can expect that as the order of a universe approaches infinity its size and compute will tend towards zero.

I've always strongly disliked the common physicist argument for why we can't live in a simulation---that our universe simulating our universe perfectly is infeasible ([some](https://www.sciencedaily.com/releases/2025/11/251110021052.htm) [references](https://pubmed.ncbi.nlm.nih.gov/28959729/)). Universes that we simulate will likely look very different than our universe---we'll probably focus heavily on universes that bias towards specific AI capabilities! Similarly, if **we** are living in a simulation, there's a high chance that the higher-order universe above ours looks completely different. What reason would the simulation above ours have to make the simulation completely the same? Why not simulate smaller phenomena, and only the phenomena they care about (for our universe that may be the effect of narcissism on the stability of civilizations ;)? Wouldn't that make simulation cheaper (and more entertaining :)? Just like an AI playing minecraft in a digital computer cannot make any meaningful deduction about our world, there is no real way with current technology that we can make a deduction about what higher-order universes above ours may be doing.


4) There is likely either one "order" of universes (ours), or a very very large number.
There's no real stable middle ground here---either the assumptions are false and no civilization ever creates conscious simulations (one order of universe), or the assumptions hold and the tree runs away to a very high depth. This is closely related to [Bostrom's trilemma](https://simulation-argument.com/simulation.pdf), where he argues that at least one of three things must be true: civilizations go extinct before reaching simulation capability, advanced civilizations choose not to run simulations, or we're almost certainly in one. The same all-or-nothing structure applies here: either the simulation tree never starts, or it's enormous and we're almost certainly near the bottom.


5) As mentioned earlier---just as we look at AI in simulation or the sims (as an extreme example) as not conscious; higher-order universes (potentially) simulating our universe may also look at us as not conscious!

</details>


These takeaways are obviously speculative, but I think they hold up pretty well given how weak the assumptions are. It's worth mentioning that some people have briefly discussed similar ideas:
* Of course, Nick Bostrom's original [Are you Living in a Computer Simulation](https://simulation-argument.com/simulation.pdf) paper
* [Negotiating Up and Down the Simulation Hierarchy: Why We Might Survive the Unaligned Singularity](https://www.lesswrong.com/posts/pRe34w3bqHqNeGHLc/negotiating-up-and-down-the-simulation-hierarchy-why-we)
* [Alignment by default: the simulation hypothesis](https://www.lesswrong.com/posts/zTNjZQdL7F4oAayvK/alignment-by-default-the-simulation-hypothesis)
<!-- * [Grok/elon](https://grok.com/share/bGVnYWN5_6337bb6c-2f64-442c-8ab3-9bae7e0588f4?rid=c76bba97-408c-4b62-a2e3-662096683507) -->

These are worth a read if you want to go deeper on the simulation rabbit hole. That said, there are a couple of issues with this argument in its current form. Aside from the assumptions potentially not being true, the probability argument also relies on a uniformity assumption: that each conscious entity counts equally, regardless of which level of the hierarchy it's at. But maybe higher-order beings have "more" consciousness in some meaningful sense, which would skew the probabilities of us being conscious at a lower vs high-order universe. I've also slightly over-indexed on the term "meaning of life." What I've described is the reason we may exist---this isn't necessarily always aligned with the meaning of our lives as we choose to live them. This thought experiment also isn't very falsifiable in its current form (at least with modern technology). Happy to hear any thoughts/flaws people can find!

In summary: the meaning of life and the future of benchmarking are likely the same thing. We likely exist as an intelligence benchmark, and the best way to benchmark intelligence is to let it loose in a simulated universe and see what happens. We are the proof of concept.

<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% --> 


## Footnotes

[^1]: A quick demonstration of how we're likely to be near the bottom of this universe hierarchy with conservative numbers: assume each universe runs at least 1,000 simulations, and there are at least 10 levels. The total number of universes across all levels is 1 + 1,000 + 1,000² + ... + 1,000⁹ ≈ 10²⁷. The probability of being in the top-level (non-simulated) universe is therefore roughly **1 in 10²⁷**...

[^2]: Talking about simulations so much always reminds me about [this amazing rick and morty episode.](https://en.wikipedia.org/wiki/The_Ricks_Must_Be_Crazy)

[^3]: An even stronger statement is plausible: evolution will eventually produce some species that studies intelligence because that maximizes long-term fitness (I realize I'm over-anthropomorphizing evolution here).