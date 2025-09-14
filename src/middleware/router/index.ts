import Router from 'koa-router';
import controllers from '../../controllers';
import { fbAuth } from '../../libs/firebase';
import { API_PATHS } from './paths';
import { checkUserSession } from '../session-caches';
import { cv } from '../check-version';
// import { DbRef, getRefDoc } from '../../models/helpers';
// import { em } from './helpers';
// import { mustBeAuthenticated } from '../../libs/verifications/must-be-authenticated.js';


const
  router = new Router({ prefix: '/api' }),
  { auth, user, company, dashboard, paramsCompany, docs, google, templates, logs } = controllers;


// USERS - Auth
router.post (API_PATHS.auth.signup.byEmailStart,        cv,                   auth.signupByEmailStart);
router.post (API_PATHS.auth.signup.sendCodeAgain,       cv,                   auth.signupSendCode);
router.post (API_PATHS.auth.signup.byEmailEnd,          cv,                   auth.signupByEmailEnd);
router.post (API_PATHS.auth.login.resetEmailPassword,   cv,                   auth.resetEmailPassword);
router.post (API_PATHS.auth.login.byEmail,              cv,                   auth.login);

// USERS - Data
router.get  (API_PATHS.user.getAuth,                    cv, fbAuth,           user.getAuth);
router.post (API_PATHS.user.update,                     cv, checkUserSession, user.update);
router.post (API_PATHS.user.logout,                     cv,                   user.logout);

// COMPANY
router.patch(API_PATHS.company.update,                  cv, checkUserSession, company.update);
router.patch(API_PATHS.company.deleteSheet,             cv, checkUserSession, company.deleteSheet);

// PARAMS-COMPANY
// Возможность без авторизации (если доступ к странице открыт)
router.post (API_PATHS.paramsCompany.get,               cv,                   paramsCompany.get);

// VIEW
router.post (API_PATHS.dashboard.bunch.get,             cv,                   dashboard.bunch.get);
router.post (API_PATHS.dashboard.view.createGroupItems, cv, checkUserSession, dashboard.view.createGroupItems);
router.patch(API_PATHS.dashboard.view.update,           cv, checkUserSession, dashboard.view.update);
router.post (API_PATHS.dashboard.view.delete,           cv, checkUserSession, dashboard.view.delete);

// TEMPLATES
router.get  (API_PATHS.templates.getBunchesUpdated,     cv,                   templates.getBunchesUpdated);
router.post (API_PATHS.templates.getTemplates,          cv,                   templates.getTemplates);
router.post (API_PATHS.templates.update,                cv, checkUserSession, templates.update);
router.post (API_PATHS.templates.delete,                cv, checkUserSession, templates.deleteTemplate);

// DOCS
router.get  (API_PATHS.docs.getPolicy,                  cv,               docs.getPolicy);

// GOOGLE
router.post (API_PATHS.google.getData,                  cv,               google.getData);

// DEV
router.get('/logs/errors/view',     logs.errorsView);
router.get('/logs/errors/download', logs.errorsDownload);
router.get('/logs/errors/clear',    logs.errorsClear);

// router.post ('/devCreateDemoCompany', async (ctx) => {
//   console.log('ctx.request.body: ', ctx.request.body);

//   // @ts-ignore
//   if (! ctx.request.body.id) return;
//   // @ts-ignore
//   await getRefDoc(DbRef.COMPANY, { companyId: ctx.request.body.id }).set(ctx.request.body),

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
