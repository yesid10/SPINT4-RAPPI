import { Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { DivForm } from "./StylesCreateAcount";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createUser } from "../Redux/actions/userActions";
import fileUpLoad from "../../services/fileUpload.js";

const CreateAcount = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
            avatar: null,
        },
        validationSchema: Yup.object({
            name: Yup.string().required(true),
            email: Yup.string().required(true),
            password: Yup.string()
                .required(true)
                .min(8, "La contraseña debe tener al menos 8 caracteres")
                .max(16, "La contraseña no debe tener mas de 16 caracteres")
                .oneOf(
                    [Yup.ref("repeatPassword")],
                    "Las contraseñas ingresadas no coinciden"
                ),
            repeatPassword: Yup.string().required(true).oneOf([Yup.ref('password')], "Las contraseñas ingresadas no coinciden"),
            avatar: Yup.mixed()
            .required("Se requiere un archivo")
            .test("tipoArchivo", "Tipo de archivo no válido", (value) => {
              if (value) {
                const allowedTypes = ["image/jpeg", "image/png"];
                return allowedTypes.includes(value.type);
              }
              return true;
            })
            .test("tamañoArchivo", "El archivo es demasiado grande", (value) => {
              if (value) {
                const maxSize = 5 * 1024 * 1024; // 5 MB
                return value.size <= maxSize;
              }
              return true;
            }),
        }),
        onSubmit: async (data) => {
            console.log("form enviado", data);
            const {name, email, password, repeatPassword, avatar} = data;
            const avatarImg = await fileUpLoad(data.avatar)
           dispatch(createUser({name, email, password, repeatPassword, avatarImg}))
        },
    });

    const handleFileChange = (event) => {
        const file = event.currentTarget.files[0];
        formik.setFieldValue("avatar", file);
    };

    return (
        <DivForm>

            <Form onSubmit={formik.handleSubmit}>
                <p>Create account</p>
                <label>NAME</label>
                <Form.Input
                   
                    name="name"
                    placeholder="Ingrese su nombre"
                    value={formik.values.name}
                    error={formik.errors.name}
                    onChange={formik.handleChange}
                />
                <label>EMAIL</label>
                <Form.Input
                    name="email"
                    placeholder="Ingrese su Email"
                    value={formik.values.email}
                    error={formik.errors.email}
                    onChange={formik.handleChange}
                />
                <label>PASSWORD</label>
                <Form.Input
                    name="password"
                    type="password"
                    placeholder="Ingrese una contraseña"
                    value={formik.values.password}
                    error={formik.errors.password}
                    onChange={formik.handleChange}
                />
                <label>REPEAT PASSWORD</label>
                <Form.Input
                    name="repeatPassword"
                    type="password"
                    placeholder="Confirme la contraseña"
                    value={formik.values.repeatPassword}
                    error={formik.errors.repeatPassword}
                    onChange={formik.handleChange}
                    
                />
                <label htmlFor="">AVATAR</label>
                <Form.Input name="avatar" type="file" onChange={handleFileChange} />
                <Form.Button  type="submit">Sing In</Form.Button>
            </Form>
        </DivForm>
    );
};

export default CreateAcount;
