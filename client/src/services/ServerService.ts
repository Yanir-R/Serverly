import http from "../http-common";

const getAllServers = () => {
  return http.get("/servers");
};

const createNewServer = (data: any) => {
  return http.post("/servers", data);
};

const removeServer = (id: any) => {
  return http.delete(`/server/${id}`);
};

const updateStatus = (id: any, data: any) => {
  return http.put(`/server/${id}`, data);
};

const ServerService = {
  getAllServers,
  createNewServer,
  removeServer,
  updateStatus,
};

export default ServerService;
