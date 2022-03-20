const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema(
  {
    serverName: {
      type: String,
      required: [true, "Server Name is required"],
      unique: [true, "Server Name is already taken"],
    },
    serverIP: {
      type: String,
      required: [true, "Server IP is required"],
      unique: [true, "Server IP is already taken"],
    },
    serverType: {
      type: Object,
      name: String,
      pricePerMin: Number,
      required: [true, "Server Info-Type is required"],
    },
    isRunning: {
      type: Boolean,
    },
    closeTimes: {
      type: Array,
      default: [],
    },
    openTimes: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SERVERS", serverSchema);
