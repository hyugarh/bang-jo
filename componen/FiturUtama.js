import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import FiturUtamaSub from "./FiturUtamaSub";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  wrapperFiturUtama: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    flexWrap: "wrap",
    width: "100%",
  },
});

const FiturUtama = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapperFiturUtama}>
      <FiturUtamaSub
        onPress={() => navigation.navigate("Food")}
        Image={require("../assets/icon/food.jpg")}
        title="Food"
      />
      <FiturUtamaSub Image={require("../assets/icon/bike.jpg")} title="Bike" />
      <FiturUtamaSub Image={require("../assets/icon/car.jpg")} title="Car" />
      <FiturUtamaSub
        Image={require("../assets/icon/send.jpg")}
        title="Delivery"
      />
      <FiturUtamaSub
        Image={require("../assets/icon/subscribe.jpg")}
        title="Subscription"
        onPress={() => navigation.navigate("Subscription")}
      />
      <FiturUtamaSub
        Image={require("../assets/icon/doctor.jpg")}
        title="Doctor"
      />
      <FiturUtamaSub
        Image={require("../assets/icon/pulsa.jpg")}
        title="Pulsa/Token"
      />
      <FiturUtamaSub
        Image={require("../assets/icon/more.jpg")}
        title="Lain-Lain"
      />
    </View>
  );
};
export default FiturUtama;
