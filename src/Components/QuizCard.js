import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class QuizCard extends Component {
  render() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Link to="/answer">
          <Card>
            <Card.Header
              title={this.props.title}
              thumb={this.props.thumb}
              extra={<span className="token-number">{this.props.token + ' token'}</span>}
            />
            <Card.Body>
              <div>{this.props.description}</div>
            </Card.Body>
            <Card.Footer content={this.props.date} extra={<div>{this.props.company}</div>} />
          </Card>
        </Link>
        <WhiteSpace size="lg" />
      </WingBlank>
    )
  }
}
