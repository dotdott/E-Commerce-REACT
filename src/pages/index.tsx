import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { CartItemsProvider } from "../contexts/CartItemsContext";
import { ProductsContext, ProductsProvider } from "../contexts/ProductsContext";

export default function Home() {
  return (
    <>
    <ProductsProvider>
      <CartItemsProvider>
        <Navbar />

        <Header />
        
        <Products />
        
        <Footer />
      </CartItemsProvider>
    </ProductsProvider>
    </>
  )
}
