export const ORDER_STATUS = {
  NOT_PAID: 0,
  PENDING: 1,
  ON_DELIVERY: 2,
  COMPLETED: 3,
  CANCELLED: 4,
};

export const ORDER_STATUS_LABEL = {
  [ORDER_STATUS.NOT_PAID]: {
    label: "Ödənilməyib",
    color: "danger",
  },
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
  DEBT: 3,
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
  [ORDER_PAYMENT_METHOD.DEBT]: {
    label: "Nisyə ödəniş",
    color: "warning",
  },
};
