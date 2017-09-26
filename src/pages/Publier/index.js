import React, { Component } from 'react';

import { Editor, EditorState, convertToRaw, convertFromRaw, RichUtils, AtomicBlockUtils } from 'draft-js';
import '../../../node_modules/draft-js/dist/Draft.css';

import './index.css';

import BlockStyleControls from './Block/BlockStyleControls';
import BlockStyle from './Block/BlockStyle';
import BlockRender from './Block/BlockRender';
import InlineStyleControls from './InlineStyleControls';

import {
  Section,
  Box,
  Form,
  FormFields,
  FormField,
  Footer,
  TextInput,
  Button,
  ImageIcon,
  VideoIcon
} from '../../components';

import { getProjet } from '../../service/projet/index';
import { updatePublication, getPublication } from '../../service/publication/index';

export default class Publier extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: this.createEditorState(),
      urlValue: '',
      urlType: '',
      projet: {},
      publication : {}
    };
    this.focus = () => this.refs.editor.focus();
    this.onChange = this.onChange.bind(this);
    this.onURLChange = (e) => this.setState({ urlValue: e.target.value });
    this.onEditorChange = this.onEditorChange.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.addMedia = this.addMedia.bind(this);
    this.onClickImage = this.onClick.bind(this, 'image');
    this.onClickVideo = this.onClick.bind(this, 'video');
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {

    const { idProjet } = this.props.params;
    getProjet(idProjet).then((data) => {
      this.setState({
        projet: data
      });
    });
    getPublication(idProjet).then((data) => {
      this.setState({
        publication: data,
        editorState :  this.createEditorState(data.textEditor)
      });
    });
  }

  onChange(e) {
    const publication = this.state.publication;
    publication[e.target.name] =  e.target.value;
    this.setState({
      publication : publication
    });
  }

  createEditorState(content = null, decorators = null) {
    if (content === null) {
      return EditorState.createEmpty(decorators);
    }
    return EditorState.createWithContent(convertFromRaw(content), decorators);
  }

  onEditorChange(editorState) {
    this.setState({
      editorState
    });
  }

  addMedia(urlType, urlValue) {

    const { editorState } = this.state;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      urlType,
      'IMMUTABLE',
      { src: urlValue }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(
      editorState,
      { currentContent: contentStateWithEntity }
    );

    this.setState({
      editorState: AtomicBlockUtils.insertAtomicBlock(
        newEditorState,
        entityKey,
        ' '
      ),
      showURLInput: false,
      urlValue: '',
    }, () => {
      setTimeout(() => this.focus(), 0);
    });
  }

  toggleBlockType(blockType) {
    this.onEditorChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  toggleInlineStyle(inlineStyle) {
    this.onEditorChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  onClick(type) {
    const urlValue = window.prompt('Url', '');
    if (!urlValue) {
      return;
    }
    this.addMedia(type, urlValue);
  }

  submit(e) {
    e.preventDefault();
    const publication = this.state.publication;
    publication.textEditor = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
    updatePublication(publication);
  }

  render() {

    const publication = this.state.publication;
    const editorState = this.state.editorState;

    return (
      <Box align="center" >
        <div>
          {this.state.projet.nom}
        </div>
        <Form pad="none" plain={true}>
          <FormFields>
            <FormField label="Url Image" htmlFor="imageAffichage" >
              <TextInput id="imageAffichage" name="imageAffichage" onDOMChange={this.onChange} value={publication.imageAffichage !== null ? publication.imageAffichage : ''}  />
            </FormField>
            <FormField label="Url Média" htmlFor="mediaPrincipal" >
              <TextInput id="mediaPrincipal" name="mediaPrincipal" onDOMChange={this.onChange} value={publication.mediaPrincipal !== null ? publication.mediaPrincipal : ''}  />
            </FormField>
            <FormField label="Description" htmlFor="descriptionLongue">
              <TextInput id="descriptionLongue" name="descriptionLongue" onDOMChange={this.onChange} value={publication.descriptionLongue !== null ? publication.descriptionLongue : ''}  />
            </FormField>
            <Section pad={{ horizontal: "medium", vertical: "medium" }} colorIndex="light-2" >
              <Box separator="all" >
                <div className="editor" >
                  <div className="editor-menu">
                    <BlockStyleControls
                      editorState={editorState}
                      onToggle={this.toggleBlockType}
                      />
                    <InlineStyleControls
                      editorState={editorState}
                      onToggle={this.toggleInlineStyle}
                      />
                    <div className="editor-media">
                      <a onClick={this.onClickImage}><ImageIcon size="small" /></a>
                      <a onClick={this.onClickVideo}><VideoIcon size="small" /></a>
                    </div>
                  </div>
                  <div className="editor-editor" onClick={this.focus} >
                    <Editor
                      ref="editor"
                      editorState={editorState}
                      onChange={this.onEditorChange}
                      blockStyleFn={BlockStyle}
                      blockRendererFn={BlockRender}
                      placeholder="Ne marche pas pour le moment"
                      />
                  </div>
                </div>
              </Box>
            </Section>
          </FormFields>
          <Footer pad={{ "vertical": "medium" }}>
            <Button label='Publier'
                    type='button'
                    primary={true}
                    onClick={this.submit} />
          </Footer>
        </Form>
      </Box>
    );
  }
}


