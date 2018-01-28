import React, { Component } from "react"
import { Rect, Group, Stage, Layer, Image } from "react-konva"

class MyRect extends React.Component {
  render() {
      return (
          <Group>
              <Rect
                  ref="rect"
                  width="80"
                  height="90"
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
    this.state.image.src = this.props.imgUrl
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
          <VaderImage imgUrl={this.props.imgUrl} />
          <MyRect />
        </Layer>
      </Stage>
    )
  }
}

export default MarkCanvas