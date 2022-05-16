import { expect } from 'detox';
import { getHomeTab, getTodoTab, goToTodoScreen } from '../modules/navigation';
import { getHomeScreen } from '../modules/home-screen';
import { getTodoScreen } from '../modules/todo-screen';

describe('Todo App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Has navigation tabs', async () => {
    await expect(getHomeTab()).toBeVisible();
    await expect(getTodoTab()).toBeVisible();
  });

  it('Should have home screen visible by default', async () => {
    await expect(getHomeScreen()).toBeVisible();
  });

  it('Should navigate to the todo screen', async () => {
    await goToTodoScreen();
    await expect(getTodoScreen()).toBeVisible();
  });
});
