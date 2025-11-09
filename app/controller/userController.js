import { User } from "../model/user.js";

// Lấy danh sách user
export const getUserById = async (req, res) => {
  try {
    const id = parseInt(req.params.id); // <- phải định nghĩa id
    console.log('Requested user ID:', id);

    // Tìm user theo trường id trong DB
    const user = await User.findOne({ id: id });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Thêm user
export const createUser = async (req, res) => {
try {
  const { id, name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  const newUser = await User.create({ id, name, email, password });
    res.status(201).json(newUser);
  }catch (err) {
    res.status(400).json({ error: err.message });
  }
};
