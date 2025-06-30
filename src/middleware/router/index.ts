import Router from 'koa-router';
import controllers from '../../controllers';
import { fbAuth } from '../../libs/firebase';
import { em } from './helpers';
import { API_PATHS } from './paths';
import { checkUserSession } from '../session-caches';
// import { mustBeAuthenticated } from '../../libs/verifications/must-be-authenticated.js';


const
  router = new Router({ prefix: '/api' }),
  { auth, user, company, dashboard, paramsCompany, docs, google, templates } = controllers;


// USERS - Auth
router.post (API_PATHS.auth.signup.byEmail,             em,               auth.signupByEmail);
router.post (API_PATHS.auth.login.resetEmailPassword,   em,               auth.resetEmailPassword);
router.post (API_PATHS.auth.login.byEmail,              em,               auth.login);

// USERS - Data
router.get  (API_PATHS.user.getAuth,                    fbAuth,           user.getAuth);
router.post (API_PATHS.user.update,                     checkUserSession, user.update);
router.post (API_PATHS.user.logout,                     em,               user.logout);

// COMPANY
// router.post(API_PATHS.company.get,                     checkUserSession, company.get);
router.patch(API_PATHS.company.update,                  checkUserSession, company.update);

// PARAMS-COMPANY
router.get  (API_PATHS.paramsCompany.get,               checkUserSession, paramsCompany.get);

// VIEW
router.post (API_PATHS.dashboard.bunch.get,             checkUserSession, dashboard.bunch.get);
router.post (API_PATHS.dashboard.view.createGroupItems, checkUserSession, dashboard.view.createGroupItems);
// router.post(API_PATHS.dashboard.view.get,              checkUserSession, dashboard.view.get);
router.patch(API_PATHS.dashboard.view.update,           checkUserSession, dashboard.view.update);
router.post (API_PATHS.dashboard.view.delete,           checkUserSession, dashboard.view.delete);

// TEMPLATES
router.get  (API_PATHS.templates.getTemplates,          checkUserSession, templates.getTemplates);
router.post (API_PATHS.templates.update,                checkUserSession, templates.update);

// DOCS
router.get  (API_PATHS.docs.getPolicy,                  em,               docs.getPolicy);

// GOOGLE
router.post (API_PATHS.google.getData,                  checkUserSession, google.getData);

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
