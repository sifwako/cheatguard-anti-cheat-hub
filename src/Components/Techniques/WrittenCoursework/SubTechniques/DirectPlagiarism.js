import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function DirectPlagiarism() {
  return (
    <div className="app-container">
      <h1>Direct Plagiarism</h1>
      <div className="description">
        <p>
          Direct plagiarism occurs when a student uses another person's words or
          ideas in their own work without proper attribution
          <sup>
            <Link to="https://www.bowdoin.edu/dean-of-students/conduct-review-board/academic-honesty-and-plagiarism/common-types-of-plagiarism.html#:~:text=Direct%20plagiarism%20is%20the%20word,for%20disciplinary%20actions%2C%20including%20expulsion.">
              [2]
            </Link>
          </sup>
          . This is similar to complete plagiarism, but it differs in scale.
          Complete plagiarism involves taking an entire work, while direct
          plagiarism involves copying specific excerpts or ideas without giving
          credit to the original author. For example, suppose you find a
          paragraph in a scholarly article online and decide to include it in
          your essay as if it were your own writing, without mentioning the
          article or using quotation marks
          <sup>
            <Link to="https://www.grammarly.com/blog/types-of-plagiarism/">
              [1]
            </Link>
          </sup>
          . This act would be considered direct plagiarism, as it presents
          someone else's specific work as your own without acknowledgment.
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
              <td>M1022</td>
              <td>Citation Training</td>
              <td>
                Incorporate lessons on proper citation techniques and the
                importance of quoting and crediting sources{" "}
                <sup>
                  <Link to="https://www.facultyfocus.com/articles/effective-teaching-strategies/inspiring-your-students-to-write-cite-and-avoid-plagiarism/">
                    [5]
                  </Link>
                </sup>
                .By incorporating lessons on these topics, students gain a
                comprehensive understanding of how to appropriately acknowledge
                the work of others and avoid plagiarism.
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
              <td>D1014</td>
              <td>Exact Match Identification</td>
              <td>
                Employ plagiarism scanners that highlight verbatim copied texts
                without citations{" "}
                <sup>
                  <Link to="https://copyleaks.com/plagiarism-checker">[3]</Link>
                </sup>{" "}
                <sup>
                  <Link to="https://www.duplichecker.com/">[4]</Link>
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
                <Link to="https://www.bowdoin.edu/dean-of-students/conduct-review-board/academic-honesty-and-plagiarism/common-types-of-plagiarism.html#:~:text=Direct%20plagiarism%20is%20the%20word">
                  “The Common Types of Plagiarism,” Dean of Students.
                </Link>
              </p>
              <p>
                [3]{" "}
                <Link to="https://copyleaks.com/plagiarism-checker">
                  “Plagiarism checker: Ai-Powered Premium Solution,” Copyleaks.{" "}
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>
                [4]
                <Link to="https://www.duplichecker.com/">
                  {" "}
                  DupliChecker, “Plagiarism Checker,” Duplichecker.com, 2019. ‌
                </Link>
              </p>
              <p>
                [5]
                <Link to="https://www.facultyfocus.com/articles/effective-teaching-strategies/inspiring-your-students-to-write-cite-and-avoid-plagiarism/">
                  M. J. S. PhD, “Inspiring Your Students to Write, Cite, and
                  Avoid Plagiarism,” Faculty Focus | Higher Ed Teaching &
                  Learning, Dec. 12, 2022.
                  https://www.facultyfocus.com/articles/effective-teaching-strategies/inspiring-your-students-to-write-cite-and-avoid-plagiarism/
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

export default DirectPlagiarism;
