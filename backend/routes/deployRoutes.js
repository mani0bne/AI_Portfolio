import express from "express";
import { deployPortfolio } from "../controller/deployController.js";

const router = express.Router();

router.post("/deploy", deployPortfolio);

export default router;

// import express from "express";
// import { deployPortfolio } from "../controller/deployController.js";

// const router = express.Router();

// router.post("/deploy", deployPortfolio);

// export default router;


