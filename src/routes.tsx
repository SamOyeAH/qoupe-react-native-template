import { FC } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLocalize } from '@hooks/localize';
import { Screens } from '@enums/screens.enum';
import { HomeScreen } from '@screens/home';
import { TodosScreen } from '@screens/todos';
import { TodoScreen } from '@screens/todo';
import { TodosCreateScreen } from '@screens/todos-create';
import { useCheckLogin } from '@auth/hooks';
import { ProfileScreen } from '@screens/profile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TodosRoutes: FC = () => {
  const { t } = useLocalize();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.TODOS_LIST}
        options={{ title: t(Screens.TODOS_LIST) }}
        component={TodosScreen}
      />
      <Stack.Screen
        name={Screens.TODOS_NEW}
        options={{ title: t(Screens.TODOS_NEW) }}
        component={TodosCreateScreen}
      />
      <Stack.Screen
        name={Screens.TODOS_ITEM}
        options={{ title: t(Screens.TODOS_ITEM) }}
        component={TodoScreen}
      />
    </Stack.Navigator>
  );
};

const tabIcons: Record<string, string> = {
  [Screens.HOME]: 'aperture',
  [Screens.TODOS]: 'ios-list',
  [Screens.PROFILE]: 'happy-outline',
};

export const Routes: FC = () => {
  const { t } = useLocalize();
  const isLoggedIn = useCheckLogin();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size, color }) => {
            return (
              <Ionicons name={tabIcons[route.name]} size={size} color={color} />
            );
          },
        })}
      >
        <Tab.Screen
          name={Screens.HOME}
          options={{ title: t(Screens.HOME), tabBarTestID: 'tab-home' }}
          component={HomeScreen}
        />
        <Tab.Screen
          name={Screens.TODOS}
          options={{
            title: t(Screens.TODOS),
            headerShown: false,
            tabBarTestID: 'tab-todo',
          }}
          component={TodosRoutes}
        />
        {isLoggedIn && (
          <Tab.Screen
            name={Screens.PROFILE}
            options={{ title: t(Screens.PROFILE), tabBarTestID: 'tab-profile' }}
            component={ProfileScreen}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
