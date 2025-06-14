// import { Context } from '../../../../app/types/global';
// import { creatorFixDate } from '../../../base';
// import { DbRef, getRefDoc } from '../../../helpers';
// import { getUserId } from '../../../user';
// import { AddNewView } from '../../handlers/DEPRECATED-add';



// /** Add new ViewItem in DB */
// export const serviceDashboardViewAdd = async (ctx: Context, data: AddNewView): Promise<undefined> => {
//   const { viewItem, companyId } = data;
//   const userId     = getUserId(ctx);
//   const lastChange = creatorFixDate(userId);

//   viewItem.createdAt  = lastChange;
//   viewItem.lastChange = lastChange;

//   await getRefDoc(DbRef.VIEW, { companyId, id: viewItem.id }).set(viewItem);

//   return
// };
