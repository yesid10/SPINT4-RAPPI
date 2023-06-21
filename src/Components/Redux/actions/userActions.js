import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../../Firebase/firebaseConfigure";
import { addUser } from "../reducers/authReducer";

const coleccionUsuarios = collection(firestore, 'users')
export const createUser = (user) => {
    return async (dispatch) => {
        try {
            const newUser = await addDoc(coleccionUsuarios, user);
            dispatch(addUser(newUser))
        } catch (error) {
            console.log('error', error);
        }
    }
}