import Home from './containers/home';
import Login from './containers/login';
import App from './App'

//这里出现了多级路由
export default [{
  path: '/',
  component: App,
  routes: [
    {
      path: "/",
      component: Home,
      exact: true,
      loadData: Home.loadData,
      key: 'home',
    },
    {
      path: '/login',
      component: Login,
      exact: true,
      key: 'login',
    }
  ]
}]