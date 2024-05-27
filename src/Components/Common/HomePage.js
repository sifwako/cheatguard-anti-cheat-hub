import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 p-2">
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th colSpan="2" className="text-center">
                    <h1 className="display-4">CheatGuard</h1>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 p-2">
            <p>
              CheatGuard Matrix is a globally-accessible knowledge base of
              contract cheating tactics and techniques based on real-world
              observations. The CheatGuard Matrix serves as a foundation for the
              development of specific detection and prevention strategies in the
              academic sector, assisting educators, institutions, and academic
              integrity organizations. With the creation of CheatGuard Matrix,
              we are committed to enhancing educational integrity by uniting
              communities to develop more effective methods to combat contract
              cheating.
              <br />
              <br />
              CheatGuard Matrix is open and available to any individual or
              organization for use at no charge, promoting a culture of honesty
              and integrity in academic environments.
            </p>
          </div>
        </div>
      </div>

      <div className="matrix-scroll-box pb-3">
        <h2 className="matrix-title">CheatGuard Matrix</h2>
        <div className="matrix-grid">
          <div className="matrix-container">
            <h6 className="ass-name">
              <Link
                to="/research-essay-report"
                data-toggle="tooltip"
                data-placement="top"
              >
                Written Coursework
              </Link>
            </h6>
            <br />
            <p className="tactic_count"> 2 techniques </p>
            <table className="techniques-table">
              <tr>
                <td>
                  <Link
                    to="/plagiarism-written-coursework"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    Plagiarism<sub>(4)</sub>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to="/outsourcing-assessments"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    Outsourcing Assessments<sub>(3)</sub>
                  </Link>
                </td>
              </tr>
            </table>
          </div>

          <div className="matrix-container">
            <h6>
              <Link to="/viva" data-toggle="tooltip" data-placement="top">
                Viva
              </Link>
            </h6>
            <br />
            <p className="tactic_count"> 2 techniques </p>
            <table className="techniques-table">
              <tr>
                <td>
                  <Link
                    to="/impersonation"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    Impersonation<sub>(2)</sub>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to="/pre-exam-info-sharing"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    Pre-exam information
                    <br />
                    sharing
                  </Link>
                </td>
              </tr>
            </table>
          </div>

          <div className="matrix-container">
            <h6>
              <Link
                to="/laboratory-practical"
                data-toggle="tooltip"
                data-placement="top"
              >
                Laboratory Practical
              </Link>
            </h6>
            <br />
            <p className="tactic_count"> 1 techniques</p>
            <table className="techniques-table">
              <tr>
                <td>
                  <Link
                    to="/in-lab-collusion"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    In-lab collusion
                  </Link>
                </td>
              </tr>
            </table>
          </div>

          <div className="matrix-container">
            <h6>
              <Link
                to="/creative-design-task"
                data-toggle="tooltip"
                data-placement="top"
              >
                Creative Design
                <br />
                Task
              </Link>
            </h6>
            <p className="tactic_count"> 1 techniques</p>
            <table className="techniques-table">
              <tr>
                <td>
                  <Link
                    to="/creative-integrity-breach"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    Creative integrity breach<sub>(1)</sub>
                  </Link>
                </td>
              </tr>
            </table>
          </div>

          <div className="matrix-container">
            <h6>
              <Link
                to="/traditional-timed-unseen"
                data-toggle="tooltip"
                data-placement="top"
              >
                Traditional Timed
                <br />
                Unseen Exam
              </Link>
            </h6>
            <p className="tactic_count"> 3 techniques </p>
            <table className="techniques-table">
              <tr>
                <td>
                  <Link
                    to="/collaboration"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    Collaboration
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to="/use-of-technology"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    Use of technology<sub>(6)</sub>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to="/accessing-questions-before-exams"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    Accessing Questions
                    <br />
                    Before Exam
                  </Link>
                </td>
              </tr>
            </table>
          </div>

          <div className="matrix-container">
            <h6>
              <Link to="/open-book" data-toggle="tooltip" data-placement="top">
                Timed Open Book
              </Link>
            </h6>
            <br />
            <p className="tactic_count"> 1 technique </p>
            <table className="techniques-table">
              <tr>
                <td>
                  <Link
                    to="/preemptive-solution-compilation"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    Preemptive solution
                    <br />
                    compilation
                  </Link>
                </td>
              </tr>
            </table>
          </div>

          <div className="matrix-container">
            <h6>
              <Link to="/patch-work" data-toggle="tooltip" data-placement="top">
                Patchwork
              </Link>
            </h6>
            <br />
            <p className="tactic_count"> 1 technique</p>
            <table className="techniques-table">
              <tr>
                <td>
                  <Link
                    to="/patchwork-plagiarism"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    Patchwork Plagiarism
                  </Link>
                </td>
              </tr>
            </table>
          </div>

          <div className="matrix-container">
            <h6>
              <Link to="/team-work" data-toggle="tooltip">
                Teamwork
              </Link>
            </h6>
            <br />
            <p className="tactic_count"> 1 technique </p>
            <table className="techniques-table">
              <tr>
                <td>
                  <Link
                    to="/unethical-collaboration"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    Unethical Collaboration
                  </Link>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
