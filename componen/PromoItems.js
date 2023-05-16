import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PromoItemsSub from "./PromoItemsSub";

const PromoItems = () => {
  return (
    <View
      style={{
        marginHorizontal: 18,
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      <PromoItemsSub
        image={{
          uri: "https://www.teakpalace.com/image/cache/catalog/artikel/gambar-makanan-paling-enak-sate-kambing-1000x750h.jpg",
        }}
        Text="Sate Khas Madura"
        diskon="Diskon 40%"
        masaBerlaku="sampai 20 Mei"
      />
      <PromoItemsSub
        image={{
          uri: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg?w=700&q=90",
        }}
        Text="Mie Goreng Aceh"
        masaBerlaku="sampai 20 Mei"
      />
      <PromoItemsSub
        image={{
          uri: "https://cdn0-production-images-kly.akamaized.net/oFDtwET_9Z47bGeCXD0cbJHoItg=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1216977/original/019384600_1461756233-resep-makanan.jpg",
        }}
        Text="Kue Putu"
        masaBerlaku="sampai 20 Mei"
      />
    </View>
  );
};

export default PromoItems;
