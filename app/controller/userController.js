import { User } from "../model/user.js";

// Lấy danh sách user
export const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  console.log('Requested user ID:', id);
};

// Thêm user
export const createUser = async (req, res) => {
try {
  const { id, name, email, password } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  }catch (err) {
    res.status(400).json({ error: err.message });
  }
};
