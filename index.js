"use strict"

const hashCode = require("@pelevesque/hash-code")
const JavaRandom = require("java-random")
const is = require("@sindresorhus/is")
const integerLimit = require("integer-limit")

// Based on https://minecraft.gamepedia.com/Seed_(level_generation)#Technical

module.exports = (seed) => {
    if (!is.undefined(seed)) seed = seed.toString()

    if (!is.nan(Number(seed)) && seed !== 0) {
        if (BigInt(seed) < integerLimit(64, { bitint: true })) return BigInt(seed)
        return BigInt(hashCode(seed))
    }

    if (is.string(seed)) return BigInt(hashCode(seed))
    return new JavaRandom().nextLong()
}
