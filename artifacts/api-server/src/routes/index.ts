import { Router, type IRouter } from "express";
import healthRouter from "./health";
import vehiclesRouter from "./vehicles";

const router: IRouter = Router();
router.use(healthRouter);
router.use("/vehicles", vehiclesRouter);

export default router;
