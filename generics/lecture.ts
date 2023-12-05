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
