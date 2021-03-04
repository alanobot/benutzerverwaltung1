import axiosApi from "./AxiosUtility";
import User from "./model/User";


export default class UserServiceImpl {
  public async retrieveAll(): Promise<User[]> {
    try {
      const { data } = await axiosApi.get<User[]>("/users");
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
