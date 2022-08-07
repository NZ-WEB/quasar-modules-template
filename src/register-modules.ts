import { Router } from 'vue-router';
import routes from './router/routes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const registerModule = (router: any[], module: any) => {
  if (module.router) {
    router.push(module.router);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerModules = (router: any[], modules: any[]) => {
  modules.forEach((module) => {
    registerModule(router, module);
  });
};
