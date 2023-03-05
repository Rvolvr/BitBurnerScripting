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
### Calling functions start with `ns.`
If you use `nano` to create a script inside the game, it will automatically add the function enclosure. From there you can call functions from _NetScript_ which is the in-game program generator. Go [here](https://bitburner.readthedocs.io/en/latest/netscript/netscriptfunctions.html "Bitburner Docs") to go through all the functions to call. In the terminal one can just type `hack`, but in a script the function must be called and targeted looking like `ns.hack(n00bes)`. 
### Don't forget the semicolon `;`
My experience with scripting comes from PowerShell where semicolons are only needed when calling multiple functions in the same line without a pipe. Basically it's quite rare, and PowerShell understands that starting a new line is a separator. 
### While (True)
The infinite loop of a script. Looking at it without scripting background this doesn't make sence. `While` is a continuous _if_ check on target. If a single parameter is put in the condition, it automatically references against that condition being boolean _true_. Since our target of `true` does equal _true_ in a boolean for, it will go forever. 
### Await functions that take time
Ultimately, one script should be doing one set of instructions at a time. `Hack`, `grow` and `weaken` all take time, but if the script does not `await` for the system to finish the task, the system would theoretically call all possible functions on every increment it can (causing all sorts of problems).
