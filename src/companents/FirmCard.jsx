import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from "../helpers/hacker.jpg"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import useStockCall from '../hooks/useStockCall';

export default function FirmCard({firm,setInfo,setOpen}) {
  const {deleteStockData} = useStockCall()

  const handlleEdit = ()=>{
    setOpen(true)
    setInfo(firm)
  }


  return (
    <Card sx={{ maxWidth: 345 , marginLeft:3, marginTop:3 , boxShadow: " 0 0 0 2px rgba(218,102,123,1), 8px 8px 0 0 rgba(218,102,123,1); "}}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {firm.address}
        </Typography>
      </CardContent>
      <CardMedia
      sx={{ p: 1, objectFit: "contain", height: "130px" }}
      image={firm?.image}
      title="firm-image"
      component="img"
      />
      <Typography gutterBottom variant="h5" component="div" >
         Phone : {firm.phone}
        </Typography>
      <CardActions>
        <Button size="small" variant='contained' onClick={() => deleteStockData("firms", firm.id)}>
          <DeleteForeverIcon/></Button>
        <Button size="small" variant='contained' onClick={handlleEdit}><EditIcon/></Button>
      </CardActions>
    </Card>
  );
}
