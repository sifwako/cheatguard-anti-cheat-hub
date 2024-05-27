import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function InPerson() {
  return (
    <div className="app-container">
      <h1>In-Person Impersonation</h1>

      <div className="description">
        <p>
          {" "}
          In-person impersonation involves individuals attempting to take exams
          on behalf of others, leveraging forged or fraudulent identification
          documents to gain access to the test
          <sup>
            <Link
              to="https://academicintegrity.org/resources/blog/99-2022/may-2022/370-academic-integrity-and-testing-digging-deeper-into-impersonation
"
            >
              [1]
            </Link>
          </sup>
          . In-person impersonation in a viva assessment refers to a scenario
          where someone other than the intended student or candidate personally
          attends and participates in a viva voce (an oral examination)
          pretending to be the student.
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
              <td>M1018</td>
              <td>ID Verification</td>
              <td>
                Require multiple forms of identification at the time of the
                exam, including photo ID
                <sup>
                  <Link to="https://www.eklavvya.com/blog/prevent-cheating-during-online-examinations/">
                    [2]
                  </Link>
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>M1019</td>
              <td>Biometric Verification </td>
              <td>
                Use biometric verification methods such as fingerprint or facial
                recognition.
              </td>
            </tr>
            <tr>
              <td>M1020</td>
              <td>Signature Comparision</td>
              <td>
                Requiring test takers to sign in upon arrival and compare the
                signature to that on the ID card. This method adds an additional
                layer of verification.
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
              <td>D1021</td>
              <td>Audiovisual Monitoring </td>
              <td>
                Use video recording to ensure the same candidate who starts the
                exam finishes it.
              </td>
            </tr>
            <tr>
              <td>D1022</td>
              <td>Examiner Interviews</td>
              <td>
                Utilize knowledgeable examiners to ask specific questions that
                verify the candidate's identity.
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
                <Link
                  to="https://academicintegrity.org/resources/blog/99-2022/may-2022/370-academic-integrity-and-testing-digging-deeper-into-impersonation
"
                >
                  “Academic Integrity and Testing: Digging Deeper into
                  Impersonation,” academicintegrity.org. ‌
                </Link>
              </p>
              <p>
                [2]
                <Link to="https://www.eklavvya.com/blog/prevent-cheating-during-online-examinations/">
                  S. d, “Stop cheating during online exam | Proctored Exam |
                  Eklavvya,” Online Skill Assessment | Online Exam Software |
                  Eklavvya.com, Jul. 02, 2019. ‌
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InPerson;
