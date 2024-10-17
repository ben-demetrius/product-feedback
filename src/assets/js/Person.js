class Person {
  constructor({ firstName = "John Doe", age }) {
    this.firstName = firstName;
    this.age = age;

    const calcYearsLeft = () => {
      return 80 - this.age;
    };

    this.yearsLeft = calcYearsLeft();
  }
}

// const myItem = new Person("Ceasar", 5);

export default Person;
