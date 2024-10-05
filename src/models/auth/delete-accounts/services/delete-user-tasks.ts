import { db, deleteCollection } from '../../../../libs/firebase';


/** Delete all user tasks */
export async function deleteUserTasks(userId: string) {
  if (!userId) return;
  
  deleteCollection(db, 'tasks', userId, 'tasks', 50);
}
