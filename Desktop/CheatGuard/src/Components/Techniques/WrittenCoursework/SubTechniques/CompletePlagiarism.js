import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function CompletePlagiarism() {
  return (
    <div className="app-container">
      <h1>Complete Plagiarism</h1>
      <div className="description">
        <p>
          This form of academic dishonesty happens when a student presents
          someone else's work as their own{" "}
          <sup>
            <Link to="https://www.grammarly.com/blog/types-of-plagiarism/">
              [1]
            </Link>
          </sup>
          . This includes scenarios where a student pays someone to write an
          assignment and then submits it under their own name, or when a student
          takes another's work and claims it as their original effort. For
          instance turning in a research paper for an English course that was
          actually written and previously submitted by your older sibling for
          the same class five years earlier is a clear case of total plagiarism.
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
              <td>M1004</td>
              <td>Educational Reinforcement</td>
              <td>
                Educating students about the severity of submitting someone
                else's work as their own.Institutions should implement strict
                penalties for violations, which may include failing grades,
                suspension, or even expulsion.
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
              <td>D1002</td>
              <td>Comprehensive Content Verification</td>
              <td>
                Using plagiarism detection software to identify identical
                content. This software can help detect similarities in texts and
                provide a percentage of unique content
                <sup>
                  <Link to="https://copyleaks.com/plagiarism-checker">[2]</Link>
                </sup>{" "}
                <sup>
                  <Link to="https://www.duplichecker.com/">[3]</Link>
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
            <div className="col-sm-12 col-md-6 col-lg-6">
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
                <Link to="https://copyleaks.com/plagiarism-checker">
                  “Plagiarism checker: Ai-Powered Premium Solution,” Copyleaks.{" "}
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>
                [3]
                <Link to="https://www.duplichecker.com/">
                  {" "}
                  DupliChecker, “Plagiarism Checker,” Duplichecker.com, 2019. ‌
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletePlagiarism;
