import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = (props) => {
  const navigation = useNavigation();
  const [displaySosmed, setDisplaySosmed] = useState("flex");
  const [VerifikasiOtp, setVerifikasiOtp] = useState(
    props.route.params.kodeOtp
  );
  const [nohp, setNohp] = useState(props.route.params.nohp);
  const [actionButtom, setActionButtom] = useState(
    "Or Continue With Social Media"
  );
  const [kodeOtp, setKodeOtp] = useState();
  const [warningError, setWarningError] = useState("");

  const proses = (kodeOtp) => {
    if (kodeOtp.length > 5 && !isNaN(kodeOtp)) {
      ///triger ke API untuk generad kode OTP dan melakukan proses sms

      if (kodeOtp == VerifikasiOtp) {
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
              if (responseJson) {
                AsyncStorage.setItem(
                  "session_id",
                  "session_id" + Math.random()
                );
                navigation.navigate("Home");
              }
            });
        } catch (error) {
          console.warn(error);
        }
      } else {
        setWarningError("INVALID CODE");
      }
    } else {
      setWarningError("INVALID CODE");
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#09AB54" }}>
      <StatusBar backgroundColor="#09AB54" />
      <View style={{ marginHorizontal: 18, flex: 1 }}>
        <Text style={{ fontSize: 50, color: "white", marginTop: 20 }}>
          Verifikasi
        </Text>
        <Text style={{ fontSize: 25, color: "white", marginTop: 80 }}>
          Masukkan 6-digit kirimkan kode ke
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginTop: 5,
          }}
        >
          {nohp}
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
            placeholder="Enter Code"
            onChangeText={(kodeOtp) => {
              setKodeOtp(kodeOtp);
              if (nohp.length > 5 && !isNaN(nohp)) {
                proses(kodeOtp);
              }
            }}
            keyboardType="number-pad"
            value={kodeOtp}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#c7264b",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 15,
              fontSize: 15,
            }}
          >
            {warningError}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({});
