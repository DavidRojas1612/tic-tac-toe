import '../screens/Login/user-login.js';
import '../screens/Game/game-view.js';

export const PATHS = {
  game: '/demo',
  login: '/demo/login',
};

export const ROUTES = [
  {
    component: 'game-view',
    path: PATHS.game,
    private: true
  },
  {
    component: 'user-login',
    path: PATHS.login,
    private: false
  }
];
