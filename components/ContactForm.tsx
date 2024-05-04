import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // TODO: add to env file and remove hardcoded value
  const apiKey = "4JGNG2RmnibVT6FBAXtS"; // Replace with your Freshdesk API key
  const basicAuth = Buffer.from(`${apiKey}:X`).toString("base64"); // Appending ':X' as the username part is required, but it's not used in authentication

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      await axios.post(
        "https://cms-help.freshdesk.com/api/v2/tickets",
        {
          description: data.description,
          subject: data.description,
          email: data.email,
          status: 2,
          priority: 2,
        },
        {
          headers: {
            Authorization: `Basic ${basicAuth}`,
            "Content-Type": "application/json",
          },
        }
      );
      reset();
      toast.success(
        "Ticket created successfully! We will get back to you shortly.",
        {
          position: "bottom-center",
        }
      );
      // onClose();
    } catch (error) {
      console.error("Error creating ticket:", error);
      alert("Failed to create ticket. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Contact Form"
      className="flexCenter py-5 my-5"
      overlayClassName="fixed inset-0 flex justify-center items-center bg-black"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <div
        className="max-container padding-container relative w-full bg-wine-750 rounded-lg p-6"
        style={{ width: "500px", height: "auto" }}
      >
        <h2 className="font-sans text-2xl font-bold text-white mb-4">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="font-sans text-white block mb-1">Name:</label>
            <input
              {...register("name", { required: true })}
              className="w-full p-2  border border-white text-black-primary"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div className="mb-4">
            <label className="font-sans text-white block mb-1">Email:</label>
            <input
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              className="w-full p-2  border border-white text-black-primary"
            />
            {errors.email && (
              <span className="text-red-500">Invalid email address</span>
            )}
          </div>
          <div className="mb-4">
            <label className="font-sans text-white block mb-1">
              Description:
            </label>
            <textarea
              {...register("description", { required: true })}
              className="w-full p-2  border border-white text-black-primary"
            />
            {errors.description && (
              <span className="text-red-500">Description is required</span>
            )}
          </div>
          <button
            type="submit"
            className="bg-wine-primary px-4 py-2 text-white font-sans text-base hover:bg-white hover:text-wine-primary hover:border-wine-primary hover:border"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      </div>
      <Toaster />
    </Modal>
  );
};

export default ContactFormModal;
