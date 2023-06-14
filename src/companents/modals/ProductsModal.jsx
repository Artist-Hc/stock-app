import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import useStockCall from '../../hooks/useStockCall';
import { useSelector } from 'react-redux';
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
export default function ProductsModal({info, setInfo,open,handleClose,handleOpen}) {
const {postStockData} = useStockCall()
  const { categories, brands } = useSelector((state) => state.stock)
const handleChange = (e)=>{
  const {name,value} = e.target
  setInfo({...info, [name]: value})
}
const handleSubmit = (e)=>{
    e.preventDefault()
      postStockData("products", info)
    handleClose()
    setInfo({ name:"",
    category_id:"",
    brand_id:""})
    
}
  return (
    <div>
      <Button onClick={handleOpen} variant='contained'
      sx={{marginTop:2, marginBottom:2}}
      >NEW PRODUCT</Button>
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
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="category"
                id="category"
                name="category_id"
                value={info?.category_id}
                label="Category"
                onChange={handleChange}
              >
                {categories?.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel variant="outlined" id="brand-select">
                Brands
              </InputLabel>
              <Select
                labelId="brand-select"
                label="Brand"
                id="brand-select"
                name="brand_id"
                value={info?.brand_id}
                onChange={handleChange}
                required
              >
                {brands?.map((brand) => {
                  return (
                    <MenuItem key={brand.id} value={brand.id}>
                      {brand.name}
                    </MenuItem>
                  )
                })}
              </Select>
              </FormControl>
         <TextField
         label="Product Name"
         name="name"
         id="name"
         type="text"
         variant="outlined"
         onChange={handleChange}
         value={info?.name}
         />
        
         <Button type='submit' variant='contained'>SUBMİT PRODUCT</Button>
        </Box>
        </Box>
      </Modal>
    </div>
  );
}