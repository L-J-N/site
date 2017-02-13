import React, { Component } from 'react';

import {
  Box,
  Form,
  FormFields,
  FormField,
  Header,
  Heading,
  Footer,
  Button,
  Select,
  TextInput,
  NumberInput,
} from '../../components';

import { isRequired, isTelephone, isMail } from '../../utils/FormValidator';

export default class Demarrer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projet : {
        nom: "",
        type: "",
        secteur: 0,
        description: "",
        localite: "",
        somme: 0,
        delai: 0,
        siret: "",
        pj1: "",
        pj2: "",
        pj3: "",
        tel: "",
      },
      errors: {}
    };
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  submit(e) {
    e.preventDefault();

    const errors = {};
    const projet = this.state.projet;

    errors.nom = isRequired(projet.nom);
    errors.type = isRequired(projet.type);
    errors.secteur = isRequired(projet.secteur);
    errors.description = isRequired(projet.description);
    errors.localite = isRequired(projet.localite);
    errors.somme = isRequired(projet.somme);
    errors.delai = isRequired(projet.delai);
    errors.email = isRequired(projet.email);
    errors.telephone = isRequired(projet.telephone);

    if (!errors.telephone) {
      errors.telephone = isTelephone(projet.telephone);
    }

     if (!errors.email) {
      errors.email = isMail(projet.email);
    }

    this.setState({
      errors : errors
    });

   return false;
  }
  onChange(e) {
    const projet = this.state.projet;
    projet[e.target.name] =  e.target.value;
    this.setState({
      projet : projet
    });
  }
   onSelectChange(e) {
    const projet = this.state.projet;
    projet[e.target.name] =  e.value;
    this.setState({
      projet : projet
    });
  }
  render() {

    const { projet, errors }  = this.state;

    const optionsType = [
      { value : 0, label : "Création d'entreprise" },
      { value : 1, label : "Reprise d'entreprise" },
      { value : 2, label : "Association" },
      { value : 3, label : "trésorerie d'entreprise" }
    ];

    const optionsSecteur = [
      { value : 0, label : "Banque & assurance" },
      { value : 1, label : "Bâtiment" },
      { value : 2, label : "Publicité" },
      { value : 3, label : "Agroalimentaire" }
    ];

    return (
      <Box align="center" >
      <Form pad="medium" >
        <Header>
          <Heading>Demarrer votre projet</Heading>
        </Header>
        <FormFields>
          <FormField label="Nom du projet" htmlFor="nom" error={errors.nom}  >
            <TextInput type="text" id="nom" name="nom" onDOMChange={this.onChange} value={projet.nom} />
          </FormField>
           <FormField label="Type de projet" htmlFor="type" error={errors.type} >
            <Select id="type" name="type" options={optionsType} onChange={this.onSelectChange} value={projet.type} />
          </FormField>
            <FormField label="Secteur d'activité" htmlFor="secteur" error={errors.secteur} >
            <Select id="secteur" name="secteur" options={optionsSecteur} onChange={this.onSelectChange}  value={projet.secteur} />
          </FormField>
           <FormField label="Description courte" htmlFor="description" error={errors.description} >
            <TextInput id="description" name="description" onDOMChange={this.onChange} value={projet.description}  />
          </FormField>
          <FormField label="Localite" htmlFor="localite" error={errors.localite} >
            <TextInput id="localite" name="localite" onDOMChange={this.onChange} value={projet.localite} />
          </FormField>
           <FormField label="Somme" htmlFor="somme" error={errors.somme}>
            <NumberInput id="somme" name="somme" min={0} onChange={this.onChange} value={projet.somme} />
          </FormField>
           <FormField label="Délai" htmlFor="delai" error={errors.delai} >
            <NumberInput id="delai" name="delai"  onChange={this.onChange} value={projet.delai} min={1} max={365} />
          </FormField>
           <FormField label="Siret (si entreprise)" htmlFor="siret" error={errors.siret} >
            <TextInput id="siret" name="siret" onDOMChange={this.onChange} value={projet.siret} />
          </FormField>
           <FormField label="Piece Jointe 1" help="facultatif" error={errors.pj1} >
            <input type="file" onChange={this.onChange} value={projet.pj1} />
          </FormField>
            <FormField label="Piece Jointe 2" help="facultatif" error={errors.pj2}  >
            <input type="file" onChange={this.onChange} value={projet.pj2}  />
          </FormField>
            <FormField label="Piece Jointe 3" help="facultatif" error={errors.pj3}  >
            <input type="file" onChange={this.onChange} value={projet.pj3} />
          </FormField>
          <FormField label="Email" htmlFor="email" error={errors.email} >
            <TextInput id="email" name="email" onDOMChange={this.onChange} value={projet.email} />
          </FormField>
          <FormField label="Téléphone" htmlFor="telephone" error={errors.telephone} >
            <TextInput id="telephone" name="telephone" onDOMChange={this.onChange} value={projet.telephone} />
          </FormField>
        </FormFields>
        <Footer pad={{"vertical": "medium"}}>
          <Button label='Soummettre'
            type='button'
            primary={true}
            onClick={this.submit} />
        </Footer>
      </Form>
      </Box>
      );
  }
}
