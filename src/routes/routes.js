import { ROUTES, PATHS } from '../constants/routes.js';

export const renderRoute = (router, authed) => {
  const routes = ROUTES.map( route => {
    const redirectConst = route.private ? PATHS.login : PATHS.game;
    if ((!authed && !route.private) || (route.private && authed) || (authed && window.location.pathname !== PATHS.login)) {
      return {
        path: route.path,
        component: route.component
      }
    }
    return {
      path: route.path,
      component: route.component,
      action: (context, commands) => commands.redirect(redirectConst)
    }
  })
  router.setRoutes(routes);
}
