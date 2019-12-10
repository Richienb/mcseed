/**
 * Emulate Minecraft's seed selection system.
 * @param seed The seed to input in the "seed box".
 * @example
 * ```
 * const mcseed = require("mcseed");
 *
 * mcseed(); // Random seed (blank seed box)
 * //=> -47201340728604373n
 *
 * mcseed(12345); // Numerical seed
 * //=> 12345n
 *
 * mcseed("abc"); // Text seed
 * //=> 96354n
 * ```
*/
declare function mcseed(seed?: string | number): BigInt;

export = mcseed;
