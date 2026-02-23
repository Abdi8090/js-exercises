const people = [
    { name: "Alice", age: 25, city: "Wonderland" },
    { name: "Abdu", age: 28, city: "mogadisho" },
    { name: "Alli", age: 20, city: "kismanyo" },
];

for (const key in people) {
  
    const person = people[key];

    console.log("Magaca: " + person.name + "  Da'da: " + person.age + "  Magaalada: " + person.city);
}
