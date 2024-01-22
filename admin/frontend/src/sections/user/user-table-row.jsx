import { useState } from "react";
import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import TableRow from "@mui/material/TableRow";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Label from "src/components/label";
import Iconify from "src/components/iconify";

import Modal from "../../components/modal/modal";
import DeleteModal from "../../components/modal/DeleteModal";
import { userDataSource } from "../../core/remoteDataSource/user";

// ----------------------------------------------------------------------

export default function UserTableRow({
  selected,
  name,
  phone,
  avatarUrl,
  email,
  role,
  status,
  handleClick,
  user,
  refreshPage,
}) {
  const profile_picture =
    import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER + "/profile-pics/" + avatarUrl;
  const [open, setOpen] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleEditClick = () => {
    setModalOpen(true);
    setOpen(null);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setDeleteModalOpen(false);
  };
  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const deleteUser = async () => {
    const response = await userDataSource.deleteUser(user._id);
    console.log(response);
    if (response?.status === 200) {
      refreshPage();
      handleCloseModal()
    }
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={name} src={profile_picture} />
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{email}</TableCell>

        <TableCell>{role}</TableCell>

        <TableCell align="center">{phone ? phone : "---"}</TableCell>

        <TableCell>
          <Label color={(status === "banned" && "error") || "success"}>
            {status}
          </Label>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleEditClick}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem
          onClick={() => setDeleteModalOpen(true)}
          sx={{ color: "error.main" }}
        >
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>

      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        user={user}
        refreshPage={refreshPage}
      />
      <DeleteModal
        isOpen={deleteModalOpen}
        onClick={deleteUser}
        onClose={handleCloseModal}
      />
    </>
  );
}

UserTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  company: PropTypes.any,
  handleClick: PropTypes.func,
  isVerified: PropTypes.any,
  name: PropTypes.any,
  role: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
};
