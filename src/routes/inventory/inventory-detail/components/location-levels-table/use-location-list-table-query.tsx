import { useQueryParams } from "@hooks/use-query-params"
import type { HttpTypes } from "@medusajs/types"

export const useLocationLevelTableQuery = ({
  pageSize = 20,
  prefix,
}: {
  pageSize?: number
  prefix?: string
}) => {
  const queryObject = useQueryParams(
    [
      "order",
      "offset",
      "location_id",
      "stocked_quantity",
      "reserved_quantity",
      "incoming_quantity",
    ],
    prefix
  )

  const { offset, ...rest } = queryObject

  const searchParams: HttpTypes.AdminInventoryLevelFilters = {
    limit: pageSize,
    offset: offset ? Number(offset) : 0,
    ...rest,
  }

  return searchParams
}
