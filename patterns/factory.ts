/* Паттерн "Фабрика" */

/* Общий интерфейс страховки */
interface IInsurance {
  id: number;
  status: string;
  setVehicle(vehicle: any): void;
  submit(): Promise<boolean>;
}

/* Некоторый класс TF, имплементирующий данный интерфейс */
class TFInsurance implements IInsurance {
  id: number;
  status: string;
  private vehicle: any;

  setVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  }

  submit(): Promise<boolean> {
    return Promise.resolve(false);
  }
}

/* Некоторый класс AB, имплементирующий данный интерфейс */
class ABInsurance implements IInsurance {
  id: number;
  status: string;
  private vehicle: any;

  setVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  }

  submit(): Promise<boolean> {
    return Promise.resolve(true);
  }
}

/* Абстрактная фабрика по созданию инстансов */
abstract class InsuranceFactory {
  db: any;

  abstract createInsurance(): IInsurance;

  saveHistory(insurance: IInsurance) {
    this.db.save(insurance.id, insurance.status);
  }
}

class TFInsuranceFactory extends InsuranceFactory {
  createInsurance(): IInsurance {
    return new TFInsurance();
  }
}

class ABInsuranceFactory extends InsuranceFactory {
  createInsurance(): IInsurance {
    return new ABInsurance();
  }
}

const tfInsuranceFactory = new TFInsuranceFactory();
const instance = tfInsuranceFactory.createInsurance();

tfInsuranceFactory.saveHistory(instance);

const INSURANCE_TYPE = {
  tf: TFInsurance,
  ab: ABInsurance,
};

type IT = typeof INSURANCE_TYPE;

class InsuranceFactoryAlternative {
  db: any;

  createInsurance<T extends keyof IT>(type: T): IT[T] {
    return INSURANCE_TYPE[type];
  }

  saveHistory(instance: IInsurance) {
    this.db.save(instance.id, instance.status);
  }
}

const insuranceFactoryAlt = new InsuranceFactoryAlternative();
const instance2 = new (insuranceFactoryAlt.createInsurance("tf"))();
