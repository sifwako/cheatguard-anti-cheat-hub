import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

function TimedOpenBook() {
  return (
    <>
      <body className="app-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="description-body">
                <h1>Timed Open Book</h1>
                <p>
                  Open book exams allow students to use specified texts and
                  their own notes during the test. This approach reduces the
                  need to memorize large amounts of information, lowers stress
                  levels. Additionally, since students have access to resources,
                  exam questions can be designed to be more complex and
                  analytical. These questions can focus on applying knowledge,
                  synthesizing information, and evaluating concepts, which truly
                  tests a deeper understanding of the subject matter. This
                  format not only helps in assessing how well students grasp and
                  can utilize their knowledge but also promotes a more engaging
                  and thoughtful learning process.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-data">
                    <span className="h5 card-title">ID:</span> AS105
                  </div>
                  <div className="card-data">
                    <span className="h5 card-title">Created:&nbsp;</span>25th
                    March 2024
                  </div>
                  <div className="card-data">
                    <span className="h5 card-title">Last Modified:&nbsp;</span>
                    25th March 2024
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
            <tr className="technique">
              <td colspan="2">
                <Link to="/preemptive-solution-compilation">T1008</Link>
              </td>
              <td>
                <Link to="/preemptive-solution-compilation">
                  Preemptive Solution Compilation
                </Link>
              </td>
              <td>
                Students can collect and record answers to potential exam
                questions before taking an open book assessment. This technique
                involves gathering solutions to past exam papers or anticipated
                questions and using these pre-prepared answers during the exam
                to match with the current questions. The intent is to bypass
                genuine understanding and application of the subject matter by
                relying on a ready-made set of answers.
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </>
  );
}
export default TimedOpenBook;
