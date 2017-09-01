import React, { Component } from 'react';

import { Editor, EditorState, convertToRaw, convertFromRaw, RichUtils, AtomicBlockUtils } from 'draft-js';
import '../../../node_modules/draft-js/dist/Draft.css';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';

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
  Header,
  Heading,
  Footer,
  TextInput,
  Button,
  ImageIcon,
  VideoIcon
} from '../../components';

import { getProjet} from '../../service/projet/index';
import { getPublication} from '../../service/publication/index';

export default class Publier extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: this.createEditorState(),
      urlValue: '',
      urlType: ''
    };

    this.focus = () => this.refs.editor.focus();
    this.onURLChange = (e) => this.setState({ urlValue: e.target.value });
    this.onChange = this.onChange.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.toHtml = this.toHtml.bind(this);
    this.toMd = this.toMd.bind(this);
    this.toJson = this.toJson.bind(this);
    this.addMedia = this.addMedia.bind(this);
    this.onClickImage = this.onClick.bind(this, 'image');
    this.onClickVideo = this.onClick.bind(this, 'video');
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
        publication: data
      });
    });
  }

  createEditorState(content = null, decorators = null) {
    if (content === null) {
      return EditorState.createEmpty(decorators);
    }
    return EditorState.createWithContent(convertFromRaw(content), decorators);
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
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  toggleInlineStyle(inlineStyle) {
    this.onChange(
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

  render() {

    const publication = this.state.publication;

    const { editorState } = this.state;

    return (
      <Box align="center" >
        <div>
          {/*{this.state.projet.nom}*/}
        </div>

        <Form pad="medium" >
          <FormField label="Url Image" htmlFor="description" >
            {/*<TextInput id="imageAffichage" name="imageAffichage" value={publication.imageAffichage}  />*/}
          </FormField>
          <FormField label="Url Média" htmlFor="description" >
            {/*<TextInput id="mediaPrincipal" name="mediaPrincipal" value={publication.mediaPrincipal}  />*/}
          </FormField>
          <Section pad={{ horizontal: "xlarge", vertical: "medium" }} colorIndex="light-2" full="vertical"   >
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
                    onChange={this.onChange}
                    blockStyleFn={BlockStyle}
                    blockRendererFn={BlockRender}
                    placeholder="Entrez votre texte ici ..."
                    />
                </div>
              </div>
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
        </Form>
      </Box>
    );
  }
}


