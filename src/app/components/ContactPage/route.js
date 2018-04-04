import ContactPage from './index';
import { actions } from 'appdir/app';

export default {
    path: '/contact',
    exact: true,
    component: ContactPage,
    load: params => actions.ContactPage.mount(params),
};
