interface IUserService {
  usersCount: number;
  getUsersInDatabase(): number;
}

@log()
@setUsers(2)
// @threeAdvanced
class UserService implements IUserService {
  usersCount: number;

  getUsersInDatabase(): number {
    return this.usersCount;
  }
}

function threeUserAdvanced<T extends { new (...args: any[]) }>(constructor: T) {
  return class extends constructor {
    users = 3;
  };
}

function setUsers(users: number) {
  return (target: Function) => {
    target.prototype.usersCount = users;
  };
}

function log() {
  console.log("log init");
  return (target: Function) => {
    console.log("setUsers run");
  };
}

console.log("users count", new UserService().getUsersInDatabase());
