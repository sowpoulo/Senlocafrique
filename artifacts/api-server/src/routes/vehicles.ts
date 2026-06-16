import { Router, type IRouter, Request, Response } from "express";
import { db } from "@workspace/db";
import { vehiclesTable, insertVehicleSchema } from "@workspace/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const router: IRouter = Router();

// GET all vehicles
router.get("/", async (_req: Request, res: Response) => {
  try {
    const vehicles = await db.select().from(vehiclesTable);
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch vehicles" });
  }
});

// GET single vehicle
router.get("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });
  try {
    const [vehicle] = await db.select().from(vehiclesTable).where(eq(vehiclesTable.id, id));
    if (!vehicle) return res.status(404).json({ error: "Not found" });
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch vehicle" });
  }
});

// POST create vehicle
router.post("/", async (req: Request, res: Response) => {
  try {
    const data = insertVehicleSchema.parse(req.body);
    const [newVehicle] = await db.insert(vehiclesTable).values(data).returning();
    res.status(201).json(newVehicle);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ error: "Failed to create vehicle" });
  }
});

// PUT update vehicle
router.put("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });
  try {
    const data = insertVehicleSchema.partial().parse(req.body);
    const [updated] = await db
      .update(vehiclesTable)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(vehiclesTable.id, id))
      .returning();
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ error: "Failed to update vehicle" });
  }
});

// DELETE vehicle
router.delete("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });
  try {
    const [deleted] = await db
      .delete(vehiclesTable)
      .where(eq(vehiclesTable.id, id))
      .returning();
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ success: true, deleted });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete vehicle" });
  }
});

export default router;
