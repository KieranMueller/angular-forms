import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  getStuff() {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
