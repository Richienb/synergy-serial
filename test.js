import test from "ava"
import synergySerial from "."

test("main", (t) => {
    t.is(synergySerial({ name: "Humairaa Novak", userLimit: 99, email: "angZh@example.com" }), "7B76313B70726F3B48756D6169726161204E6F76616B3B39393B616E675A68406578616D706C652E636F6D3B48756D6169726161204E6F76616B3B303B307D")
})
