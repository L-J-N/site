import React, { Component } from 'react';

import {
  Table,
  TableHeader,
  TableRow,
  Box,
  Button,
  AddCircleIcon
} from '../../components';

export default class Admin extends Component {
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

    this.projets = [
      { nom: 'nom', createur: 'toto', description: 'c\'est super', status: 'publié' },
      { nom: 'nom qdqs', createur: 'jean-mi', description: 'c\'est super', status: 'terminer' },
      { nom: 'no 2m', createur: 'truc', description: 'c\'est super', status: 'en attente' },
      { nom: 'nom qsdqsd', createur: 'toto', description: 'c\'est super', status: 'refusé' },
      { nom: 'nom qfsfqsfqs', createur: 'toto', description: 'c\'est super', status: 'publié' },

    ];

    return (
      <div>
        <Box pad='medium'
          colorIndex='neutral-1-a' align="end">
          <Button
            icon={<AddCircleIcon />}
            label='Nouveau Projet'
            primary={false}
            secondary={false}
            accent={false}
            path='/nouveau' />
        </Box>
        <Table>
          <TableHeader labels={['Nom', 'createur', 'description', 'status']}
            sortIndex={sortIndex}
            sortAscending={sortAscending}
            onSort={this.sort}
            />
          <tbody>
            {this.projets.map((p, i) => {
              return (<TableRow key={i}>
                <td>
                  {p.nom}
                </td>
                <td>
                  {p.createur}
                </td>
                <td>
                  {p.description}
                </td>
                <td>
                  {p.status}
                </td>
              </TableRow>);
            })
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
