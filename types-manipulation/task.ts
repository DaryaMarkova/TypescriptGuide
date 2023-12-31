const sourceArray = [
  { group: 1, name: "a" },
  { group: 2, name: "b" },
  { group: 2, name: "c" },
];

function groupByKey<T extends Record<string, string | number | object>>(
  array: T[],
  key: keyof T
): Record<string, T[]> {
  return array.reduce((result, item: T) => {
    const fieldKey = item[key];
    const fieldValue = result[fieldKey.toString()];

    if (!fieldValue) {
      result[fieldKey.toString()] = [];
    }

    result[fieldKey.toString()].push(item);
    return result;
  }, {});
}

/* Написать тип для валидационной формы */
const formValidation: Validation<{ name: ""; password: "" }> = {
  name: { isValid: true },
  password: { isValid: false, errorMessage: "Должен быть длиннее 5 символов" },
};

type ValidationType = Record<
  string,
  { isValid: boolean; errorMessage?: string }
>;

type Validation<T> = {
  [K in keyof T]:
    | {
        isValid: true;
      }
    | {
        isValid: false;
        errorMessage: string;
      };
};
