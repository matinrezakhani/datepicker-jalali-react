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
      <Row justify={'space-between'} className={'header'} align={'middle'}>
          <Col sm={10} className={'header'}>
            <Typography className={'title'}>Datepicker Jalali React</Typography>
          </Col>
          <Col>
              <a href={'https://www.npmjs.com/package/datepicker-jalali-react'} target={'_blank '} className={'install'}>Install</a>
              <a href={'https://github.com/matinrezakhani/datepicker-jalali-react'} target={'_blank '} className={'install'}>Github</a>
          </Col>
      </Row>
      <Row justify={'center'}>
        <Col xs={{ span: 23 }} md={{ span: 10 }} className={'card'}>
          <Row justify={'center'} align={'middle'}>
            <Col className={'title'} style={{marginRight: 10}}>
                <Text>
                  Date and Time:
                </Text>
            </Col>
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
          <Row justify={'center'} align={'middle'}>
            <Col className={'title'} style={{marginRight: 10}}>
                <Text>
                  Date:
                </Text>
            </Col>
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
          <Row justify={'center'} align={'middle'}>
            <Col className={'title'} style={{marginRight: 10}}>
                <Text>
                   Time: 
                </Text>
            </Col>
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
