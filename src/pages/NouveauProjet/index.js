import React, { Component } from 'react';

import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';
import '../../../node_modules/medium-draft/lib/index.css';
import {
  Editor,
  createEditorState,
} from 'medium-draft';

import './index.css';

import {
  Section,
  Box,
  Button,
} from '../../components';

export default class NouveauProjet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: createEditorState(), // for empty content
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

    this.sideButtons = [];

    return (
      <Section pad={ { horizontal: "xlarge", vertical: "medium" }} colorIndex="light-2" full="vertical"   >
        <Box separator="all" >
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
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
      </Section>
    );
  }
}
