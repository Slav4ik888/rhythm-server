import Router from 'koa-router';
import controllers from '../../controllers';
import { fbAuth } from '../../libs/firebase';
import { checkUserSession } from '../session-caches';
import { paths } from './paths';
// import { mustBeAuthenticated } from '../../libs/verifications/must-be-authenticated.js';


const
  router = new Router({ prefix: '/api' }),
  { auth, users, folders, documents, rules, files, transactions } = controllers;


// USERS - Auth
router.post(paths.auth.signup.byEmail,           auth.signup);
router.post(paths.auth.login.resetEmailPassword, auth.resetEmailPassword);
router.post(paths.auth.login.byEmail,            auth.login);
router.get (paths.user.logout,                   auth.logout);

// USERS - Data
router.post(paths.user.getStartResourseData,    fbAuth, users.getStartResourseData);

// COMPANY

// UI

// Data - Docs
router.post(paths.transactions.sendTransactions, checkUserSession, transactions.sendTransactions);

router.get (paths.folders.getDocsByFolder,       checkUserSession, folders.getDocsByFolder);

// Data - Folders
router.post(paths.folders.addFolder,             checkUserSession, folders.addFolder);
// router.post(path.folders.GET_FOLDERS,           checkUserSession, d.getFolders);
router.post(paths.folders.updateFolder,          checkUserSession, folders.updateFolder);
// router.post(path.folders.REMOVE_FOLDER,         checkUserSession, d.removeFolder);

// Data - Documents
router.post(paths.documents.addDocument,         checkUserSession, documents.addDocument);
router.post(paths.documents.updateDocument,      checkUserSession, documents.updateDocument);
router.get (paths.documents.getDocumentById,     checkUserSession, documents.getDocumentById);
// router.post(path.documents.GET_DOCUMENT_ID,           checkUserSession, d.getDocument);
// router.post(path.documents.GET_DOCUMENT_ID_PARENT_ID, checkUserSession, d.getDocument);
// router.post(path.documents.REMOVE_DOCUMENT,           checkUserSession, d.updateDocument);

// Data - Rules
router.post(paths.rules.addRule,                 checkUserSession, rules.addRule);
// router.get (path.rules.GET_RULE_ID_PARENT_ID,   checkUserSession, d.getRule);
router.get (paths.rules.getRuleById,             checkUserSession, rules.getRuleById);
router.get (paths.rules.getRuleByIdByParentId,   checkUserSession, rules.getRuleById);
// router.post(path.rules.GET_RULE,                checkUserSession, d.getRule);
router.post(paths.rules.updateRule,              checkUserSession, rules.updateRule);
// router.post(path.rules.REMOVE_RULE,             checkUserSession, d.removeRule);

// router.post(path.rulesTitles.GET_RULES_TITLES,  checkUserSession, d.getRulesTitles);
// router.post(path.rulesTitles.UPDATE_RULE_TITLE, checkUserSession, d.updateRuleTitle);


// FILES
router.post(paths.files.upload, checkUserSession, files.upload);


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
router.post('/devDeleteCompanyAccount', fbAuth, controllers.auth.deleteCompanyAccount);

export default router;
