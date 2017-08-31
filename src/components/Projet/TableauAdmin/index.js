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
    this.acceder = this.acceder.bind(this);
    this.sort = this.sort.bind(this);
  }
  sort(index, ascending) {
    this.setState({
      sortIndex: index,
      sortAscending: ascending
    });
  }

  acceder(e) {
    e.preventDefault();
    this.context.router.push(`/projet/${this}`);
  }

  updatePublie(e) {
    e.preventDefault();
    updateStatut(this, 'PUBLIE')
  }

  updateRefuse(e) {
    e.preventDefault();
    updateStatut(this, 'REFUSE')
  }

  updateFinance(e) {
    e.preventDefault();
    updateStatut(this, 'FINANCE')
  }

  updateNonFinance(e) {
    e.preventDefault();
    updateStatut(this, 'NON_FINANCE')
  }

  render() {

    // const { sortIndex, sortAscending } = this.state;

    return (
      <Table>
        <TableHeader labels={['Statut', 'Date de dernière modification', 'Projet', 'Créateur', 'Actions']}
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
                {(p.statut.statutProjet !== 'CREE' &&
                  p.statut.statutProjet !== 'REFUSE') &&
                <Button label='CONSULTER'
                        type='button'
                        primary={false}
                        onClick={this.acceder.bind(p.id)} />
                }
                {(p.statut.statutProjet === 'CREE' ||
                  p.statut.statutProjet === 'REFUSE') &&
                    <Button label='PUBLIE'
                    type='button'
                    primary={false}
                    onClick={this.updatePublie.bind(p.id)} />
                }
                {p.statut.statutProjet === 'CREE' &&
                <Button label='REFUSE'
                        type='button'
                        primary={false}
                        onClick={this.updateRefuse.bind(p.id)} />
                }
                {(p.statut.statutProjet === 'PUBLIE' ||
                  p.statut.statutProjet === 'NON_FINANCE') &&
                <Button label='FINANCE'
                        type='button'
                        primary={false}
                        onClick={this.updateFinance.bind(p.id)} />
                }
                {(p.statut.statutProjet === 'PUBLIE' ||
                  p.statut.statutProjet === 'FINANCE') &&
                <Button label='NON FINANCE'
                        type='button'
                        primary={false}
                        onClick={this.updateNonFinance.bind(p.id)} />
                }
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
