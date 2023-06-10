import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import useStockCall from '../hooks/useStockCall';
export default function BrandCard({brand,setInfo,setOpen}) {
  const {deleteStockData} = useStockCall()
  return (
    <Card sx={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      padding:"15px",
      width:"400px",
      height:"400px",
      marginRight:"5px",
      border:"1px solid red",
    flexWrap:"wrap"
    }}>
      <CardContent sx={{maxWidth:" 100%;"}}>
        <Typography gutterBottom variant="h4" component="div">
          {brand?.name}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{objectFit: "contain", p: 1 }}
        image={brand?.image}
        title="green iguana"
        component="img"
      />
        <CardActions>
     <Button onClick={()=>{
       setOpen(true)
       setInfo(brand)
       }}  size="small">
         <EditIcon/>
       </Button>
        <Button onClick={()=> deleteStockData("brands", brand.id)} size="small"><DeleteForeverIcon/></Button>
     </CardActions>
    </Card>
  );
}