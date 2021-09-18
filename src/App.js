import React from "react";
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  FavouriteScreen,
  UpdateScreen,
  ProfileScreen,
  CartScreen,
} from "./screens";
import {IconButton} from "./components";
import {COLORS} from "./constants";

const Tab = createBottomTabNavigator();

export default function App() {
  const bottomBarItemList = [
    {
      textTitle: "Home",
      name: "Home",
      focusedIcon: "home",
      notFocusedIcon: "home-outline",
      component: HomeScreen,
    },
    {
      textTitle: "Cart",
      name: "Cart",
      focusedIcon: "cart",
      notFocusedIcon: "cart-outline",
      component: CartScreen,
    },
    {
      textTitle: "Favorite",
      name: "Favorite",
      focusedIcon: "heart",
      notFocusedIcon: "heart-outline",
      component: FavouriteScreen,
    },
    {
      textTitle: "You",
      name: "Profile",
      focusedIcon: "person",
      notFocusedIcon: "person-outline",
      component: ProfileScreen,
    },
  ];
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarShowLabel: false,
        }}>
        {bottomBarItemList.map((el, idx) => {
          return (
            <Tab.Screen
              name={el.name}
              key={idx}
              component={el.component}
              options={{
                tabBarButton: props => {
                  let focused = props.accessibilityState.selected;
                  let iconName = focused ? el.focusedIcon : el.notFocusedIcon;
                  let textStyle = {
                    fontWeight: focused ? "600" : "400",
                    opacity: focused ? 1 : 0.5,
                    color: COLORS.DEFAULT_SECONDARY_COLOR,
                  };
                  let iconStyle = {
                    opacity: focused ? 1 : 0.5,
                  };
                  return (
                    <IconButton
                      // title={el.textTitle}
                      name={iconName}
                      titleStyle={textStyle}
                      iconStyle={iconStyle}
                      onPress={props.onPress}
                    />
                  );
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    height: 80,
    elevation: 10,
  },
});
