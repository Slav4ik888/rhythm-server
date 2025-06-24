import Router from 'koa-router';
import controllers from '../../controllers';
import { fbAuth } from '../../libs/firebase';
import { em } from './helpers';
import { paths } from './paths';
import { checkUserSession } from '../session-caches';
import { serviceUpdateCompany } from '../../models/company/services';
import { devSaveBunches } from '../../models/dashboard-view/services/dev-save-bunches';
import { serviceGetDashboardBunches } from '../../models/dashboard-view/services';
// import { mustBeAuthenticated } from '../../libs/verifications/must-be-authenticated.js';


const
  router = new Router({ prefix: '/api' }),
  { auth, user, company, dashboard, paramsCompany, docs } = controllers;


// USERS - Auth
router.post(paths.auth.signup.byEmail,             em,               auth.signupByEmail);
router.post(paths.auth.login.resetEmailPassword,   em,               auth.resetEmailPassword);
router.post(paths.auth.login.byEmail,              em,               auth.login);

// USERS - Data
router.get(paths.user.getAuth,                     fbAuth,           user.getAuth);
router.post(paths.user.update,                     checkUserSession, user.update);
router.get (paths.user.logout,                     em,               user.logout);

// COMPANY
// router.post(paths.company.get,                     checkUserSession, company.get);
router.post(paths.company.update,                  checkUserSession, company.update);

// PARAMS-COMPANY
router.get(paths.paramsCompany.get,                checkUserSession, paramsCompany.get);

// VIEW
// router.post(paths.dashboard.view.createGroupItems, checkUserSession, dashboard.view.createGroupItems);
router.post(paths.dashboard.bunch.get,              checkUserSession, dashboard.bunch.get);
// router.post(paths.dashboard.view.update,           checkUserSession, dashboard.view.update);
// router.post(paths.dashboard.view.delete,           checkUserSession, dashboard.view.delete);

// DOCS
router.get(paths.docs.getPolicy,                   em,               docs.getPolicy);


// Testing
// router.post('/devGetBunches', async (ctx) => {
//   // @ts-ignore
//   const { companyId, bunchIds } = ctx.request.body;
//   await serviceGetDashboardBunches(companyId, bunchIds);

//   ctx.body = { status: 'ok' };
//   ctx.status = 200;
// });

// router.post('/devSaveBunches', async (ctx) => {
//   console.log('ctx.request.body: ', ctx.request.body);

//   await devSaveBunches(ctx);

//   ctx.body = { status: 'ok' };
//   ctx.status = 200;
// });

// router.post('/devUpdateCompany', async (ctx) => {
//   console.log('ctx.request.body: ', ctx.request.body);

//   // @ts-ignore
//   await serviceUpdateCompany(ctx.request.body.company, ctx.request.body.userId);

//   ctx.body = { status: 'ok' };
//   ctx.status = 200;
// });

router.get('/hello', (ctx) => {
  console.log('Hello wolrd!');
  ctx.body = 'Hello wolrd!';
});
router.get('/hello/:id', (ctx) => {
  // console.log('ctx.path: ', ctx.path); // /api/hello
  const { id } = ctx.params;
  console.log('Hello wolrd! \n with id:', id);
  ctx.body = `Hello wolrd! \n with id: ${id}`;
});
router.get('/throw/:status', (ctx) => {
  const { status } = ctx.params;
  ctx.throw(400, 'not valid status', { userStatus: `user status: ${status}` });
});

// DEV
// router.post('/devDeleteCompanyAccount', fbAuth, controllers.auth.deleteCompanyAccount);

export default router;
