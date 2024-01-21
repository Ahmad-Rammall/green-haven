import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
    role: "",
  });

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRoleChange = (e) => {
    setFormData((prevData) => ({ ...prevData, role: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You can access the form data using the formData state
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
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Confirm Password:
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Phone Number:
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Address:
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Role:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleRoleChange}
                  >
                    <option value="seller">Seller</option>
                    <option value="user">User</option>
                  </select>
                </label>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
