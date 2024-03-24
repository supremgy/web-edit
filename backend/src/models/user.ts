export interface User {
  email: string | null;
  password: string | null;
}

export interface DBUser extends User {
  id: number;
  encrypted_password: string;
}
