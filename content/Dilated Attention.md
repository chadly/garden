---
tags:
  - evergreen
plantedAt: 2023-09-18
lastTendedAt: 2023-09-20
---
Dilated attention expands the attentive field exponentially as the distance between tokens grows. This means that as tokens are farther apart in a sequence, the attention mechanism can still capture their relationships without the need to compute attention scores for every possible pair of tokens.

Dilated attention achieves **linear computational complexity**. This addresses the Quadratic Complexity issue of the original [[Self-attention Mechanism|self-attention mechanism]], making it feasible to handle very long sequences.

The dilated attention mechanism is designed to be a direct replacement for the standard attention mechanism in Transformers. This means **it can be easily integrated** into existing Transformer architectures without significant modifications.

This allows the model to **capture long-range dependencies** without the computational burden of the original self-attention mechanism.

## Consequences of a Broadened Attention Field

### Efficiency in Handling Long Sequences

Traditional attention mechanisms struggle with Quadratic Complexity when dealing with extremely long sequences. By broadening the attention field for distant tokens, the model can handle longer sequences without getting bogged down in computation.

### Loss of Fine-Grained Details

As the attention field broadens, there's a potential trade-off between capturing global context and losing some fine-grained details. Just like when you zoom out on a camera to capture a broader scene, you might miss some minute details present in the scene.

### Improved Contextual Understanding

A broader attention field means that the model can consider a more extensive context when making decisions. For tasks where understanding the broader context is crucial (e.g., understanding the theme of a long document), this can be beneficial.

### Potential for Noise

With an expanded attention field, there's a risk of the model considering irrelevant or noisy information. If the model gives weight to distant tokens that aren't relevant to the current processing task, it might lead to less accurate results.

## Parallels with Human ADHD

### Depth Over Breadth

An [[ADHD|ADHD person]] can [[hyperfocus]] to the point where there attention becomes intense and granular. They might notice details that others overlook and can delve deep into tasks or topics.

Dilated Attention allows Longnet to focus on specific tokens of a sequence with greater intensity, especially when capturing long-range dependencies. This means the model can pick up on nuanced relationships in the data that might be missed by other models with shorter context windows.

### Categorization and Layering

LongNet breaks up the input sequence into chunks and creates layers of abstraction. This is how it keeps track of so much information.

Similarly, ADHD people create "piles of shit". They categorize things and move things around in "buckets". They do it with mental and cognitive processes but also with physical things.

### Sensitivity to Context

Some individuals with ADHD may be more sensitive to the broader context in which information is presented. This sensitivity can lead to a **more holistic understanding of situations**, as they might pick up on contextual cues that others might overlook.

### Challenges with Details

On the flip side, some individuals with ADHD might struggle with tasks that require careful attention to detail, leading them to focus more on the overall context or broader patterns. This tendency could be interpreted as a preference for **"seeing the bigger picture" over getting bogged down in minutiae**.

### Filtering Out Noise

One of the challenges with long sequences in models is the potential for "noise" or irrelevant information. LongNet's dilated attention can be seen as a way to filter out this noise and focus on the most relevant parts of the data. In a similar vein, hyperfocus allows individuals with ADHD to filter out external distractions and zero in on a specific task.

### Resource Allocation

Just as LongNet allocates computational resources based on the relevance of tokens (giving more attention to certain tokens and less to others), hyperfocus can be seen as a way of allocating cognitive resources. During hyperfocus, a significant amount of cognitive energy is directed towards a specific task, often leading to increased productivity or creativity in that area.

### Overcoming Limitations

LongNet's dilated attention is a solution to the quadratic complexity problem of traditional attention mechanisms, allowing it to handle longer sequences. Similarly, hyperfocus can be seen as a way for individuals with ADHD to overcome some of the challenges associated with their condition, such as distractibility or difficulty sustaining attention.

## Parallels with Speed Reading

Humans read around 2 billion words in a lifetime. LongNet can "read" half a human lifetime of information instantly.

When speed reading, you don't read every single word with equal focus. Instead, you quickly scan the page, letting your eyes jump to and linger on keywords, phrases, or sentences that seem crucial. You're extracting the main ideas and concepts without getting bogged down by every detail. Your brain is prioritizing certain parts of the text over others to grasp the overall meaning in a shorter amount of time.

> In the bustling city, amidst the towering skyscrapers, John found a quaint little bookstore that sold rare antique books.  

If you were "speed reading" or applying an "attention mechanism" to this sentence, you might focus more on "John," "quaint little bookstore," and "rare antique books." These words and phrases give you a quick snapshot of the main idea. The rest provides context and flavor but might not be as crucial for a high-level understanding.

In neural networks, the attention mechanism works similarly. When processing a sequence of data (like a sentence), it doesn't treat every piece of data with equal importance. Instead, it "speed reads" by allocating more weight or "attention" to certain parts that are deemed more relevant for the task at hand, while still considering the overall context.