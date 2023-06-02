import React from 'react'
import { Form } from 'formik'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { object,string } from 'yup';
import { Link } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';

export const loginScheme = object({
  email: string()
    .email("Lutfen valid bir email giriniz")
    .required("Email zorunludur"),
  password: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
})
const LoginForm = ({handleChange, handleBlur,errors,touched,values}) => {
  
  return (

    
   <Form>
     <Box sx={{ display: "flex", flexDirection: "column", gap: 2,width:"20rem"}}>
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
             
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </LoadingButton>
              <Grid container sx={{gap:2}}>
                <Grid item xs>
                  <Link to="" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                 <Link to="/register">Sign Up</Link>
                </Grid>
              </Grid>
            </Box>
   </Form>
  )
}
export default LoginForm