import React, { Component, PropTypes } from 'react';

import {
  Table,
  TableHeader,
  TableRow,
  Button,
} from '../..';

import {updateStatut} from "../../../service/projet/index";

export default class TableauAdmin extends Component {
  constructor() {
    super();
    this.state = {
      sortIndex: 0,
      sortAscending: false
    };
    this.sort = this.sort.bind(this);
  }
  sort(index, ascending) {
    this.setState({
      sortIndex: index,
      sortAscending: ascending
    });
  }

  updateStatut(e) {
    e.preventDefault();

    var statut = prompt('Nouveau statut ? (entrer exactement CREE, REFUSE, PUBLIE, FINANCE ou NON_FINANCE)');
    updateStatut(this, statut)
  }

  render() {

    // const { sortIndex, sortAscending } = this.state;

    return (
      <Table>
        <TableHeader labels={['Statut', 'Date de dernière modification', 'Projet', 'Créateur', 'Actions', 'Commentaire']}
          sortIndex={this.sortIndex}
          sortAscending={this.sortAscending}
          onSort={this.sort}
        />
        { this.props.projets ?
          <tbody>
          {this.props.projets.map((p, i) => {
            return (<TableRow key={i}>
              <td>
                {p.statut.statutProjet}
              </td>
              <td>
                {p.statut.dateDebut}
              </td>
              <td>
                {p.nom}
              </td>
              <td>
                {p.createur.nom + " " + p.createur.prenom}
              </td>
              <td>
                <Button id="123"
                        label='CONSULTER'
                        type='button'
                        primary={false}
                        onClick={() => { this.props.consulter(window.location.href = window.location.origin + "/projet/" + p.id) }} />
                {(p.statut.statutProjet === 'EN_ATTENTE_PUBLICATION' ||
                  p.statut.statutProjet === 'PUBLIE') &&
                <Button label='EDITER PUBLICATION'
                        type='button'
                        primary={false}
                        onClick={() => { this.props.editerPublication(window.location.href = window.location.origin + "/publier/" + p.id) }} />
                }
                  <Button label='CHANGER STATUT'
                  type='button'
                  primary={false}
                  onClick={this.updateStatut.bind(p.id)} />
              </td>
              <td>
                <div dangerouslySetInnerHTML={{__html: p.commentaire}}></div>
              </td>
            </TableRow>);
            })}
        </tbody>
          : null }
      </Table>
    );
  }
}

TableauAdmin.contextTypes = {
  router: PropTypes.object,
};
