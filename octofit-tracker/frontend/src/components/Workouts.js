import React, { useEffect, useState } from 'react';

const WORKOUTS_API = 'https://special-space-train-96vg4g6q7pqcxrj-8000.app.github.dev/api/workouts/';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(WORKOUTS_API)
      .then(res => res.json())
      .then(data => {
        const workoutList = data.results ? data.results : data;
        setWorkouts(workoutList);
        console.log('Fetched workouts:', workoutList);
        console.log('API endpoint:', WORKOUTS_API);
      });
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Workouts</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout, idx) => (
                <tr key={idx}>
                  <td>{workout.name}</td>
                  <td>{workout.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
