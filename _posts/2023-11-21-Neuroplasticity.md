---
layout: post
title: "The Neuroplasticity Hypothesis"
---


What do many of the most impactful deep learning architectural components have in common?

## The Neuroplasticity Hypothesis
11/21/2023

*Idea formulated in June 2021 - blog started during date above.*


- [The Neuroplasticity Hypothesis](#the-neuroplasticity-hypothesis)
    - [ReLU Intuition](#relu-intuition)
    - [Neuroplasticity](#neuroplasticity)
    - [The Neuroplasticity Hypothesis](#the-neuroplasticity-hypothesis-1)
    - [Residual Connections and Densenet](#residual-connections-and-densenet)
- [Related Works](#related-works)
- [Looking Forward](#looking-forward)
- [References](#references)
- [Footnotes](#footnotes)

#### ReLU Intuition
When I was first started studying machine learning I was surprised to discover that ReLU, despite its simplicity, worked well across so many architectures. I remember thinking that its asymmetry about the y-axis ran counterintuitive to what I thought a nonlinearity should look like. To this day, ReLU's success is still not widely understood or agreed upon.

There are some solid hypotheses at least partially explaining why ReLU works well - such as high computational efficiency, sparsity, mitigating the vanishing gradient problem, and biological plausibility. However, there are also certain *bad* characteristics - such as the dying ReLU - whose impact has not seemed to stop ReLU's success. Today I urge you to ask a question - what if that ReLU dying wasn't so bad after all? *What if your network didn't need that neuron?*

#### Neuroplasticity
The human brain does an amazing job at adapting to new information, experiences, and environments, a capability known as neuroplasticity \[[1](#1)\]. This remarkable feature allows the brain to reorganize itself by forming new neural connections throughout life, enabling learning, memory development, and recovery from brain injuries. In response to experience, neurons in the brain form stronger connections, or synapses, when they are frequently used, embodying the "use it or lose it" principle. This strengthening, known as synaptic plasticity, is fundamental to learning and memory. Conversely, synapses weaken or are eliminated when they are seldom used, optimizing brain efficiency by removing less useful connections. This dynamic process ensures that our brains are continually shaped and reshaped by our experiences and interactions with the world.

So we know that the human brain does a great job at learning and adapting due to neuroplasticity---how does deep learning leverage neuroplasticity? 

In Artifical Neural Networks (ANNs) the connections between neurons can strengthen or weaken, similar to how synapses strengthen or weaken within the human brain. This is the crux of the "learning" in deep learning. However, there is one aspect of neuroplasticity within the brain that is not captured very well within deep learning, which is structural neuroplasticity. Structural neuroplasticity refers to the brain's ability to physically change its structure over time. In the framework of deep learning, this is not generally possible due to the inherent layer structure of ANNs. Rather, in the case of *vanilla* fully connected layers, all neurons in a layer are connected to all neurons in the subsequent layer---but are not directly connected to any layers before or after that layer and cannot create or remove connections.

<!-- (aside from in residual connections) -->
<!-- (although they can simulate the removal of connections) -->


#### The Neuroplasticity Hypothesis

The Neuroplasticity Hypothesis posits that the success of several architectural components within deep learning, such as ReLU as well as Residual Connections, can be attributed to their ability to approximate structural neuroplasticity in the brain.

As discussed earlier, using ReLU can cause the dying ReLU "issue". However, in the case of structural neuroplasticity, this "issue" begins to look like an advantage. Particularly, using ReLU allows for the simulation of neurons effectively being removed from a model, simulating useless synapses being removed in the brain. Thus, if a neuron is not necessary for solving a problem, and it constantly receives a negative gradient, it being dead can help ensure a neural network does not use it! With traditional nonlinearities such as sigmoid or tanh this would not be easy to approximate.

#### Residual Connections and Densenet

Residual Connections \[[4](#4)\] *somewhat[^1]* simulate neurons being able to connect to other layers. If this connection ends up being useful, it will be optimized for resulting in neurons that leverage it. However, if hurtful, residual connections will optimize to avoid using them and approximate the identity function. This allows neural network's behavior to essentially change to simulate including one layer rather than two where the residual connection exists. Both of these things simulate structural neuroplasticity, giving another unique perspective on why Residual Connections work!

Densenet \[[5](#5)\] can be seen as similar to Residual Connections---just without the ability to approximate the identity function. Particularly, the characteristic feature of Densenets having layers concatenated to every other future layer can be seen as similar to neurons being able to connect to any arbitrary neuron. 



## Related Works

Neural Architecture Search (NAS) \[[2](#2)\] is perhaps the most related work to this hypothesis within deep learning. So why has NAS been less popular in recent years?

I don't have the best response to this as I have not extensively studied NAS and was not in the field when it was popular. However, my primary hypothesis is the nature of most NAS algorithms requiring bilevel optimization or having a discrete set of candidate architectures.

Ideally, rather than having an outer loop and trying things, either through gradient descent as in DARTS \[[3](#3)\], or via complex search algorithms over a discrete state space, NAS would work dynamically within a single training loop over a single model. That is, the layers/structures helpful for performance would dynamically be added or removed.

This is somewhat simulated in the one-shot model \[[6](#6)\], where a single model is trained that contains all operations. However, this still has a limitation in that it generally drops an entire operation over a layer or a whole layer at once. Ideally, operations over singular neurons would be able to be learned during training as they are during the constant adaptation of the human brain.


<!-- mention how is generally different from NAS, goal is to learn an architecture during a single training instance (as the brain does not have episodes in the real world). Right now different architectures are tried, subbed out, etc. Ideally would be to just differentiably learn during training the best arch that could grow or diminish through backprop and not through some higher order algorithm governing search. ideally we could incorporate findings from NAS into an arch that can dynamically involve during training without having to backout and use some algorithm to retry/pick another arch.  -->

<!-- ideally would not have a bilevel optimization problem **and** not have a discrete set of candidate architectures. That way can just optimize in a single training loop. -->

<!-- * NAS generally simulates the adding of a bunch of neurons (and effectively the synapses between them) at once in a layer (width)/or through more layers (depth) incrementally and via a non-smooth operation. In real biological neural networks, this occurs smoothly and much more chaotically. Also, neurons could connect to any other neurons and not just the "layer" afterward. Moving deep learning layers -> graph. -->

## Looking Forward

The first iductive bias within deep learning that I see being explored due to this hypothesis is the natural layer structure of deep neural networks. Particularly, one could try to train models without layers, but rather, neurons being able to connect to any other neuron. This would ultimately transform artificial neural networks from having a sequential layer based structure to having a graph based structure---better simulating neuroplasticity within the human brain. 

The biggest issue with taking this step immediately is computational efficiency. Conducting a forward pass given nodes of a graph with modern hardware is much more expensive than conducting a forward pass with sequential layers when the number of graph nodes is significantly higher than the number of layers. Additionally, this would require a differentiable algorithm to dynamically create and remove connections (synapses) between arbitrary neurons.

Long-term, I expect architecture/techniques that further simulate structural neuroplasticity within deep learning to become more and more popular for the same reasons as the architectures/components mentioned above. This could look like more learnable parameters as well as removing more inductive biases that limit neuroplasticity.


## References

<a name="1"></a>[1] Puderbaugh, Matt, and Prabhu D. Emmady. "Neuroplasticity." In StatPearls [Internet]. StatPearls Publishing, 2023.

<a name="2"></a>[2] Weng, Lilian. (Aug 2020). Neural architecture search. Lil’Log. https://lilianweng.github.io/posts/2020-08-06-nas/.

<a name="3"></a>[3] Liu, Hanxiao, Karen Simonyan, and Yiming Yang. "Darts: Differentiable architecture search." arXiv preprint arXiv:1806.09055 (2018).

<a name="4"></a>[4] He, Kaiming, Xiangyu Zhang, Shaoqing Ren, and Jian Sun. "Deep residual learning for image recognition." In Proceedings of the IEEE conference on computer vision and pattern recognition, pp. 770-778. 2016.

<a name="5"></a>[5] Huang, Gao, Zhuang Liu, Laurens Van Der Maaten, and Kilian Q. Weinberger. "Densely connected convolutional networks." In Proceedings of the IEEE conference on computer vision and pattern recognition, pp. 4700-4708. 2017.

<a name="6"></a>[6] Bender, Gabriel, Pieter-Jan Kindermans, Barret Zoph, Vijay Vasudevan, and Quoc Le. "Understanding and simplifying one-shot architecture search." In International conference on machine learning, pp. 550-559. PMLR, 2018.


## Footnotes

[^1]: I say Residual Connections *somewhat* simulate neurons being able to connect to future layers because they can be seen as being connected to a future layer through an identity matrix. However, in the standard definition of layers being connected involving a learnable parmeter matrix for the weight or *synaptic connection* between each neuron, they are not connected. 