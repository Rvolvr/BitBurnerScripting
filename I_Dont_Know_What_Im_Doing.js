/** @param {NS} ns */
export async function main(ns) {
    var target = ns.args[0];

    // Find the threasholds of the server.
    var moneyThresh = ns.getServerMaxMoney(target) * 0.9;
    var securityThresh = ns.getServerMinSecurityLevel(target) + .5;

    while (true) {


        if (ns.getServerSecurityLevel(target) > securityThresh) {
            // If the server's security level is above our threshold, weaken it
            await ns.weaken(target);
        } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
            // If the server's money is less than our threshold, grow it
            await ns.grow(target);
        } else {
            // Otherwise, hack it
            await ns.hack(target);
        }
    }
}
