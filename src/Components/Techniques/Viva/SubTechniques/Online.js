import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Online() {
  return (
    <div className="app-container">
      <h1>Online Impersonation</h1>

      <div className="description">
        <p>
          Impersonation in an online test can occur in two ways which are before
          and during the assessments. Before the assessments, students share
          their login credentials with the person impersonating them so that the
          person can login and take the assessment
          <sup>
            <Link to="https://www.skillrobo.com/online-assessment-cheating/">
              [1]
            </Link>
          </sup>
          <sup>
            <Link to="https://blog.talview.com/en/6-ways-students-cheat-in-online-proctored-exams">
              [2]
            </Link>
          </sup>
          . The specific login details depend on the software being used.
          However, certain online proctoring software can prevent this by
          employing advanced identification features like biometrics or facial
          recognition systems. While impersonation during the assessment can
          take various forms. One is granting remote access to their
          impersonators through tools like virtual machines
          <sup>
            <Link to="https://assess.com/remote-proctoringsecurity/">[3]</Link>
          </sup>
          . The other one is switching with the impersonator during the
          assessment once the actual test taker performed the authentication
          <sup>
            <Link to="https://www.skillrobo.com/online-assessment-cheating/">
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
              <td>M1036</td>
              <td>Biometric Verification</td>
              <td>
                Utilizing tools like Talview that employ two-factor
                authentication to ensure the authenticity of the test taker
                <sup>
                  <Link to="https://www.skillrobo.com/online-assessment-cheating/">
                    [1]
                  </Link>
                </sup>
                <sup>
                  <Link to="https://assess.com/remote-proctoringsecurity/">
                    [3]
                  </Link>
                </sup>
                . For instance, Talview employs advanced face-to-photo ID and
                voice matching capabilities to prevent impersonation and ensure
                that the student appearing for the exam is indeed the authorized
                individual.
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
              <td>D1024</td>
              <td>Online Assessment Monitoring</td>
              <td>
                Employing online assessment software capable of flagging unusual
                activities. This functionality allows educators to detect any
                suspicious activities such as the presence of additional audio
                voices and atypical body language that are observed in online
                assessments with video and audio recordings
                <sup>
                  <Link to="https://assess.com/remote-proctoringsecurity/">
                    [3]
                  </Link>
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>D1025</td>
              <td>Keystroke Authentication</td>
              <td>
                {" "}
                Utilizing software that uses keystroke analysis to assess
                different factors like typing patterns, style, rhythm, and
                pressuresup
                <sup>
                  <Link to="https://assess.com/remote-proctoringsecurity/">
                    [3]
                  </Link>
                </sup>
                . These factors are then utilized to create a unique profile
                that is extremely difficult to imitate. For instance, BioSig-ID
                is a software that applies keystroke dynamics to identify and
                authenticate users based on their unique typing patterns, adding
                an extra layer of protection against impersonation in scenarios
                such as online exams.
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
                <Link to="https://www.skillrobo.com/online-assessment-cheating/">
                  W. Developer, “Cheating in Online Assessment Tests: How Can
                  You Prevent It? - SkillRobo,” Skillrobo New, Feb. 07, 2024.
                </Link>
                ‌
              </p>
              <p>
                [2]{" "}
                <Link to="https://blog.talview.com/en/6-ways-students-cheat-in-online-proctored-exams">
                  T. Talview, “The 6 Most Common Ways Students Cheat in Online
                  Proctored Exams,” blog.talview.com. ‌
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>
                [3]
                <Link to="https://assess.com/remote-proctoringsecurity/">
                  "7 creative ways students cheat in online proctored exams-,”
                  Assessment Systems | Online Testing & Psychometrics, Sep. 27,
                  2021. ‌
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Online;
