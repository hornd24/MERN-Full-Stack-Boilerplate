import express from "express";
import org from "../controllers/organizationsController"

const router = express.Router();

// Route to get list of crypto currencies for drop down.
router.get("/", org.findAll);
router.get("/:id", org.findById);
router.post("/", org.create);
router.put("/:id", org.update);
router.delete("/:id", org.remove);

// Export routes for server.js to use.
export default router;
