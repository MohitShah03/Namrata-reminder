import  express  from "express";
import { signup } from "../../reminder/src/components/accounts/Auth";

const router = express.Router();

router.post("/signup", signup);

export default router;