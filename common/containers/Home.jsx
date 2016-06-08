'use strict';

import * as React from 'react';
import { connect } from 'react-redux';

import { id } from '../services/util';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';


import Layout from '../components/Layout';

const { Component } = React;

interface IProps {
  cheers: string;
}

interface IStates {
  textFilter: string;
}

@connect(id)
export default class Home extends Component<IProps, IStates> {
  constructor(){
    super();
    this.state = {
      imagePreviewUrl: '',
      imagesPreview:[]
    }
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleImageChange(e) {
    let files = e.target.files;
    if(files.length){
      this.setState({
        imagesPreview: []
      })
    }
    e.preventDefault();
    this.setState({
      resultFiles: []
    });
    for(let i in files) {
     let file = files[i];
     let reader = new FileReader();
     reader.onloadend = () => {
       this.setState({
         imagesPreview: this.state.imagesPreview.concat(reader.result)
       })
     }
     reader.readAsDataURL(file)
   }
  }

  render(): JSX.Element {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    }
    const styles = {
      exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
      },
      imgBlock: {
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      },
      images: {
        maxWidth: 200,
        height: 'auto',
      }
    };

    return (
      <Layout open={true} title={this.cheers}>
        <div className="col-md-offset-2 col-md-8 text-center">
          <RaisedButton type="primary" label="Choisissez vos photos" labelPosition="before">
            <input type="file" multiple onChange={this.handleImageChange} style={styles.exampleImageInput} />
          </RaisedButton>
        </div>
        <div className="col-md-offset-1 col-md-9 text-center">
          {this.state.imagesPreview.map(img => {
            return (
              <div key={img} className="col-sm-3" style={styles.imgBlock}>
                <img src={img} style={styles.images}/>
              </div>
            )
          })}
        </div>
      </Layout>
    );
  }
}
