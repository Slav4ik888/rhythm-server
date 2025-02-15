import { addViewItemModel } from './add'
import { updateViewItemModel } from './update'
import { deleteViewItemModel } from './delete'
import { createGroupItemsModel } from './create-group-items'

export default { 
  add              : addViewItemModel,
  createGroupItems : createGroupItemsModel,
  update           : updateViewItemModel,
  delete           : deleteViewItemModel,
}
