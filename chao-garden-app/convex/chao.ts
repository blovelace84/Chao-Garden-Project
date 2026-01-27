import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createChao = mutation({
    args: {},
    handler: async (ctx) => {
        await ctx.db.insert("chaos", {
            name: "Chao",
            hunger: "50",
            happiness: "50",
        });
    },
});

export const getChaos = query({
    handler: async (ctx) => {
        return await ctx.db.query("chaos").collect();
    },
});