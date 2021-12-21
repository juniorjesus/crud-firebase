import  {typesEmpleoyees} from '../types/types';
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs,query,where,doc,deleteDoc} from "@firebase/firestore";

//DELETE

export const deleteEmployeeAsync = (email) =>{
    return async(dispatch) => {

        const estCollection = collection(db,"empleados");//recibimos el nombre de la collecciion empleados
        const q = query(estCollection,where("correo","==",email))
        //utilizamos una propiedad de firebase que se llama query y la importamos
       
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db,"empleados",docu.id));
        })
        dispatch(deleteSync(email));
    }
}

export const deleteSync = (email) => {
    return{
        type: typesEmpleoyees.delete,
        payload: email
    }
}


//listar

export const listEmployeeAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "empleados"));
        const empleados = [];//vamos a hacer referencia al documento 
        querySnapshot.forEach((doc) => {
            empleados.push({
                ...doc.data()//hacemos un push de todos los objetos de doc  
            })
        });
        dispatch(listSync(empleados));//aqui le recibimos ese arreglo con es informacion 
    }
}

export const listSync = (employees) => {
    return {
        type: typesEmpleoyees.list,
        payload: employees
    }
}


//CREATE

export const registerEmployeeAsync = (empleado) => {

    return(dispatch) => {

        addDoc(collection(db,"empleados"),empleado)
        .then(resp => {
            dispatch(registerEmployeeSync(empleado))
            dispatch(listEmployeeAsync())
        })
        .catch(error => {
            console.log(error);
        })
    }
 }

export const registerEmployeeSync = (employee) => {
    return{
        type: typesEmpleoyees.register,
        payload: employee
    }

}