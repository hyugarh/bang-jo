import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component } from "react";
import { Text, Touchable, View } from "react-native";

// export default class index extends Component {
//   // _logout = async () => {
//   //   await AsyncStorage.clear();
//   //   this.props.navigation.navigate("Login");
//   // };

//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center" }}>
//         <Touchable
//           style={{
//             backgroundColor: "lightblue",
//             height: 40,
//             width: 100,
//             alignSelf: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Text style={{ fontSize: 15, alignSelf: "center" }}>LogOut</Text>
//         </Touchable>
//       </View>
//     );
//   }
// }

// Create a component class
export default class index extends Component {
  // Setting up Login Activity title.
  static navigationOptions = {
    title: "Profile",
  };

  constructor(props) {
    super(props);

    this.state = {
      UserEmail: "",
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("UserEmail").then((value) => {
      this.setState({ UserEmail: value });
    });
  }

  UserLogoutFunction = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View>
        <Text style={{ fontSize: 20, color: "#000", textAlign: "center" }}>
          {this.state.UserEmail}
        </Text>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.UserLogoutFunction}
        >
          <Text style={styles.loginText}>Logout</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
