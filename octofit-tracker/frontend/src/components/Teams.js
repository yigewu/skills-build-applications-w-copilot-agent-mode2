import React, { useEffect, useState } from 'react';

const TEAMS_API = 'https://special-space-train-96vg4g6q7pqcxrj-8000.app.github.dev/api/teams/';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(TEAMS_API)
      .then(res => res.json())
      .then(data => {
        const teamList = data.results ? data.results : data;
        setTeams(teamList);
        console.log('Fetched teams:', teamList);
        console.log('API endpoint:', TEAMS_API);
      });
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Teams</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, idx) => (
                <tr key={idx}>
                  <td>{team.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teams;
