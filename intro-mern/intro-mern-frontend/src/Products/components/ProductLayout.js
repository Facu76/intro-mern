import React, {useState} from 'react'
import Header from './Header'
import AddButton from './AddButton'
import Loading from './Loading'

const ProductLayout = () => {
    const [isLoading, setisLoading] = useState(true)

    return (
        <>
         <Header title="Products app" />
         <AddButton/>
         {
             isLoading 
             ? <Loading/>
             : 'mostrar resultado fetch'
         }
        </>
    )
}

export default ProductLayout