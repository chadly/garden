---
tags:
  - seedling
plantedAt: 2024-04-10
lastTendedAt: 2024-04-10
---
Q-learning belongs to a class of machine learning algorithms called reinforcement learning (RL). In RL, an agent learns to make decisions by interacting with an environment.

The agent takes actions and receives rewards or penalties based on those actions.

The goal involves maximizing the cumulative reward over time. Q-learning specifically learns a Q-function that estimates the expected future reward for taking an action in a given state.

### Q-learning Estimates the Optimal Action-Value Function

The core idea behind Q-learning involves estimating the optimal action-value function, denoted as Q(s, a). This function represents the expected future reward for taking action a in state s, assuming the agent follows the optimal policy thereafter.

The Q-function accounts for both the immediate reward and the discounted future rewards.

By learning the optimal Q-function, the agent can make decisions that maximize long-term rewards.
