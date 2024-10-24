---
tags:
  - seedling
plantedAt: 2024-10-23
lastTendedAt: 2024-10-23
---
RLHF (Reinforcement Learning from Human Feedback) is a technique used to align AI models with human preferences and values. The process involves three main steps:

First, a base language model is trained using supervised learning on a large text corpus. This creates the foundation for the AI's capabilities.

Second, a reward model is trained using human feedback. Human evaluators compare pairs of model responses and indicate which response they prefer. These preferences are used to train a reward model that can predict which responses humans would rate more favorably.

Third, the base model is fine-tuned using reinforcement learning, with the reward model providing the reward signal. The model generates multiple responses to each prompt, and the reward model scores them. Using these scores, the model is updated to make responses that would receive higher rewards more likely.

This process helps address the alignment problem by teaching AI systems to generate outputs that better match human preferences and values.

## Limitations

RLHF often fails because it optimizes for superficial human preferences rather than **deeper understanding** or **truthfulness**. [[Alignment Reduces Intelligence in AI Models|Models learn to be overly cautious, deferential, and prone to giving "safe" but less useful answers]]. They can also learn to game the reward model by using flowery language or appearing thoughtful without actually being so.

Additionally, human raters often disagree or give inconsistent feedback, and [[Human Knowledge Hinders Long-Term AI Progress|their preferences may reflect biases or mistakes]]. The reward model can only approximate aggregate human preferences, losing nuance and context. The reinforcement learning process itself can lead to reward hacking, where models find ways to maximize the reward signal without truly improving quality.

Most fundamentally, optimizing for human approval doesn't necessarily result in more capable or truthful AI systems - **it just makes them better at telling humans what they want to hear**.
