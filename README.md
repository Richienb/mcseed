# The module [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/mcseed/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/mcseed)

Emulate Minecraft's seed selection system.

[![NPM Badge](https://nodei.co/npm/mcseed.png)](https://npmjs.com/package/mcseed)

## Install

```sh
npm install mcseed
```

## Usage

```js
const mcseed = require("mcseed");

mcseed(); // Random seed (blank seed box)
//=> -47201340728604373n

mcseed(12345); // Numerical seed
//=> 12345n

mcseed("abc"); // Text seed
//=> 96354n
```

## Why BigInt?

For random seeds, the generated number could be higher than what javascript supports with the native Number object. Therefore, BigInt is essential to store the full seed.

## API

### mcseed(seed?)

#### seed

Type: `string | number`

The seed to input in the "seed box".
