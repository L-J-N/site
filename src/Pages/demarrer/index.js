import React, {Component} from 'react';
import {isRequired, isTelephone, isMail} from '../../utils/FormValidator';

const Input = (props) => {
  const type = props.type || "text";
  return (
    <label>
      {props.label}:
      { props.help ? <i>{props.help}</i> : null }
      <input type={type} name={props.name} value={props.value} onChange={props.onChange}/>
    </label>)
};

const Select = (props) => {
  return (
    <label>
      {props.label}:
      <select name={props.name} value={props.value} onChange={props.onChange} >
        { props.options.map(option => <option key={option.value} value={option.value}>{option.label}</option>) }
      </select>
    </label>)
};

export default class Demarrer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projet: {
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
        telephone: "",
      },
      errors: {}
    };
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
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
    errors.cgu = isRequired(projet.cgu);

    if (!errors.telephone) {
      errors.telephone = isTelephone(projet.telephone);
    }

    if (!errors.email) {
      errors.email = isMail(projet.email);
    }

    this.setState({
      errors: errors
    });

    console.log(this.state);

    return false;
  }

  onChange(e) {
    const projet = this.state.projet;
    projet[e.target.name] = e.target.value;
    this.setState({
      projet: projet
    });
  }

  onCheckBoxChange(e) {
    const projet = this.state.projet;
    projet[e.target.name] = e.target.checked;
    this.setState({
      projet: projet
    });
  }

  render() {

    const { projet, errors } = this.state;

    const optionsType = [
      { value: 0, label: "Création d'entreprise" },
      { value: 1, label: "Reprise d'entreprise" },
      { value: 2, label: "Association" },
      { value: 3, label: "trésorerie d'entreprise" }
    ];

    const optionsSecteur = [
      { value: 0, label: "Banque & assurance" },
      { value: 1, label: "Bâtiment" },
      { value: 2, label: "Publicité" },
      { value: 3, label: "Agroalimentaire" }
    ];

    return (
      <div >
        <h1>Démmarrer votre projet</h1>
        <form onSubmit={this.submit}>
          <Input name="nom" label="Nom du projet" value={projet.nom} onChange={this.onChange} />
          <Select name="type" label="Type de projet" value={projet.type} onChange={this.onChange} options={optionsType} />
          <Select name="secteur" label="Secteur d'activité" value={projet.secteur} onChange={this.onChange} options={optionsSecteur} />
          <Input name="description" label="Description courte" value={projet.description} onChange={this.onChange} />
          <Input name="localite" label="Localité" value={projet.localite} onChange={this.onChange} />
          <Input name="somme" label="Somme" value={projet.somme} onChange={this.onChange} type="number" />
          <Input name="delai" label="Délai" value={projet.delai} onChange={this.onChange} type="number" />
          <Input name="siret" label="Siret (si entreprise)" value={projet.siret} onChange={this.onChange} />
          <Input name="pj1" label="Piece Jointe 1" help="facultatif" value={projet.pj1} onChange={this.onChange} type="file" />
          <Input name="pj2" label="Piece Jointe 2" help="facultatif" value={projet.pj2} onChange={this.onChange} type="file" />
          <Input name="pj3" label="Piece Jointe 3" help="facultatif" value={projet.pj3} onChange={this.onChange} type="file" />
          <Input name="email" label="Email" value={projet.email} onChange={this.onChange} type="email" />
          <Input name="telephone" label="Téléphone" value={projet.telephone} onChange={this.onChange} type="tel"/>
          <Input name="cgu" label="J'ai lu et j'accepte les conditions générales" value={projet.cgu} onChange={this.onCheckBoxChange} type="checkbox"/>
          <input type="submit" value="Soumettre"/>>
        </form>
      </div>
    );
  }
}
