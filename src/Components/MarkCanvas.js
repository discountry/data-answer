import React, { Component } from "react"
import { Rect, Group, Stage, Layer, Image } from "react-konva"
import Neo from './matrix.jpg'

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2))
}

class MyRect extends React.Component {
  render() {
      return (
          <Group>
              <Rect
                  ref="rect"
                  width="70"
                  height="80"
                  stroke='red'
                  draggable="true"
              />
        </Group>
      )
  }
}

class VaderImage extends React.Component {
  state = {
    image: new window.Image()
  }
  componentDidMount() {
    // eslint-disable-next-line
    this.state.image.src = Neo
    // eslint-disable-next-line
    this.state.image.onload = () => {
      // calling set state here will do nothing
      // because properties of Konva.Image are not changed
      // so we need to update layer manually
      this.imageNode.getLayer().batchDraw()
    }
  }

  render() {
    return (
      <Image
        image={this.state.image}
        width={window.innerWidth}
        ref={node => {
          this.imageNode = node
        }}
      />
    )
  }
}

class MarkCanvas extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={350}>
        <Layer>
          <VaderImage />
          <MyRect />
        </Layer>
      </Stage>
    )
  }
}

export default MarkCanvas