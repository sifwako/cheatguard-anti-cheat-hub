import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function UnethicalCollaboration() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="app-container">
      <h1>T1015: Unethical Collaboration</h1>
      <div className="description">
        <p>
          Unethical collaboration in teamwork assessments involves dishonest
          behaviors and manipulative tactics used to gain an unfair advantage in
          a group setting
          <sup>
            <Link to="https://philarchive.org/archive/BETSAOv1">[1]</Link>
          </sup>
          . This type of cheating encompasses a variety of activities such as
          inappropriately collaborating with other teams, dividing work among
          external helpers, or sabotaging other team members' contributions to
          enhance one's own standing or to shift workload. These practices not
          only undermine the fairness and validity of the assessment process but
          also compromise the educational values of collaboration and mutual
          learning. Such behavior erodes the trust and accountability that are
          fundamental to productive and respectful team dynamics, ultimately
          detracting from the genuine educational outcomes intended by group
          assessments.
        </p>
      </div>

      <div className="mitigation">
        <h2> Mitigation </h2>
        <table className="mitig-detec-table">
          <thead>
            <td>ID</td>
            <td>Mitigation</td>
            <td>Description</td>
          </thead>
          <tbody>
            <tr>
              <td>M1067</td>
              <td>Regular Progress Checks<sup><Link to="https://www.knack.com/blog/how-to-track-student-progress/">[3]</Link></sup></td>
              <td>
                Conduct scheduled checks where team members must demonstrate
                their ongoing contributions and understanding of the project,
                helping identify those who might be engaging in free riding or
                contract cheating.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="detection">
        <h2> Detection </h2>
        <table className="mitig-detec-table">
          <thead>
            <td>ID</td>
            <td>Detection</td>
            <td>Description</td>
          </thead>
          <tbody>
            <tr>
              <td>D1057</td>
              <td>Peer Assessment</td>
              <td>
                Implement peer assessments where team members evaluate each
                other's contributions. This can help detect inconsistencies in
                individual input that may suggest free riding or sabotage
                <sup>
                  <Link to="https://onlinelibrary.wiley.com/doi/abs/10.1002/tl.334">
                    [2]
                  </Link>
                </sup>
                .
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="references">
        <div className="container-fluid">
          <div className="row">
            <h2> References</h2>
            <div className="col-sm-12 col-md-6 col-lg-6"style={{ textAlign: "left" }} >
              <p>
                [1] <Link to="https://philarchive.org/archive/BETSAOv1">
                  M. Betta, “Self and others in team-based learning: Acquiring
                  teamwork skills for business,” Journal of Education for
                  Business, vol. 91, no. 2, pp. 69–74, Dec. 2015, doi:
                  https://doi.org/10.1080/08832323.2015.1122562. ‌
                </Link>
              </p>
              <p>
                [2]{" "}
                <Link to="https://onlinelibrary.wiley.com/doi/abs/10.1002/tl.334">
                  C. M. Cestone, R. E. Levine, and D. R. Lane, “Peer assessment
                  and evaluation in team-based learning,” New Directions for
                  Teaching and Learning, vol. 2008, no. 116, pp. 69–78, Sep.2008.‌
                </Link></p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>[3]<Link to="https://www.knack.com/blog/how-to-track-student-progress/">Kolosky, C. (2024, January 2). Strategies for tracking student progress. Knack: No-Code Application Development Platform.</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnethicalCollaboration;
