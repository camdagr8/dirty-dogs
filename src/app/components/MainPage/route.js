import MainPage from './index';
import { actions } from 'appdir/app';

export default {
    path: '/',
    exact: true,
    component: MainPage,
    load: params => actions.MainPage.mount(params),
};
