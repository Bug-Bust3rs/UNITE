import { Request as ExpressRequest, Response } from "express";
// @ts-ignore
export interface RequestWithFile extends ExpressRequest {
  file: unknown;
}

export interface User {
  name: string;
  id: string;
  email: string;
  phone: string;
  isVerified: boolean;
  location: string;
  password: string;
}



