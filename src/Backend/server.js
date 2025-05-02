import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import ProfileRoutes from "./routes/ProfileRoutes.js";
import PetRoutes from "./routes/PetRoutes.js";
import RoutineRoutes from "./routes/RoutineRoutes.js";
import EventRoutes from "./routes/EventRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// API Endpoints
app.use('/api/profiles', ProfileRoutes);
app.use('/api/pets', PetRoutes);
app.use('/api/routines', RoutineRoutes);
app.use('/api/events', EventRoutes);

// Connect to Database
try {
  await db.authenticate();
  console.log('Database connected...');
} catch (error) {
  console.error('Database connection error:', error);
}

app.listen(3000, () => console.log('Server running on http://localhost:3000'));



