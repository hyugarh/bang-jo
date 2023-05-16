import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

const Auth = ({ navigation }) => {
  React.useEffect(() => {
    const _validasiSession = async () => {
      const isLogin = await AsyncStorage.getItem("session_id");
      if (isLogin) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("Login");
      }
    };
    _validasiSession();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator />
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({});
