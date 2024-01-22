import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import { fDate } from "src/utils/format-time";
import { fShortenNumber } from "src/utils/format-number";

import Iconify from "src/components/iconify";
import SvgColor from "src/components/svg-color";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import DeleteModal from "../../components/modal/DeleteModal";

import { useState } from "react";

// ----------------------------------------------------------------------

export default function PostCard({ post, index }) {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const { description, image, likes, comments, user, createdAt } = post;
  const publicFolder = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;

  const user_profile = publicFolder + "/profile-pics/" + user.profile_picture;
  const post_image = publicFolder + "/posts-pics/" + image;

  const handleOpenModal = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
    setDeleteModalOpen(false);
  };

  const renderAvatar = (
    <Avatar
      alt={user.name}
      src={user_profile}
      sx={{
        zIndex: 9,
        width: 32,
        height: 32,
        position: "absolute",
        left: (theme) => theme.spacing(3),
        bottom: (theme) => theme.spacing(-2),
      }}
    />
  );

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle2"
      underline="hover"
      sx={{
        height: 44,
        overflow: "hidden",
        WebkitLineClamp: 2,
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
      }}
    >
      {description}
    </Link>
  );

  const renderInfo = (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <IconButton style={{ cursor: "pointer" }} onClick={handleOpenModal}>
        <DeleteOutlineIcon sx={{ color: "red" }} />
      </IconButton>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={1.5}
        justifyContent="flex-end"
        sx={{
          color: "text.disabled",
        }}
      >
        {[
          {
            number: comments.length !== 0 ? comments.length : "0",
            icon: "eva:message-circle-fill",
          },
          {
            number: likes.length ? likes.length : "0",
            icon: "icon-park-outline:like",
          },
        ].map((info, _index) => (
          <Stack key={_index} direction="row">
            <Iconify width={16} icon={info.icon} sx={{ mr: 0.5 }} />
            <Typography variant="caption">
              {fShortenNumber(info.number)}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </div>
  );

  const renderCover = (
    <Box
      component="img"
      alt={description}
      src={post_image}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );

  const renderDate = (
    <Typography
      variant="caption"
      component="div"
      sx={{
        mb: 2,
        color: "text.disabled",
      }}
    >
      {fDate(createdAt)}
    </Typography>
  );

  const renderShape = (
    <SvgColor
      color="paper"
      src="/assets/icons/shape-avatar.svg"
      sx={{
        width: 80,
        height: 36,
        zIndex: 9,
        bottom: -15,
        position: "absolute",
        color: "background.paper",
      }}
    />
  );

  return (
    <Grid xs={3}>
      <Card>
        <Box
          sx={{
            position: "relative",
            pt: "calc(100% * 3 / 4)",
          }}
        >
          {renderShape}

          {renderAvatar}

          {renderCover}
        </Box>

        <Box
          sx={{
            p: (theme) => theme.spacing(4, 3, 3, 3),
          }}
        >
          {renderDate}

          {renderTitle}

          {renderInfo}
        </Box>
      </Card>

      <DeleteModal isOpen={isDeleteModalOpen} onClose={handleCloseModal}/>
    </Grid>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};
