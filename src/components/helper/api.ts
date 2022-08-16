import axios from 'axios';
import { OrderInterface } from 'types/cart';
import { ItemInterface } from 'types/item';
import { UserEdit, UserInterface, UserLogin, UserRegister } from 'types/user';

const instance = axios.create({
  //baseURL: 'http://localhost:3001/',
  baseURL: 'https://gentle-plateau-38671.herokuapp.com/',
});

instance.interceptors.request.use((c:any) => {
  c.headers.Authorization = localStorage.getItem('token');
  return c;
});

const api = {
  auth: {
    me: () => instance.get('api/users/current'),
    login: (data: UserLogin) => instance.post('users/sign_in', data),
    register: (data: UserRegister) => instance.post('users', data),
  },
  items: {
    all: (search:string, offset:number, limit:number) => instance.get(`api/items?search=${search}&offset=${offset}&limit=${limit}`),
    add: (data: ItemInterface) => instance.post('api/items', data),
    edit: (data: ItemInterface,id: number) => instance.put('/api/items/' + id, data),
    delete: (id: number) => instance.delete('api/items/' + id),
  },
  users: {
    all: () => instance.get('api/users'),
    add: (data: UserInterface) => instance.post('api/users', data),
    edit: (data: UserEdit, id: number) => instance.put('/api/users/' + id, data),
    delete: (id: number) => instance.delete('api/users/' + id),
  },
  orders: {
    all: () => instance.get('api/orders'),
    add: (data: OrderInterface) => instance.post('api/orders', data),
  }
};

export default api;