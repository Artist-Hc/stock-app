import { Typography } from "@mui/material"
import { useEffect } from "react"
import Charts from "../companents/Charts"
import KpiCards from "../companents/KpiCard"
import useStockCall from "../hooks/useStockCall"

const Home = () => {
  const { getStockData } = useStockCall()

  useEffect(() => {
    getStockData("sales")
    getStockData("purchases")
  }, [])

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Dashboard
      </Typography>

      <KpiCards />
      <Charts />
    </div>
  )
}

export default Home
