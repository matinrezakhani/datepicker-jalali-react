import React, { useState, useEffect } from 'react'
import { DatePicker as DatePickerJalali } from 'antd-jalali'
import { DatePicker, TimePicker, Row, Col } from 'antd'
import Moment from 'jalali-moment'
import dayjs from 'dayjs'
import { ConfigProvider } from 'antd'
import faIr from 'antd/lib/locale-provider/fa_IR'
import enUs from 'antd/lib/locale-provider/en_US'
import 'antd/dist/antd.css';
import _ from 'lodash'

function DatePickerComponent({value, onChange, disableDate, disableTime, locale = 'fa'  }) {
  const [date, setDate] = useState('')
  const [dateFormat, setDateFormat] = useState('jYYYY-jMM-jDD HH:mm:ss')

  useEffect(()=>{
    switch (locale) {
      case 'fa':
        setDateFormat('jYYYY-jMM-jDD HH:mm:ss')
        dayjs.calendar('jalali')
        break;
      case 'en':
        setDateFormat('YYYY-MM-DD HH:mm:ss')
        dayjs.calendar('gregory')
        break;
      default:
        dayjs.calendar('jalali')
        setDateFormat('jYYYY-jMM-jDD HH:mm:ss')
    }
  },[locale])

  useEffect(() => {
    let d
    try {
      d = dayjs(
        Moment(value ? value : Date.now()).format(dateFormat),
        { jalali: locale === 'fa' ? true : false }
      )
    } catch (error) {
      d = dayjs(Moment(Date.now()).format(dateFormat), {
        jalali: locale === 'fa' ? true : false
      })
    }
    setDate(d)
  }, [value, dateFormat])


  const changeTime = (time) => {
    let d = Moment(date['$d']).format('YYYY-MM-DD')
    let t = Moment(time).format('HH:mm:ss')
    const newDate = dayjs(
      Moment(`${d} ${t}`, 'YYYY-MM-DD HH:mm:ss').format(dateFormat),
      { jalali: locale === 'fa' ? true : false }
    )

    setDate(newDate)
    if (onChange) {
      onChange(newDate['$d'])
    }
  }

  const changeDate = (time) => {
    let d = Moment(time).format('YYYY-MM-DD')
    let t = Moment(date['$d']).format('HH:mm:ss')
    const newDate = dayjs(
      Moment(`${d} ${t}`, 'YYYY-MM-DD HH:mm:ss').format(dateFormat),
      { jalali: locale === 'fa' ? true : false }
    )
    setDate(newDate)
    if (onChange) {
      onChange(newDate['$d'])
    }
  }

  return (
    <div className={'DatePicker'}>
      <ConfigProvider locale={locale == 'fa' ? faIr : enUs }>
        <Row justify={'center'}>
          {!disableDate&&<Col xs={{ span: 15 }}>
            {locale === 'fa' ? 
              <DatePickerJalali
                style={{ width: '100%'}}
                onChange={(e) => {
                  if (e) {
                    changeDate(e['$d'])
                  } else {
                    changeDate(Date.now())
                  }
                }}
                value={date}
              />
              :
              <DatePicker
                style={{ width: '100%'}}
                onChange={(e) => {
                  if (e) {
                    changeDate(e['$d'])
                  } else {
                    changeDate(Date.now())
                  }
                }}
                value={date}
              />
            }
          </Col>}
          {!disableTime&&<Col xs={{ span: 9 }}>
            <TimePicker
              style={{ width: '100%'}}
              value={date}
              onChange={(e) => {
                if (e) {
                  changeTime(e['$d'])
                } else {
                  changeTime(Date.now())
                }
              }}
            />
          </Col>}
        </Row>
      </ConfigProvider>
    </div>
  )
}

export default DatePickerComponent
