export interface User {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  dob?: string;
  password?: string;
  phoneNumber?: string;
  profileImg?: string;
  created_at?: string;
  updated_at?: string;
  isActive?: boolean;
}

export interface UserAPIModel {
  updated_at: string;
  created_at: string;
  profileImg: string;
  userId : number;
  userPassword : string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dob: string;
  isActive: boolean;
}

export class UserModel implements User {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  password: string;
  profileImg?: string;
  created_at?: string;
  updated_at?: string;
  phoneNumber?: string;
  isActive?: boolean;

  constructor(user: UserAPIModel) {
    this.id = user.userId || 0;
    this.userName = user.userName;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email || "";
    this.password = user.userPassword || "";
    this.profileImg = user.profileImg || "";
    this.created_at = user.created_at || "";
    this.updated_at = user.updated_at || "";
    this.phoneNumber = user.phoneNumber || "";
    this.dob = user.dob || "";
    this.isActive = user.isActive || false;
  }
}
