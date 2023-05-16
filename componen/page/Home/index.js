import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import imgBanner from "../../../assets/images/awan.jpg";
import OvoComponent from "../../../componen/OvoComponent";
import FiturUtama from "../../../componen/FiturUtama";
import PromoItems from "../../../componen/PromoItems";

const { height, width } = Dimensions.get("window");

class Home extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="rgba(0,0,0,0)"
        />
        <Image style={styles.imageBanner} source={imgBanner} />
        <Text style={styles.greetingText}>Selamat Datang</Text>
        <View style={styles.wrapperOvo}>
          <View style={styles.textOvo}>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#383838" }}
            >
              Ovo Balance
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#383838" }}
            >
              Rp 1.000.000
            </Text>
          </View>
          <View style={styles.garisDiOvo}></View>
          <OvoComponent />
        </View>
        <View style={{ marginHorizontal: 18 }}>
          <FiturUtama />
        </View>
        <View style={styles.divider}></View>
        <PromoItems />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageBanner: { height: 140, width: width },
  greetingText: {
    fontSize: 17,
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "center",
    top: 30,
    color: "#383838",
  },
  wrapperOvo: {
    marginHorizontal: 18,
    height: 150,
    marginTop: -60,
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 10,
  },
  textOvo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginTop: 10,
  },
  garisDiOvo: {
    height: 0.8,
    backgroundColor: "#adadad",
    marginTop: 10,
  },
  divider: {
    width: width,
    height: 15,
    backgroundColor: "#ededed",
    marginVertical: 15,
  },
});

export default Home;
