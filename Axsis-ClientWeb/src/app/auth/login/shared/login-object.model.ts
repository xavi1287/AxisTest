export class LoginObject {
  public userName: string;
  public password: string;


  constructor(object: any) {
    this.userName = (object.userName) ? object.userName : null;
    this.password = (object.password) ? object.password : null;
    
  }
}
