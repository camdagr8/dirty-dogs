import MenuPage from './index';
import { actions } from 'appdir/app';

export default {
    path: '/menu',
    exact: true,
    component: MenuPage,
    load: params => actions.MenuPage.mount(params),
};
