import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import useStockCall from "../hooks/useStockCall"
import { Box, Grid, Typography } from "@mui/material"
import BrandModal from "../companents/modals/BrandModal"
import BrandCard from "../companents/BrandCard"
const Brands = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [info, setInfo] = useState({
  name: "",
  image: ""
})
  const {getStockData} = useStockCall()
  const {brands} = useSelector((state)=> state.stock)
  useEffect(() => {
   getStockData("brands")
  }, [])
 console.log(brands);
  return (
  <Box >
      <Typography sx={{marginBottom:"25px"}} variant="h3" color="error">BRANDS</Typography>
   <BrandModal
    info = {info}
    setInfo={setInfo}
    open={open}
    setOpen={setOpen}
    handleClose={handleClose}
    handleOpen={handleOpen}/>
  <Grid container>
  {brands.map((brand)=>
  ( <Grid item key={brand.id}>
 <BrandCard
   brand={brand}
    setInfo={setInfo}
    setOpen={setOpen}/>
  </Grid>)
)}
  </Grid>
  </Box>
  )
}
export default Brands