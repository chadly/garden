---
tags: [seedling]
plantedAt: 2024-03-22
lastTendedAt: 2024-03-22
---
Quantization, in the context of machine learning models like large language models (LLMs), is a technique used to optimize the model's performance.

This is generally done to allow a model to run on lower-end hardware, e.g. less memory.

The process of quantization involves a trade-off between *model size*/*speed* and *accuracy*.

### Lower Precision

At a lower level, it achieves the increased performance by lowering the precision of model parameters. For instance, if a model's parameters are stored as 32-bit floating point numbers (FP32), they can be converted to 8-bit integers (INT8).

Integers take up less space in memory and can be processed more quickly as lower-precision operations (e.g. matrix multiplication) generally require fewer computational resources.

### Specialized Hardware

TPUs and GPUs have optimizations for low-precision arithmetic, allowing them to run these quantized models even faster.
