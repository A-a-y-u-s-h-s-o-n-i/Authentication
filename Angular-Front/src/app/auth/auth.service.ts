import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface AuthResponseData {
  id: number;
  name: string;
  email: string;
  password: number | string;
  confirmPassword: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private http: HttpClient) {}
}
