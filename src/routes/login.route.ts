import { Router, Request, Response, NextFunction } from "express";
import { LoginModel } from "../models/login.model";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  const vm = new LoginModel().getViewModel();
  res.render("login", { vm });
});

export default router;
