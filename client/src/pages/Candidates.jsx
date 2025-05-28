import { useParams } from "react-router-dom";
import { candidates, candidates as dummyCandidates } from "../data";
import Candidate from "../components/Candidate";

function Candidates() {
  const { id } = useParams();

  //get candidates for this election
  const candidates = dummyCandidates.filter(
    (candidates) => candidates.election === id
  );
  return (
    <section className="candidates">
      <haeder className="candidates__header">
        <h1>Vote your Candidate</h1>
        <p>
          These are the candidates for the selected election.Please vote once
          and wisely, because you won't be allowed to this election again.
        </p>
      </haeder>
      <div className="container candidates__container">
        {candidates.map((candidate) => (
          <Candidate key={candidate.id} {...candidate} />
        ))}
      </div>
    </section>
  );
}

export default Candidates;
