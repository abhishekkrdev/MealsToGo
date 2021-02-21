import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurants/screens/restaurants.screen";
import { SafeArea } from "../../components/utility/safe-area.component";

const RestaurantStack = createStackNavigator();

const RestaurantDetail = () => {
  return (
    <SafeArea>
      <Text>Restaurant Detail</Text>
    </SafeArea>
  );
};

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalTransition }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantScreen}
      ></RestaurantStack.Screen>
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      ></RestaurantStack.Screen>
    </RestaurantStack.Navigator>
  );
};
