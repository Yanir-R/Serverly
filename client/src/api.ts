import ServerService from "./services/ServerService";

export const api = {
  getAllServersData: async (setData: any) => {
    try {
      const response = await ServerService.getAllServers();

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  },
};
