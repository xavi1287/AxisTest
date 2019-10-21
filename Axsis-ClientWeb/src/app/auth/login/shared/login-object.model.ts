export class LoginObject {
  public userName: string;
  public password: string;
  public empAppId: number;

  constructor(object: any) {
    this.userName = (object.userName) ? object.userName : null;
    this.password = (object.password) ? object.password : null;
    this.empAppId = (object.empAppId) ? object.empAppId : null;
  }
}
