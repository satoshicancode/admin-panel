import { OrderSet } from "@custom-types/order";

export function hasMultipleOrders(orderSet: OrderSet): boolean {
  return orderSet.orders && orderSet.orders.length > 1;
}
