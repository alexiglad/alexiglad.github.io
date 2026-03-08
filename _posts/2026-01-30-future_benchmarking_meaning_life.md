---
layout: post
title: The Future of Benchmarking and the Meaning of Life
date: 2026-01-30
description: What's a benchmarking paradigm that'll scale to human-level intelligence? What's the meaning of life? How are these related?
tags: benchmarking, agi, human-level intelligence, life meaning, consciousness
giscus_comments: true
categories: AI, philosophy
---

**Higher-order thoughts:** *A philosophical thought experiment that I meditated around the end of 2023, that has meaningfully shaped my view of benchmarking AI and life. There are a surprising amount of practical takeaways from this thought experiment, described later on. Much of this shares structure and beliefs from [Nick Bostrom's simulation argument](https://simulation-argument.com/simulation.pdf), just adding a little spice to explain what the meaning of life is.*


I'm going to begin this blog by making three relatively weak assumptions, that I'll use for a somewhat deductive argument regarding what the meaning of life is, and how this directly relates to the future of benchmarking AI. Then I'll write some clarification, talk about the assumptions, and end with some practical takeaways.


First, the three assumptions:
* Assumption 1: *all civilizations will eventually study intelligence*
* Assumption 2: *any civilization studying intelligence will use simulations (plural) to study intelligence, and civilizations will emerge in those simulations*
* Assumption 3: *high level intelligences will develop (relative) consciousness*

Later, I'll explain why these assumptions are relatively weak, but let's start with a question---"what do these assumptions imply?"



Given these three assumptions, the argument unfolds fairly naturally. Under assumptions 1 and 2, every civilization eventually creates simulations to study intelligence---and new civilizations emerge *inside* those simulations. Those civilizations, in turn, run their own simulations, and so on. Because of assumption 3, the intelligences at each layer develop (relative) consciousness. Think of this as a tree: a universe at level N spawns many simulated universes at level N+1, each of which spawns even more. The number of universes---and conscious entities---grows exponentially as you go deeper.[^1]

Here's the key insight: **the only thing we know for certain is that we're conscious.** Across all orders of universe, the vast majority of conscious entities sit near the *bottom* of that tree (there are exponentially more of them there). So, absent any other information about where we fall in the hierarchy, we're almost certainly somewhere near the bottom---not at the top. And if we're near the bottom, assumption 2 tells us exactly why our simulation is running. **Thus, the meaning of life is, quite literally, to serve as a benchmark for the study of intelligence by some higher-order being.**


<figure class="text-center">
<img src="/assets/img/blog/meaning_of_life/simulations.png" alt="higher order simulation tree" style="transform: rotate(90deg); width: 350px; margin: 60px auto;" />
</figure>


<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% --> 

Now there are a couple of questions you may be thinking:
1) **"How does this account for consciousness?"**

The key is that consciousness is a *relative* term, not an absolute one. "We're conscious" really just means "we feel conscious to ourselves"---we have no external way to verify this. Think about NPCs in a video game: they appear completely unconscious to us, but that's from our vantage point. Does that tell us anything about how they experience (or don't) their own world? Not really. The same applies in both directions: simulated intelligences that seem unconscious to us can still develop their own relative consciousness over time, and a higher-order universe observing *us* might see us the same way we see those NPCs. Our feeling of consciousness alone doesn't imply we're at the top of the hierarchy.
<!-- TODO fix woding here less ai -->

2) **What if civilizations end?**


This is where the definition of "civilization" gets tricky. If you view all of evolution---from bacteria to humans---as one continuous civilization, there actually hasn't been a clean ending yet. That's why I intentionally use the word **eventually**.


3) **"Ok, the assumptions have to be too strong"**

Fortunately/unfortunately (depending on your worldview :), they're not that strong.

