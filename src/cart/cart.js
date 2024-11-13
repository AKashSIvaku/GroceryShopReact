import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Stack, Box, Button } from '@mui/material';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/cart')
            .then(response => {
                setCart(response.data);
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    }, []);

    const deleteItem = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));

        axios.delete(`http://localhost:5000/cart/${id}`)
            .then(() => {
                console.log(`Item with id ${id} deleted`);
            })
            .catch(error => {
                console.error('Error deleting item:', error);
            });
    };

    return (
        <div className="cart">
            <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
            <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
                {cart.map(item => (
                    <Box key={item.id} sx={{ backgroundColor: 'white', padding: '20px', margin: '10px', width: '300px', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', borderRadius: '8px' }}>
                        <img src={item.add} alt={item.name} style={{ height: "120px", borderRadius: "10%", objectFit: 'cover' }} />
                        <Typography variant="body2">{item.name}</Typography>
                        <Button variant="outlined" onClick={() => deleteItem(item.id)}>Remove</Button>
                    </Box>
                ))}
            </Stack>
        </div>
    );
};

export default Cart;
