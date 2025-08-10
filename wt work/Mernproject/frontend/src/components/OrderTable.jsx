import React, { useState } from 'react'
// import "./OrderTable.css"
import Modal from './Modal'
const OrderTable = ({data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)


    const formatDate = (dateString) =>{
        const date = new Date(dateString)
        return date.toLocaleString()
    }

    const openModal = (content) =>{
        setModalContent(content)
        setIsModalOpen(true)
    }

    const closeModal = () =>{
        setIsModalOpen(false)
        setModalContent(null)
    }

     const handleDelete = async (id) => {
        // Confirm with the user before deleting
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                // Make a DELETE request to your backend API
                const response = await fetch(`/users/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    // If the response is successful, call the onDelete function to update the UI
                    onDelete(id);
                    alert("User deleted successfully.");
                } else {
                    alert("Failed to delete user.");
                }
            } catch (error) {
                console.error("Error deleting user:", error);
                alert("An error occurred while deleting the user.");
            }
        }
    }


  return (
    <div className='table-container' >
        <table className='table table-dark table-striped' >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Total Amount</th>
                    <th>Order Date</th>
                    <th>User Name</th>
                    <th>Action</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((el)=>{
                        return <tr key={el._id} >
                                <td>{el._id}</td>
                                <td>{el.totalAmount}</td>
                                <td>{formatDate(el.orderDate)}</td>
                                <td>{el.user.name}</td>
                                <td><button className='btn btn-info'
                                onClick={()=>openModal(
                                    <div>
                                        <h2>User details</h2>
                                        <p><strong>Name:</strong>{el.user.name} </p>
                                        <p><strong>Gender:</strong>{el.user.gender} </p>
                                        <p><strong>Mobile:</strong>{el.user.mobile} </p>
                                        <p><strong>Address:</strong>{el.user.address} </p>

                                    </div>
                                )

                                }
                                
                                >User Details</button></td>

                               <td><button className='btn btn-info'
                               onClick={()=> openModal (
                                <div>
                                    <h2>Product Details</h2>
                                    {
                                        el.products.map((product)=>{
                                          return  <div key={product._id} >
                                            <img height={"100px"} width={"100px"} src={product.imageUrl} />
                                            <p><strong>Name: </strong> {product.name} </p>
                                            <p><strong>Price: </strong> {product.price} </p>
                                            <p><strong>Quantity: </strong> {product.quantity} </p>
                                            <p><strong>Total Orders: </strong> {product.totalOrder} </p>
                                            </div>
                                        })
                                    }
                                </div>
                               )}
                               
                               >Product Details</button></td>
                               
                               <td >
                         
                               <button className='btn btn-danger' onClick={()=>{

                               }} >delete  </button>
                               
                                
                     
                                
                               </td>
                                
                        </tr>
                    })
                }
            </tbody>
        </table>

        <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  )
}

export default OrderTable