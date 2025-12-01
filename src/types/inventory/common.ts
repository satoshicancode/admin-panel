import type { HttpTypes, ProductVariantDTO } from "@medusajs/types";

export type ExtendedAdminInventoryItem = HttpTypes.AdminInventoryItem & {
  stocked_quantity: number;
  reserved_quantity: number;
  variants?: ProductVariantDTO[];
};

export type ExtendedAdminInventoryItemResponse = {
  inventory_item: ExtendedAdminInventoryItem;
};
