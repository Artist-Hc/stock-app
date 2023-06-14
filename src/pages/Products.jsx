import React, { useEffect, useState } from 'react'
import FirmsModal from '../companents/modals/FirmsModal'
import { useSelector } from 'react-redux'
import useStockCall from '../hooks/useStockCall'
import { Typography } from '@mui/material'
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ProductsModal from '../companents/modals/ProductsModal'



const Products = () => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name:"",
    category_id:"",
    brand_id:""

  });
  const {products} = useSelector((state)=>state.stock)
  const {deleteStockData,getProCatBrand} = useStockCall()
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    { field: 'id', headerName: '#', width: 70 },
    { field: 'category', headerName: 'Category', minWidth: 150, flex:3},
    { field: 'brand', headerName: 'Brand', minWidth: 150,flex:2 },
    {
      field: 'name',
      headerName: 'Name',
      type: 'number',
      minWidth: 150,
      flex: 3,
      
    },
    {
      field: 'stock',
      headerName: 'Stock',
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
      
      renderCell: ({ id }) => (
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          label="Delete"
          onClick={() => deleteStockData("products", id)}
        />
      ),
    },
  ];


  useEffect(() => {
  getProCatBrand()
  }, [])

  return (
    <div>
      <Typography color="error" variant="h2">PRODUCTS</Typography>
      <ProductsModal 
      info={info} 
      setInfo={setInfo}
       open={open} 
       handleClose={handleClose}
       handleOpen ={handleOpen}/>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
       autoHeight
       rows={products}
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

export default Products