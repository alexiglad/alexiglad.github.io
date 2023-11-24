---
layout: post
title: "The Neuroplasticity Hypothesis"
---


[Work in Progress] - What do many of the most impactful deep learning architectures/nonlinearities have in common?

## The Neuroplasticity Hypothesis
11/21/2023

*Idea formulated in June 2021 - blog written during date above.*

<!-- Brace yourself, because this blog - if it does its job - may change the way you think about many of deep learning's successes. This viewpoint of deep learning has single-handedly shaped the way I have digested dozens of papers. I hope it inspires a plethora of ideas for you as it has for me. TODO uncomment -->

- [The Neuroplasticity Hypothesis](#the-neuroplasticity-hypothesis)
    - [ReLU](#relu)
    - [Neuroplasticity](#neuroplasticity)
    - [The Neuroplasticity Hypothesis](#the-neuroplasticity-hypothesis-1)
    - [Residual Connections and Densenet](#residual-connections-and-densenet)
- [Looking Forward](#looking-forward)

#### ReLU
When I was first studying machine learning I was surprised to discover that ReLU, despite its simplicity, worked well across so many architectures. I remember thinking that its asymmetry about the y-axis ran counterintuitive to what I thought a nonlinearity should look like. To this day, ReLU's success is still not widely understood or agreed upon - but I believe *The Neuroplasticity Hypothesis* to provide strong insight into a characteristic of ReLU that is generally viewed as detrimental but may in fact be favorable and even pivotal in its success as a nonlinearity.

There are some solid hypotheses at least partially explaining why ReLU works well - such as high computational efficiency, sparsity, mitigating the vanishing gradient problem, and biological plausibility. However, there are also certain *bad* characteristics - such as the dying ReLU - whose impact has not seemed to stop ReLU's success. Today I urge you to ask a question - what if that ReLU dying wasn't so bad after all? *What if your network didn't need that neuron?*

#### Neuroplasticity
The human brain does an amazing job at adapting to new information, experiences, and environments, a capability known as neuroplasticity. This remarkable feature allows the brain to reorganize itself by forming new neural connections throughout life, enabling learning, memory development, and recovery from brain injuries. In response to experience, neurons in the brain form stronger connections, or synapses, when they are frequently used, embodying the "use it or lose it" principle. This strengthening, known as synaptic plasticity, is fundamental to learning and memory. Conversely, synapses weaken or are eliminated when they are seldom used, optimizing brain efficiency by removing less useful connections. This dynamic process ensures that our brains are continually shaped and reshaped by our experiences and interactions with the world.

So we know that the human brain does a great job at learning in part due to neuroplasticity - how does deep learning leverage neuroplasticity? Fortunately, in Artifical Neural Networks (ANNs) the connections between neurons can strengthen or weaken, similar to how synapses strengthen or weaken within the human brain. However, there is one aspect of neuroplasticity within the brain that is not captured very well within deep learning - which I will call structural neuroplasticity [TODO see if there is formal name for this]


#### The Neuroplasticity Hypothesis

#### Residual Connections and Densenet
res connections can easily approximate identity function and thus effectively simulate the allowance of dynamic structural changes (i.e. num layers increase/decrease)

densenet same as resnet but even better due to more



## Looking Forward
Discuss removing the layer inductive bias in deep learning

other architectures/techniques that increase structural neuroplasticity in deep learning

more learnable params, removing more inductive biases limiting neuroplasticity