*Assumption 1* is perhaps the weakest. Civilization and automation are essentially synonymous---every major leap in human history has been a leap in automation. The transition from hunter-gatherers to farmers automated food acquisition, freeing up time for specialization and trade. The industrial revolution automated physical labor. The digital revolution automated information work. The logical endpoint of this chain is automating the thing that *makes* all of this automation possible---intelligence itself. Any civilization on this trajectory will eventually study intelligence. (In fact an even stronger statement: evolution will eventually produce some species that does this. I'm overanthropomorphizing evolution here, but hopefully the point holds.)

*Assumption 2* is also pretty weak---just look at us. There are probably millions to trillions of simulations launched daily to study intelligence ([OpenAI Gym](https://gymnasium.farama.org/), [Isaac Lab](https://isaac-sim.github.io/IsaacLab/), and many others). These get better over time, and the intelligences inside them do too. Given assumption 3, some of those intelligences will eventually develop their own relative consciousness---at least by their own definitions.

Given all this, it really makes you think---I wonder what order simulation we're in, and who's watching us right now. Are we just an AI benchmark?

<figure class="text-center">
<img src="/assets/img/blog/meaning_of_life/observers.png" alt="higher order simulation observers" width="400" />
</figure>

<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% --> 

### Practical Takeaways
1) Benchmarking with agency (and not supervised learning) is the only true scalable benchmarking paradigm

I don't think enough people have really caught onto this. In the current era of AI, benchmarks are becoming more and more meaningless, with the most true measure of performance basically becoming vibes ([here](https://x.com/karpathy/status/1896266683301659068?s=20) is a good tweet from Karparthy hinting at this). It's also becoming clear to me that this is the case in vision, where world model/policy evaluation is a mess and there really are no great standards. I think [ARC-AGI 3](https://arcprize.org/arc-agi/3/) is a great example of people starting to realize that benchmarking with agency is the future, but not enough work has been done on this front to really push the frontier of agency based benchmarking.

In the limit, benchmarking with agency will primarily involve determining whether AI can make big breakthroughs or discoveries. Ideally we'd have accurate simulations to be able to run this quickly, so I could put my AI on a simulated island with it having no prior human knowledge, and it would eventually be able to discover general relativity or AGI/ASI ([reference](https://x.com/AlexiGlad/status/2026098685503844435?s=20)).


2) Achieving true Artificial Superintelligence is likely an inevitable part of any civilization.

It's that simple... the easiest way to automate progress for any given civilization is to automate the thing that enables progress---intelligence.


3) Each order of universe may have vastly different sizes, physical principles, and amounts of computation available. We can expect that as the order of a universe approaches infinity it's size and compute will tend towards zero.

I've always strongly disliked the common physicist argument for why we can't live in a simulation---that our universe simulating our universe perfectly is infeasible ([some](https://www.sciencedaily.com/releases/2025/11/251110021052.htm) [links](https://pubmed.ncbi.nlm.nih.gov/28959729/)). Universes that we simulate will likely look very different than our universe--we'll probably focus heavily on universes that bias towards specific AI capabilities! Similarly, if **we** are living in a simulation, there's a high chance that the higher-order universe above ours looks completely different. What reason would the simulation about ours have to make the simulation completely the same? Why not simulate smaller phenomena, and only the phenomena they care about (for our universe that may be the effect of narcissism on the stability of civilizations ;)? Wouldn't that make simulation cheaper (and more entertaining :)? Just as an AI playing minecraft in a digital computer cannot make any meaningful deduction about our world, there is no real way with current technology that we can make a deduction about what higher-order universes may be doing.

4) There is likely either one "order" of universes (ours), or a very very large number.
There's no real stable middle ground here---either the assumptions are false and no civilization ever creates conscious simulations (one order of universe), or the assumptions hold and the tree runs away to effectively infinite depth. This is closely related to [Bostrom's trilemma](https://simulation-argument.com/simulation.pdf), where he argues that at least one of three things must be true: civilizations go extinct before reaching simulation capability, advanced civilizations choose not to run simulations, or we're almost certainly in one. The same all-or-nothing structure applies here: either the simulation tree never starts, or it's enormous and we're almost certainly near the bottom.

5) Just as we look at AI in simulation or the sims (as an extreme example) as not conscious; higher-order universes (potentially) simulating our universe may also look at us as not conscious!


### Related Works

There are some related works to seem to have loosely pointed out something similar, but I haven't seen anything as comprehensive/from first principles as this.
* Of course, Nick Bostrom's original [Are you Living in a Computer Simulation](https://simulation-argument.com/simulation.pdf) paper
* [Negotiating Up and Down the Simulation Hierarchy: Why We Might Survive the Unaligned Singularity](https://www.lesswrong.com/posts/pRe34w3bqHqNeGHLc/negotiating-up-and-down-the-simulation-hierarchy-why-we)
* [Alignment by default: the simulation hypothesis](https://www.lesswrong.com/posts/zTNjZQdL7F4oAayvK/alignment-by-default-the-simulation-hypothesis)
* [Grok/elon](https://grok.com/share/bGVnYWN5_6337bb6c-2f64-442c-8ab3-9bae7e0588f4?rid=c76bba97-408c-4b62-a2e3-662096683507)


### Closing Thoughts

Aside from the assumptions potentially not being true, the probability argument also relies on a uniformity assumption: that each conscious entity counts equally, regardless of which level of the hierarchy it's at. But maybe higher-order beings have "more" consciousness in some meaningful sense, which would skew the probabilities. All we can really say for certain is that *we* feel conscious---assuming other simulated entities feel the same way (and count equally) is a non-trivial leap.

This thought experiment also isn't very falsifiable in it's current form (at least with modern technology). Happy to hear any thoughts/flaws people can find in the thought experiment!

<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% --> 


## Footnotes

[^1]: A quick demonstration of how we're likely to be near the bottom of this universe hierarchy with conservative numbers: assume each universe runs at least 1,000 simulations, and there are at least 10 levels. The total number of universes across all levels is 1 + 1,000 + 1,000² + ... + 1,000⁹ ≈ 10²⁷. The probability of being in the top-level (non-simulated) universe is therefore roughly **1 in 10²⁷**...

<!-- TODO AFTER -->
<!-- ctrl f argument, delete? change to thought experiment? -->
<!-- make so dont have headers and somehow flows better? -->
<!-- do a search for stuff sounding ai generated, make more similar to my tone/explain better -->
<!-- check above footnote math -->
<!-- claude, gemini, analyze critically, give honest opinion if is new and how good it is -->