import React, { Component } from 'react';

import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';

import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import {
  Box,
  Button,
} from '../../components';

export default class NouveauProjet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: null
    };
    this.onChange = this.onChange.bind(this);
    this.toHtml = this.toHtml.bind(this);
    this.toMd = this.toMd.bind(this);
    this.toJson = this.toJson.bind(this);
  }

  onChange(editorState) {
    this.setState({
      editorState
    });
  }

  toHtml() {
    const value = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    console.log(value);
  }

  toMd() {
    const value = draftToMarkdown(convertToRaw(this.state.editorState.getCurrentContent()));
    console.log(value);
  }

  toJson() {
    const value = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
    console.log(value);
  }

  render() {
    return (
      <Box colorIndex="light-2" pad="large">
        <Editor
          toolbarOnFocus
          editorState={this.state.editorState}
          onEditorStateChange={this.onChange}
          toolbar={this.toolbar}
          placeholder="Entrez votre texte ici"
          />
        <Box direction="row" colorIndex="light-1" pad="large">
          <Button label='Html'
            primary={true}
            onClick={this.toHtml} />
          <Button label='Markdown'
            primary={true}
            onClick={this.toMd} />
          <Button label='json'
            primary={true}
            onClick={this.toJson} />
          </Box>
        </Box>
        );
  }
}
