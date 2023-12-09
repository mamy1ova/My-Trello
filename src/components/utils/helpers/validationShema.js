import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Не корректный адрес электронной почты")
    .matches("Javascript@gmail.com", "Неправильный адрес электронной почты!")
    .required("Поле не должно быть пустым!"),
  password: Yup.string()
    .required("Поле не должно быть пустым!")
    .matches("frontend", "Неправильный пароль!")
});


export const validationSchemaRegistrForm = Yup.object({
  firstName: Yup.string().required("Поле не должно быть пустым!"),
  lastName: Yup.string().required("Поле не должно быть пустым!"),
  email: Yup.string()
    .email("Не корректный адрес электронной почты")
    .required("Поле не должно быть пустым!"),
  password: Yup.string()
    .required("Поле не должно быть пустым!")
    .min(6, "Пароль должен состоять минимум из 6 символов!"),
});