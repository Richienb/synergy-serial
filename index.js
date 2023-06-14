"use strict"

const { default: ow } = require("ow")
const bufferFrom = require("buffer-from")
const Chance = require("chance")
const chance = new Chance()

const toHex = key => bufferFrom(key).toString("hex").toUpperCase()

module.exports = ({ name = chance.name(), userLimit = 99, email = chance.email(), business = name, edition = "pro", version = 1 } = {}) => {
    ow(name, ow.string)
    ow(userLimit, ow.number)
    ow(email, ow.string)
    ow(business, ow.string)
    ow(version, ow.number)
    ow(edition, ow.string)

    if (version === 1) {
        return toHex(`{v1;${edition};${name};${userLimit};${email};${business};0;0}`)
    }

    if (version === 2) {
        return toHex(`{v2;maintenance;${edition};${name};${userLimit};${email};${business};0;0}`)
    }

    throw new Error(`Expected version to be \`1\` or \`2\`, got ${version}`)
}
