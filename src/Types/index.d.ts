export interface UserPayLoad {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  isDeleted: Boolean;
}

declare global {
  namespace Express {
    interface Request {
      user: UserPayLoad;
    }
  }
}
