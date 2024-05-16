import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function ParaphrasingPlagiarism() {
  return (
    <div className="app-container">
      <h1>Pharaphrasing Plagiarism</h1>
      <div className="description">
        <p>
          Paraphrasing plagiarism occurs when a student takes another person's
          work, alters a few words or phrases, and then presents it as their own
          original thought{" "}
          <sup>
            <Link to="https://www.grammarly.com/blog/types-of-plagiarism/">
              [1]
            </Link>
          </sup>
          .This is a widespread form of academic dishonesty, often overlooked or
          misunderstood by students as a legitimate form of plagiarism. Even if
          you rewrite someone else's ideas in your own words, failing to credit
          the original source constitutes plagiarism. For instance, if you read
          an insightful analysis in a book and then rewrite that analysis with
          minor changes for your assignment, without acknowledging the book or
          the author, you're committing paraphrasing plagiarism. This act of
          subtly changing the original wording but keeping the underlying ideas,
          without proper attribution, is considered dishonest and violates
          academic integrity principles.
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
              <td>M1006</td>
              <td>Paraphrasing Education </td>
              <td>
                Teach students how to paraphrase correctly by changing both the
                words and structure of the original text while crediting the
                original idea.
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
              <td>D1004</td>
              <td>Advanced Similarity Detection </td>
              <td>
                Utilize advanced plagiarism detection tools that can identify
                high levels of similarity in paraphrased content and look for
                unusual phrasing or vocabulary.
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
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParaphrasingPlagiarism;
