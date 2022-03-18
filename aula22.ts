class User {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  getEmail(): string {
    return this.email;
  }
}

class Client extends User {
  name: string;
  age: number;

  constructor(name: string, age: number, email: string, password: string) {
    super(email, password);

    this.name = name;
    this.age = age;
  }

  getEmail(): string {
    return super.getEmail();
  }
}

const joao = new Client('joao', 11, 'email', 'password');
