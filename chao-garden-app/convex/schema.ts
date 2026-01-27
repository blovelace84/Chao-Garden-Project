import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    chaos: defineTable({
        name: v.string(),
        hunger: v.string(),
        happiness: v.string(),
    }),
});