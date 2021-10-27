
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
 import {register, clearerrors} from '../../Redux/actions/UserActions'
 import {useHistory} from 'react-router-dom'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };
  const [regName, SetRegName]=useState("")
      const [regEmail, SetRegEmail]= useState("")
      const [regPassword, SetRegPassword]= useState("")
      const [regLastname, SetRegLastname]=useState("")
      const dispatch = useDispatch()
      const history=useHistory()
      const errors=useSelector(state=>state.UserReducer.errors)

  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs" className='one'>
        <CssBaseline />
        <Box
        id='logo'
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar  sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  
                  value={regName} onChange={(e)=>{SetRegName(e.target.value); dispatch(clearerrors())}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname" value={regLastname} onChange={(e)=>{SetRegLastname(e.target.value); dispatch(clearerrors())}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email" value={regEmail} onChange={(e)=>{SetRegEmail(e.target.value); dispatch(clearerrors())} }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password" value={regPassword} onChange={(e)=>SetRegPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} onClick={()=>dispatch(register({name:regName, email:regEmail, password:regPassword},history))}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}





// import {useState} from 'react'
// import { useDispatch, useSelector} from 'react-redux'
//  import {register, clearerrors} from '../../Redux/actions/UserActions'
//  import {useHistory} from 'react-router-dom'

// function Signup() {
//     const [regName, SetRegName]=useState("")
//     const [regEmail, SetRegEmail]= useState("")
//     const [regPassword, SetRegPassword]= useState("")
//     const dispatch = useDispatch()
//     const history=useHistory()
//     const errors=useSelector(state=>state.UserReducer.errors)




//     return(
//         <div>
//             {errors && errors.map(el=> alert(el.msg))}
//             <h1 className="SignUP">Join our community</h1>
//             <fieldset className="signup">
                
//                 <legend>
//                   Créer un compte
//                 </legend>
//                 <label className='label'>Name : </label>
//                 <input type="text" className="input" placeholder="Please enter your name " value={regName} onChange={(e)=>{SetRegName(e.target.value); dispatch(clearerrors())}}></input><br></br><br></br>
//                 <label className="label" >Email : </label>
//                 <input type="email" className="input" placeholder="Please Enter an Email" value={regEmail} onChange={(e)=>{SetRegEmail(e.target.value); dispatch(clearerrors())} }></input><br></br><br></br>
//                 <label>Password :   </label>
//                 <input type="password" placeholder="Please enter a password" className="input" value={regPassword} onChange={(e)=>SetRegPassword(e.target.value)}></input><br></br>
//                 <button className="myButton" onClick={()=>dispatch(register({name:regName, email:regEmail, password:regPassword},history))}>Submit </button>
//                 <button className="myButton" >cancel</button>
//             </fieldset>
//         </div>
//     )
// }
// export default Signup





