import { dashboardViewAddController } from './add'
import { dashboardViewCreateGroupItemsController } from './create-group-items'
import { dashboardViewUpdateController } from './update'
import { dashboardViewDeleteController } from './delete'


export default { 
  add              : dashboardViewAddController,
  createGroupItems : dashboardViewCreateGroupItemsController,
  update           : dashboardViewUpdateController,
  delete           : dashboardViewDeleteController,
}
