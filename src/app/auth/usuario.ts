// usuarios/usuario.model.ts
export class Usuario {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: string;
  balance: number;

  constructor(firstName: string,  lastName: string, email: string, password: string, userType: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.userType = userType;
    this.balance = 0;
  }
}
