# Synergy Serial [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/synergy-serial/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/synergy-serial)

Generate a Synergy serial code. This is possible since Synergy is [open source](https://github.com/symless/synergy-core). Best used with https://sourceforge.net/projects/synergy-stable-builds/. Suitable for **NON-COMMERCIAL USE**.

[![NPM Badge](https://nodei.co/npm/synergy-serial.png)](https://npmjs.com/package/synergy-serial)

## Install

```sh
npm install synergy-serial
```

## Usage

```js
const synergySerial = require("synergy-serial")

synergySerial();
//=> '7B76313B70726F3B4C7563792043616E6E6F6E3B39393B6E6F68406261767570617A692E70773B4C7563792043616E6E6F6E3B303B307D'

synergySerial({name: "Humairaa Novak", userLimit: 99, email: "angZh@example.com"})
//=> '7B76313B70726F3B48756D6169726161204E6F76616B3B39393B616E675A68406578616D706C652E636F6D3B48756D6169726161204E6F76616B3B303B307D'

synergySerial({ name: "Humairaa Novak", userLimit: 99, email: "angZh@example.com", version: 2, edition: "pro" })
//=> '7B76323B6D61696E74656E616E63653B70726F3B48756D6169726161204E6F76616B3B39393B616E675A68406578616D706C652E636F6D3B48756D6169726161204E6F76616B3B303B307D'
```

## API

### synergySerial(options?)

#### options

Type: `object`

##### name

Type: `string`\
Default: (randomly generated)

The name of the user.

##### userLimit

Type: `number`\
Default: `99`

The user limit.

##### email

Type: `string`\
Default: (randomly generated)

The email of the user.

##### business

Type: `string`\
Default: (same as `name`)

The business of the user.

##### edition

Type: `string`\
Default: `pro`

The edition of the software.

##### version

Type: `number`\
Default: `1`

The version of the key. Version 1 works on Synergy v1 and version 2 works on Synergy v2 and v3.

