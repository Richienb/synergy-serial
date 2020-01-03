import test from "ava"
import theModule from "."

test("main", (t) => {
    t.throws(() => {
        theModule(123)
    }, {
        instanceOf: TypeError,
        message: "Expected a string, got number",
    })

    t.is(theModule("unicorns"), "unicorns & rainbows")
})
