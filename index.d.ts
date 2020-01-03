declare interface Options {
    /**
     * The name of the user.
    */
    name?: string

    /**
     * The user limit.
    */
    userLimit?: number

    /**
     * The email of the user.
    */
    email?: string

    /**
     * The business of the user.
    */
    business?: string
}

/**
 * Generate a Synergy serial code.
 * @param options The metadata to encode in the serial code.
 * @example
 * ```
 * const synergySerial = require("synergy-serial")
 *
 * synergySerial();
 * //=> '7B76313B70726F3B4C7563792043616E6E6F6E3B39393B6E6F68406261767570617A692E70773B4C7563792043616E6E6F6E3B303B307D'
 *
 * synergySerial({name: "Humairaa Novak", userLimit: 99, email: "angZh@example.com"})
 * //=> '7B76313B70726F3B48756D6169726161204E6F76616B3B39393B616E675A68406578616D706C652E636F6D3B48756D6169726161204E6F76616B3B303B307D'
 * ```
*/
declare function synergySerial(options?: Options): string;

export = synergySerial;
