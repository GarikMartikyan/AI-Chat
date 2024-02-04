export default class Message {
  constructor(Id, Value, Person) {
    // this.id = Id;
    this.parts = Value;
    this.role = Person;
    // this.created = new Date().valueOf();
  }
}
