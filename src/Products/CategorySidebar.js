import React from 'react';
import { Button, Stack, Box, Typography } from '@mui/material';
import './CategorySidebar.css'
import Apple from '../ASSETS/logo/Apple.jpg';
import Mango from '../ASSETS/logo/Mango.webp';
import Orange from '../ASSETS/logo/Orange.jpg';
import Leechi from '../ASSETS/logo/Leechi.webp';
import Tomato from '../ASSETS/logo/Tomato.jpg';

function CategorySidebar() {
    const items = [
        { id: 1, name: 'Fresh Apple', dis: '20%', add: Apple },
        { id: 2, name: 'Fresh Mango', dis: '50%', add: Mango },
        { id: 3, name: 'Bathing Essentials', dis: '40%', add: Orange },
        { id: 5, name: 'leechi', dis: '60%', add: Leechi },
        { id: 6, name: 'Tomato', dis: '30%', add: Tomato },
    ];

    return (
        <div style={{ padding: '10px', backgroundColor: 'whitesmoke', borderRadius: '8px', marginTop: '5vh' }}>
            <Typography variant='h4' fontSize={15} sx={{ padding: '10px', fontWeight: 'bold', fontSize: '500' }}>Fruits And Vegetables</Typography>
            <Stack
                direction="row"
                sx={{ alignItems: 'center' }}
            >
                {items.map(cat => (
                    <Box className="ite"
                        key={cat.id} 
                        sx={{ 
                            backgroundColor: 'white', 
                            padding: '20px', 
                            margin: '10px', 
                            width: '300px', 
                            height: '250px', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: '8px'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                            <Button variant="contained" color="success" sx={{ width: '12vh', textTransform: 'none' }}>
                                <Typography variant="caption" display="block" fontSize={9} sx={{ paddingLeft: '10px', marginBottom: '1vh' }}>Upto&nbsp;</Typography>
                                {cat.dis}
                            </Button>
                        </div>
                        <img src={cat.add} alt={cat.name} style={{ height: "120px", borderRadius: "10%", objectFit: 'cover' }} />
                        <Typography variant="body2" display="block" fontSize={25}sx={{ paddingTop: '10px', textAlign: 'center' }}>{cat.name}</Typography>
                    </Box>
                ))}
            </Stack>
        </div>
    );
}

export default CategorySidebar;
