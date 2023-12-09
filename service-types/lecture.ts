interface IUser {
  name: string;
  age?: number;
  email: string;
}

/* Partial: частичное совпадение */
type UserPartial = Partial<IUser>;

const pUser: UserPartial = {
  name: "Дарья",
};

/* Required: все свойства обязательны */
type UserRequired = Required<IUser>;

const requiredUser: UserRequired = {
  name: "Дарья",
  age: 28,
  email: "darya.towarddreams@gmail.com",
};

/* ReadOnly: свойства недопустимы для чтения */
type UserReadonly = Readonly<IUser>;

const readonlyUser: UserReadonly = {
  name: "Дарья Маркова",
  age: 30,
  email: "darya.markova.95@mail.ru",
};

// can not be changed readonlyUser.age = 32;

interface PaymentPersistent {
  id: number;
  sum: number;
  from: string;
  to: string;
}
type PaymentOmit = Omit<PaymentPersistent, "id">;
type PaymentPick = Pick<PaymentPersistent, "from" | "to">;
type ExtractEx = Extract<"from" | "to" | PaymentOmit, string>;
