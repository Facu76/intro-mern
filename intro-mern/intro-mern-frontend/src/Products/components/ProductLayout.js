import React, {useState, useEffect} from 'react'
import {Modal, Container} from 'react-bulma-components'
import Header from './Header'
import AddButton from './AddButton'
import ListProducts from './ListProducts'
import Form from './Form'
import Loading from "./Loading";
import { saveProduct, getProducts } from '../services'


const ProductLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState (false)
    const [isLoading, setisLoading] = useState(true)
    const [products, setProducts] = useState([])

    async function loadProducts () {
        const response = await getProducts()

        if (response.status === 200) {
            setProducts(response.data.products)
        }

        setisLoading(false )

    }

    useEffect(() => {
        loadProducts()
    }, [])

    const handleSubmit = async (data) => {
        saveProduct(data)
        loadProducts()
        setIsModalOpen(false)
    }

    return (
        <Container>
         <Header title="Products app" />
         <AddButton onClick={() => setIsModalOpen(true)} />
         {
             isLoading && <Loading/>
         }

         {
            !isLoading && !products.length && (
                <h2 className="title has-text-centered">
                    You don't have products
                 </h2>
            )
         }

         {
             !isLoading && products.length && <ListProducts products={products}/>
         }

         
         <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} >
             <Modal.Card>
                 <Modal.Card.Head showClose= {false}>
                    <Modal.Card.title>
                        Add Product 
                    </Modal.Card.title> 
                 </Modal.Card.Head>
                 <Modal.Card.Body>
                    <Form handleSubmit={handleSubmit} />
                 </Modal.Card.Body>
             </Modal.Card>
         </Modal>
        </Container>
    )
}

export default ProductLayout