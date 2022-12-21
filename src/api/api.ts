import { client } from "./client";
import { LoginData, RequestMethod } from "./types";

export default abstract class API {
  static login(payload: LoginData) {
    const method = RequestMethod.Post;
    const url = "login";
    return API.request(method, url, payload);
  }

  private static request<T, U>(method: RequestMethod, url: string, data: U) {
    console.log(url, data);
    return client.request<T>({ method, url, data });
  }
}
