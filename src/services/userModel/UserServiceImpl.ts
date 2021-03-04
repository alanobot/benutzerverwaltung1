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

  public async addUser(vorname:string, name:string, strasse:string, plz:string, ort:string): Promise<User> {
    try {
      const { data } = await axiosApi.post("/users", {
        id: "",
        name: name,
        vorname: vorname,
        strasse: strasse,
        plz: plz,
        ort: ort,
      });

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
