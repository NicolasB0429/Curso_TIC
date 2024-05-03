const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

const personA = {
  nombre: "John Doe",
  edad: 42,
  nacionalidad: "American",
};

const personProxy = new Proxy(person, {

  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
    return true;
  },
});

const personAProxy = new Proxy(personA, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },

  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
    return true;
  },
});

personProxy.name;
personProxy.age = 43;
personProxy.age

personAProxy.nombre;
personAProxy.edad = 23;
personAProxy.edad;