import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Routes } from './routes';
import { HomeScreen } from '@/modules/home/screens/HomeScreen';
import { IncomesScreen } from '@/modules/incomes/screens/IncomesScreen';
import { EssentialOutflowScreen } from '@/modules/essential-outflows/screens/EssentialOutflowsScreen';
import { PlannedAllocationsScreen } from '@/modules/planned-allocations/screens/PlannedAllocationsScreen';
import { CreditManagementScreen } from '@/modules/credit-management/screens/CreditManagementScreen';
import { SubscriptionsScreen } from '@/modules/subscriptions/screens/SubscriptionsScreen';
import { UnlimitedSpendingScreen } from '@/modules/unlimited-spending/screens/UnlimitedSpendingScreen';
import { ClosingScreen } from '@/modules/closing/screens/ClosingScreen';
import { fonts, darkColors } from '@/shared/themes';

const Drawer = createDrawerNavigator();

export function RootNavigator() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: darkColors.background,
          card: darkColors.surface,
          primary: darkColors.primary,
          notification: darkColors.info,
          border: darkColors.surface,
          text: darkColors.textSecondary,
        },
        dark: true,
        fonts: {
          ...DefaultTheme.fonts,
          bold: {
            fontWeight: '700',
            fontFamily: fonts.bold,
          },
          regular: {
            fontWeight: '500',
            fontFamily: fonts.regular,
          },
        },
      }}
    >
      <Drawer.Navigator
        screenOptions={{
          drawerItemStyle: {
            backgroundColor: darkColors.surface,
            opacity: 0.9,
          },
          drawerLabelStyle: { fontFamily: fonts.regular },
          drawerActiveTintColor: darkColors.textPrimary,
        }}
      >
        <Drawer.Screen
          name="Início"
          navigationKey={Routes.HOME}
          component={HomeScreen}
          options={{
            lazy: true,
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Entradas"
          navigationKey={Routes.INCOMES}
          component={IncomesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="arrow-down" size={size} color={color} />
            ),
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Saídas Essenciais"
          navigationKey={Routes.ESSENTIAL_OUTFLOWS}
          component={EssentialOutflowScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="arrow-up" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Alocações Planejadas"
          navigationKey={Routes.PLANNED_ALLOCATIONS}
          component={PlannedAllocationsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="wallet" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Cartões de Credito"
          navigationKey={Routes.CREDIT_MANAGEMENT}
          component={CreditManagementScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="card-sharp" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Assinaturas"
          navigationKey={Routes.SUBSCRIPTIONS}
          component={SubscriptionsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="laptop" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Gastos Livres"
          navigationKey={Routes.UNLIMITED_SPENDING}
          component={UnlimitedSpendingScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="cart-sharp" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Fechamento"
          navigationKey={Routes.CLOSING}
          component={ClosingScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="calculator" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
