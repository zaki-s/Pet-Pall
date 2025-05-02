// src/Backend/controllers/ProfileController.js

import Profile from "../models/ProfileModel.js";

// Get all profiles
export const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.findAll();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new profile
export const createProfile = async (req, res) => {
  const { name, email, phone, address, profile_photo } = req.body;
  try {
    const newProfile = await Profile.create({
      name,
      email,
      phone,
      address,
      profile_photo
    });
    res.json(newProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
