const router = require("express").Router();
const Data = require("../models/dataModel");

router.get("/alldata", async (req, res) => {
  const getData = await Data.find();
  res.json(getData);
});

router.post("/adddata", async (req, res) => {
  try {
    const {
      fullName,
      email,
      address,
      phoneNumber,
      tiktokId,
      photoLabel,
      facebookUrl,
      instagramUrl,
      youtubeUrl,
      digitalSignature,
      type,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !address ||
      !phoneNumber ||
      !tiktokId ||
      !photoLabel ||
      !facebookUrl ||
      !instagramUrl ||
      !youtubeUrl ||
      !digitalSignature ||
      !type
    )
      return res.status(400).json({ msg: "Not all fields have been entered" });
    const newData = Data({
      fullName,
      email,
      address,
      phoneNumber,
      tiktokId,
      photoLabel,
      facebookUrl,
      instagramUrl,
      youtubeUrl,
      digitalSignature,
      type,
    });
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const deletedData = await Data.findByIdAndDelete(req.params.id);
  res.json(deletedData);
});

router.put("/update/:id", async (req, res) => {
  try {
    const {
      fullName,
      email,
      address,
      phoneNumber,
      tiktokId,
      photoLabel,
      facebookUrl,
      instagramUrl,
      youtubeUrl,
      digitalSignature,
      type,
    } = req.body;
    if (
      !fullName ||
      !email ||
      !address ||
      !phoneNumber ||
      !tiktokId ||
      !photoLabel ||
      !facebookUrl ||
      !instagramUrl ||
      !youtubeUrl ||
      !digitalSignature ||
      !type
    )
      return res.status(400).json({ msg: "Not all fields have been entered" });
    const updatedData = await Data.findByIdAndUpdate(req.params.id, {
      fullName,
      email,
      address,
      phoneNumber,
      tiktokId,
      photoLabel,
      facebookUrl,
      instagramUrl,
      youtubeUrl,
      digitalSignature,
      type,
    });
    res.json(updatedData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
