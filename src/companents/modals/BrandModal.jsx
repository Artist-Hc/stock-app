import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
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
export default function BrandModal({info, setInfo,open,handleClose,handleOpen}) {
const {postStockData, putStockData} = useStockCall()
const handleChange = (e)=>{
  const {name,value} = e.target
  setInfo({...info, [name]: value})
}
const handleSubmit = (e)=>{
    e.preventDefault()
    if(info.id){
      putStockData("brands", info)
    }else{
      postStockData("brands", info)
    }
    setInfo({name: "", image: ""})
    handleClose()
}
  return (
    <div>
      <Button sx={{marginBottom:"15px"}} onClick={handleOpen} variant='contained'>BRAND MODAL</Button>
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
         label="Image"
         name="image"
         id="image"
         type="url"
         variant="outlined"
         onChange={handleChange}
         value={info?.image}
         />
         <Button type='submit' variant='contained'>SUBMİT SALE</Button>
        </Box>
        </Box>
      </Modal>
    </div>
  );
}