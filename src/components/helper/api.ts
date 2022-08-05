import axios from 'axios';

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
    login: (data: any) => instance.post('users/sign_in', data),
    register: (data: any) => instance.post('users', data),
  },
  items: {
    all: (search:string, offset:number, limit:number) => instance.get(`api/items?search=${search}&offset=${offset}&limit=${limit}`),
    add: (data: any) => instance.post('api/items', data),
    edit: (data: any,id: number) => instance.put('/api/items/' + id, data),
    delete: (id: number) => instance.delete('api/items/' + id),
  },
  users: {
    all: () => instance.get('api/users'),
    add: (data: any) => instance.post('api/users', data),
    edit: (data: any,id: number) => instance.put('/api/users/' + id, data),
    delete: (id: number) => instance.delete('api/users/' + id),
  },
  orders: {
    all: () => instance.get('api/orders'),
    add: (data: any) => instance.post('api/orders', data),
  }
};

export default api;