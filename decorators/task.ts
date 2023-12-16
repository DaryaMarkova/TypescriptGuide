/* декоратор для класса  */
function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date();
  };
}

/* декоратор, который отлавливает исходящие ошибки у метода*/
function catchError({ rethrow: boolean } = { rethrow: true }) {
  return (
    target: Object,
    _: string | symbol,
    descriptor: TypedPropertyDescriptor<(args: any[]) => void>
  ): TypedPropertyDescriptor<(args: any[]) => any> | void => {
    const method = descriptor.value;

    descriptor.value = async (...args: any[]) => {
      try {
        const res = await method?.apply(target, args);
        return res;
      } catch (e) {
        if (rethrow) {
          throw e;
        } else {
        }
      }
    };
  };
}

// пример использования
// @catchError({ rethrow: true })
