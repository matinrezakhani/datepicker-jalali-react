import React, { useState } from 'react'
import { Row, Col, Typography } from 'antd'
import Datepicker from 'datepicker-jalali-react'
import './App.css'
import Moment from 'jalali-moment'

const { Text } = Typography

const App = () => {
  const [date, setDate] = useState(Date.now())
  const [locale, setLocale] = useState('fa')

  const handleDatepicker = (e) => {
    setDate(e)
  }

  return (
    <div>
      <Row justify={'center'}>
        <Col xs={{ span: 23 }} md={{ span: 10 }} className={'card'}>
          <Row justify={'space-around'} align={'middle'}>
            <Col className={'title'}>
              {date && (
                <Text>
                  {Moment(date).format('jYYYY/jMM/jDD HH:mm:ss')}
                </Text>
              )}
            </Col>
          </Row>
          <Row justify={'center'}>
            <Col xs={{ span: 15 }}>
              <Datepicker
                value={date}
                locale={locale}
                onChange={(e) => {
                  handleDatepicker(e)
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col xs={{ span: 23 }} md={{ span: 10 }} className={'card'}>
          <Row justify={'space-around'} align={'middle'}>
            <Col className={'title'}>
              {date && (
                <Text>
                  {Moment(date).format('jYYYY/jMM/jDD')}
                </Text>
              )}
            </Col>
          </Row>
          <Row justify={'center'}>
            <Col xs={{ span: 15 }}>
              <Datepicker
                value={date}
                disableTime
                locale={locale}
                onChange={(e) => {
                  handleDatepicker(e)
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col xs={{ span: 23 }} md={{ span: 10 }} className={'card'}>
          <Row justify={'space-around'} align={'middle'}>
            <Col className={'title'}>
              {date && (
                <Text>
                  {Moment(date).format('HH:mm:ss')}
                </Text>
              )}
            </Col>
          </Row>
          <Row justify={'center'}>
            <Col xs={{ span: 15 }}>
              <Datepicker
                value={date}
                disableDate
                locale={locale}
                onChange={(e) => {
                  handleDatepicker(e)
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default App
