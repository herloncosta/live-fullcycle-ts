import { Address } from "../models/address";

export interface IUser {
  readonly firstName: string;
  readonly lastName: string;
  fullName: () => string;
  address?: Address; // parâmetro opcional (optional chainning)
}
