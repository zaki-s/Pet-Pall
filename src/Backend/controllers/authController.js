const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = []; // Temporarily store users in memory (use DB in production)

const SECRET = "your_jwt_secret_key"; // Move to .env for security

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({ name, email, password: hashedPassword });
  res.status(201).json({ message: "User registered" });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ email: user.email }, SECRET, { expiresIn: "1h" });
  res.json({ token });
};
