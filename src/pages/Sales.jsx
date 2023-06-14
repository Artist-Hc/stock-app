import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useStockCall from '../hooks/useStockCall'
import { Box, Typography } from '@mui/material'
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import SaleModal from '../companents/modals/SaleModal';



const Sales = () => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    
    product_id:"",
    brand_id:"",
    quantity:"",
    price:"",

  });
  const {sales} = useSelector((state)=>state.stock)
  const {deleteStockData,getProCatBrand,getStockData} = useStockCall()
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  

  const columns = [
    { field: 'createds', headerName: 'Date', minWidth: 150 },
    { field: 'brand', headerName: 'Brand', minWidth: 150, flex:3},
    { field: 'product', headerName: 'Product', minWidth: 150,flex:2 },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      minWidth: 150,
      flex: 2,
      
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      minWidth: 150,
      flex:1,
      
    },{
      field: 'price_total',
      headerName: 'Amount',
      type: 'number',
      minWidth: 150,
      flex:1,
      
    },
   
    {
      field: '',
      headerName: 'Actions',
      type: 'number',
      minWidth: 150,
      flex:1,
      
      renderCell: ({ id, row:{product_id,brand_id,quantity,price}}) => (
       <Box>
         <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          label="Delete"
          onClick={() => deleteStockData("sales", id)}
        />
         <GridActionsCellItem
          icon={<EditIcon/>}
          label="Edit"
          onClick={()=> {
            setOpen(true)
            setInfo({id, product_id,brand_id,quantity,price})
          }}
        />
       </Box>
      ),
    },
  ];


  useEffect(() => {
    getProCatBrand()
  getStockData("sales")
  }, [])

  return (
    <div>
      <Typography color="error" variant="h2">SALES</Typography>
      <SaleModal
      info={info} 
      setInfo={setInfo}
       open={open} 
       handleClose={handleClose}
       handleOpen ={handleOpen}/>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
       autoHeight
       rows={sales}
       columns={columns}
       pageSize={10}
       disableRowSelectionOnClick
       slots={{ toolbar: GridToolbar }}
       sx={{
         boxShadow: 4,
       }}
      />
    </div>
  </div>
  )
}

export default Sales