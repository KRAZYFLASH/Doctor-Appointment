// middlewares/authUser.js
import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
  try {
    const auth = req.headers.authorization || '';
    const token = auth.startsWith('Bearer ') ? auth.slice(7) : req.headers.token; // fallback

    if (!token) {
      return res.status(401).json({ success: false, message: 'Not Authorized Login Again' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;         // ✅ simpan di req, bukan req.body
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: err.message });
  }
};

export default authUser;
