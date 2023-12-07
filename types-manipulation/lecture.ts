/** keyof */
interface IUser {
  name: string;
  age: number;
}

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

type KeysOfUser = keyof IUser;
const key: KeysOfUser = "name";

const mUser: IUser = { name: "Вася", age: 30 };
const userName = getValue(mUser, "name");
