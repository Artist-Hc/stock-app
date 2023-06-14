
import { fetchfail, fetchstart, getsuccess,getProCatBrandSuccess } from '../features/stockSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toastErrorNotify, toastSuccessNotify } from '../helpers/toastNotify'

const useStockCall = () => {
const dispatch = useDispatch()
const {token} = useSelector((state)=>state.auth)
const BASE_URL = "https://12235.fullstack.clarusway.com/"

    const getStockData = async (url)=>{
    dispatch(fetchstart())
        try {
            const {data} = await axios(`${BASE_URL}stock/${url}/`,
             {headers :{ Authorization:  `Token ${token}`},})

             dispatch(getsuccess({data,url}))
            
        } catch (error) {
            dispatch(fetchfail())
            
        }
    }


    const postStockData =async(url,info)=>{
        dispatch(fetchstart())
        try {
         await axios.post(`${BASE_URL}stock/${url}/`,info,
             {headers :{ Authorization:  `Token ${token}`},})

             getStockData(url)
             toastSuccessNotify(`${url} successfuly posted`)

        } catch (error) {
            dispatch(fetchfail())
            toastErrorNotify(`${url} can not be posted`)
            
        }
      
    }



     const putStockData =async(url, info)=>{
        dispatch(fetchstart())
        try {
         await axios.put(`${BASE_URL}stock/${url}/${info.id}/`,info,
             {headers :{ Authorization:  `Token ${token}`},})

             getStockData(url)
             toastSuccessNotify(`${url} successfuly updated`)

        } catch (error) {
            dispatch(fetchfail())
            toastErrorNotify(`${url} can not be updated`)
            
        }
      
    }
    const deleteStockData =async(url, id)=>{
        dispatch(fetchstart())
        try {
         await axios.delete(`${BASE_URL}stock/${url}/${id}/`,
             {headers :{ Authorization:  `Token ${token}`},})

             toastSuccessNotify(`${url} successfuly deleted`)
             getStockData(url)

        } catch (error) {
            dispatch(fetchfail())
            toastErrorNotify(`${url} can not be deleted`)
            
        }
      
    }
    const getProCatBrand = async()=>{
        try {
           const [products,categories,brands] = await Promise.all([
            axios.get(`${BASE_URL}stock/products/`,
             {headers :{ Authorization:  `Token ${token}`},}),
             axios.get(`${BASE_URL}stock/categories/`,
             {headers :{ Authorization:  `Token ${token}`},}),
             axios.get(`${BASE_URL}stock/brands/`,
             {headers :{ Authorization:  `Token ${token}`},})
           ])
           dispatch(
            getProCatBrandSuccess([products.data, categories?.data, brands?.data]))

        } catch (error) {
            console.log(error)
            dispatch(fetchfail())
            toastErrorNotify(`Data can not be fetched`)
            
        }
      
    }





  return  {
    getStockData,
    postStockData,
    putStockData,
    deleteStockData,
    getProCatBrand,
}
}

export default useStockCall