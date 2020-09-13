import React, {useState} from 'react'
import './Login.css';
import { Icon, Input, Button, Modal  } from '@material-ui/core';
import icon from './twitter-icon-4.svg';
import { makeStyles } from '@material-ui/core/styles';
import {auth} from '../../firebase';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Login() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [openSignup, setOpenSignup] = React.useState(false);

    const login = (e) => {
        e.preventDefault();
    }
    
    const signup = (e) => {
        e.preventDefault();
    }

    return (
        <div class="login">
            <Modal
                open={open}
                onClose={()=>setOpen(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">Log In</h2>
                    <p id="simple-modal-description">
                        <center><img className="login__logo" src={icon} alt="Twitter Logo" /></center>
                        <Input style={{margin:"10px"}} type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <Input style={{margin:"10px"}} type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <Button style={{margin:"10px"}} type="submit" onClick={(e)=>login(e)}>Login</Button> 
                    </p>
                </div>
            </Modal>

            <Modal
                open={openSignup}
                onClose={()=>setOpenSignup(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">Sign Up</h2>
                    <p id="simple-modal-description">
                        <center><img className="login__logo" src={icon} alt="Twitter Logo" /></center>
                        <Input style={{margin:"10px"}} type="email" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        <Input style={{margin:"10px"}} type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <Input style={{margin:"10px"}} type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>                        
                        <Button style={{margin:"10px"}} type="submit" onClick={(e) => signup(e)}>Sign Up</Button> 

                    </p>
                </div>
            </Modal>
            <div className="login__left">
                <svg fill="#1DA1F2" viewBox="0 0 24 24" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1n7nint r-10m99ii r-u8s1d r-1n2wx2z r-1plcrui r-1l2rav9 r-lrvibr"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                <div className="login__lefttext">
                    <div className="login__row">
                    <Icon style={{marginRight:'10px'}}>search</Icon>
                    <p>Follow your interests.</p>
                </div>
                <div className="login__row">
                    <Icon style={{marginRight:'10px'}}>supervisor_account</Icon>
                    <p>Hear what people are talking about.</p>
                </div>
                <div className="login__row">
                    <Icon style={{marginRight:'10px'}}>chat_bubble_outlined</Icon>
                    <p>Join the conversation.</p>
                </div>
                </div>
            </div>
            <div className="login__right">
                <div className="login__form">
                    <Input style={{margin:"10px", padding:"10px", backgroundColor:"#F5F8FA"}} type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <Input style={{margin:"10px", padding:"10px", backgroundColor:"#F5F8FA"}} type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    <Button style={{margin:"10px", padding:"10px", width:"100px", borderRadius:"9999px"}} variant="outlined" color="primary">Log In</Button>
                </div>
                <div className="login__rightbottom">
                    <img src={icon} id="login__icon" alt="twitter icon"/>
                    <h3>See what’s happening in the world right now</h3>

                    <p className="login__jointext">Join Twitter today.</p>
                    <Button style={{width:"100%", borderRadius:"9999px", marginBottom:"10px"}} color="primary" variant="contained" onClick={()=>setOpenSignup(true)}>Sign Up</Button>
                    <Button style={{width:"100%", borderRadius:"9999px"}} color="primary" variant="outlined" onClick={()=>setOpen(true)}>Log In</Button> 
                </div>
            
            </div>
        </div>
    )
}

export default Login
