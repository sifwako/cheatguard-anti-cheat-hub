import React from "react";
import { Link } from "react-router-dom";

function PatchworkPlagiarism() {
  return (
    <div className="app-container">
      <h1>Patchwork Plagiarism</h1>
      <div className="description">
        <p>
          Patchwork plagiarism or recycling content in assessments is a
          deceptive practice where students compile fragments of their own or
          others' previously submitted work and present it as original content
          <sup>
            <Link to="https://www.researchgate.net/publication/256460514_Patchwork_plagiarism">
              [1]
            </Link>
          </sup>
          . While it may appear to be an efficient way to utilize existing
          resources, it undermines the learning and reflective processes that
          new assignments are designed to foster. <br />
          <br />
          In patchwork plagiarism, students blend together excerpts from various
          sources with their own words to create a paragraph that contains both
          plagiarized and original content
          <sup>
            <Link to="https://copyleaks.com/blog/patchwork-plagiarism-understand-it-to-avoid-it">
              [2]
            </Link>
          </sup>
          . Despite incorporating their own previous work, it still constitutes
          plagiarism because any portion of an article taken from external
          sources must be properly acknowledged, even if it originates from the
          student's own previous assignment.Often, such recycling goes
          undetected because the content is technically the student's own work
          or slightly modified from other sources, making it difficult to catch
          with traditional plagiarism detection tools
          <sup>
            <Link to="https://www.researchgate.net/publication/256460514_Patchwork_plagiarism">
              [1]
            </Link>
          </sup>
          .
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
              <td>M1040</td>
              <td>Use of Draft Submissions </td>
              <td>
                Encourage the submission of drafts before the final submission
                to review the progression of students’ or writers' work and
                ensure it aligns with academic integrity standards.
              </td>
            </tr>
            <tr>
              <td>M1041</td>
              <td>Incremental Feedback </td>
              <td>
                Implement a system of ongoing, incremental feedback throughout
                the course of the assessment
                <sup>
                  <Link to="https://warwick.ac.uk/fac/cross_fac/academic-development/assessmentdesign/methods/patchwork/">
                    [4]
                  </Link>
                </sup>
                . Feedback should not only focus on the content but also on the
                depth of reflection and synthesis, guiding students towards more
                meaningful engagement.
              </td>
            </tr>
            <tr>
              <td>M1042</td>
              <td> Promote Reflective Practices </td>
              <td>
                Encourage students to approach each task reflectively,
                considering how their understanding has evolved since their last
                submission. This promotes continuous learning and reduces the
                temptation to reuse past work without critical engagement.
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
              <td>D1041</td>
              <td>Consistency Checks</td>
              <td>
                Instructors can perform manual checks of assignments to look for
                inconsistencies in style and vocabulary that might indicate
                patchwork plagiarism
                <sup>
                  {" "}
                  <Link to="https://www.researchgate.net/publication/256460514_Patchwork_plagiarism">
                    [1]
                  </Link>
                </sup>
                . This method, while labor-intensive, can be effective in
                smaller academic environments.{" "}
              </td>
            </tr>
            <tr>
              <td>D1042</td>
              <td>Usage of Plagiarism Detection Tools </td>
              <td>
                Employ advanced plagiarism detection software like CrossCheck®
                <sup>
                  <Link to="https://www.ieee.org/publications/rights/cross-check-main.html">
                    [3]
                  </Link>
                </sup>{" "}
                to identify instances of patchwork plagiarism. These tools are
                crucial for editors to filter out plagiarized manuscripts
                effectively{" "}
                <sup>
                  {" "}
                  <Link to="https://www.researchgate.net/publication/256460514_Patchwork_plagiarism">
                    [1]
                  </Link>
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>D1043</td>
              <td>Oral Defenses </td>
              <td>
                Require students to present and defend their patchwork verbally.
                This can be an effective way to ensure that the student
                understands and can articulate the learning and synthesis
                claimed in their work.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="references">
        <div className="container-fluid">
          <div className="row">
            <h2> References</h2>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>
                {" "}
                [1] <Link to="https://www.researchgate.net/publication/256460514_Patchwork_plagiarism">
                  “(PDF) patchwork plagiarism,
                  https://www.researchgate.net/publication/256460514_Patchwork_plagiarism
                  (accessed May 11, 2024).
                </Link>
              </p>
              <p>[2] <Link to="https://copyleaks.com/blog/patchwork-plagiarism-understand-it-to-avoid-it">
                  Carmil, “Patchwork Plagiarism: Understand It to Avoid It,”
                  Copyleaks, Nov. 23, 2020.
                  https://copyleaks.com/blog/patchwork-plagiarism-understand-it-to-avoid-it
                  ‌
                </Link>
              </p>
            
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
            <p>
                [3] <Link to="https://www.ieee.org/publications/rights/cross-check-main.html">
                  CrossCheck Information Page.{" "}
                </Link>
              </p>
            <p>
                [4] <Link to="https://warwick.ac.uk/fac/cross_fac/academic-development/assessmentdesign/methods/patchwork/">
                  “Patchwork assessment,” warwick.ac.uk.
                  https://warwick.ac.uk/fac/cross_fac/academic-development/assessmentdesign/methods/patchwork/
                  ‌
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatchworkPlagiarism;
