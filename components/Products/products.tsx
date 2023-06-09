import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export const Products = () => {
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
  return (
    <View style={styles.productContainer}>
      {data.map((e) => (
        <View key={e.id} style={styles.productArea}>
          <Text>{e.title}</Text>
          <Image source={{uri: e.thumbnail}}  style={styles.image} alt="imagem do produto"/>
          <Text style={styles.price}>{`R$ ${e.price}`}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Comprar agora</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    width: 400,
    height: 550,
    alignItems: "center",
    gap: 24,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A4A4A",
  },
  titleArea: {
    padding: 16,
    alignItems: "center",
    backgroundColor: "aqua",
  },
  button: {
    backgroundColor: "#131313",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e5e6e6",
   
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  image: {
    width: 100,
    height: 100,
  }, 
  price: {
    color: "#4A4A4A",
  },
  textButton: {
    fontSize: 12,
    color: "#fff",
  },
  productArea: {
    width: 230,
    height: 320,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#ffffff",
    opacity: 3,
  },
});
