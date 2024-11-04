import { useEffect } from 'react';
import { Box } from '@mui/material';
import { trefoil } from 'ldrs';

function Loader() {
    useEffect(() => {
        // Register the web component
        import('ldrs/trefoil');
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '200px'
            }}
        >
            <l-trefoil
                size="40"
                stroke="4"
                stroke-length="0.15"
                bg-opacity="0.1"
                speed="1.4"
                color="black"
            ></l-trefoil>
        </Box>
    );
}

export default Loader; 
