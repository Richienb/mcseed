"use strict"

const hashCode = require("@pelevesque/hash-code")
const JavaRandom = require("java-random")
const is = require("@sindresorhus/is")
const integerLimit = require("integer-limit")

// Based on https://minecraft.gamepedia.com/Seed_(level_generation)#Technical

module.exports = (seed) => {
    if (is.string(seed) && !is.nan(Number(seed))) seed = Number(seed)

    if (is.number(seed) && seed !== 0 && BigInt(seed) < integerLimit(64, { bitint: true })) return BigInt(seed)
    if (is.string(seed)) return BigInt(hashCode(seed))
    return new JavaRandom().nextLong()
}
