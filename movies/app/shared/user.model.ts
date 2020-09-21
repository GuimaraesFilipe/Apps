const validator = require("../email-validator");

export class User {
  firstName: string;
  lastName: string;
  photo: string;
  date: string;
  country:string;
  favorite:string;
  email: string;
  password: string;
  isValidEmail() {
    return validator.validate(this.email);
  }
}