// import { addViewItemModel } from './DEPRECATED-add'
import { updateGroupViewItemsModel } from './update'
import { deleteViewItemModel } from './delete'
import { createGroupViewItemsModel } from './create-group-items'
import { getDataModel } from './get-data'

export default {
  get              : getDataModel,
  // add              : addViewItemModel,
  createGroupItems : createGroupViewItemsModel,
  updateGroupItems : updateGroupViewItemsModel,
  delete           : deleteViewItemModel,
}
