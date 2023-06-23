// import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import { auth, } from "../../../Firebase/firebaseConfigure";
import { addUser, setError,} from "../reducers/authReducer";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";



// const coleccionUsuarios = collection(firestore, 'users')
export const createUser = (email, password, name, avatar) => {

    return async (dispatch) => {
        try {
            const { newUser } = await createUserWithEmailAndPassword(auth, email, password);
            const ususarioLogged = {
                ...newUser,
                name: name,
                avatar: avatar,
            }
            await updateProfile(auth.currentUser,{
                displayName: name,
                photoURL: avatar,
            })
            dispatch(addUser(ususarioLogged));

            // dispatch(setUserLogged(avatar))
            console.log('me quiero loguear', ususarioLogged);
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