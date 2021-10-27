// import {useState} from 'react'
// import { useDispatch,} from 'react-redux'
// import {login} from '../../Redux/actions/UserActions'
// import {useHistory} from 'react-router-dom'
// function Signin(){
//     const [signEmail, setsignEmail]= useState("")
//     const [signPassword, setsignPassword]= useState("")
//     const dispatch=useDispatch()
//     const history= useHistory()
    

    import {useState} from 'react'
    import { useDispatch,} from 'react-redux'
    import {login} from '../../Redux/actions/UserActions'
    import {useHistory} from 'react-router-dom'
    import * as React from 'react';
    import Avatar from '@mui/material/Avatar';
    import Button from '@mui/material/Button';
    import CssBaseline from '@mui/material/CssBaseline';
    import TextField from '@mui/material/TextField';
    import FormControlLabel from '@mui/material/FormControlLabel';
    import Checkbox from '@mui/material/Checkbox';
    import Link from '@mui/material/Link';
    import Paper from '@mui/material/Paper';
    import Box from '@mui/material/Box';
    import Grid from '@mui/material/Grid';
    import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
    import Typography from '@mui/material/Typography';
    import { createTheme, ThemeProvider } from '@mui/material/styles';
    
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
    
    export default function SignInSide() {
      const handleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // // eslint-disable-next-line no-console
        // console.log({
        //   email: data.get('email'),
        //   password: data.get('password'),
      };
        const [signEmail, setsignEmail]= useState("")
            const [signPassword, setsignPassword]= useState("")
            const dispatch=useDispatch()
            const history= useHistory()
    
    
      return (
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1586498024141-1940debde48d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG9sZCUyMHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
                  Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus  value={signEmail} onChange={(e)=>setsignEmail(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password" value={signPassword} onChange={(e)=>setsignPassword(e.target.value)}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }} onClick={()=>dispatch(login({email:signEmail, password:signPassword},history))}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/Signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      );
    }
  
    










        
//         <div className="signIN">
            
//             <h1>Se Connecter</h1>
//             <fieldset className="signup">
//                 <legend>
//                     Sign In
//                 </legend>
//                 <label className='label' >Email : </label>
//                 <input type="email" placeholder="Enter your Email" className="input" value={signEmail} onChange={(e)=>setsignEmail(e.target.value)}></input><br></br><br></br>
//                 <label className='label'>Password :   </label>
//                 <input type="password" className="input" placeholder="Enter your Password" value={signPassword} onChange={(e)=>setsignPassword(e.target.value)}></input><br></br>
//                 <button  className="myButton" onClick={()=>dispatch(login({email:signEmail, password:signPassword},history))}>Submit </button>
//                 <button  className="myButton">cancel</button>
//             </fieldset>
//         </div>

//     )
// }
// export default Signin