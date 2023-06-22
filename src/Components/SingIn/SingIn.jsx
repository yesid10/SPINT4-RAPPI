import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import Logo from '../../assets/Logo.png';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { login, loginGoogle } from '../Redux/actions/authActions';
// import { useNavigate } from 'react-router-dom';
import { Div } from "../Home/StylesHome"
import { ContainDiv } from './StylesSingIn';
const SingIn = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
        console.log('form enviado');
    }
    const handleLoginGoogle = async () => {
        await dispatch(loginGoogle());
        // navigate('/')
        console.log('enviado con google');
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
                    <button className='crearCuenta'>Crear Cuenta</button>
                </form>
            </ContainDiv>

        </Div>
    )
}

export default SingIn