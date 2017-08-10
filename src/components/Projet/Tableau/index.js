import React, { Component, PropTypes } from 'react';

import {
  Table,
  TableHeader,
  TableRow,
} from '../..';

export default class Tableau extends Component {
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

  render() {

    const { sortIndex, sortAscending } = this.state;

    return (
      <Table>
        <TableHeader labels={['Nom', 'Créateur', 'Description', 'Statut']}
          sortIndex={this.sortIndex}
          sortAscending={this.sortAscending}
          onSort={this.sort}
        />
        { this.props.projets ?
          <tbody>
          {this.props.projets.map((p, i) => {
            return (<TableRow key={i}>
              <td>
                {p.nom}
              </td>
              <td>
                {p.createur.id}
              </td>
              <td>
                {p.descriptionCourte}
              </td>
              <td>
                {p.statut.statutProjet}
              </td>
            </TableRow>);
            })}
        </tbody>
          : null }
      </Table>
    );
  }
}

Tableau.contextTypes = {
  router: PropTypes.object,
};
