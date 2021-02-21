import React from "react";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurants/screens/restaurants.screen";
import RestuarantDetailScreen from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

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
        component={RestuarantDetailScreen}
      ></RestaurantStack.Screen>
    </RestaurantStack.Navigator>
  );
};
