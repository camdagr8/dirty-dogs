import CateringPage from './index';
import { actions } from 'appdir/app';

export default {
    path: '/catering',
    exact: true,
    component: CateringPage,
    load: params => actions.CateringPage.mount(params),
};
