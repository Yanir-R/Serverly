const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "Server Name is required"],
      unique: [true, "Server Name is already taken"],
    },
    IP: {
      type: String,
      required: [true, "Server IP is required"],
      unique: [true, "Server IP is already taken"],
    },
    Type: {
      type: Object,
      name: String,
      PricePerMin: Number,
      required: [true, "Server Info-Type is required"],
    },
    isRunning: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SERVERS", serverSchema);
