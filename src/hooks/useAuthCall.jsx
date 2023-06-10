import axios from 'axios'
import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart, loginSuccess, registerSuccess } from '../features/authSlice'
import { toastErrorNotify, toastSuccessNotify } from '../helpers/toastNotify'
import { useNavigate } from 'react-router-dom'

const useAuthCall = () => {
    const dispatch = useDispatch()
    const navigate =useNavigate()
    const BASE_URL = "https://12235.fullstack.clarusway.com/"
  const login = async(userInfo)=>{
       dispatch(fetchStart())
    try {
      const {data}= await axios.post(`${BASE_URL}account/auth/login/` , userInfo)
        dispatch(loginSuccess(data))
        toastSuccessNotify("Başarılı Giriş")
        navigate("/stock")

    } catch (error) {
        dispatch(fetchFail())
    }

  }
  const register = async(userInfo)=>{
    dispatch(fetchStart())
 try {
   const {data}= await axios.post(`${BASE_URL}account/register/` , userInfo)
     dispatch(registerSuccess(data))
     toastSuccessNotify("Başarı giriş")
     navigate("/stock")

 } catch (error) {
     dispatch(fetchFail())
     toastErrorNotify("error validation")
 }
  
}
const logout = async(userInfo)=>{
  dispatch(fetchStart())
try {
 const {data}= await axios.post(`${BASE_URL}account/auth/logout/` , userInfo)
   dispatch(registerSuccess(data))
   toastSuccessNotify("çıkış yapıldı")
   navigate("/")

} catch (error) {
   dispatch(fetchFail())
   toastErrorNotify("error validation")
}

}

  
    return {login,register,logout}
   
}

export default useAuthCall