import * as yup from "yup";

export const signUpSchema = yup.object().shape({
    name: yup.string().required("Este campo es obligatorio"),
    email: yup.string().email("El formato email es invalido").required("Este campo es obligatorio"),
    password: yup
        .string()
        .required("Este campo es obligatorio")
        .min(8, "La contraseña debe tener al menos 8 caractéres")
        .max(20, "La contraseña debe tener al máximo 20 caractéres")
        .matches(/[A-Z]/, "La contraseña debe tener al menos una mayúscula")
        .matches(/[a-z]/, "La contraseña debe tener al menos una minúscula"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "La contraseña debe coincidir")
})

export const loginSchema = yup.object().shape({
    email: yup.string().email("El formato email es invalido").required("Este campo es obligatorio"),
    password: yup
        .string()
        .required("Este campo es obligatorio")
        .min(8, "La contraseña debe tener al menos 8 caractéres")
        .max(20, "La contraseña debe tener al máximo 20 caractéres")
        .matches(/[A-Z]/, "La contraseña debe tener al menos una mayúscula")
        .matches(/[a-z]/, "La contraseña debe tener al menos una minúscula")
})

export const gratitudeFormSchema = yup.object().shape({
    gratitude_text: yup.string().required("Este campo es obligatorio")
})
