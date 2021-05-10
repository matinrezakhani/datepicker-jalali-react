import React, { useState } from 'react'

import Datepicker from 'datepicker-jalali-react'

const App = () => {
  const [date, setDate] = useState('')

  const handleDatepicker = (e) => {
    console.log(e)
    setDate(e)
  }

  return (
    <Datepicker
      value={date}
      onChange={(e) => {
        handleDatepicker(e)
      }}
    />
  )
}

export default App
