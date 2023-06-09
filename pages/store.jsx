import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { Products } from "../components/Products/products";
// import { getItem, setItem } from "./services/LocalStorageFuncs"

export const Store = () => {
  const [data, setData] = useState([]);
  // const [cart, setCart] = useState(getItem('carrinhoYt') || []);

  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
      const response = await fetch(url);
      const objJson = await response.json();
      setData(objJson.results);
    };
    fetchApi();
  }, []);

  //   useEffect(() => {
  //     async function getData() {
  //       const result = await AppRegistry.get(
  //         "https://api.mercadolibre.com/sites/MLB/search?q=celular"
  //       );
  //       console.log(result.data);
  //     }
  //     getData();
  //   }, []);

  // const handleClick = (obj) => {
  //     const element = cart.find((item) => item.id === obj.id)
  //     if (element) {
  //         const arrFilter = cart.filter((e) =>  e.id != obj.id)
  //         setCart(arrFilter)
  //         setItem('carrinhoYt', arrFilter)
  //     } else {
  //         setCart([... cart, obj])
  //         setItem('carrinhoYt', [... cart, obj])
  //     }
  // }

  return (
    <View style={styles.screen}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>Lançamentos</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: 400,
    alignItems: 'center',
  },
 
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgb(160, 162, 164)",
    gap: 16,
  },
  titleArea: {
    padding: 16,
    alignItems: "center",
  },
});
