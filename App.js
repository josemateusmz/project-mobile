import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { Header } from "./components/Header";
import { Store } from "./pages/store";
import { Products } from "./components/Products/products";

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />

        <Store />
      <Products/>

    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    display: "flex",
     backgroundColor: "#131313",
  },
});
