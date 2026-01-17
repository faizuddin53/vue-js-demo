import { ref} from 'vue'
const user = ref({})

export function useAuth(){
    const login = ({email , password}) => {
       console.log(email, password)
       if(user.value.email === email && user.value.password === password){ 
         return true
       }
       return false
    }

    const signUp = (userData) => {
       user.value = userData
    }

    return { login , signUp}
}