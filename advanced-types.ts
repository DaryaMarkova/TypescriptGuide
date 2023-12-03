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
