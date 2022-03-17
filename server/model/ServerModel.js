const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    IP: {
      type: String,
      required: true,
    },
    Type: {
      type: String,
      required: true,
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
