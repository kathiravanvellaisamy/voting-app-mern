import { useState } from "react";
import { candidates } from "../data";
import CandidateRating from "./CandidateRating";
import { Link } from "react-router-dom";

const ResultElection = ({ id, thumbnail, title }) => {
  const [totalVotes, setTotalVotes] = useState(521);
  //get candidates for this election
  const electionCandiates = candidates.filter((candidates) => {
    return candidates.election == id;
  });
  return (
    <article className="result">
      <header className="result__header">
        <h4>{title}</h4>
        <div className="result__header-image">
          <img src={thumbnail} alt={title} />
        </div>
      </header>
      <ul className="result__list">
        {electionCandiates.map((candidate) => (
          <CandidateRating
            key={candidate.id}
            {...candidate}
            totalVotes={totalVotes}
          />
        ))}
      </ul>
      <Link to={`/election/${id}/candidates`} className="btn primary full">
        Enter Election
      </Link>
    </article>
  );
};

export default ResultElection;
