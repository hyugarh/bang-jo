import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { TouchableRipple } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [displaySosmed, setDisplaySosmed] = useState("flex");
  const [nohp, setNohp] = useState();
  const [actionButtom, setActionButtom] = useState(
    "Or Continue With Social Media"
  );

  const proses = (a) => {
    if (
      nohp.length > 9 &&
      nohp.length < 13 &&
      nohp.substring(0, 1) == "8" &&
      !isNaN(nohp)
    ) {
      ///triger ke API untuk generad kode OTP dan melakukan proses sms
      //asumsi call ke API sms gateway untuk sms ===
      try {
        fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "eve.holt@reqres.in",
            password: "cityslicka",
          }),
        })
          .then((response) => response.json())
          .then((responseJson) => {
            navigation.navigate("VerifikasiOtp", {
              kodeOtp: 123456,
              nohp: nohp,
            });
          });
      } catch (error) {}
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#09AB54" }}>
      <StatusBar backgroundColor="#09AB54" />
      <View style={{ marginHorizontal: 18, flex: 1 }}>
        <Text style={{ fontSize: 50, color: "white", marginTop: 20 }}>
          BangJO
        </Text>
        <Text style={{ fontSize: 25, color: "white", marginTop: 80 }}>
          Selamat Datang
        </Text>
        <Text style={{ fontSize: 15, color: "white", marginTop: 5 }}>
          Enter Your Mobile Number To Continue
        </Text>

        <View
          style={{
            width: 300,
            height: 53,
            backgroundColor: "white",
            marginTop: 10,
          }}
        >
          <TextInput
            style={{ fontSize: 25 }}
            placeholder="87654321"
            onChangeText={(nohp) => {
              setNohp(nohp);
              if (
                nohp.length > 9 &&
                nohp.length < 13 &&
                nohp.substring(0, 1) == "8" &&
                !isNaN(nohp)
              ) {
                setActionButtom("Continue");
              } else {
                setActionButtom("Or Continue With Social Media");
              }
            }}
            keyboardType="number-pad"
            onFocus={() => setDisplaySosmed("none")}
            onBlur={() => setDisplaySosmed("flex")}
            value={nohp}
          />
        </View>
      </View>
      <TouchableRipple style={{ alignItems: "center" }}>
        <Text
          style={{ fontSize: 15, color: "white", marginBottom: 15 }}
          onPress={() => proses()}
        >
          {actionButtom}
        </Text>
      </TouchableRipple>
      <View
        style={{
          display: displaySosmed,
          height: 90,
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableRipple
          style={{
            backgroundColor: "#2166b0",
            width: 110,
            height: 50,
            justifyContent: "center",
            elevation: 4,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Facebook</Text>
        </TouchableRipple>
        <TouchableRipple
          style={{
            backgroundColor: "white",
            width: 110,
            height: 50,
            justifyContent: "center",
            elevation: 4,
          }}
        >
          <Text style={{ color: "gray", textAlign: "center" }}>Google</Text>
        </TouchableRipple>
      </View>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({});
