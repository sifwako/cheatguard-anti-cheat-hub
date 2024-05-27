import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function SelfPlagiarism() {
  return (
    <div className="app-container">
      <h1>Self Plagiarism</h1>
      <div className="description">
        <p>
          Occurs when students submit substantial parts of their previously
          submitted or published work in a new assignment without appropriate
          citations or acknowledgment. This behavior undermines the integrity of
          academic work by presenting it as newly created content, which can
          lead to copyright issues if the prior work was officially published or
          used for academic evaluation. For example, a student using paragraphs
          from a paper they submitted in a previous semester for a current
          project, without indicating the earlier use, would be committing
          self-plagiarism.
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
              <td>M1007</td>
              <td>Clear Institutional Policiesx</td>
              <td>
                {" "}
                Develop and disseminate clear guidelines that define
                self-plagiarism, outline what constitutes improper reuse of
                one's own work, and explain how to avoid these issues.
                Guidelines should be communicated through student handbooks,
                orientation sessions, and course materials{" "}
                <sup>
                  <Link to="https://oai.missouri.edu/students/self-plagiarism/">
                    [1]
                  </Link>
                </sup>{" "}
                <sup>
                  {" "}
                  <Link to="https://research.unimelb.edu.au/strengths/ethics/text-recycling-and-self-plagiarism-in-research">
                    [2]
                  </Link>
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>M1008</td>
              <td>Citation Requirements </td>
              <td>
                Mandate that all students cite their previous academic works in
                new submissions, providing clear instructions on how to cite
                oneself properly to maintain academic integrity{" "}
                <sup>
                  <Link to="https://oai.missouri.edu/students/self-plagiarism/">
                    [1]
                  </Link>
                </sup>{" "}
                <sup>
                  {" "}
                  <Link to="https://research.unimelb.edu.au/strengths/ethics/text-recycling-and-self-plagiarism-in-research">
                    [2]
                  </Link>
                </sup>
                .
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
              <td>D1005</td>
              <td> Submission Database Checks</td>
              <td>
                Check submissions against a database of the student's previous
                works to identify content that has been reused from the
                student's prior submissions without proper attribution
                <sup>
                  <Link to="https://oai.missouri.edu/students/self-plagiarism/">
                    [1]
                  </Link>
                </sup>{" "}
                <sup>
                  {" "}
                  <Link to="https://research.unimelb.edu.au/strengths/ethics/text-recycling-and-self-plagiarism-in-research">
                    [2]
                  </Link>
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>D1006</td>
              <td>Disclosure Requirements</td>
              <td>
                Students should be required to disclose if their current work
                contains content from previously submitted assignments{" "}
                <sup>
                  <Link to="https://research.unimelb.edu.au/strengths/ethics/text-recycling-and-self-plagiarism-in-research">
                    [2]
                  </Link>
                </sup>{" "}
                <sup>
                  <Link to="https://www.cwauthors.com/article/WhatIsSelf-Plagiarism">
                    [3]
                  </Link>
                </sup>
                .{" "}
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
                [1]
                <Link to="https://oai.missouri.edu/students/self-plagiarism/">
                  “Self-Plagiarism // Office of Academic Integrity,”
                  oai.missouri.edu, 2024.
                </Link>
              </p>
              <p>
                [2]{" "}
                <Link to="https://research.unimelb.edu.au/strengths/ethics/text-recycling-and-self-plagiarism-in-research">
                  K. Smith, “Text recycling and self-plagiarism in research,”
                  Research, Apr. 15, 2024. ‌
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>
                [3]
                <Link to="https://www.cwauthors.com/article/WhatIsSelf-Plagiarism">
                  “What is Self-Plagiarism? - Charlesworth Author Services
                  Advice,” www.cwauthors.com. ‌
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelfPlagiarism;
