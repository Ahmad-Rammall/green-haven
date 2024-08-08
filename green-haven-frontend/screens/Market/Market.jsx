import {
  RefreshControl,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  ProductCard,
  SearchBar,
  ProductModal,
  LoadingModal,
} from "../../components";
import styles from "./market.styles";
import React, { useState, useEffect } from "react";
import { marketDataSource } from "../../core/dataSource/remoteDataSource/market";
import { useSelector } from "react-redux";

const Market = () => {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  // get loggedin user
  const user = useSelector((state) => state.User);

  const searchItem = () => {
    const selectedProducts = products.filter((product) =>
      product.name.includes(searchInput)
    );
    setSearchedProducts(selectedProducts);
  };

  useEffect(() => {
    searchItem();
  }, [searchInput, refresh]);

  // get all market's products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const response = await marketDataSource.getAllProducts();
      setProducts(response.data.products);
      setSearchedProducts(response.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // get only loggedin seller's products
  const getAllSellerProducts = async () => {
    try {
      const response = await marketDataSource.getAllSellerProducts();
      if (response) {
        setProducts(response.data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setIsVisible(false);
  };
  const handleRefresh = async () => {
    setRefresh(true);

    try {
      if (user.role === "user") {
        await getAllProducts();
      } else if (user.role === "seller") {
        await getAllSellerProducts();
      }
    } finally {
      setRefresh(false);
    }
  };

  useEffect(() => {
    handleRefresh()
  }, [user]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.wrapper}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
        }
      >
        <SearchBar
          placeholder="What Are You Looking For ?"
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <View style={styles.productsContainer}>
          {loading ? (
            <LoadingModal />
          ) : (
            searchedProducts.map((product) => (
              <ProductCard key={product._id} product={product} refresh={handleRefresh}/>
            ))
          )}
        </View>
      </ScrollView>

      {user.role === "seller" && (
        <>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => setIsVisible(true)}
          >
            <Text style={styles.addBtnText}>+</Text>
          </TouchableOpacity>

          <ProductModal
            isVisible={isVisible}
            onClose={closeModal}
            refresh={handleRefresh}
          />
        </>
      )}
    </View>
  );
};

export default Market;
