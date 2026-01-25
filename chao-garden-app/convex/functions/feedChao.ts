// Update the import path below if 'mutation' is exported from a different location
import { mutation } from "../_generated/server";

import { Id } from "../_generated/dataModel"; // Make sure this import path is correct

export default mutation(async ({ db }, { chaoId }: { chaoId: Id<"chaos"> }) => {
    const chao = await db.get(chaoId);
    if(!chao) throw new Error("Chao not found");

    await db.patch(chaoId, {
        hunger: Math.min(chao.hunger + 20, 100),
        happiness: Math.min(chao.happiness + 10, 100),
    });
});