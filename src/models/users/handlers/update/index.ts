import { Context } from '../../../../app/types/global';
import { serviceUpdateUser } from '../../services';
import { User } from '../../types';
import { getUserId } from '../../utils';



export interface UpdatedConfig {
  userData: Partial<User>
}


/**
 * @requires body as UpdatedConfig
 */
export const updateUserModel = async (ctx: Context): Promise<void> => {
  const { userData } = ctx.request.body;
  const userId = getUserId(ctx);

  // TODO: Permissions
  
  // TODO: validateUser(ctx, userData);

  // Update
  await serviceUpdateUser(userData, userId);

  ctx.status = 200;
};
