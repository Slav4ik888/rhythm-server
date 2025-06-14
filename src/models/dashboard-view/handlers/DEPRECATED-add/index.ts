// import { Context } from '../../../../app/types/global';
// import { serviceDashboardViewAdd } from '../../services';
// import { ViewItem } from '../../types';



// export interface AddNewView {
//   companyId : string
//   viewItem  : ViewItem
// }

// /**
//  * DEPRECATED
//  * @requires body.AddNewView
//  */
// export const addViewItemModel = async (ctx: Context): Promise<void> => {
//   const { viewItem, companyId } = ctx.request.body as AddNewView;

//   // TODO: Permissions
//   // TODO: Remove fields that are not allowed to be updated

//   // TODO: validateNewView(ctx, userData);

//   await serviceDashboardViewAdd(ctx, { viewItem, companyId });

//   ctx.status = 200;
//   ctx.body = {};
// };
