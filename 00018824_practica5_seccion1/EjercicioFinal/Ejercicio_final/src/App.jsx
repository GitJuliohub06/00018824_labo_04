import { useState } from 'react';
import './App.css';

import { getImageUrl } from './util.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, 's')}
      alt={person.name}
      width={size}
      height={size}
      style={{ borderRadius: '50%' }}
    />
  );
}

function Card({ person }) {
  return (
    <div className='Tarjeta' >
      <h2 >{person.name}</h2>
      <Avatar person={person} size={60} />
      <ul >
        <li>
          <strong>Profesión:</strong> {person.profession}
        </li>
        <li>
          <strong>Premios:</strong> {person.awards}
        </li>
        <li>
          <strong>Descubrió:</strong> {person.discovery}
        </li>
      </ul>
    </div>
  );
}

export default function Profile() {
  const scientists = [
    {
      name: 'Maria Skłodowska-Curie',
      imageId: 'szV5sdG',
      profession: 'física y química',
      awards: '4 (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)',
      discovery: 'polonio (elemento químico)'
    },
    {
      name: 'Katsuko Saruhashi',
      imageId: 'YfeOqp2',
      profession: 'geoquímica',
      awards: '2 (Premio Miyake de geoquímica, Premio Tanaka)',
      discovery: 'un método para medir el dióxido de carbono en el agua de mar'
    }
  ];

  return (
    <div>
      <h1>Científicos Notables</h1>
      <div className="Card">
        {scientists.map((scientist, index) => (
          <Card key={index} person={scientist} />
        ))}
      </div>
    </div>
  );
}