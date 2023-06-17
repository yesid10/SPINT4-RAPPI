import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import Logo from '../../assets/Logo.png';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
const SingIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div>
            <figure>
                <img src={Logo} alt="logo" />
            </figure>
            <div>
                <h3>Sing In</h3>
                <p>Login or create an account with your
                    phone number to start ordering</p>
            </div>

            <form>
                <div>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
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
                    <div>
                        <TextField
                            sx={{ m: 1, width: '100%' }}
                            id="standard-textarea"
                            label="Email "
                            placeholder="example@example.com"
                            multiline
                            variant="standard"
                        />
                    </div>
                </div>
                <div>
                    <FcGoogle />
                    <button>Sign In With Google</button>
                </div>
            </form>
            <div>

                <button type='submit'>Login</button>
            </div>
        </div>
    )
}

export default SingIn