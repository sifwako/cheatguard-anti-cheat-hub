import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Impersonation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="app-container">
      <h1>Impersonation</h1>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          onClick={toggleDropdown}
        >
          Sub-techniques (2)
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
                  <Link to="/in-person" className="dropdown-item">
                    T1002.001
                  </Link>
                </td>
                <td>
                  <Link to="/in-person" className="dropdown-item">
                    In-Person
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/online" className="dropdown-item">
                  T1002.002
                  </Link>
                </td>
                <td>
                  <Link to="/online" className="dropdown-item">
                    Online
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <div className="description">
        <p>
          Impersonation in viva assessments, which includes oral exams or
          defenses, is a critical concern in both online and offline settings.
          Viva assessments are typically implemented to counteract cheating in
          traditional written assessments by directly engaging students in a
          verbal dialogue, requiring them to demonstrate their knowledge and
          thinking processes in real-time. This method is intended to provide a
          robust measure of a student's understanding and capabilities, making
          it harder to cheat compared to written tests. <br />
          <br />
          However, viva assessments are vulnerable to impersonation, where a
          substitute takes the place of the actual student. This can occur in
          both physical settings, where the impersonator physically attends the
          exam, and in online formats, where identity verification is more
          challenging
          <sup>
            <Link to="https://www.skillrobo.com/online-assessment-cheating/">
              [1]{" "}
            </Link>{" "}
          </sup>
          . Such incidents of impersonation severely compromise the integrity of
          the assessment, as they falsely represent a student's academic
          abilities.
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
              <td>M1015</td>
              <td>Identity Verification</td>
              <td>
                Implement rigorous identity verification processes both before
                and during the viva assessment. This can include photo ID checks
                for in-person exams and two-factor authentication methods for
                online assessments.
              </td>
            </tr>
            <tr>
              <td>M1016</td>
              <td>Examiner Familiarity</td>
              <td>
                Utilize examiners who are familiar with the students,
                potentially including their academic supervisors or lecturers
                who have interacted with them throughout the course. This helps
                in recognizing impersonation attempts during the assessment.
              </td>
            </tr>
            <tr>
              <td>M1017</td>
              <td>Secure Environment</td>
              <td>
                Conduct assessments in controlled environments where entry and
                exit points are monitored. For online vivas, use secure
                platforms that log entry, exit, and identity verification data.
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
            <td>Mitigation</td>
            <td>Description</td>
          </thead>
          <tbody>
            <tr>
              <td>D1018</td>
              <td>Visual Confirmation</td>
              <td>
                Use facial recognition technology or manual checks by the
                examiner to confirm the identity of the student at the start and
                throughout the viva assessment. Proctoring softwares like
                Talview incorporates advanced face-to-photo ID and
                voice-matching features that allows exsminers to ensure the
                authenticity of the test-taker.{" "}
                <sup>
                  <Link to="https://blog.talview.com/en/6-ways-students-cheat-in-online-proctored-exams">
                    [2]{" "}
                  </Link>{" "}
                </sup>
                <sup>
                  <Link to="https://www.skillrobo.com/online-assessment-cheating/">
                    [1]{" "}
                  </Link>{" "}
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>D1019</td>
              <td>Behavioral Analysis </td>
              <td>
                Analyze speech patterns, knowledge articulation, and other
                behavioral indicators that may suggest the person participating
                is not the actual student.
              </td>
            </tr>
            <tr>
              <td>D1020</td>
              <td>Documentation Review </td>
              <td>
                Review previous records of the student's interactions,
                presentations, and any recorded sessions to match with the
                individual's performance and appearance during the viva.
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
                <Link to="https://www.skillrobo.com/online-assessment-cheating/">
                  W. Developer, “Cheating in Online Assessment Tests: How Can
                  You Prevent It? - SkillRobo,” Skillrobo New, Feb. 07, 2024.
                  https://www.skillrobo.com/online-assessment-cheating/
                  (accessed May 10, 2024). ‌
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>
                [2]{" "}
                <Link to="https://blog.talview.com/en/6-ways-students-cheat-in-online-proctored-exams">
                  T. Talview, “The 6 Most Common Ways Students Cheat in Online
                  Proctored Exams,” blog.talview.com.
                  https://blog.talview.com/en/6-ways-students-cheat-in-online-proctored-exams
                  (accessed May 10, 2024). ‌
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impersonation;
