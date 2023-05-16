import React, { Component } from "react";
import { Text, View } from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  Activity,
  Inbox,
  Account,
  Payment,
  Food,
  Login,
  VerifikasiOtp,
  Auth,
} from "../page";
import { Image } from "react-native";

const MaterialBottom = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Auth">
      <Stack.Screen name="Home" component={BottomTabs} />
      <Stack.Screen name="Food" component={Food} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Auth" component={Auth} />

      <Stack.Screen name="VerifikasiOtp" component={VerifikasiOtp} />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  const navigation = useNavigation();
  return (
    <MaterialBottom.Navigator
      shifting={false}
      initialRouteName="Home"
      activeColor="#09AB54"
      inactiveColor="#676767"
      barStyle={{
        backgroundColor: "white",
        borderWidth: 0.3,
        borderColor: "lightgrey",
      }}
    >
      <MaterialBottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <View style={{ marginTop: -4 }}>
              {color == "#09AB54" ? (
                <Image
                  source={require("../../assets/icon/nav-home-active.jpg")}
                  style={{ height: 30, width: 30 }}
                />
              ) : (
                <Image
                  source={require("../../assets/icon/nav-home.jpg")}
                  style={{ height: 30, width: 30 }}
                />
              )}
            </View>
          ),
        }}
      />
      <MaterialBottom.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarLabel: "Activity",
          tabBarIcon: ({ color }) => (
            <View style={{ marginTop: -4 }}>
              {color == "#09AB54" ? (
                <Image
                  source={require("../../assets/icon/nav-activity-active.jpg")}
                  style={{ height: 30, width: 30 }}
                />
              ) : (
                <Image
                  source={require("../../assets/icon/nav-activity.jpg")}
                  style={{ height: 30, width: 30 }}
                />
              )}
            </View>
          ),
        }}
      />
      <MaterialBottom.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarLabel: "Payment",
          tabBarIcon: ({ color }) => (
            <View style={{ marginTop: -4 }}>
              {color == "#09AB54" ? (
                <Image
                  source={require("../../assets/icon/nav-payment-active.jpg")}
                  style={{ height: 30, width: 30 }}
                />
              ) : (
                <Image
                  source={require("../../assets/icon/nav-payment.jpg")}
                  style={{ height: 30, width: 30 }}
                />
              )}
            </View>
          ),
        }}
      />
      <MaterialBottom.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color }) => (
            <View style={{ marginTop: -4 }}>
              {color == "#09AB54" ? (
                <Image
                  source={require("../../assets/icon/nav-inbox-active.jpg")}
                  style={{ height: 30, width: 30 }}
                />
              ) : (
                <Image
                  source={require("../../assets/icon/nav-inbox.jpg")}
                  style={{ height: 30, width: 30 }}
                />
              )}
            </View>
          ),
          tabBarBadge: 1,
        }}
      />

      <MaterialBottom.Screen
        name="Account"
        // component={Account(navigation)}
        // with props
        component={() => <Account navigation={navigation} />}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <View style={{ marginTop: -4 }}>
              {color == "#09AB54" ? (
                <Image
                  source={require("../../assets/icon/nav-account-active.jpg")}
                  style={{ height: 30, width: 30 }}
                />
              ) : (
                <Image
                  source={require("../../assets/icon/nav-account.jpg")}
                  style={{ height: 30, width: 30 }}
                />
              )}
            </View>
          ),
        }}
      />
    </MaterialBottom.Navigator>
  );
};

export default class index extends Component {
  render() {
    return (
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    );
  }
}
