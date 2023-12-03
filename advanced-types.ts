/* union type */
const logId: string | number = "done";

/* сужение типов */
function log(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toLocaleUpperCase());
  } else if (typeof id === "number") {
    console.log(id.toFixed(2));
  }
}

function logError(error: string | string[]) {
  if (Array.isArray(error)) {
    console.log(JSON.stringify(error));
  } else {
    console.log(error);
  }
}

/* literal types */
function fetchWithAuth(url: string, method: "post" | "get") {}

/* type aliases */
type User = { name: string; age: number; skills: string[] };

type Role = { id: number };

type UserWithRole = User & Role;

const userWithRoles: UserWithRole = {
  name: "Darya",
  age: 36,
  skills: [],
  id: 5,
};

/* опциональные типы */
interface IUser {
  login: string;
  password?: string;
}

/* задачка */
type TRequestType = {
  sum: number;
  from: number;
  to: number;
};

type TResponseType =
  | {
      status: "success";
      data: { databaseId: number; sum: number; from: number; to: number };
    }
  | {
      status: "failed";
      data: { errorMessage: string; errorCode: number };
    };

function getServerData(params: TRequestType): Promise<ResponseType> {
  return fetch("/api/url", {
    method: "GET",
    body: JSON.stringify(params),
  }).then((response) => response.json());
}

/* Interface IPayment */
interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus {
  Success = "success",
  Failed = "failed",
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess {
  databaseId: number;
  sum: number;
  from: number;
  to: number;
}

interface IDataFailure {
  errorMessage: string;
  errorCode: number;
}

interface IResponse {
  status: PaymentStatus;
  data: IDataSuccess | IDataFailure;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailure {
  status: PaymentStatus.Failed;
  data: IDataFailure;
}

function getServerDataResponse(
  params: IPayment
): Promise<IResponseSuccess | IResponseFailure> {
  return fetch("/api/url", {
    method: "GET",
    body: JSON.stringify(params),
  }).then((response) => response.json());
}

/* void */
function multiply(f: number, s?: number): number | void {
  if (!s) {
    return f * f;
  }
}

/* unknown */
let input: unknown;
input = 3;
input = ["sf", "sdf"];

let res: string = input as string; // требуется явное приведение типа

/* never */

// данные функции никогда ничего не возвращают, потому им используется возвратный тип never
function generateError(message: string): never {
  throw new Error(message);
}

function dumpError(): never {
  while (true) {}
}

function rec(): never {
  return rec();
}

// обеспечение  механизма отладки ошибки на уровне компиляции
type PaymentAction = "refund" | "checkout"; // | "reject";

function processAction(action: PaymentAction) {
  switch (action) {
    case "refund":
      //...
      break;
    case "checkout":
      //...
      break;
    default:
      const _: never = action;
      throw new Error("Нет такого action");
  }
}

function isString(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }

  generateError("Error");
}

/* null */
/* осознанное отсутсвие значения / ссылки */
const n: null = null;
const n1: any = null;
/* const n2: string = null */ // strictNullChecks = true

interface ICustomUser {
  name: string;
}

function getUser(): ICustomUser | null {
  if (Math.random() > 0.5) {
    return null;
  } else {
    return { name: "Вася" } as ICustomUser;
  }
}

const customUser = getUser();
const n55 = customUser?.name;

/* Приведение типов */
let a = 5;
let b: string = a.toString();
let e: string = new String(a).valueOf(); // осторожно
let f: boolean = new Boolean(a).valueOf(); // осторожно

let c = "cdfs";
let d: number = parseInt(c, 10);

interface ICustomUser {
  name: string;
  email: string;
  login: string;
}

const myUser: ICustomUser = {
  name: "Вася",
  email: "vasily@yandex.ru",
  login: "vasia",
}; // as ICustomUser;

interface IAdmin {
  name: string;
  role: number;
}

// функция-маппинга
function userToAdmin(user: ICustomUser): IAdmin {
  return {
    name: user.name,
    role: 1,
  };
}

const admin: IAdmin = userToAdmin(myUser);

/* Type Guard */
function isMyString(x: string | number): x is string {
  return typeof x === "string";
}
