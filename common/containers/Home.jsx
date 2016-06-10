'use strict';

import * as React from 'react';
import { connect } from 'react-redux';

import { id } from '../services/util';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar'

import * as _ from 'lodash';

import TextField from 'material-ui/TextField';

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';


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
    this.handleImageChange = this.handleImageChange.bind(this);
    this.addTag = this.addTag.bind(this);

    this.styles = {
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
      tag: {
        display: 'inline-block',
        height: 32,
        fontSize: 13,
        fontWeight: 500,
        color: 'rgba(0,0,0,0.6)',
        lineHeight: '32px',
        padding: '0 12px',
        borderRadius: 16,
        backgroundColor: '#e4e4e4',
      },
      closeBtn: {
        cursor: 'pointer',
        float: 'right',
        fontSize: '16px',
        lineHeight: '32px',
        paddingLeft: '8px',
      }
    };
    this.state = {
      files:[],
      filesSize: 0,
      loading: false,
      finished: false,
      stepIndex: 0,
      tags: [],
      tagError: false,
    }
  }


  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      loading: false,
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    this.setState({
      loading: false,
      stepIndex: stepIndex - 1,
    });
  };

  addTag(e) {
    if(e.keyCode === 13) {
      e.preventDefault();
      if(e.target.value){
        if(_.includes(_.map (this.state.tags, _.lowerCase), _.lowerCase(e.target.value))){
          this.setState({
            tagError: true
          });
        }else {
          this.setState({
            tags: this.state.tags.concat(e.target.value)
          });
        }
        e.target.value = '';
      }
    }
  }

  handleRequestClose = () => {
    this.setState({
      tagError: false,
    });
  };

  handleImageChange(e) {
    this.setState({
      files:[],
      filesSize: 0,
    })
    let files = e.target.files;
    if(files.length){
      this.setState({
        files: files
      });
    }
    e.preventDefault();
    let totalSize = 0;
    for(let i in files) {
      let file = files[i];
      if(file.size) {
        totalSize = totalSize +  file.size;
      }
     }
     this.setState({
      filesSize: this.state.filesSize + totalSize
     });
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16', overflow: 'hidden'};

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Envoyer' : 'Suivant'}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div className="row text-center">
            <RaisedButton type="primary" label="Choisissez vos photos" labelPosition="before">
              <input type="file" name="files" multiple onChange={this.handleImageChange} style={this.styles.exampleImageInput} />
            </RaisedButton>
          </div>
        );
      case 1:
        return (
          <div>
            <div style={this.styles.listTags}>
              {this.state.tags.map(t => {
                return (
                  <span style={this.styles.tag} key={t}>
                    {t}
                    <FontIcon style={this.styles.closeBtn} className="icon-clear" />
                  </span>
                )
              })}
            </div>
            <div className="form-group">
              <TextField onKeyDown={this.addTag} on style={{marginTop: 0}} floatingLabelText="Tags" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="row text-center">
            test
          </div>
        );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render(): JSX.Element {
    const {loading, stepIndex} = this.state;
    return (
      <Layout open={true} title={this.cheers}>
        <form action="/uploadImages" method="post" encType="multipart/form-data">
          <div className="col-md-offset-3 col-sm-6 form-group text-center">
            <Stepper activeStep={stepIndex}>
              <Step>
                <StepLabel>Choisissez vos photos</StepLabel>
              </Step>
              <Step>
                <StepLabel>Ajouter les tags communs</StepLabel>
              </Step>
              <Step>
                <StepLabel>Envoyez</StepLabel>
              </Step>
            </Stepper>
          </div>
          <div className="col-md-offset-3 col-sm-6 form-group text-center">
            <ExpandTransition loading={loading} open={true}>
              {this.renderContent()}
             </ExpandTransition>
           </div>
        </form>
        <Snackbar
           open={this.state.tagError}
           message="Tag déjà ajouté"
           autoHideDuration={4000}
           action="fermer"
           onRequestClose={this.handleRequestClose}
         />
      </Layout>
    );
  }
}
