import { findUserById } from "../dao/user.dao.js";
import { verifyToken } from "../utils/helper.js";

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.accessToken;

    try {
        if (token) {
            const decoded = verifyToken(token);
            const user = await findUserById(decoded.id);
            if (!user)
                return res.status(401).json({ message: "UnAuthorized" });

            req.user = user;
            
        }
        next();
    } catch (error) {
        return res.json({ message: "User Unauthorized" });
    }

}

export default authMiddleware;