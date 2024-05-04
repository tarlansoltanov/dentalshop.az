export const ORDER_STATUS = {
  PENDING: 1,
  ON_DELIVERY: 2,
  COMPLETED: 3,
  CANCELLED: 4,
};

export const ORDER_STATUS_LABEL = {
  [ORDER_STATUS.PENDING]: {
    label: "Hazırlanır",
    color: "info",
  },
  [ORDER_STATUS.ON_DELIVERY]: {
    label: "Yoldadır",
    color: "warning",
  },
  [ORDER_STATUS.COMPLETED]: {
    label: "Tamamlandı",
    color: "success",
  },
  [ORDER_STATUS.CANCELLED]: {
    label: "Ləğv edildi",
    color: "danger",
  },
};

export const ORDER_PAYMENT_METHOD = {
  CASH: 1,
  CARD: 2,
};

export const ORDER_PAYMENT_METHOD_LABEL = {
  [ORDER_PAYMENT_METHOD.CASH]: {
    label: "Qapıda ödəniş",
    color: "success",
  },
  [ORDER_PAYMENT_METHOD.CARD]: {
    label: "Kartla ödəniş",
    color: "info",
  },
};
