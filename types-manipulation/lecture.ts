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

/** typeof */
const _user = { name: "Вася" };
type keyOfUser = keyof typeof _user;

enum Direction {
  Up,
  Down,
}
type d = keyof typeof Direction;

/* index types */

interface RoleX {
  name: string;
}

interface UserX {
  name: string;
  roles: RoleX[];
}

const user: UserX = {
  name: "Вася",
  roles: [],
};

const roleNames = "roles";

const nameUser = user["name"];
type roleType = UserX["roles"];
type roleType2 = UserX[typeof roleNames];

/* Conditional Types */

interface HTTPResponse<T extends "success" | "failed"> {
  code: number;
  data: T extends "success" ? string : Error;
}

class UserPersistend {
  dbId: string;
}

function getUser(dbIdOrId: string | number): UserX | UserPersistend {
  if (typeof dbIdOrId === "number") {
    return { name: "Darya", roles: [] };
  } else {
    return new UserPersistend();
  }
}

/* Infer */

// псевдообъявление типа
type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any
  ? First
  : never;

type ErrorData = {
  errorOrCode: number | string;
  payload?: Record<string, string | number | boolean>;
};

const errorData = {
  errorOrCode: "TIMEOUTERROR",
  payload: {
    userId: 1,
  },
} satisfies ErrorData;

const testPayload = errorData.payload.userId.toFixed(2);

// Number.isNan()
type ReadOrWrite = "read" | "write";
type Access = `can${Capitalize<ReadOrWrite>}`;
type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;
