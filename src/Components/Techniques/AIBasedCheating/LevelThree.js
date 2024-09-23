import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function LevelThree() {
  return (
    <div className="app-container">
      <h1>T1002 - Level Three: AI-Assisted Editing</h1>

      <div className="description">
        <p>At this level, students may use AI tools to edit, refine, and enhance their work<sup><Link to="https://doi.org/10.53761/q3azde36">
            [1]</Link></sup>. AI can help with grammar, punctuation, word choice, and clarity, but it cannot introduce new ideas. AI-assisted editing is particularly useful for non-native speakers or students needing language support.
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
              <td>M1008</td>
              <td>Require Submission of Original Work<sup><Link to="https://doi.org/10.53761/q3azde36">[1]</Link></sup>.</td>
              <td>Require students to submit both their original, unedited drafts alongside their AI-assisted work to ensure transparency and track changes.              </td>
            </tr>
            <tr>
              <td>M1009</td>
              <td>Clarify the Scope of AI Editing<sup><Link to="https://writingmate.ai/blog/how-teachers-detect-ai">[2]</Link></sup></td>
              <td>Provide specific guidelines on which AI tools are allowed (e.g., Grammarly) and for what purpose (e.g., grammar checks, punctuation), ensuring that AI is only used to enhance the clarity and style, not content.              </td>
            </tr>
            <tr>
              <td>M1010</td>
              <td>Encourage Reflective Analysis<sup><Link to="https://cte.ku.edu/ethical-use-ai-writing-assignments">[6]</Link></sup></td>
              <td>Ask students to reflect on the editing process, noting how AI helped improve their writing and what changes they made manually to retain their voice.              </td>
            </tr>
            <tr>
              <td>M1011</td>
              <td>Track Editing Tools<sup><Link to="https://doi.org/10.53761/q3azde36">[1]</Link></sup>.</td>
              <td>Monitor the specific tools students use during the editing process to ensure they are sticking to approved applications.</td></tr>
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
              <td>D1005</td>
              <td>Comparison Tools<sup><Link to="https://www.yeschat.ai/gpts-9t557p1kJl3-Text-Comparer">[3]</Link></sup><sup><Link to="https://originality.ai/text-compare">[4]</Link></sup></td>
              <td>Use text comparison tools to detect the differences between original and AI-edited submissions, flagging instances where AI significantly altered the style or content.              </td>
            </tr>
            <tr>
              <td>D1006</td>
              <td>Writing Style Consistency Check<sup><Link to="https://arxiv.org/abs/2405.10129">[5]</Link></sup></td>
              <td>Apply tools to analyze the student’s writing style before and after AI-assisted edits, ensuring consistency and flagging areas where the AI may have introduced too much variation.              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="references">
        <div className="container-fluid">
          <div className="row">
            <h2> References</h2>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>[1]<Link to="https://doi.org/10.53761/q3azde36">Perkins, M., Furze, L., Roe, J., & MacVaugh, J. (2024). The Artificial Intelligence Assessment Scale (AIAS): a framework for ethical integration of generative AI in educational assessment. Journal of University Teaching and Learning Practice, 21(06).</Link></p>
              <p>[2]<Link to="https://writingmate.ai/blog/how-teachers-detect-ai">How teachers detect AI-Generated Content in student work. (n.d.-b).</Link></p>
              <p>[3]<Link to="https://www.yeschat.ai/gpts-9t557p1kJl3-Text-Comparer">YesChat.AI. (n.d.-b). Text Comparer-Free Text comparison tool.</Link></p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>[4]<Link to="https://originality.ai/text-compare">Text compare. (n.d.).</Link></p>
              <p>[5]<Link to="https://arxiv.org/abs/2405.10129">Opara, C. (2024, May 16). StyloAI: Distinguishing AI-Generated Content with Stylometric Analysis. arXiv.org.</Link></p>
              <p>[6]<Link to="https://cte.ku.edu/ethical-use-ai-writing-assignments">Ethical use of AI in writing assignments. (n.d.). Center for Teaching Excellence.</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelThree;
