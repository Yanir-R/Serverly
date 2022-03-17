const serverController = require("../controller/serverController");

const routes = [
  {
    method: "GET",
    url: "/api/servers",
    handler: serverController.getAllServers,
  },
  {
    method: "GET",
    url: "/api/server/:id",
    handler: serverController.getServerById,
  },
  {
    method: "POST",
    url: "/api/servers",
    handler: serverController.addNewServer,
  },
  {
    method: "PUT",
    url: "/api/server/:id",
    handler: serverController.updateServer,
  },
  {
    method: "DELETE",
    url: "/api/server/:id",
    handler: serverController.deleteServer,
  },
  //   {
  //     method: "GET",
  //     url: "/api/serverIp/:ip",
  //     handler: serverController.webIpData,
  //   },
];
module.exports = routes;
