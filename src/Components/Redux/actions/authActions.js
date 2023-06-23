import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
  } from 'firebase/auth';
import { auth } from '../../../Firebase/firebaseConfigure';
import { setUser } from '../reducers/authReducer';
import Swal from 'sweetalert2';
  
  
  export const login = (email, password) => {
    return async (dispatch) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("user", user)
        dispatch(setUser(user));
      } catch (error) {
        console.log("error", error)
        if(error){
          Swal.fire(
            'Oops!',
            'Credenciales incorrectas!',
            'error'
          )
        }
      }
    };
  };

  export const loginGoogle = () => {
    const provider = new GoogleAuthProvider();
    return async (dispatch) => {
      try {
        const userCredential = await signInWithPopup(auth, provider);
        console.log('usuario de google', userCredential);
        dispatch(setUser(userCredential.user));
      } catch (error) {
        console.log(error);
      }
    }
  }