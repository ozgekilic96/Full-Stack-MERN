import React from 'react';
import UsersList from '../componets/UsersList';

const Users = () => {;
    const USERS = [
      {
        id: 'u1',
        name: 'Max Schwarz',
        image:
          'https://avgs-coaching.de/wp-content/uploads/2023/04/Max-Schwarz-AVGS.jpg',
        places: 3
      }
    ]
  return <UsersList items={USERS}/>
};

export default Users
