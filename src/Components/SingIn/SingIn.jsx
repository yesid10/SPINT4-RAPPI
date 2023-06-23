import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import Logo from '../../assets/Logo.png';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginGoogle } from '../Redux/actions/authActions';
// import { useNavigate } from 'react-router-dom';
import { Div } from "../Home/StylesHome"
import { ContainDiv } from './StylesSingIn';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingIn = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const usuario = useSelector((store) => store.authReducer.user);
    const username = usuario?.email.split('@')[0];
    const firftLetter =username?.charAt(0).toUpperCase();
    const remainingLetters = username?.slice(1);
    const name = firftLetter + remainingLetters;

    const nameFull = usuario?.displayName;
    const namesArray = nameFull?.split(' ')[0];
    

  
    const navigate = useNavigate();
    const user = useSelector((store) => store.authReducer.user);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    useEffect(() => {
        if (user) {
            Swal.fire(
                'God Job!',
                `Bienvenid@ ${namesArray? namesArray: name} `,
                'success'
              ).then(() =>{
                  navigate('/banner/home')
              })
            
        }
        
    }, [user]);

    const handleLogin = (e) => {
        e.preventDefault();
        
        dispatch(login(email, password));
      
        
    }
    
    const handleLoginGoogle = async () => {
        await dispatch(loginGoogle());
        // navigate('/')
        console.log('enviado con google');
    }

    const handleCreateAcoount = () => {
        navigate("/createacount")
    }
    return (
        <Div style={{ marginTop: '0' }}>
            <ContainDiv>
                <figure>
                    <img src={Logo} alt="logo" />
                </figure>
                <div className='singIn'>
                    <h3>Sing In</h3>
                    <p>Login or create an account with your
                        phone number to start ordering</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div>
                        <TextField

                            sx={{ m: 1, width: '100%', }}
                            id="standard-textarea"
                            label="Email "
                            placeholder="example@example.com"
                            multiline
                            variant="standard"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                    </div>
                    <div className='iniciarConGoggle' onClick={() => handleLoginGoogle()}>
                        <FcGoogle style={{ fontSize: '1.7rem' }} />
                        <button type='button'>Sign In With Google</button>
                    </div>
                    <div className='login'>
                        <button type='submit'>Login</button>
                    </div>
                    <button onClick={() => handleCreateAcoount()} className='crearCuenta'>Crear Cuenta</button>
                </form>
            </ContainDiv>

        </Div>
    )
}

export default SingIn