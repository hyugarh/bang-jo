import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  wrapperFiturUtama: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  imageFiturUtama: {
    height: 50,
    width: 50,
    marginTop: 15,
  },
  textFiturUtama: {
    textAlign: "center",
    marginTop: 4,
  },
});

//const FiturUtamaSub = (props) => {
//  return (
//   <View style={{ width: "25%", alignItems: "center" }}>
//      <Image style={styles.imageFiturUtama} source={props.Image} />
//      <Text style={styles.textFiturUtama}>{props.title}</Text>
//    </View>
//  );
//};

class FiturUtamaSub extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{ width: "25%", alignItems: "center" }}
      >
        <Image style={styles.imageFiturUtama} source={this.props.Image} />
        <Text style={styles.textFiturUtama}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default FiturUtamaSub;
