import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik } from 'formik';
import useAuthCall from '../hooks/useAuthCall';
import RegisterForm, {registerScheme}  from '../companents/RegisterForm';
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
function Register() {
  const {register} = useAuthCall()
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{height:'100%'}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Formik
            initialValues={{email:"", password:"", firt_name:"", last_name:"", username:""}}
             validationSchema={registerScheme}
             onSubmit={(values, actions)=>{
              register({ ...values, password2: values.password})
              actions.resetForm()
              actions.setSubmitting(false)
             }}
          component= {(props)=> <RegisterForm {...props}/>}
            >
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default Register