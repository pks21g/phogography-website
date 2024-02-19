import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    setMessage(
      `Thank you for contacting ${data.name}!!\nWe will be in touch shortly.`
    );
    setTimeout(() => {
      reset();
    }, 2000);
  };

  return (
    <div className="contact">
      <div className="contact-overlay"></div>
      <div className="contact-message">
        <span>If you are here,</span>
        <span>I presume, you have already seen my work</span>
        <span>a little bit.</span>
        <span>Now its time to get in touch!!</span>
      </div>
      <div className="msg">
        <p>{message}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {/* {message} */}

        <div className="input-group">
          <label>Full Name*</label>
          <input type="text" {...register("name", { required: true })} />
          {errors.name && (
            <p className="error">Name is required and must be valid</p>
          )}
        </div>
        <div className="input-group">
          <label>Email*</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && (
            <p className="error">Email is required and must be valid</p>
          )}
        </div>
        <div className="input-group">
          <label>Message*</label>
          <textarea
            type="text"
            cols={35}
            rows={5}
            {...register("message", { required: true })}
          />
          {errors.message && <p className="error">Message is required</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
