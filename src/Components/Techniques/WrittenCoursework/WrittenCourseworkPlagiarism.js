import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../TechniquesStyles.css";

function WrittenCourseworkPlagiarism() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="app-container">
      <h1>T1005: Plagiarism</h1>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          onClick={toggleDropdown}
        >
          {" "}
          Sub-techniques (4)
        </button>
        {isOpen && (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="/complete-plagiarism" className="dropdown-item">
                    T1005.001
                  </Link>
                </td>
                <td>
                  <Link to="/complete-plagiarism" className="dropdown-item">
                    Complete Plagiarism
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/direct-plagiarism" className="dropdown-item">
                  T1005.002
                  </Link>
                </td>
                <td>
                  <Link to="/direct-plagiarism" className="dropdown-item">
                    Direct Plagiarism
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/paraphrasing-plagiarism" className="dropdown-item">
                  T1005.003
                  </Link>
                </td>
                <td>
                  <Link to="/paraphrasing-plagiarism" className="dropdown-item">
                    Paraphrasing Plagiarism
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/self-plagiarism" className="dropdown-item">
                  T1005.004
                  </Link>
                </td>
                <td>
                  <Link to="/self-plagiarism" className="dropdown-item">
                    Self Plagiarism
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <div className="description">
        <p>
          Adversaries in academic environments, typically students, may engage
          in plagiarism to pass off another's work as their own during
          assignments and assessments. This technique involves the unauthorized
          use and submission of content created by others, which can range from
          direct copying of text to inadequate citation of sources
          <Link to="https://www.grammarly.com/blog/types-of-plagiarism/">
            <sup>[1]</sup>
          </Link>
          . Plagiarism also encompasses scenarios where students might reuse
          their own previously submitted work without proper authorization—a
          practice known as self-plagiarism.
          <br />
          <br />
          This form of academic dishonesty can be executed in various ways,
          including copying text, images, data, or even code. Information from
          detection efforts often reveals opportunities to address gaps in
          understanding and adherence to academic integrity policies.
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
              <td>M1017</td>
              <td>Define plagiarism clearly</td>
              <td>
                {" "}
                At the start of each semester, explicitly define plagiarism and
                appropriate collaboration in the syllabus and verbally
                <sup>
                  {" "}
                  <Link to="https://www.cmu.edu/teaching/designteach/design/instructionalstrategies/writing/preventplagiarism.html">
                    [2]{" "}
                  </Link>{" "}
                </sup>
                . Emphasize that these definitions may differ across courses and
                instructors, but the goal is to ensure that expectations are
                easily understood for every course.
              </td>
            </tr>
            <tr>
              <td>M1018</td>
              <td>Educational workshops and seminars</td>
              <td>
                {" "}
                Conduct workshops and seminars that educate students and faculty
                about plagiarism, its definitions, consequences, and how to
                avoid it{" "}
                <sup>
                  {" "}
                  <Link to="https://economicsnetwork.ac.uk/handbook/printable/plagiarism_he.pdf">
                    {" "}
                    [3]
                  </Link>
                </sup>{" "}
                These educational sessions can play a crucial role in resolving
                misunderstandings and promoting a consistent understanding
                within the academic community. It is beneficial to provide
                students with clear examples of proper citation practices,
                explaining when and how to appropriately acknowledge others'
                work{" "}
                <sup>
                  {" "}
                  <Link to="https://www.cmu.edu/teaching/designteach/design/instructionalstrategies/writing/preventplagiarism.html">
                    [2]
                  </Link>
                  .{" "}
                </sup>{" "}
                By offering concrete references to follow, students can
                effectively navigate the citation process, reducing confusion
                and minimizing the risk of unintentional plagiarism.
              </td>
            </tr>
            <tr>
              <td>M1019</td>
              <td>Create original and multipart assignments</td>
              <td>
                {" "}
                Design assignments that are unique and have multiple components,
                making it difficult for students to find pre-written responses
                <sup>
                  {" "}
                  <Link to="https://www.cmu.edu/teaching/designteach/design/instructionalstrategies/writing/preventplagiarism.html">
                    [2]
                  </Link>
                </sup>
                <sup>
                  <Link to="https://economicsnetwork.ac.uk/handbook/printable/plagiarism_he.pdf">
                    [3]
                  </Link>
                </sup>
                .This also helps in reducing the likelihood of students
                submitting work that is not their own.
              </td>
            </tr>
            <tr>
              <td>M1020</td>
              <td>Promote academic support services</td>
              <td>
                {" "}
                Inform students about available academic support services that
                can help enhance their writing and research skills
                <sup>
                  <Link to="https://www.cmu.edu/teaching/designteach/design/instructionalstrategies/writing/preventplagiarism.html">
                    [2]
                  </Link>
                </sup>
                .Endorsing services like Academic Development and the
                Intercultural Communications Center can assist students in
                becoming more effective in their academic work, especially for
                those who might struggle with language or cultural differences
                in academic expectations.
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
              <td>D1011</td>
              <td>Stylometric Analysis</td>
              <td>
                {" "}
                By using stylometric analysis software, plagiarism can be
                detected by examining the writing style and distinct linguistic
                characteristics of a text
                <sup>
                  {" "}
                  <Link to="https://economicsnetwork.ac.uk/handbook/printable/plagiarism_he.pdf">
                    [3]
                  </Link>
                </sup>
                . This analysis helps identify inconsistencies in authorship,
                which can suggest plagiarism, particularly from custom
                essay-writing services.
              </td>
            </tr>
            <tr>
              <td>D1012</td>
              <td>Turnitin and other plagiarism detection software</td>
              <td>
                {" "}
                Using software like Turnitin, which checks submitted work
                against a massive database of academic works, web pages, and
                student papers, to identify potential plagiarism{" "}
                <sup>
                  <Link to="https://www.cmu.edu/teaching/designteach/design/instructionalstrategies/writing/preventplagiarism.html">
                    [2]
                  </Link>
                </sup>{" "}
                <sup>
                  {" "}
                  <Link to="https://economicsnetwork.ac.uk/handbook/printable/plagiarism_he.pdf">
                    [3]
                  </Link>
                </sup>
                .
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
                [1]{" "}
                <Link to="https://www.grammarly.com/blog/types-of-plagiarism/">
                  “7 Common Types of Plagiarism, With Examples,” 7 Common Types
                  of Plagiarism, With Examples | Grammarly Blog, Jun. 02, 2022.
                  https://www.grammarly.com/blog/types-of-plagiarism/
                </Link>
              </p>
              <p>
                [2]{" "}
                <Link to="https://www.cmu.edu/teaching/designteach/design/instructionalstrategies/writing/preventplagiarism.html">
                  “How to prevent plagiarism - Eberly Center - Carnegie Mellon
                  University.”https://www.cmu.edu/teaching/designteach/design/instructionalstrategies/writing/preventplagiarism.html
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 " style={{ textAlign: "left" }}>
              <p>
                [3]{" "}
                <Link to="https://economicsnetwork.ac.uk/handbook/printable/plagiarism_he.pdf">
                  C. Cortinhas, “Detection and Prevention of Plagiarism in
                  Higher Education.” Available:https://economicsnetwork.ac.uk/handbook/printable/plagiarism_he.pdf
                </Link>
              </p>
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WrittenCourseworkPlagiarism;
