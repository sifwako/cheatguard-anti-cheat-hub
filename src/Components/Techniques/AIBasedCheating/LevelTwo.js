import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function LevelTwo() {
  return (
    <div className="app-container">
      <h1>T1001 - Level Two: AI-Assisted Idea Generation and Structuring</h1>

      <div className="description">
        <p>At this level, students are allowed to use AI tools for brainstorming, gaining feedback, and structuring ideas, but the final submission should not contain any AI-generated content<sup><Link to="https://doi.org/10.53761/q3azde36">
            [1]
          </Link></sup>. This level is useful for tasks where students benefit from AI assistance in developing ideas, but the final product must be human authored.</p>
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
              <td>M1004</td>
              <td>Clearly Define AI Usage in Brainstorming<sup><Link to='https://www.linkedin.com/pulse/ways-prevent-students-from-cheating-ai-dr-rimon-gerges-dit-msc-tkgfc/'>[2]</Link></sup></td>
              <td>
              Specify which AI tools may be used for idea generation and explain that AI outputs cannot appear in the final submission. Encourage transparency by asking students to detail their brainstorming process.              </td>
            </tr>
            <tr>
              <td>M1005</td>
              <td>Structural Guidance Only<sup><Link to="https://doi.org/10.53761/q3azde36">
            [1]
          </Link></sup></td>
              <td>
              Limit AI usage to the creation of structural outlines or frameworks and emphasize that students must refine and fill out these structures themselves.              </td>
            </tr>
            <tr>
              <td>M1006</td>
              <td>Instructor Check-ins<sup><Link to='https://www.kritik.io/blog-post/how-to-ensure-students-arent-using-ai-content-for-assignments'>[3]</Link></sup></td>
              <td>
              Instructors should review drafts or outlines to ensure students have not overly relied on AI-generated structures. Require early submissions of outlines or notes showing the student's original work alongside any AI-generated outlines.              </td>
            </tr>
            <tr>
              <td>M1007</td>
              <td>Group Collaboration Monitoring<sup><Link to="https://stormboard.com/blog/collaborative-brainstorming">[4]</Link></sup></td>
              <td>
              For group work, monitor collaborative brainstorming sessions where AI tools are used, ensuring that students refine and filter AI ideas themselves.</td></tr>
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
              <td>D1003</td>
              <td>Originality Check <sup><Link to="https://writingmate.ai/blog/how-teachers-detect-ai">[5]</Link></sup></td>
              <td>
              Use plagiarism detection software that can flag AI-generated content and ensure that the final submission contains only student-generated work.              </td>
            </tr>
            <tr>
              <td>D1004</td>
              <td>AI Log Analysis<sup><Link to="https://doi.org/10.53761/q3azde36">
            [1]
          </Link></sup>.</td>
              <td>
              Implement tools that log the AI tools students use and analyze how they contributed to brainstorming or idea generation, ensuring that no AI content is present in the final submission.              </td>
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
                <p>[2]<Link to="https://www.linkedin.com/pulse/ways-prevent-students-from-cheating-ai-dr-rimon-gerges-dit-msc-tkgfc/">MSc, R. G. D. (2024, May 8). Ways to prevent students from cheating with AI.</Link></p>
                <p>[3]<Link to="https://www.kritik.io/blog-post/how-to-ensure-students-arent-using-ai-content-for-assignments">Kritik - How to ensure students aren’t using AI content for assignments. (n.d.)</Link></p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>              
                <p>[4]<Link to="https://stormboard.com/blog/collaborative-brainstorming">User, G. (2024, July 2). 5 Steps Leaders Can take for Better collaborative brainstorming — Stormboard. Stormboard. https://stormboard.com/blog/collaborative-brainstorming</Link></p>
                <p>[5]<Link to="https://writingmate.ai/blog/how-teachers-detect-ai">How teachers detect AI-Generated Content in student work. (n.d.). </Link></p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelTwo;
