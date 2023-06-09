import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";


export const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Produtos</Text>
      <Text style={styles.text}>Carrinho</Text>
      <Text style={styles.text}>Perfil</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // gap: 16,
    // backgroundColor: '#f64348',
    backgroundColor:   "#4A4A4A",
    padding: 34,
}, 
text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
}
})