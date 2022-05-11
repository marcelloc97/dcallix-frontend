import { useEffect, useState } from 'react';

import { ILaunchData, ILaunchResponse } from '../../interfaces';
import {
  getNextLaunch,
  getPreviousLaunch,
  getUpcomingLaunch,
  getLatestLaunch
} from '../../services/Launches';

import { Card } from '../../components';

import './index.css';

export default function Launches() {
  const [nextData, setNextData] = useState<ILaunchData>();
  const [prevData, setPrevData] = useState<ILaunchData>();
  const [upcomingData, setUpcomingData] = useState<ILaunchResponse>();
  const [latestData, setLatestData] = useState<ILaunchResponse>();

  useEffect(() => {
    async function loadData() {
      setPrevData(await getPreviousLaunch());
      setNextData(await getNextLaunch());
      setUpcomingData(await getUpcomingLaunch());
      setLatestData(await getLatestLaunch());
    }

    loadData();
  }, []);

  function createCard(value: ILaunchData, options = { centered: false }) {
    const formatedDate = new Date(value.date_utc).toLocaleString();

    function formatMass(mass: number | any): string {
      let newMass;
      
      if(newMass === undefined || newMass === null) {
        newMass = 'Não informado';
      } else {
        newMass = `${mass} kg`;
      }

      return newMass;
    }

    return (
      <Card title={value.name} centered={options.centered}>
        <div className="info-container">
          <div className="info-row">
            <span>Massa</span>
            <span>{formatMass(value.payloads[0]?.mass_kg)}</span>
          </div>

          <div className="info-row">
            <span>Tipo</span>
            <span>{value.payloads[0]?.type || 'Não informado'}</span>
          </div>

          <div className="info-row">
            <span>Órbita</span>
            <span>{value.payloads[0]?.orbit || 'Não informado'}</span>
          </div>

          <div className="info-row">
            <span>Data</span>
            <span>{formatedDate}</span>
          </div>
        </div>
      </Card>
    );
  }

  function mapData(data: Array<ILaunchData>) {
    return (
      data.map((value) => (
          <li key={value.id}>
            {createCard(value)}
          </li>
        )
      ) 
    );
  }

  return (
    <div className="launch-page">
      <h1>Lançamentos</h1>
      <p>Veja as informações de lançamentos da Space X</p>

      <h3 className="section-title">Lançamento anterior</h3>
      { prevData ? createCard(prevData, { centered: true }) : 'Carregando...'}

      <h3 className="section-title">Próximo lançamento</h3>
      { nextData ? createCard(nextData, { centered: true }) : 'Carregando...'}

      <h3 className="section-title">Próximos lançamentos</h3>
      <ul className="launch-cards-container">
        {upcomingData ? mapData(upcomingData?.docs || []) : 'Carregando...'}
      </ul>

      <h3 className="section-title">Últimos lançamentos</h3>
      <ul className="launch-cards-container">
        {latestData ? mapData(latestData?.docs || []) : 'Carregando...'}
      </ul>
    </div>
  )
}