import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function LevelFour() {
  return (
    <div className="app-container">
      <h1>T1003 - Level Four: AI Task Completion, Human Evaluation</h1>

      <div className="description">
        <p>In this level, students are allowed to use AI to complete specific portions of the assessment<sup><Link to="https://doi.org/10.53761/q3azde36">
            [1]
          </Link></sup>. However, the emphasis remains on the student’s critical engagement with and evaluation of the AI-generated content. Students must demonstrate understanding by analyzing and interpreting the AI output.</p>
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
              <td>M1012</td>
              <td>Require Critical Evaluation of AI Content<sup><Link to="https://cte.ku.edu/ethical-use-ai-writing-assignments">[2]</Link></sup></td>
              <td>
              Ask students to critically evaluate the AI-generated content, explaining its relevance, accuracy, and potential biases. This evaluation should be a significant part of the submission.              </td>
            </tr>
            <tr>
              <td>M1013</td>
              <td>Specify the Extent of AI Task Completion<sup><Link to="https://www.weforum.org/agenda/2024/01/ai-guidance-school-responsible-use-in-education/">[3]</Link></sup></td>
              <td>
              Provide clear guidelines about which specific tasks students can complete using AI and which must be performed manually to ensure a balance between AI use and student effort.              </td>
            </tr>
            <tr>
              <td>M1014</td>
              <td>Reflect on AI-Generated Content<sup><Link to="https://www.weforum.org/agenda/2024/01/ai-guidance-school-responsible-use-in-education/">[3]</Link></sup></td>
              <td>
              Include reflective assignments where students describe how they integrated AI-generated content into their final submission and what changes or adaptations they made.              </td>
            </tr>
            <tr>
              <td>M1015</td>
              <td>Evaluate AI Outputs in Relation to Learning Goals<sup><Link to="https://www.weforum.org/agenda/2024/01/ai-guidance-school-responsible-use-in-education/">[3]</Link></sup></td>
              <td>
              Ensure that the AI-assisted portions of the task align with the overall learning objectives of the assessment, ensuring the student is learning the intended skills while using AI to support their work. </td>            </tr>
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
              <td>D1007</td>
              <td>AI Usage Tracking<sup><Link to="https://doi.org/10.53761/q3azde36">
            [1]
          </Link></sup>.</td>
              <td>
              Implement tracking software that logs AI usage during task completion, ensuring that AI was used only in approved areas and that students appropriately credited the AI-generated content.              </td>
            </tr>
            <tr>
              <td>D1008</td>
              <td>Review of Critical Evaluation<sup><Link to="https://writingmate.ai/blog/how-teachers-detect-ai">[5]</Link></sup></td>
              <td>
              Use plagiarism detection software and originality checkers to ensure the student's evaluation and interpretation of AI-generated content are their own and not AI-generated.              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="references">
        <div className="container-fluid">
          <div className="row">
            <h2> References</h2>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>[1] <Link to="https://doi.org/10.53761/q3azde36">Perkins, M., Furze, L., Roe, J., & MacVaugh, J. (2024). The Artificial Intelligence Assessment Scale (AIAS): a framework for ethical integration of generative AI in educational assessment. Journal of University Teaching and Learning Practice, 21(06).</Link></p>
              <p>[2] <Link to="https://cte.ku.edu/ethical-use-ai-writing-assignments">Ethical use of AI in writing assignments. (n.d.-c). Center for Teaching Excellence.</Link></p>
              <p>[3] <Link to="https://www.weforum.org/agenda/2024/01/ai-guidance-school-responsible-use-in-education/">7 principles on responsible AI use in education. (2024, September 10). World Economic Forum.</Link></p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6"style={{ textAlign: "left" }}>
              <p>[4]<Link to="https://writingmate.ai/blog/how-teachers-detect-ai">How teachers detect AI-Generated Content in student work. (n.d.). </Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelFour;
