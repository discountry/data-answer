import React, { Component } from 'react'
import QuizCard from '../Components/QuizCard'

export default class Start extends Component {
  render() {
    return (
      <div>
        <div className="page-title">
          <img alt="altfolio-icon" src="https://png.icons8.com/nolan/64/000000/tasks.png" />
          <h2>任务</h2>
        </div>
        <div className="page-container">
          <QuizCard 
            title="生物对象识别" 
            thumb="https://png.icons8.com/office/40/000000/alien.png" 
            token="100,000" 
            description="用框图标注图片中出现的生物个体。" 
            date="2018-01-28" 
            company="Facebook" 
          />
          <QuizCard 
            title="汽车路径标引" 
            thumb="https://png.icons8.com/office/40/000000/car.png" 
            token="300,000" 
            description="标注自动驾驶汽车行进路径。" 
            date="2018-01-29" 
            company="Apolo" 
          />
          <QuizCard 
            title="语音识别标注" 
            thumb="https://png.icons8.com/office/40/000000/voice-presentation.png" 
            token="233,333" 
            description="用文字记录你聆听到的内容。" 
            date="2018-01-30" 
            company="IFLYTEK" 
          />
          <QuizCard 
            title="面部表情识别" 
            thumb="https://png.icons8.com/office/40/000000/lol.png" 
            token="666,666" 
            description="用点阵标注图中人像面部表情轨迹。" 
            date="2018-01-31" 
            company="Google" 
          />
        </div>
      </div>
    )
  }
}
