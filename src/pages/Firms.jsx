import React, { useEffect, useState } from 'react'
import FirmsModal from '../companents/modals/FirmsModal'
import { useSelector } from 'react-redux'
import useStockCall from '../hooks/useStockCall'
import { Grid, Typography } from '@mui/material'
import FirmCard from '../companents/FirmCard'


const Firms = () => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name:"",
    phone:"",
    adress:" ",
    image:"",
  });
  const {firms} = useSelector((state)=>state.stock)
  const {getStockData} = useStockCall()
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
  getStockData("firms")
  }, [])

  return (<div>
    <Typography color="error" variant="h2">FİRMS</Typography>
    <FirmsModal 
    info={info} 
    setInfo={setInfo}
     open={open} 
     handleClose={handleClose}
     handleOpen ={handleOpen}/>
    <Grid container >
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} setOpen={setOpen} setInfo={setInfo} />
          </Grid>
        ))}
      </Grid>
  </div>
  )
}

export default Firms