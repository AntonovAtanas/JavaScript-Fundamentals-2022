function factory(library, orders) {

    return orders.map(obj => {
        let result = Object.assign({}, obj.template);

        for (const currentPart of obj.parts) {
            result[currentPart] = library[currentPart];
        }

        return result;
    })
}

const library = {

    print: function () {

        console.log(`${this.name} is printing a page`);

    },

    scan: function () {

        console.log(`${this.name} is scanning a document`);

    },

    play: function (artist, track) {

        console.log(`${this.name} is playing '${track}' by ${artist}`);

    },

};

const orders = [

    {

        template: { name: 'ACME Printer' },

        parts: ['print']

    },

    {

        template: { name: 'Initech Scanner' },

        parts: ['scan']

    },

    {

        template: { name: 'ComTron Copier' },

        parts: ['scan', 'print']

    },

    {

        template: { name: 'BoomBox Stereo' },

        parts: ['play']

    }

];

const products = factory(library, orders);

console.log(products);



// const factory = result;

// const library = {
//     get1: function () {
//         return 1;
//     },
//     get3: function () {
//         return 3;
//     },
// };

// const orders = [
//     {
//         template: {},
//         parts: ['get1']
//     },
//     {
//         template: {},
//         parts: ['get1', 'get3']
//     },
// ];

// const products = factory(library, orders);

// expect(Array.isArray(products)).to.be.equal(true, 'Result must be an array');
// expect(products.length).to.equal(2, 'The array must contain 2 entries');

// for (let obj of products) {
//     expect(typeof obj).to.equal('object', 'Result entries must be objects');
// }

// const [first, second] = products;