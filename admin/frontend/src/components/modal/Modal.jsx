import React, { useState, useEffect } from "react";
import "./Modal.css";
import { userDataSource } from "../../core/remoteDataSource/user";

const Modal = ({ isOpen, onClose, add, user }) => {
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    email: "",
    password: "",
    bio: "",
    phone_number: "",
    location: "",
    role: "seller",
    status: "active",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        bio: user.bio,
        phone_number: user.phone_number,
        location: user.location,
        role: user.role,
        status: user.status,
      });
    }
  } , [])
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => {
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addUser = async () => {
    setError("");
    const response = await userDataSource.addUser(formData);
    console.log(response);

    if (response.status !== 200) {
      setError("Email Already Exists!");
    }
  };

  const updateUser = async () => {
    setError("");
    const response = await userDataSource.updateUser(formData);
    console.log(response);

    if (response.status !== 200) {
      setError("Error");
    }
  };

  useEffect(() => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [formData]);

  const handleRoleChange = (e) => {
    setFormData((prevData) => ({ ...prevData, role: e.target.value }));
  };

  const handleStatusChange = (e) => {
    setFormData((prevData) => ({ ...prevData, status: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <button className="close-button" onClick={handleClose}>
                &times;
              </button>
            </div>
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="input">
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                  {!formData.name && (
                    <span className="required-span">required</span>
                  )}
                </div>
                <div className="input">
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                  {!formData.email && (
                    <span className="required-span">required</span>
                  )}
                </div>
                <div className="input">
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                  {!formData.password && (
                    <span className="required-span">required</span>
                  )}
                </div>
                <div className="input">
                  Phone Nb:
                  <input
                    type="number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>
                <div className="input">
                  Bio:
                  <input
                    type="tel"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>
                <div className="input">
                  Location:
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>
                <div className="input">
                  Role:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleRoleChange}
                  >
                    <option value="seller">Seller</option>
                    <option value="user">User</option>
                  </select>
                </div>
                <div className="input">
                  Status:
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleStatusChange}
                  >
                    <option value="active">Active</option>
                    <option value="banned">Banned</option>
                  </select>
                </div>

                <div>{error}</div>

                <button
                  type="submit"
                  disabled={!isValid}
                  className={!isValid ? "disabled-btn" : ""}
                  onClick={add ? addUser : updateUser}
                >
                  {user ? "Update" : "Add User"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
