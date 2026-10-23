# Problem 1: Three ways to sum to n

Single page: [index.html](index.html). Open it through any static server (ES modules don't load from `file://`):

```bash
npx http-server . -p 5180
```

Then visit `http://localhost:5180/problem1/`.

## What it shows

Every number `i` is a column of `i` blocks, so `1 + 2 + … + n` is a 3D staircase built with three.js.

| Method | Idea | Time | Space |
| --- | --- | --- | --- |
| A · Loop | add 1, then 2, then 3… | O(n) | O(1) |
| B · Gauss formula | two staircases make an `n × (n+1)` rectangle, halve it | O(1) | O(1) |
| C · Recursion | `sum(n) = n + sum(n − 1)` | O(n) | O(n) call stack |

- **Loop**: each step drops one column in and updates the running total; the current line of code is highlighted.
- **Formula**: a copy of the staircase flips 180° and slots on top, the `n` and `n + 1` sides get labels, then the copy fades out (÷ 2).
- **Recursion**: calls push ghost columns and stack frames on the way down; on the way back up, returns fill the columns and pop the frames.

Below the 3D view:
- a table of how the work grows with n (recursion overflows the stack past roughly 10k calls)
- a "Try it" box that runs the real functions and times them; it warns when the result goes past `Number.MAX_SAFE_INTEGER`

## Controls

Play / Pause, Step, Reset, an `n` slider (1–20), a speed slider, drag to orbit and scroll to zoom. On the keyboard, ← → switch tabs and Space plays or pauses. Light and dark themes are supported, and `prefers-reduced-motion` turns the animations off.
