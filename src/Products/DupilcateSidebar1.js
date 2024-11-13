import React from 'react';
import './CategorySidebar.css';
import { Button, Stack, Box, Typography } from '@mui/material';
import Aata from '../ASSETS/logo/Aata.webp';
import Rice from '../ASSETS/logo/Rice.jpg';
import Orange from '../ASSETS/logo/Ragi.jpg';
import Leechi from '../ASSETS/logo/Goldwinner.webp';
import Tomato from '../ASSETS/logo/Masala.jpeg';
function DupilcateSidebar1() {
    const items = [
        { id: 1, name: 'Aata', dis: '20%', add: Aata },
        { id: 2, name: 'Rice', dis: '50%', add: Rice},
        { id: 3, name: 'Ragi', dis: '40%', add: Orange },
        { id: 5, name: 'GoldWinner Oil', dis: '60%', add: Leechi },
        { id: 6, name: 'Masala', dis: '30%', add: Tomato },
    ];
    return (
        <div style={{ padding: '10px', backgroundColor: 'whitesmoke', borderRadius: '8px', marginTop: '5vh' }}>
            <Typography variant='h4' fontSize={15} sx={{ padding: '10px', fontWeight: 'bold', fontSize: '500' }}>Foodgrains, Oil & Masala</Typography>
            <Stack className='ite'
                direction="row"
                sx={{ alignItems: 'center' }}
            >
                {items.map(cat => (
                    <Box className='ite'
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
export default DupilcateSidebar1;