/** @param {NS} ns */
export async function main(ns) {
var target = "n00dles";
var moneyThresh = getServerMaxMoney(target) * 0.75;
var securityThresh = getServerMinSecurityLevel(target) + 5;
while(true) {
    if (getServerSecurityLevel(target) > securityThresh) {
        // If the server's security level is above our threshold, weaken it
        weaken(target);
    } else if (getServerMoneyAvailable(target) < moneyThresh) {
        // If the server's money is less than our threshold, grow it
        grow(target);
    } else {
        // Otherwise, hack it
        hack(target);
    }
}
}
