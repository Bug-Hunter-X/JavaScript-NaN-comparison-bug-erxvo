# TypeScript NaN Comparison Bug

This repository demonstrates a common yet subtle bug in JavaScript and TypeScript related to comparing NaN (Not a Number) values.

## The Bug

The `compare` function aims to compare two numbers and return -1, 0, or 1 based on their order.  However, it incorrectly handles NaN comparisons.  In JavaScript, `NaN === NaN` evaluates to `false`, meaning NaN is not equal to itself. The function should reflect this behavior.

## Solution

The solution involves using `isNaN()` to explicitly check for NaN values. This ensures correct comparison and avoids the erroneous 0 return value when comparing NaN with itself.

## How to Run

1. Clone this repository.
2. Open the `bug.ts` file to see the buggy code and `bugSolution.ts` file to see the solution.
3. Compile and run the code using a TypeScript compiler (tsc) and Node.js.