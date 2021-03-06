# Day 25: The Halting Problem

Following the twisty passageways deeper and deeper into the CPU, you finally reach
the core of the computer. Here, in the expansive central chamber, you find a grand
apparatus that fills the entire room, suspended nanometers above your head.

You had always imagined CPUs to be noisy, chaotic places, bustling with activity.
Instead, the room is quiet, motionless, and dark.

Suddenly, you and the CPU's __garbage collector__ startle each other. _"It's not
often we get many visitors here!"_, he says. You inquire about the stopped machinery.

_"Programs these days, don't know their origins. That's the __Turing machine__!
It's what makes the whole computer work."_ You try to explain that Turing machines
are merely models of computation, but he cuts you off. _"No, see, that's just what
they want you to think. Ultimately, inside every CPU, there's a Turing machine
driving the whole thing! Too bad this one's broken. We're doomed!"_

You ask how you can help. _"Well, unfortunately, the only way to get the computer
running again would be to create a whole new Turing machine from scratch, but there's
no way you can-"_ He notices the look on your face, gives you a curious glance,
shrugs, and goes back to sweeping the floor.

You find the __Turing machine blueprints_ (your puzzle input) on a tablet in a
nearby pile of debris. Looking back up at the broken Turing machine above, you
can start to identify its parts:
- A __tape__ which contains ``0`` repeated infinitely to the left and right.
- A __cursor__, which can move left or right along the tape and read or write values
at its current position.
- A set of __states__, each containing rules about what to do based on the current
value under the cursor.

Each slot on the tape has two possible values: ``0`` (the starting value for all
slots) and ``1``. Based on whether the cursor is pointing at a ``0`` or a ``1``,
the current state says __what value to write__ at the current position of the cursor,
whether to __move the cursor__ left or right one slot, and __which state to use
next__.

For example, suppose you found the following blueprint:

```txt
Begin in state A.
Perform a diagnostic checksum after 6 steps.

In state A:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state B.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state B.

In state B:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state A.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state A.
```

Running it until the number of steps required to take the listed __diagnostic
checksum__ would result in the following tape configurations (with the cursor
marked in square brackets):

```txt
... 0  0  0 [0] 0  0 ... (before any steps; about to run state A)
... 0  0  0  1 [0] 0 ... (after 1 step;     about to run state B)
... 0  0  0 [1] 1  0 ... (after 2 steps;    about to run state A)
... 0  0 [0] 0  1  0 ... (after 3 steps;    about to run state B)
... 0 [0] 1  0  1  0 ... (after 4 steps;    about to run state A)
... 0  1 [1] 0  1  0 ... (after 5 steps;    about to run state B)
... 0  1  1 [0] 1  0 ... (after 6 steps;    about to run state A)
```

The CPU can confirm that the Turing machine is working by taking a __diagnostic
checksum__ after a specific number of steps (given in the blueprint). Once the
specified number of steps have been executed, the Turing machine should pause;
once it does, count the number of times ``1`` appears on the tape. In the above
example, the __diagnostic__ checksum is ``3``.

Recreate the Turing machine and save the computer! What is the diagnostic checksum
it produces once it's working again?


## Part Two

The Turing machine, and soon the entire computer, springs back to life. A console
glows dimly nearby, awaiting your command.

```txt
> reboot printer
Error: That command requires priority 50. You currently have priority 0.
You must deposit 50 stars to increase your priority to the required level.
```

The console flickers for a moment, and then prints another message:

```txt
Star accepted.
You must deposit 49 stars to increase your priority to the required level.
```

The __garbage collector__ winks at you, then continues sweeping.

You don't have enough stars to reboot the printer, though. You need 19 more.
