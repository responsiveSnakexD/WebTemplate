export type LoginData = {
  email: string;
  password: string;
};

export enum RequestMethod {
  Post = "POST",
  Get = "GET",
  Delete = "DELETE",
  Update = "UPDATE",
}
