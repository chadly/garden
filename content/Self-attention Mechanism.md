---
tags:
  - evergreen
plantedAt: 2023-09-17
lastTendedAt: 2023-09-20
---
Self-attention allows a model to weigh the importance of different words (or tokens) in a sequence relative to every other word.

> The cat, which was black, sat on the mat

When trying to understand the word *sat*, the words *cat* and *mat* might be more relevant than *black*. Self-attention provides a mechanism to assign **different weights to different words** based on their relevance.

Instead of processing the sequence step-by-step, the attention mechanism allows the model to focus on different parts of the input sequence **simultaneously**, weighing the importance of each part based on its relevance to the current processing step.

In simpler terms, for every word or token being processed, the model can "attend to" or "focus on" every other word in the sequence, regardless of its position. This means that the model can directly draw relationships between distant words without having to rely on intermediate steps or a maintained hidden state.

## Components

### Query, Key, and Value (Q, K, V)

For each word in the sequence, the model creates three vectors:

#### Query Vector

This represents the word we're focusing on. It's like asking a question: "Which words in the sequence are most relevant to you?"

#### Key Vector

Represents all the words in the sequence. They are like answers to the question posed by the Query. Each Key vector will give an indication of how relevant its corresponding word is to the Query word.

#### Value Vector

Contains the actual content of the words. Once we know which words (Keys) are relevant to our Query, we use the Value vectors to aggregate information.

These vectors (Q, K, V) are not manually designed. Instead, they are derived by multiplying the Word Embeddings with three different weight matrices that the model learns during training.

#### Attention Score

For a given word (using its Query vector), the model calculates an attention score with every other word in the sequence using their Key vectors. This score indicates how relevant each word (Key) is to the word we're focusing on (Query). The dot product is a common method used to compute this score because it measures the similarity between the Query and Key vectors.

#### Softmax

The attention scores from the previous step are then normalized using the softmax function. This ensures two things:

* The scores are squashed between 0 and 1.
* The scores sum up to 1 across all words.

This means that after the softmax, the scores can be interpreted as probabilities, indicating the relevance of each word to the query word.

#### Weighted Sum

Using the normalized attention scores (weights) from the softmax step, the model computes a weighted sum of the Value vectors. This means that words deemed more relevant (higher attention scores) will have a more significant influence on the final representation of the Query word.

### Multi-Head Attention

Instead of just getting one set of attention-weighted representations (as described above), the Transformer does this multiple times in parallel, with different weight matrices for Q, K, and V. This is like looking at the sequence from multiple perspectives or "heads".

After obtaining the outputs from all these heads, they are concatenated and then linearly transformed to produce a single representation. This allows the model to capture various types of relationships and nuances in the data.

### Benefits

#### Global Context

Unlike RNNs or LSTMs, which process sequences word-by-word and might have difficulty maintaining long-term dependencies, self-attention can consider the entire sequence at once. This allows it to capture relationships between words regardless of their distance from each other.

#### Parallelization

Since each word or token is processed simultaneously, self-attention is highly parallelizable, making it efficient on modern hardware accelerators.

### Limitations

#### Quadratic Complexity

The primary limitation of the self-attention mechanism in its original form is its quadratic computational complexity with respect to sequence length. This makes it challenging to handle very long sequences, which is what innovations like Dilated Attention aim to address.