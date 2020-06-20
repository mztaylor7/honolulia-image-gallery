import React from 'react';

class Gallery extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={this.props.images[0]}/>
          </div>
          <div className="col">
            <img src={this.props.images[1]}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[2]}/>
          </div>
          <div className="col">
            <img src={this.props.images[3]}/>
          </div>
          <div className="col">
            <img src={this.props.images[4]}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[5]}/>
          </div>
          <div className="col">
            <img src={this.props.images[6]}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[7]}/>
          </div>
          <div className="col">
            <img src={this.props.images[8]}/>
          </div>
          <div className="col">
            <img src={this.props.images[9]}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[10]}/>
          </div>
          <div className="col">
            <img src={this.props.images[11]}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[12]}/>
          </div>
          <div className="col">
            <img src={this.props.images[13]}/>
          </div>
          <div className="col">
            <img src={this.props.images[14]}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[15]}/>
          </div>
          <div className="col">
            <img src={this.props.images[16]}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[17]}/>
          </div>
          <div className="col">
            <img src={this.props.images[18]}/>
          </div>
          <div className="col">
            <img src={this.props.images[19]}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[20]}/>
          </div>
          <div className="col">
            <img src={this.props.images[21]}/>
          </div>
        </div><div className="row">
          <div className="col">
            <img src={this.props.images[22]}/>
          </div>
          <div className="col">
            <img src={this.props.images[23]}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;