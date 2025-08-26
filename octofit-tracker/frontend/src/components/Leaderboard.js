import React, { useEffect, useState } from 'react';

const LEADERBOARD_API = 'https://special-space-train-96vg4g6q7pqcxrj-8000.app.github.dev/api/leaderboard/';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(LEADERBOARD_API)
      .then(res => res.json())
      .then(data => {
        const lbList = data.results ? data.results : data;
        setLeaderboard(lbList);
        console.log('Fetched leaderboard:', lbList);
        console.log('API endpoint:', LEADERBOARD_API);
      });
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Leaderboard</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Team</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, idx) => (
                <tr key={idx}>
                  <td>{entry.team}</td>
                  <td>{entry.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
