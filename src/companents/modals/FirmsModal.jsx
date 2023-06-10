import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import useStockCall from '../../hooks/useStockCall';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
 padding: "5px",
};
export default function FirmModal({info, setInfo,open,handleClose,handleOpen}) {
const {postStockData, putStockData} = useStockCall()
const handleChange = (e)=>{
  const {name,value} = e.target
  setInfo({...info, [name]: value})
}
const handleSubmit = (e)=>{
    e.preventDefault()
    if (info.id) {
      putStockData("firms", info)
    }
    else{
      postStockData("firms", info)
    }
    handleClose()
    setInfo({name: "", phone: "", address: "", image: ""})
    
}
  return (
    <div>
      <Button onClick={handleOpen} variant='contained'>FİRMS MODAL</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style}>
        <Box  sx={{ display: "flex", flexDirection: "column", gap: 2, margin:"1.5rem" }}
        component="form"
        onSubmit={handleSubmit}
        >
        <TextField
         label="Firm Name"
         name="name"
         id="name"
         type="text"
         variant="outlined"
         onChange={handleChange}
         value={info.name}
         />
         <TextField
         label="Phone"
         name="phone"
         id="phone"
         type="tel"
         variant="outlined"
         onChange={handleChange}
         value={info?.phone}
         />
         <TextField
         label="Address"
         name="address"
         id="address"
         type="text"
         variant="outlined"
         onChange={handleChange}
         value={info?.address}
         />
         <TextField
         label="Image"
         name="image"
         id="image"
         type="url"
         variant="outlined"
         onChange={handleChange}
         value={info?.image}
         />
         <Button type='submit' variant='contained'>SUBMİT FİRM</Button>
        </Box>
        </Box>
      </Modal>
    </div>
  );
}