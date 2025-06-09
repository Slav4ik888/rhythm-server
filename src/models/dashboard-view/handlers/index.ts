import { addViewItemModel } from './add'
import { updateGroupViewItemsModel } from './update'
import { deleteViewItemModel } from './delete'
import { createGroupViewItemsModel } from './create-group-items'

export default {
  add              : addViewItemModel,
  createGroupItems : createGroupViewItemsModel,
  updateGroupItems : updateGroupViewItemsModel,
  delete           : deleteViewItemModel,
}
