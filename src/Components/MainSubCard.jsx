import React from 'react'
import Box from '@mui/material/Box';
import { MainSubObjects } from '../assets/utils/constants/index.js'
const MainSubCard = () => {
    return (
        <Box sx={{ marginTop: '5vh', paddingLeft: { sx: '5vh', md: '8vh' }, paddingRight: { sx: '5vh', md: '8vh' } }}>
            <hr style={{ border: "5px solid red", width: '50px', marginBottom: '10px' }} />
            <h4 style={{ textAlign: 'start' }}>MORE WORLD NEWS</h4>
            <ul style={{ paddingLeft: '50px', paddingTop: '20px' }}>
                {MainSubObjects.map((item) => (
                    <>
                        {item.title !== "" ? (
                            <li key={item.id}>
                                <span style={{ fontSize: '1.5em', color: 'red',fontFamily:'poppins' }}>{item.title}</span>: {item.text}
                            </li>
                        ) : (
                            <li key={item.id}>{item.text}</li>
                        )}
                        <br />
                    </>
                ))}
            </ul>

        </Box>
    )
}

export default MainSubCard