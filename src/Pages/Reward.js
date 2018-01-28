import React, { Component } from 'react'
import { Button, WhiteSpace } from 'antd-mobile'
import CountUp from 'react-countup'
import swal from 'sweetalert'

export default class Reward extends Component {
  voteForUs = () => {
    swal({
      title: "请为我们打Call!",
      text: "Token 发了一定不会忘记您呐～",
      icon: "success",
    });
  }
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
          <p className="token-number"><CountUp start={0} end={999} /> Token</p>
          <WhiteSpace />
          <Button onClick={this.voteForUs} type="ghost" style={{ margin: '0 20px' }}>提现</Button>
        </div>
      </div>
    )
  }
}
