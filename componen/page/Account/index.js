import React, { Component } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class index extends Component {
  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity
          onPress={this._logout}
          style={{
            backgroundColor: "lightblue",
            height: 40,
            width: 100,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 15, alignSelf: "center" }}>LogOut</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
