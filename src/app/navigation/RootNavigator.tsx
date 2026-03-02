import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './routes';
import { HomeScreen } from '@/modules/home/screens/HomeScreen';
import { IncomesScreen } from '@/modules/incomes/screens/IncomesScreen';
import { EssentialOutflowScreen } from '@/modules/essential-outflows/screens/EssentialOutflowsScreen';
import { PlannedAllocationsScreen } from '@/modules/planned-allocations/screens/PlannedAllocationsScreen';
import { CreditManagementScreen } from '@/modules/credit-management/screens/CreditManagementScreen';
import { SubscriptionsScreen } from '@/modules/subscriptions/screens/SubscriptionsScreen';
import { UnlimitedSpendingScreen } from '@/modules/unlimited-spending/screens/UnlimitedSpendingScreen';
import { ClosingScreen } from '@/modules/closing/screens/ClosingScreen';

const Drawer = createDrawerNavigator();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Início" navigationKey={Routes.HOME} component={HomeScreen} />
        <Drawer.Screen
          name="Entradas"
          navigationKey={Routes.INCOMES}
          component={IncomesScreen}
        />
        <Drawer.Screen
          name="Saídas Essenciais"
          navigationKey={Routes.ESSENTIAL_OUTFLOWS}
          component={EssentialOutflowScreen}
        />
        <Drawer.Screen
          name="Alocações Planejadas"
          navigationKey={Routes.PLANNED_ALLOCATIONS}
          component={PlannedAllocationsScreen}
        />
        <Drawer.Screen
          name="Cartões de Credito"
          navigationKey={Routes.CREDIT_MANAGEMENT}
          component={CreditManagementScreen}
        />
        <Drawer.Screen
          name="Assinaturas"
          navigationKey={Routes.SUBSCRIPTIONS}
          component={SubscriptionsScreen}
        />
        <Drawer.Screen
          name="Gastos Livres"
          navigationKey={Routes.UNLIMITED_SPENDING}
          component={UnlimitedSpendingScreen}
        />
        <Drawer.Screen
          name="Fechamento"
          navigationKey={Routes.CLOSING}
          component={ClosingScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
