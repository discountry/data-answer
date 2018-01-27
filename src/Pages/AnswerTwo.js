import React, { Component } from 'react'
import { WhiteSpace } from 'antd-mobile'
import { Link } from 'react-router-dom'
import MarkCanvas from '../Components/MarkCanvas'

export default class AnswerTwo extends Component {
  render() {
    return (
      <div>
        <div className="page-title">
          <img alt="altfolio-icon" src="https://png.icons8.com/nolan/64/000000/checked-checkbox.png" />
          <h2>答题</h2>
        </div>
        <div className="page-container">
          <h2 style={{textAlign: 'center'}}>请用红框标识图中人脸位置</h2>
          <WhiteSpace />
          <MarkCanvas imgUrl="https://i.loli.net/2018/01/28/5a6d069c83cdd.jpg" />
          <WhiteSpace />
          <Link to="/three">
            <div className="am-button am-button-ghost" style={{margin: '0px 20px'}}>
              <span>下 一 题</span>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
