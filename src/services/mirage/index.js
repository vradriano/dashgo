import { createServer, Model } from 'miragejs'

type UserType = {
  name: string;
  email: string;
  created_at: string
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<UserType>>({})
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough()
    }
  })


  return server;
}