# datepicker-jalali-react

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/datepicker-jalali-react.svg)](https://www.npmjs.com/package/datepicker-jalali-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save datepicker-jalali-react
```

## Demo
[https://matinrezakhani.github.io/datepicker-jalali-react/](https://matinrezakhani.github.io/datepicker-jalali-react/)



## Date Picker Jalali
| props               | type                                | default                                                                                                             |
| ------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| value               | timestamp &#124; Date &#124; Moment | Date | Moment | today date                                                                                          |
| locale              | string ('fa','en')                  | fa                                                                                                                  |
| disableDate         | boolean                             | default is false                                                                                                    |
| disableTime         | boolean                             | default is false                                                                                                    |
| onChange            | function                            | this function will be called when the date or time changed                                                          |


## Usage
```jsx
import React, { useState } from 'react'
import Datepicker from 'datepicker-jalali-react'

const App = () => {
  const [date, setDate] = useState('')

  const handleDatepicker = (e) => {
    console.log(e)
    setDate(e)
  }

  return (
    <div>

      <Datepicker
        value={date}
        onChange={(e) => {
          handleDatepicker(e)
        }}
      /> 

      <Datepicker
        value={date}
        disableTime
        onChange={(e) => {
          handleDatepicker(e)
        }}
      />
      
      <Datepicker
        value={date}
        disableDate
        onChange={(e) => {
          handleDatepicker(e)
        }}
      />

    </div>
  )
}
```

## License

MIT © [matinrezakhani](https://github.com/matinrezakhani)
