import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FormControl, InputLabel, MenuItem,Select,TextField, } from '@mui/material';
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
export default function PurchasesModal({info, setInfo,open,handleClose,handleOpen}) {
const {brands, products,firms} = useSelector((state)=>state.stock)
const {postStockData,putStockData} = useStockCall()
const handleChange = (e)=>{
  const {name,value} = e.target
  setInfo({...info, [name]: Number(value)})
}
const handleSubmit = (e)=>{
    e.preventDefault()
    if (info.id) {
      putStockData("purchases", info)
    }
    else{
      postStockData("purchases", info)
    }
    handleClose()
    setInfo({ quantity: "",
    product_id:"",
    brand_id:"",
    price:"",
    firm_id:"",
})
}
  return (
    <div>
      <Button sx={{marginBottom:"15px"}} onClick={handleOpen} variant='contained'>PURCHASES MODAL</Button>
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
             <FormControl>
        <InputLabel>FİRM</InputLabel>
       <Select
        labelId="firm"
        id="firm"
        name="firm_id"
        value={info?.firm_id}
        label="Firms"
        onChange={handleChange}
       >
        {firms?.map((firm)=>(
            <MenuItem key={firm.id} value={firm.id}>
            {firm.name}
            </MenuItem>
        ))}
        </Select>
       </FormControl>
       <FormControl>
        <InputLabel>BRANDS</InputLabel>
       <Select
        labelId="brand"
        id="brand"
        name="brand_id"
        value={info?.brand_id}
        label="Brands"
        onChange={handleChange}
       >
        {brands?.map((brand)=>(
            <MenuItem key={brand.id} value={brand.id}>
            {brand.name}
            </MenuItem>
        ))}
        </Select>
       </FormControl>
       <FormControl>
        <InputLabel >PRODUCT</InputLabel>
       <Select
        labelId="product"
        id="product"
        name="product_id"
        value={info?.product_id}
        label="Product"
        onChange={handleChange}
       >
     {products?.map((product)=>(
    <MenuItem key={product.id} value={product.id}>
    {product.name}
    </MenuItem>
        ))}
        </Select>
       </FormControl>
         <TextField
         label="Quantity"
         name="quantity"
         id="quantity"
         type="num"
         variant="outlined"
         onChange={handleChange}
         value={info?.quantity || ""}
         />
         <TextField
         label="Price"
         name="price"
         id="price"
         type="num"
         variant="outlined"
         onChange={handleChange}
         value={info?.price || ""}
         />
         <Button type='submit' variant='contained'>SUBMİT PURCHASES</Button>
        </Box>
        </Box>
      </Modal>
    </div>
  );
}