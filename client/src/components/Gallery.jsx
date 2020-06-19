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
            <img src={this.props.images[0].imageUrl}/>
          </div>
          <div className="col">
            <img src={this.props.images[1].imageUrl}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[2].imageUrl}/>
          </div>
          <div className="col">
            <img src={this.props.images[3].imageUrl}/>
          </div>
          <div className="col">
            <img src={this.props.images[4].imageUrl}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[5].imageUrl}/>
          </div>
          <div className="col">
            <img src={this.props.images[6].imageUrl}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[7].imageUrl}/>
          </div>
          <div className="col">
            <img src={this.props.images[8].imageUrl}/>
          </div>
          <div className="col">
            <img src={this.props.images[9].imageUrl}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[10].imageUrl}/>
          </div>
          <div className="col">
            <img src={this.props.images[11].imageUrl}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[12].imageUrl}/>
          </div>
          <div className="col">
            <img src={this.props.images[13].imageUrl}/>
          </div>
          <div className="col">
            <img src={this.props.images[14].imageUrl}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[15].imageUrl}/>
          </div>
          <div className="col">
            <img src={this.props.images[16].imageUrl}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[17].imageUrl}/>
          </div>
          <div className="col">
            <img src={this.props.images[18].imageUrl}/>
          </div>
          <div className="col">
            <img src={this.props.images[19].imageUrl}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.props.images[20].imageUrl}/>
          </div>
          <div className="col">
            <img src={this.props.images[21].imageUrl}/>
          </div>
        </div><div className="row">
          <div className="col">
            <img src={this.props.images[22].imageUrl}/>
          </div>
          <div className="col">
            <img src={this.props.images[23].imageUrl}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;