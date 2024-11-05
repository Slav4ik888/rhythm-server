import Router from 'koa-router';
import controllers from '../../controllers';
import { fbAuth } from '../../libs/firebase';
import { em } from './helpers';
import { paths } from './paths';
// import { checkUserSession } from '../session-caches';
// import { mustBeAuthenticated } from '../../libs/verifications/must-be-authenticated.js';


const
  router = new Router({ prefix: '/api' }),
  { auth, users } = controllers;



// USERS - Auth
router.post(paths.auth.signup.byEmail,           em, auth.signupByEmail);
router.post(paths.auth.login.resetEmailPassword, em, auth.resetEmailPassword);
router.post(paths.auth.login.byEmail,            em, auth.login);
router.get (paths.user.logout,                   em, auth.logout);

// USERS - Data
router.get(paths.user.getStartResourseData,      fbAuth, users.getStartResourseData);

// COMPANY
// router.post(paths.transactions.sendTransactions, checkUserSession, transactions.sendTransactions);

// UI

// Testing
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
