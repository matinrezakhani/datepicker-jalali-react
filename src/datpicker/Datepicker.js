import React, { useState, useEffect } from 'react'
import { DatePicker } from 'antd-jalali'
import { TimePicker, Row, Col } from 'antd'
import Moment from 'jalali-moment'
import dayjs from 'dayjs'
import { ConfigProvider } from 'antd'
import faIr from 'antd/lib/locale-provider/fa_IR'
import 'antd/dist/antd.css';
import _ from 'lodash'

dayjs.calendar('jalali')

function DatePickerComponent(props) {
  const [date, setDate] = useState('')

  useEffect(() => {
    let d
    try {
      d = dayjs(
        Moment(props.value ? props.value : Date.now()).format(
          'jYYYY-jMM-jDD HH:mm:ss'
        ),
        { jalali: true }
      )
    } catch (error) {
      d = dayjs(Moment(Date.now()).format('jYYYY-jMM-jDD HH:mm:ss'), {
        jalali: true
      })
    }
    setDate(d)
  }, [props.value])


  const changeTime = (time) => {
    let d = Moment(date['$d']).format('YYYY-MM-DD')
    let t = Moment(time).format('HH:mm:ss')
    const newDate = dayjs(
      Moment(`${d} ${t}`, 'YYYY-MM-DD HH:mm:ss').format(
        'jYYYY-jMM-jDD HH:mm:ss'
      ),
      { jalali: true }
    )

    setDate(newDate)
    if (props.onChange) {
      props.onChange(newDate['$d'])
    }
  }

  const changeDate = (time) => {
    let d = Moment(time).format('YYYY-MM-DD')
    let t = Moment(date['$d']).format('HH:mm:ss')
    const newDate = dayjs(
      Moment(`${d} ${t}`, 'YYYY-MM-DD HH:mm:ss').format(
        'jYYYY-jMM-jDD HH:mm:ss'
      ),
      { jalali: true }
    )
    setDate(newDate)
    if (props.onChange) {
      props.onChange(newDate['$d'])
    }
  }

  return (
    <div className={'DatePicker'}>
      <ConfigProvider locale={faIr}>
        <Row justify={'center'}>
          {!props.disableDate&&<Col xs={{ span: 15 }}>
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
          </Col>}
          {!props.disableTime&&<Col xs={{ span: 9 }}>
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
