class MyUser {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  addSkill(skill: string): void;
  addSkill(skills: string[]): void;
  addSkill(skillId: number): void;

  addSkill(skills: string | string[] | number): void {
    if (typeof skills == "string") {
    } else {
    }
  }
}

class MyUsers extends Array<MyUser> {
  searchByName(name: string) {
    return this.filter((userItem) => userItem.name === name);
  }

  override toString(): string {
    return this.map((userItem) => userItem.name).join(", ");
  }
}

class MyUserList {
  users: MyUser[];

  push(user: MyUser) {
    this.users.push(user);
  }
}

class UserService {
  // private
  static db: any;
}

UserService.db;

class Payment {
  private date: Date = new Date();

  getDate(this: Payment) {
    return this.date;
  }

  getDateArrow = () => {
    return this.date;
  };
}

const p = new Payment();

const instanceUser = {
  id: 1,
  paymentDate: p.getDate.bind(p),
  paymentDateArrow: p.getDateArrow,
};

class UserBuilder {
  name: string;

  setName(name: string) {
    this.name = name;
    return this;
  }
}

const resUser = new UserBuilder().setName("Вася");

/* Абстрактные классы */
