"use strict"

const { default: ow } = require("ow")
const bufferFrom = require("buffer-from")
const Chance = require("chance")
const chance = new Chance()

module.exports = ({ name = chance.name(), userLimit = 99, email = chance.email(), business = name } = {}) => {
    ow(name, ow.string)
    ow(userLimit, ow.number)
    ow(email, ow.string)
    ow(business, ow.string)

    const key = `{v1;pro;${name};${userLimit};${email};${business};0;0}`
    return bufferFrom(key).toString("hex").toUpperCase()
}
