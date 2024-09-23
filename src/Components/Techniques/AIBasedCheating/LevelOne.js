import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function LevelOne() {
  return (
    <div className="app-container">
      <h1>T1000 - Level One: No AI</h1>

      <div className="description">
        <p>This level does not permit students to use AI in any form<sup><Link to="https://doi.org/10.53761/q3azde36">
            [1]
          </Link></sup>. In this case, students should rely solely on their own understanding, knowledge, or skills, or where using AI is impractical or impossible. This level also includes ad hoc viva-voce examinations, technology-free discussions, and debates.
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
              <td>M1000</td>
              <td>Define No AI Use Clearly<sup><Link to="https://doi.org/10.53761/q3azde36">
            [1]
          </Link></sup></td>
              <td>
              Include explicit guidelines about how AI can't be used in the course or assessment. Give examples of what constitutes using AI in your policy and give consequences for violating it. 
              </td>
            </tr>
            <tr>
              <td>M1001</td>
              <td>Supervised Assessments<sup><Link to="https://doi.org/10.53761/q3azde36">
            [1]
          </Link></sup></td>
              <td>
              Conduct in-class discussions, debates, or technology-free exams to make sure AI doesn't get used. This reduces the risk of undetectable AI outside of supervised environments.
              </td>
            </tr>
            <tr>
              <td>M1002</td>
              <td>Equity Considerations<sup><Link to="https://doi.org/10.53761/q3azde36">
            [1]
          </Link></sup></td>
              <td>
              In scenarios where AI-free work is required, ensure students from different backgrounds (e.g., non-native speakers, varying digital literacy) are given equitable assessment conditions to minimize the advantage some may have in using AI undetectably in other contexts.
              </td>
            </tr>
            <tr>
              <td>M1003</td>
              <td>Monitor Ad-hoc Assessments<sup><Link to="https://doi.org/10.53761/q3azde36">
            [1]
          </Link></sup></td>
              <td>
              In cases of viva-voce or impromptu oral assessments, require face-to-face or monitored video settings to reduce the possibility of using AI tools for response generation.              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="detection">
        <h2> Detection </h2>
        <table className="mitig-detec-table">
          <thead>
            <td>ID</td>
            <td>Mitigation</td>
            <td>Description</td>
          </thead>
          <tbody>
            <tr>
              <td>D1000</td>
              <td>AI Detection Software<sup><Link to="https://www.bestcolleges.com/news/best-ai-detection-tools-cheating-plagiarism/">[3]</Link></sup> </td>
              <td>
              Use tools that detect AI-generated content to identify any possible violations of the "No AI" rule in submitted written or digital assessments. This includes detecting AI-assisted paraphrasing or grammar checks.
              </td>
            </tr>
            <tr>
              <td>D1001</td>
              <td>Manual Draft Comparison<sup><Link to="https://screenapp.io/blog/how-to-avoid-and-detect-ai-cheating-with-exam-assignments-and-essays#:~:text=Screen%20recording%20and%20online%20proctoring,effectively%20identify%20potential%20cheating%20attempts.">
            [2]
          </Link></sup></td>
              <td>
              In cases of written work, collect early drafts or handwritten work to compare with final submissions to detect any dramatic changes in writing quality that may indicate unauthorized AI usage.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="references">
        <div className="container-fluid">
          <div className="row">
            <h2> References</h2>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
            <p>
              [1] <Link to="https://doi.org/10.53761/q3azde36">Perkins, M., Furze, L., Roe, J., & MacVaugh, J. (2024). The Artificial Intelligence Assessment Scale (AIAS): a framework for ethical integration of generative AI in educational assessment. Journal of University Teaching and Learning Practice, 21(06).</Link>
              </p>
              <p>[2] <Link to="https://screenapp.io/blog/how-to-avoid-and-detect-ai-cheating-with-exam-assignments-and-essays#:~:text=Screen%20recording%20and%20online%20proctoring,effectively%20identify%20potential%20cheating%20attempts.">AI cheating: Tips to avoid and detect. (n.d.). ScreenApp Blog.</Link></p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
            <p>
              [3] <Link to='https://www.bestcolleges.com/news/best-ai-detection-tools-cheating-plagiarism/'>The best AI Detection Tools to Catch cheating and Plagiarism | BestColleges. (n.d.). BestColleges.com.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelOne;
