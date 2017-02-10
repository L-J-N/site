import React, { Component } from 'react';

import { Table, TableHeader, TableRow } from '../../components';

export default class Admin extends Component {
  constructor() {
    super();
  }
  render() {

    this.projets = [
      { nom  : 'nom', createur: 'toto', description: 'c\'est super' , status : 'publié' },
      { nom  : 'nom qdqs', createur: 'jean-mi', description: 'c\'est super', status : 'terminer' },
      { nom  : 'no 2m', createur: 'truc', description: 'c\'est super', status : 'en attente' },
      { nom  : 'nom qsdqsd', createur: 'toto', description: 'c\'est super' , status : 'refusé' },
      { nom  : 'nom qfsfqsfqs', createur: 'toto', description: 'c\'est super', status : 'publié' },
    ];

    return (
      <div>
      <Table>
      <TableHeader labels={['Nom', 'createur', 'description','status']}
        sortIndex={1}
        sortAscending={true}
        />
      <tbody>
      { this.projets.map((p, i) => {
       return  (<TableRow>
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
