# BitBurnerScripting

This is my dive into JavaScript Learning. Hopefully this will be worth it. All scripts are specifically for the game [BitBurner](https://store.steampowered.com/app/1812820/Bitburner/ "Free Hacking sym game")

## What is the game?

This is a hacking symulator like most. It is free on Steam, as well as being here on [Github](https://github.com/danielyxie/bitburner). It is designed to be a way to break into useful scripting. The basics of JavaScript can be learned through Grasshopper on Android Play Store. 

## JavaScipt

Literal JS files can be run on this game. Here is the script they teach in the tutorial.

``` JavaScript
/** @param {NS} ns */
export async function main(ns) {
		while(true) {
			await ns.hack('n00dles');
		}
}
```

## Things I've learned

Think of this as a quick-start guide to making scripts in BitBurner.

### Calling in-game functions and variables start with `ns.`

If you use `nano` to create a script inside the game, it will automatically add the function enclosure. From there you can call functions from _NetScript_ which is the in-game program generator. Go [here](https://bitburner.readthedocs.io/en/latest/netscript/netscriptfunctions.html "Bitburner Docs") to go through all the functions to call. In the terminal one can just type `hack`, but in a script the function must be called and targeted looking like `ns.hack(n00bes)`. This rule also applies to `ns.args[0]` when trying to use a terminal argument.

### Don't forget the semicolon `;`

My experience with scripting comes from PowerShell where semicolons are only needed when calling multiple functions in the same line without a pipe. Basically it's quite rare, and PowerShell understands that starting a new line is a separator. 
### While (True)
The infinite loop of a script. Looking at it without scripting background this doesn't make sence. `While` is a continuous _if_ check on target. If a single parameter is put in the condition, it automatically references against that condition being boolean _true_. Since our target of `true` does equal _true_ in a boolean for, it will go forever. 
### Await functions that take time
Ultimately, one script should be doing one set of instructions at a time. `Hack`, `grow` and `weaken` all take time, but if the script does not `await` for the system to finish the task, the system would theoretically call all possible functions on every increment it can (causing all sorts of problems).

## Making Money

Hacking n00dles server may seem nice, but my stragegy is to have most servers hack themselves.

### Script hacks

Runing a script on `n00dles` and some of the other starter servers can get you off the ground. My base script allows you to dictate the server you want to hack, making it not necessary to edit when a new server is found. With this strat, one would `Nuke.exe` and `Backdoor` whichever server you have skill high enough for, then you `scp` the script over to that server so it can start hacking itself.

#### Threads

Running a script with the _-t_ switch will allow you to dictate the amound of "threads" - which is a misnomer. The game just multiplies the force of your script and increases the memory used accordingly. __It has nothing to do with the CPU threads of that server__. 

An example would be `run hackarg0.js n00dles -t 6` meaning it will take my 2.3GB script and multiply all RAM and results by 6 making it use 13.8GB of memory.

#### Not all servers produce

There are pitfalls to some servers. This could include some sort of reduction of money through unknown (distance?) means, or even that the server itself has no memory. I have found that zer0, phantasy, and iron-gym are very good producers. Knowing this, I then assigned my starter servers to hack them to see which produces well: sigma-cosmetics likes phantasy, most like zer0, and later game servers like iron-gym.

### Hacknet

One thing I've noticed is that it takes a long time for the Hacknet devices to themselves produce over $25 billion when fully maxed out, so that is my limit for diminishing returns at the moment. 
