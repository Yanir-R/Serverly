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
    totalCost: {
      type: Number,
      default: 0,
    },
    activityMinutesToPay: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SERVERS", serverSchema);
