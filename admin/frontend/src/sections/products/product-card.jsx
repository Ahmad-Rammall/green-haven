import PropTypes from "prop-types";
import { useState } from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import DeleteModal from "../../components/modal/DeleteModal";
import { productsDataSource } from "../../core/remoteDataSource/product";

import { fCurrency } from "src/utils/format-number";

import Label from "src/components/label";

// ----------------------------------------------------------------------

export default function ShopProductCard({ product, refreshPage }) {
  const image =
    import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER +
    "/products-pics/" +
    product.image;
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleOpenModal = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
    setDeleteModalOpen(false);
  };

  const deleteProduct = async () => {
    await productsDataSource.deleteProduct(product._id);
    handleCloseModal();
    refreshPage();
  };

  const renderStatus = (
    <Label
      variant="filled"
      color={(product.status === "sale" && "error") || "info"}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: "absolute",
        textTransform: "uppercase",
      }}
    >
      {product.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={image}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: "text.disabled",
          textDecoration: "line-through",
        }}
      >
        {product.priceSale && fCurrency(product.priceSale)}
      </Typography>
      &nbsp;
      {fCurrency(product.price)}
    </Typography>
  );

  return (
    <>
      <Card sx={{width : 200}}>
        <Box sx={{ pt: "100%", position: "relative" }}>
          {product.status && renderStatus}

          {renderImg}
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
            {product.name}
          </Link>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <IconButton style={{ cursor: "pointer" }} onClick={handleOpenModal}>
              <DeleteOutlineIcon sx={{ color: "red" }} />
            </IconButton>
            {renderPrice}
          </Stack>
        </Stack>
      </Card>

      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseModal}
          onClick={deleteProduct}
        />
      )}
    </>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object,
};
