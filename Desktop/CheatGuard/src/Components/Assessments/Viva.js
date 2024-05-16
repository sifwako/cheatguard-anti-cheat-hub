import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
function Viva() {
  return (
    <body className="app-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="description-body">
              <h1>Viva</h1>
              <p>
                Vivas serve as valuable educational tools that maximize learning
                when their objectives and follow-up procedures are clearly
                defined. They may be used to verify the originality of a
                student’s work or to assess a deeper understanding of the
                subject matter.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="card-data">
                  <span class="h5 card-title">ID:</span> AS101
                </div>
                <div className="card-data">
                  <span class="h5 card-title">Created:</span> 25th March 2024
                </div>
                <div className="card-data">
                  <span class="h5 card-title">Last Modified:</span> 25th March
                  2024
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="pt-3" id="techniques">
          Techniques
        </h2>
        <h6 className="table-object-count">Cheating Techniques: 2</h6>
        <table className="table-techniques">
          <thead>
            <tr>
              <td colspan="2">ID</td>
              <td>Name</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            <tr className="technique">
              <td colspan="2">
                <Link to="/impersonation">T1002</Link>
              </td>
              <td>
                <Link to="/impersonation">Impersonation</Link>
              </td>
              <td>
                Impersonation in a viva involves a candidate being replaced by
                another individual who attempts the oral examination on their
                behalf. This form of academic misconduct undermines the
                integrity of the evaluation process, as it is intended to assess
                the individual candidate's understanding and mastery of the
                subject matter.
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/in-person">.001</Link>
              </td>
              <td>
                <Link to="/in-person">In-Person</Link>
              </td>
              <td>
                In-person impersonation involves individuals attempting to take
                exams on behalf of others, leveraging forged or fraudulent
                identification documents to gain access to the test.
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/online">.002</Link>
              </td>
              <td>
                <Link to="/online">Online</Link>
              </td>
              <td>
                Online viva impersonation involves a candidate arranging for
                someone else to take their oral examination through digital
                means. This can happen by sharing login credentials or
                manipulating webcam feeds.
              </td>
            </tr>
            <tr class="technique">
              <td colspan="2">
                <Link to="/preExam-information-sharing">T1003</Link>
              </td>
              <td>
                <Link to="/pre-exam-info-sharing">
                  Pre-exam information sharing
                </Link>
              </td>
              <td>
                Students who have already completed their oral examination may
                pass on questions or topics to those who are scheduled later.
                This cheating technique exploits the scheduled nature of viva
                assessments, where students are examined one after the other.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </body>
  );
}
export default Viva;
