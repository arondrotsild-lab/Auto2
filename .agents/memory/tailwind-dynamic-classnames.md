---
name: Tailwind dynamic class names
description: Never build Tailwind utility classes via string concatenation (e.g. `` `lg:grid-cols-${n}` ``)
---

Tailwind's JIT scanner finds classes by static string matching in source files. A class built via
template-literal concatenation (e.g. ``lg:grid-cols-` + n``) is invisible to the scanner and won't be
generated in the CSS, even though it may appear to work in dev (Vite HMR can be misleading here).

**Why:** caused a grid layout to silently lack column classes in one build.
**How to apply:** always branch to a small set of fully-static class strings (e.g. a switch/ternary listing
`grid-cols-2`, `grid-cols-3`, `grid-cols-4` literally) instead of interpolating a variable into a class name.
