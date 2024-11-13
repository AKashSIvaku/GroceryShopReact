import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CategorySidebar.css';
import { Button, Stack, Box, Typography } from '@mui/material';
import Aata from '../ASSETS/logo/cake.jpeg';
import Rice from '../ASSETS/logo/Dairymilk.webp';
import Orange from '../ASSETS/logo/Milk.jpg';
import Leechi from '../ASSETS/logo/Ghee.jpg';
import Tomato from '../ASSETS/logo/Masala.jpeg';

function DupilcateSidebar2() {
    const items = [
        { id: 1, name: 'CAKE', dis: '20%', add: Aata,price:500 },
        { id: 2, name: 'Chocolate', dis: '50%', add: Rice,price:100 },
        { id: 3, name: 'MILK', dis: '40%', add: Orange,price:30 },
        { id: 4, name: 'GHEE', dis: '60%', add: Leechi,price:70 },
        { id: 5, name: 'Masala', dis: '30%', add: Tomato,price:20 }, 
    ];

    const [cart, setCart] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/cart')
            .then((response) => {
                setCart(response.data);
            })
            .catch(error => console.error('Error fetching cart:', error));
    }, []);

    const addToCart = (id) => {
        const itemData = items.find(item => item.id === id);
        if (!itemData) return; 
        const itemInCart = cart.find(cartItem => cartItem.id === id);
        if (itemInCart) {
            axios.delete(`http://localhost:5000/cart/${id}`)
                .then(() => {
                    setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== id)); // Update state
                })
                .catch(error => console.error('Error removing item from cart:', error));
        } else {
            axios.post("http://localhost:5000/cart", itemData)
                .then(() => {
                    setCart(prevCart => [...prevCart, itemData]); 
                })
                .catch(error => console.error('Error adding item to cart:', error));
        }
    };

    const isInCart = (item) => {
        return cart.some(cartItem => cartItem.id === item.id);
    };

    return (
        <div style={{ padding: '10px', backgroundColor: 'whitesmoke', borderRadius: '8px', marginTop: '5vh' }}>
            <Typography variant='h4' fontSize={35} sx={{ padding: '10px', fontWeight: 'bold' }}>
            Bakery, Cakes & Dairy
            </Typography>
            <Stack className='ite' direction="row" sx={{ alignItems: 'center' }}>
                {items.map(cat => (
                    <Box key={cat.id} sx={{ backgroundColor: 'white', padding: '20px', margin: '10px', width: '300px', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Typography variant="body2" display="block" fontSize={25} sx={{ paddingTop: '10px' }}>{cat.name}</Typography>
                            <Button variant="contained" color="success" sx={{ width: '12vh', textTransform: 'none' }}>
                                <Typography variant="caption" display="block" fontSize={9} sx={{ paddingLeft: '10px', marginBottom: '1vh' }}>Upto&nbsp;</Typography>
                                {cat.dis}
                            </Button>
                        </div>
                        <img src={cat.add} alt={cat.name} style={{ height: "120px", borderRadius: "10%", objectFit: 'cover' }} />
                        <Typography variant="body2" display="block" fontSize={18} sx={{ paddingTop: '10px' }}>₹{cat.price}</Typography>
                        <Button variant="contained"
                            onClick={() => addToCart(cat.id)}
                            sx={{ padding: "10px 20px", border: "none", color: "black" }}>
                            {isInCart(cat) ? 'Remove from Cart' : 'Add to Cart'}
                        </Button>
                    </Box>
                ))}
            </Stack>
        </div>
    );
}

export default DupilcateSidebar2;
