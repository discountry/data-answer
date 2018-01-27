import React, { Component } from 'react'
import { Button, WhiteSpace } from 'antd-mobile'

export default class Reward extends Component {
  render() {
    return (
      <div>
        <div className="page-title">
          <img alt="altfolio-icon" src="https://png.icons8.com/nolan/64/000000/trophy.png" />
          <h2>奖励</h2>
        </div>
        <div className="page-container reward">
          <h1>恭喜你获得</h1>
          <img className="token-icon" alt="token" src="https://png.icons8.com/nolan/128/000000/shekel.png" />
          <p className="token-number">9,999 Token</p>
          <WhiteSpace />
          <Button type="ghost" style={{ margin: '0 20px' }}>提现</Button>
        </div>
      </div>
    )
  }
}
