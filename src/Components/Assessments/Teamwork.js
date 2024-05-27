import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";
function Teamwork() {
  return (
    <>
      <body className="app-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="description-body">
                <h1>Patchwork</h1>
                <p>
                  Patchwork assessment involves a series of small,
                  self-contained sections, which, while complete on their own,
                  are ultimately integrated into a cohesive whole by the student
                  through a reflective piece or similar work. This approach
                  features a sequence of brief, structured assessments conducted
                  at consistent intervals, often over the course of a term or
                  semester.
                </p>
                <br />
                <p>
                  These tasks vary in type and often necessitate different forms
                  of writing, which is why this method is sometimes called
                  patchwork text. Not all patchwork assessments require written
                  text, though; they might include tasks like a critical
                  analysis of a text, notes and commentary on a lecture,
                  detailed reflections on personal experiences like field trips
                  or interviews, visual presentations of key concepts, proposals
                  for projects, or even creative outputs such as poems or
                  stories.
                </p>
                <br />
                <p>
                  The design of patchwork assessment aims to facilitate ongoing
                  evaluation that promotes deep, transformative learning and
                  enhances the student's grasp of complex interrelationships.
                  The essence of this approach lies in the aggregation and
                  eventual synthesis of these diverse elements by the student.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-data">
                    <span className="h5 card-title">ID:</span> AS107
                  </div>
                  <div className="card-data">
                    <span className="h5 card-title">Created:</span> 25th March
                    2024
                  </div>
                  <div className="card-data">
                    <span className="h5 card-title">Last Modified:</span> 25th
                    March 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="pt-3" id="techniques">
          Techniques
        </h2>
        <h6 className="table-object-count">Cheating Techniques: 1</h6>
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
                <Link to="/unethical-collaboration">T010</Link>
              </td>
              <td>
                <Link to="/unethical-collaboration">
                  Unethical Collaboration
                </Link>
              </td>
              <td>
                Unethical Collaboration refers to any form of dishonest or
                inappropriate cooperation among team members or individuals in
                academic, professional, or other settings. It includes a range
                of behaviors where participants engage in activities like
                sharing answers inappropriately, completing tasks dishonestly,
                or undermining group efforts for personal gain. These activities
                violate the principles of fairness and integrity that are
                crucial for maintaining trust and accountability within any
                collaborative environment.
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </>
  );
}
export default Teamwork;
