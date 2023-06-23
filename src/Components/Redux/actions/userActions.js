// import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import { auth, } from "../../../Firebase/firebaseConfigure";
import { addUser, setError } from "../reducers/authReducer";
import { createUserWithEmailAndPassword } from "firebase/auth";



// const coleccionUsuarios = collection(firestore, 'users')
export const createUser = (email, password) => {

    return async (dispatch) => {
        try {
            const { newUser } = await createUserWithEmailAndPassword(auth, email, password);
            dispatch(addUser(newUser))
            // dispatch(setError(false))
        } catch (error) {
            console.log('error', error);
            dispatch(setError(true))
            Swal.fire(
                'Oops!',
                'El correo ingresado ya esta en uso!',
                'error'
            )
        }
    }
}