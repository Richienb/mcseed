"use strict"

const hashCode = require("@pelevesque/hash-code")
const JavaRandom = require("java-random")
const is = require("@sindresorhus/is")

// Based on https://minecraft.gamepedia.com/Seed_(level_generation)#Technical

module.exports = (seed) => {
    if (is.string(seed)) return BigInt(hashCode(seed))
    if (is.number(seed) && seed !== 0) return BigInt(seed)
    else return new JavaRandom().nextLong()
}
