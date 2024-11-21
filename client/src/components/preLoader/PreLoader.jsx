import { useEffect } from 'react'
import './preLoader.scss'
import { preLoaderAnim } from '../loaderAnimation'
import loader from '../../assets/images/analytix-png.png'

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim()
    },[])
  return (
    <div className='preloader'>
        <img className='pic' src={loader} alt="" />
    </div>
  )
}

export default PreLoader