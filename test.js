import test from "ava"
import mcseed from "."

test("main", (t) => {
    t.is(mcseed(12345), 12345n)

    t.is(mcseed("abc"), 96354n)
})
