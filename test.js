import test from "ava"
import is from "@sindresorhus/is"
import mcseed from "."

test("main", (t) => {
    t.is(is(mcseed()), "bigint")

    t.is(mcseed(12345), 12345n)

    t.is(mcseed("abc"), 96354n)

    t.is(mcseed(9999999999999999), mcseed(9999999999999999))
})
