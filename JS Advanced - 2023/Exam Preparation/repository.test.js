let { Repository } = require("./repository");
let { expect } = require('chai');

describe('Check if the class supports the following functions', function () {

    let props = {
        name: "string",
        age: "number",
        birthday: "object"
    }

    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    describe('Init properly', function () {
        it('Returns the passed object', function () {
            expect(new Repository(props).props).to.equal(props)
        });

        it('Props has correct properties', function () {
            expect(new Repository(props).props).to.deep.equal(props); // check deep equal value
        });

        it('To have Map property', function () {
            expect(new Repository()).to.have.property('data') // check if the object has this property
        });

        it('To have Map property which type is object', function () {
            expect(typeof (new Repository().data)).to.equal('object') // check if the object has this property
        });

        it('To have nextID function', function () {
            expect(typeof (new Repository().nextId)).to.equal('function')
        });

        it('Returns ID properly', function () {
            expect(new Repository().nextId()).to.equal(0);
        });

    });

    describe('Getter counter works', function () {
        it('Returns the size of the Map with the getter', function () {

            let repository = new Repository(props);
            repository.add(entity)

            expect(repository.count).to.equal(1);

            repository.add(entity)
            repository.add(entity)
            repository.add(entity)
            expect(repository.count).to.equal(4);
        });

    });

    describe('Function add works', function () {

        let repository = new Repository(props);

        it('Check if the add returns the correct ID', function () {
            expect(repository.add(entity)).to.equal(0);
            expect(repository.add(entity)).to.equal(1);
        });

        it('Entity.name is string', function () { // check if the entity object has the correct property types
            expect(typeof entity.name).to.equal('string');
        });

        it('Entity.age is number', function () {
            expect(typeof entity.age).to.equal('number');
        });

        it('Entity.birthday is object', function () {
            expect(typeof entity.birthday).to.equal('object');
        });

        it('Check if the count is correct', function () {
            expect(repository.count).to.equal(2);
        });

        it('Check if the Map includes the entity', function () {
            expect(repository.data).to.include(entity);
        });

        it('Check if the Map includes ID has the correct entity', function () {
            expect(repository.data.get(0)).to.deep.equal(entity);
        });

        it('Return undefined if the Map does not have this ID', function () {
            expect(repository.data.get(5)).to.equal(undefined);
        });

        // throws error if missing property !!! -- needs 'expect' to be function if we expect to throw error

        it('Throws error if entity without birthday', function () {
            expect(() => repository.add({ name: 'Ivan', age: 28 })).to.throw(Error, 'Property birthday is missing from the entity!')
        });

        it('Throws error if entity without name', function () {
            expect(() => repository.add({ age: 28, birthday: new Date(1998, 0, 7) })).to.throw(Error, 'Property name is missing from the entity!')
        });

        // Throws error if property is incorrect type

        it('Throws error if entity age is string', function () {
            expect(() => repository.add({ name: 'Ivan', age: '28', birthday: new Date(1998, 0, 7) })).to.throw(Error, 'Property age is not of correct type!')
        });

        it('Throws error if entity name is number', function () {
            expect(() => repository.add({ name: 1984, age: 32, birthday: new Date(1998, 0, 7) })).to.throw(Error, 'Property name is not of correct type!')
        });

        it('Throws error if entity birthday is number', function () {
            expect(() => repository.add({ name: 'Ivan', age: 32, birthday: 7477 })).to.throw(Error, 'Property birthday is not of correct type!')
        });

    });

    describe('Function getId works', function () {
        let repository = new Repository(props);

        it('Returns the entity properly', () => {
            repository.add(entity)
            repository.add(entity)
            expect(repository.getId(0)).to.equal(entity);
            expect(repository.getId(1)).to.equal(entity);
        });

        it('Throws error if ID is out of range', () => {
            expect(() => repository.getId(3)).to.throw(Error, 'Entity with id: 3 does not exist!');
            expect(() => repository.getId(-1)).to.throw(Error, 'Entity with id: -1 does not exist!');
            expect(() => repository.getId(6)).to.throw(Error, 'Entity with id: 6 does not exist!');
            expect(() => repository.getId(3)).to.throw(Error, 'Entity with id: 3 does not exist!');
        });
    });

    describe('Function update works', function () {
        let repository = new Repository(props);
        let newEntity = {
            name: "Ivan",
            age: 29,
            birthday: new Date(1993, 5, 11)
        }

        it('Updates the entity on position 1 with new entity', () => {
            repository.add(entity)
            repository.add(entity)
            repository.update(1, newEntity)
            expect(repository.data.get(1)).to.equal(newEntity);
        });

        it('Throws error if ID is out of range', () => {
            expect(() => repository.update(2, newEntity)).to.throw(Error, "Entity with id: 2 does not exist!");
            expect(() => repository.update(-1, newEntity)).to.throw(Error, "Entity with id: -1 does not exist!");
        });
    });

    describe('Function delete works', function () {
        let repository = new Repository(props);


        it('Deletes the entity', () => {
            repository.add(entity)
            repository.add(entity)
            repository.del(0);
            expect(repository.data.size).to.equal(1);
        });

        it('Throws error if ID is out of range', () => {
            expect(() => repository.del(2)).to.throw(Error, "Entity with id: 2 does not exist");
            expect(() => repository.del('2')).to.throw(Error, "Entity with id: 2 does not exist");
            expect(() => repository.del(-1)).to.throw(Error, "Entity with id: -1 does not exist");
        });
    });

});