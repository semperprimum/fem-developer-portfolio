import { Input, Textarea, Button } from "../index";
import { useFormik } from "formik";
import * as Yup from "yup";

export function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: () => {
      window.location.reload();
    },
    validationSchema: Yup.object({
      name: Yup.string().required("This field is required"),
      email: Yup.string()
        .required("This field is required")
        .email("Sorry, wrong format here"),
      message: Yup.string().required("This field is required"),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit} className="contact__form">
      <div className="contact__input-control">
        <Input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`contact__input
            ${formik.errors.name && formik.touched.name && "error"}`}
          type="text"
          formik={formik}
          placeholder="name"
        />
        {formik.errors.name && formik.touched.name && (
          <span className="contact__error">{formik.errors.name}</span>
        )}
      </div>
      <div className="contact__input-control">
        <Input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`contact__input ${
            formik.errors.email && formik.touched.email && "error"
          }`}
          type="email"
          formik={formik}
          placeholder="email"
        />
        {formik.errors.email && formik.touched.email && (
          <span className="contact__error">{formik.errors.email}</span>
        )}
      </div>
      <div className="contact__input-control">
        <Textarea
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`contact__textarea ${
            formik.errors.message && formik.touched.message && "error"
          }`}
          rows="3"
          placeholder="message"
        ></Textarea>
        {formik.errors.message && formik.touched.message && (
          <span className="contact__error">{formik.errors.message}</span>
        )}
      </div>
      <Button className="contact__button" type="submit">
        send message
      </Button>
    </form>
  );
}
