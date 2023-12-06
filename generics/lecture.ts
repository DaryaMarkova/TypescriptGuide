function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

const res = logMiddleware<number>(10);

function getSplittedHalf<T>(data: Array<T>): Array<T> {
  const length = data.length / 2;

  return data.slice(0, length);
}

getSplittedHalf<number>([1, 2, 3]);

const splitFunctionType: <Y>(data: Array<Y>) => Array<Y> = getSplittedHalf;

function toString<T>(data: T): string | undefined {
  if (Array.isArray(data)) {
    return data.toString();
  }

  switch (typeof data) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "symbol":
    case "undefined":
    case "object":
    case "function":
      return data?.toString();
  }
}

interface ILogLine<T> {
  timeStamp: Date;
  data: T;
}

type TLogLine<T> = {
  timeStamp: Date;
  data: T;
};

const logLine: TLogLine<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
  },
};

class Vehicle {
  run: number;
}

class LCV extends Vehicle {
  capacity: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
  return { ...vehicle, run: vehicle.run / 0.62 };
}
const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());
kmToMiles({ run: 1 });

function logId<T extends string | number, Y>(
  id: T,
  additionalData: Y
): { id: T; data: Y } {
  console.log(id);
  return { id, data: additionalData };
}

class Resp<D, E> {
  data?: D;
  error?: E;

  constructor(data?: D, error?: E) {}
}

const response = new Resp<string, number>("data");

class HTTPResp<F> extends Resp<string, number> {
  code: F;

  setCode(code: F) {
    this.code = code;
  }
}

const res2 = new HTTPResp<number>("Darya", 4);
res2.setCode(7);

/* Миксины */

type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
  constructor(public items: string[]) {}
}

class Accordion {
  isOpened: boolean;
}

type ListType = GConstructor<List>;
type AccordionType = GConstructor<Accordion>;

function ExtendedList<TBase extends ListType>(Base: TBase) {
  return class ExtendedList extends Base {
    first() {
      this.items[0];
    }
  };
}

class AccordionList {
  isOpened: boolean;
  constructor(public items: string[]) {}
}

const list = ExtendedList(AccordionList);
const resList = new list(["first", "second"]);
console.log(resList.first());
