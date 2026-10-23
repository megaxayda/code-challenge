# Problem 3: Messy React

Single page guide: [index.html](index.html). Serve it statically (it uses three.js ES modules):

```bash
npx http-server . -p 5180
```

Then visit `http://localhost:5180/problem3/`.

## What's inside

1. **Hero (three.js)**: 75 coloured lines start as a tangled ball of spaghetti. As you scroll they comb themselves into five neat layers, one per level. Each layer label links to its section.
2. **Method**: Read → Pin behaviour → Classify → Fix in layers → Verify.
3. **Identify & classify**: five questions asked in order; the first "yes" gives the level. Also covers which tools catch which level (ESLint hooks rules, TS strict, StrictMode, Profiler).
4. **The five levels, easy → hard**, each with how to spot it, how to fix it, and a before/after code sample:

   | Level | Name | Typical smells |
   | --- | --- | --- |
   | L1 | Hygiene | unused code, `any`, `console.log`, magic values |
   | L2 | Correctness bugs | undefined variables, inverted filters, broken sort comparators, `key={index}`, mutation |
   | L3 | Render performance | wrong memo deps, helpers inside components, inline props, wasted passes |
   | L4 | State & effects | effect-synced derived state, fetch races, missing cleanup |
   | L5 | Architecture | god components, fetching + logic + UI fused |

5. **Prioritize**: an impact × effort matrix (quick wins, big bets, fill-ins, think twice).
6. **Case study**: a messy `OrderList.tsx` with 19 numbered findings. Click a marker or a card to link the two, filter by level, then switch to the refactored "After" version.
7. **Checklist**: a review checklist for each level; ticks are saved in `localStorage`.

Light and dark themes are supported, and `prefers-reduced-motion` skips straight to the untangled state.
