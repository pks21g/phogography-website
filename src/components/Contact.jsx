import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contact">
      <div className="contact-overlay"></div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" {...register("name", { required: true })} />
          {errors.name && <p className="error">Name is required and must be valid</p>}
        </div>
        <div className="input-group">
          <label>Message</label>
          <textarea type="text" cols={35} rows={5} {...register("message", { required: true })} />
          {errors.message && <p className="error">Message is required</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
