import { useForm } from "react-hook-form";
import { useCallback } from "react";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <div className="contact">
      <div className="contact-overlay"></div>
      <div className="contact-message">
        <span>If you are here,</span>
        <span>I presume, you have already seen my work</span>
        <span>a little bit.</span>
        <span>Now its time to get in touch!!</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
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
