function extensibleObject() {

    let prototype = {};

    let instance = Object.create(prototype);

    instance.extend = function (template) {

        Object.entries(template).forEach(([key, value]) => {
            if (typeof value === "function") {
                prototype[key] = value;
            } else {
                instance[key] = value;
            }
        });
    };
    return instance;
}

const myObj = extensibleObject()