import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function IdeaTheft() {
  return (
    <div className="app-container">
      <h1>Idea Theft</h1>

      <div className="description">
        <p>
          {" "}
          Idea theft, also known as idea plagiarism or idea misappropriation,
          refers to the act of adopting and presenting someone else's
          fundamental concepts, strategies, or methodologies as one's own
          <sup>
            <Link to="https://edintegrity.biomedcentral.com/articles/10.1007/s40979-023-00135-2">
              [1]
            </Link>
          </sup>
          . It occurs when students fail to give proper credit or acknowledgment
          to the original source of inspiration or intellectual property and
          submit it as their own work. For example, let's consider a student who
          is asked to complete a graphic design task that requires developing a
          brand identity for a fictional company. Instead of generating original
          ideas and concepts, the student decides to replicate the core branding
          strategy and visual communication principles of a successful and
          well-established brand, such as Nike or Apple. They might closely
          mimic the logo design, color palette, typography, and overall
          aesthetic that are distinctive to the original brand. The student then
          presents this replicated work as their own, claiming that they have
          developed the branding strategy and visual elements from scratch.
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
              <td>M001</td>
              <td>Educational Workshops </td>
              <td>
                Conduct workshops and seminars on intellectual property and
                academic honesty to increase awareness among students.
              </td>
            </tr>
            <tr>
              <td>M002</td>
              <td>Clear Policy Communication </td>
              <td>
                Ensure all students understand the academic honesty policy,
                consequences of idea theft, and the importance of citation. It
                is also important to include in student handbooks and course
                syllabi.
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
              <td>D001</td>
              <td>Peer Review </td>
              <td>
                Implement a system where peers review each other’s work for
                potential idea theft, providing checks and balances.
              </td>
            </tr>
            <tr>
              <td>D002</td>
              <td>Digital Comparison Tools</td>
              <td>
                Use digital tools to compare submitted assignments against a
                database of existing works to detect similarities.
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
                <Link to="https://edintegrity.biomedcentral.com/articles/10.1007/s40979-023-00135-2">
                  [1]Edidiong Orok et al., “Causes and mitigation of academic
                  dishonesty among healthcare students in a Nigerian
                  university,” International Journal for Educational Integrity,
                  vol. 19, no. 1, Jul. 2023. ‌
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

export default IdeaTheft;
