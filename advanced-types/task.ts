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

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}

type TResponse = IResponseSuccess | IResponseFailed;

type f = (response: TResponse) => number;

function isSuccess(response: TResponse): response is IResponseSuccess {
  return response.status === PaymentStatus.Success;
}

function getIdFromData(response: TResponse): number | never {
  if (isSuccess(response)) {
    return response.data.databaseId;
  } else {
    throw new Error(response.data.errorMessage);
  }
}
