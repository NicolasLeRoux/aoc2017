# Day 11: Hex Ed

Crossing the bridge, you've barely reached the other side of the stream when a
program comes up to you, clearly in distress. _It's my child process,_ she says,
_he's gotten lost in an infinite grid!_

Fortunately for her, you have plenty of experience with infinite grids.

Unfortunately for you, it's a hex grid.

The hexagons (_hexes_) in this grid are aligned such that adjacent hexes can be
found to the north, northeast, southeast, south, southwest, and northwest:

```txt
  \ n  /
nw +--+ ne
  /    \
-+      +-
  \    /
sw +--+ se
  / s  \
```

You have the path the child process took. Starting where he started, you need to
determine the fewest number of steps required to reach him. (A _step_ means to
move from the hex you are in to any adjacent hex.)

For example:
- ``ne,ne,ne`` is 3 steps away.
- ``ne,ne,sw,sw`` is 0 steps away (back where you started).
- ``ne,ne,s,s`` is 2 steps away (se,se).
- ``se,sw,se,sw,sw`` is 3 steps away (s,s,sw).

Answer ?

## Part Two

How many steps away is the furthest he ever got from his starting position?
