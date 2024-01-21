import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import ProductCard from "../product-card";

import { useState, useEffect } from "react";

import { productsDataSource } from "../../../core/remoteDataSource/product";

// ----------------------------------------------------------------------

export default function ProductsView() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await productsDataSource.getAllProducts();
    setProducts(response.data.products);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Products
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
