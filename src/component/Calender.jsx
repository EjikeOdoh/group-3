
import { DateCalendar } from '@mui/x-date-pickers'
import React from 'react'

export default function Calender() {
  return (
    <DateCalendar sx={{
        fontFamily:'inherit',
        margin: 0,
        width:"100%",
        height: "350px",
        backgroundColor: 'white',
        borderRadius: "12px",
        gap:"8px",
        paddingBottom: "12px"
    }} />
  )
}
