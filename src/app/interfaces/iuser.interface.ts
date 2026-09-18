export interface IUser {
    email: string;
    password: string;
    username?: string;
  }
  
  
  export interface UserRespose {
    success: string;
    token: string,
    user: IUser
  }
