const validator = require("../email-validator");

export class Medicine {
  id: number;
  name: string;
  dosage: string;
  form: string;
  frequency:string;
  email: string;
  isValidEmail() {
    return validator.validate(this.email);
  }
}