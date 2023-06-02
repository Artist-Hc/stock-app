import React from 'react'
import { Form } from 'formik'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { object , string} from 'yup';
import { Link } from 'react-router-dom';
export const registerScheme = object({
  email: string()
    .email("Lutfen valid bir email giriniz")
    .required("Email zorunludur"),
    username: string()
    .max(10, "Kullanıcı adı 10 karakterden az olmalıdır.")
    .required(),
  first_name: string().max(20, "İsim 20 karakterden az olmalıdır.").required(),
  last_name: string()
    .max(20, "Soyisim 30 karakterden az olmalıdır.")
    .required(),
  password: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
})
const RegisterForm = ({handleChange, handleBlur, errors, touched, values}) => {
  return (
   <Form sx ={{marginBottom:'5rem'}} >
     <Box  sx={{ display:"flex",  flexDirection:"column", gap:2, mt:1}}>
              <TextField
              label="User Name"
              name="username"
              id="username"
              type="text"
              variant="outlined"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.username && errors.username}
              error={touched.username && Boolean(errors.username)}
              />
              <TextField
              label="First Name"
              name="first_name"
              id="first_name"
              type="text"
              variant="outlined"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.first_name && errors.first_name}
              error={touched.first_name && Boolean(errors.first_name)}
              />
              <TextField
               label="Last Name"
               name="last_name"
               id="last_name"
               type="text"
               variant="outlined"
               value={values.last_name}
               onChange={handleChange}
               onBlur={handleBlur}
               helperText={touched.last_name && errors.last_name}
               error={touched.last_name && Boolean(errors.last_name)}
              />
              <TextField
               label="Email"
               name="email"
               id="email"
               type="email"
               variant="outlined"
               value={values.email}
               onChange={handleChange}
               onBlur={handleBlur}
               helperText={touched.email && errors.email}
               error={touched.email && Boolean(errors.email)}
              />
              <TextField
               label="password"
               name="password"
               id="password"
               type="password"
               variant="outlined"
               value={values.password}
               onChange={handleChange}
               onBlur={handleBlur}
               helperText={touched.password && errors.password}
               error={touched.password && Boolean(errors.password)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, padding:"1rem" }}
              >
                Sign Up
              </Button>
              <Grid container sx={{gap:2}}>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/">Do you have an account? Sign In</Link>
                </Grid>
              </Grid>
            </Box>
   </Form>
  )
}
export default RegisterForm