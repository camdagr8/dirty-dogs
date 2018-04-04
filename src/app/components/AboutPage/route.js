import AboutPage from './index';
import { actions } from 'appdir/app';

export default {
    path: '/about',
    exact: true,
    component: AboutPage,
    load: params => actions.AboutPage.mount(params),
};
