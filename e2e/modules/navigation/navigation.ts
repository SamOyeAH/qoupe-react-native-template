import elements from './navigation.elements';

export const getHomeTab = () => element(by.id(elements.TAB_HOME));

export const getTodoTab = () => element(by.id(elements.TAB_TODO));

export const goToTodoScreen = () => getTodoTab().tap();

export const goToHomeScreen = () => getHomeTab().tap();
