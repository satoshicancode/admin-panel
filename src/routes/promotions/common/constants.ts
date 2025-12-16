import type { PromotionRuleOperatorValues } from "@medusajs/types"

export const PROMOTION_RULE_OPERATORS = [
  "gt",
  "lt",
  "eq",
  "ne",
  "in",
  "lte",
  "gte",
] as const satisfies readonly PromotionRuleOperatorValues[]

