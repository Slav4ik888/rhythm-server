import { Context } from '../../../app/types/global';
import { DbRef, getRefDoc } from '../../helpers';


export async function getDocs(ctx: Context) {
  // TODO: Check permissins: access only to the company`s own data

  // Get folders
  ctx.state.return = true;

  // TODO: get folders only Condition !== REMOVED
  // const
  //   folders     = await getFolders(ctx, next);
  //   // documents   = await getDocuments(ctx, next),
  //   // rulesTitles = await getRulesTitles(ctx, next);
  
  // return res(ctx, 200, { folders, documents, rulesTitles }, loggerData, `${logTemp} success!`);
};
