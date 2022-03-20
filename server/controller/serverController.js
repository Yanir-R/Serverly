const boom = require("boom");
const ServerModel = require("../model/ServerModel");
// const fetch = require("node-fetch");

exports.getAllServers = async (req, reply) => {
  try {
    results = await ServerModel.find();
    return results;
  } catch (err) {
    throw boom.boomify(err);
  }
};
exports.updateServer = async (req, reply) => {
  try {
    const id = req.params.id;
    const currentServer = await ServerModel.findById(id);
    currentServer.isRunning = req.body.isRunning;

    // if current isRunning is TRUE, it will change to FALSE

    if (currentServer.isRunning) {
      currentServer.openTimes.push(Date.now());
    } else {
      currentServer.closeTimes.push(Date.now());
    }

    let result = await ServerModel.findByIdAndUpdate(id, currentServer, {
      new: true,
    });
    return result;
  } catch (err) {
    throw boom.boomify(err);
  }
};
exports.getServerById = async (req, reply) => {
  try {
    const id = req.params.id;
    let result = await ServerModel.findById(id);
    return result;
  } catch (err) {
    throw boom.boomify(err);
  }
};
exports.addNewServer = async (req, reply) => {
  try {
    let server = new ServerModel(req.body);
    let new_server = await server.save();
    return new_server;
  } catch (err) {
    throw boom.boomify(err);
  }
};
exports.deleteServer = async (req, reply) => {
  try {
    const id = req.params.id;
    await ServerModel.findByIdAndDelete(id);
    return { Message: `${id} deleted` };
  } catch (err) {
    throw boom.boomify(err);
  }
};

// exports.webIpData = async (req, reply) => {
//   try {
//     const ip = req.params.ip;
//     const res = await fetch(`http://ip-api.com/json/${ip}`);
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     throw boom.boomify(err);
//   }
// };
