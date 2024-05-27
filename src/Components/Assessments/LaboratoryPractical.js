import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

function LaboratoryPractical() {
  return (
    <body className="app-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="description-body">
              <h1>Laboratory Practical</h1>
              <p>
                A laboratory practical assessment is a hands-on evaluation where
                students demonstrate their understanding and proficiency in
                scientific techniques and concepts within a lab setting. These
                assessments typically involve performing experiments, handling
                equipment, and analyzing data under supervised conditions. The
                goal is to test students’ ability to apply theoretical knowledge
                in real-world scenarios, ensure proper laboratory safety and
                procedure adherence, and assess their analytical and
                problem-solving skills.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <div class="card-data">
                  <span class="h5 card-title">ID:</span> AS102
                </div>
                <div class="card-data">
                  <span class="h5 card-title">Created:&nbsp;</span>25th March
                  2024
                </div>
                <div class="card-data">
                  <span class="h5 card-title">Last Modified:&nbsp;</span>25th
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
          <tr class="technique">
            <td colspan="2">
              <Link to="/in-lab-collusion">T1004</Link>
            </td>
            <td>
              <Link to="/in-lab-collusion">In lab collusion</Link>
            </td>
            <td>
              In-lab collusion refers to students working together
              inappropriately or sharing information during a laboratory
              assessment where individual effort is required. This type of
              academic dishonesty undermines the integrity of the evaluation
              process, as it distorts the true capabilities and knowledge of the
              involved students
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  );
}
export default LaboratoryPractical;
