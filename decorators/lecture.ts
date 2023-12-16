interface IUserService {
  usersCount: number;
  getUsersInDatabase(): number;
}

@log()
@setUsers(2)
// @threeAdvanced
class UserService implements IUserService {
  @Max(100)
  usersCount: number; /* target: UserService, propertyKey: usersCount */

  getUsersInDatabase(): number {
    return this.usersCount;
  }
}

function methodLog(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
) {}

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

// декоратор метода
function Log(
  target: Object /* Объект, к которому относится метод */,
  propertyKey: string | symbol /* Название метода */,
  descriptor: TypedPropertyDescriptor<
    (args: any[]) => void
  > /* Конфигурация объекта: {value, writable,enumerable, configurable} */
) {
  descriptor.value = () => {
    // подменяем значение, которое возвращает новый метод
    console.log("handle error");
  };
}

// декоратор свойства
function Max(max: number) {
  return (target: Object, propertyKey: string | symbol) => {
    let value: number;

    const setter = function (newValue: number) {
      if (newValue > max) {
        console.log(`Нельзя установить значение больше ${max}`);
      }
    };

    const getter = function () {
      return value;
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

console.log("users count", new UserService().getUsersInDatabase());
