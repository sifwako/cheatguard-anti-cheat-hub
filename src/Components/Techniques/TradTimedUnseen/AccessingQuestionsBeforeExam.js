import React from "react";
import { Link } from "react-router-dom";

function AccessingQuestionsBeforeExam() {
  return (
    <div className="app-container">
      <h1>Accessing Questions Before Exam</h1>
      <div className="description">
        <p>
          In unseen examinations, where the exam content is supposed to be
          confidential until the test session, "Accessing Questions Before Exam"
          refers to the illicit act of obtaining exam questions or key details
          about the exam content ahead of the scheduled time{" "}
          <sup>
            <Link to="https://www.testportal.net/en/guides/online-test-cheating/ways-to-cheat-on-an-online-test/">
              [1]
            </Link>
          </sup>{" "}
          <sup>
            <Link to="https://www.reddit.com/r/AskAnAmerican/comments/z20yoq/is_seeing_what_the_exam_questions_are_in_advance/">
              [2]
            </Link>
          </sup>
          <sup>
            <Link to="https://typeset.io/questions/gain-access-to-the-exam-ahead-of-time-is-cheating-9z9db04myh">
              [3]
            </Link>
          </sup>
          . This form of cheating undermines the fundamental principle of
          fairness and the validity of the examination process. Students who
          gain prior access to exam questions can prepare specific responses or
          distribute the information to others, creating an unequal testing
          environment. This breach not only compromises the evaluation of
          student capabilities but also the integrity of the entire educational
          institution.
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
              <td>M1034</td>
              <td>Physical Security </td>
              <td>
                Enhance security where physical copies are stored, such as using
                safes and restricted access rooms. This can be achieved by
                installing security cameras and employ personnel to monitor
                sensitive locations.{" "}
                <sup>
                  <Link to="https://www.testportal.net/en/guides/online-test-cheating/ways-to-cheat-on-an-online-test/">
                    [1]
                  </Link>
                </sup>{" "}
                <sup>
                  <Link to="https://www.reddit.com/r/AskAnAmerican/comments/z20yoq/is_seeing_what_the_exam_questions_are_in_advance/">
                    [2]
                  </Link>
                </sup>
                <sup>
                  <Link to="https://typeset.io/questions/gain-access-to-the-exam-ahead-of-time-is-cheating-9z9db04myh">
                    [3]
                  </Link>
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>M1035</td>
              <td>Regular Policy Review</td>
              <td>
                Continuously update policies regarding the handling and
                distribution of exam materials. Schedule annual reviews of
                security policies and adjust based on the latest security trends
              </td>
            </tr>
            <tr>
              <td>M1036</td>
              <td>Randomization</td>
              <td>
                Use randomization techniques to create multiple versions of the
                exam with different question orders or answer choices
                <sup>
                  <Link to="https://tlconestoga.ca/preventing-cheating-on-paper-based-exams/">
                    [4]
                  </Link>
                </sup>
                . This makes it difficult for students to prepare by memorizing
                specific questions or answers
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
              <td>D1035</td>
              <td>Regular System Audits </td>
              <td>
                Regularly audit the IT systems used for exam preparation and
                distribution to identify vulnerabilities, ensure compliance with
                security standards, and enhance overall security in online
                exams.
              </td>
            </tr>
            <tr>
              <td>D1036</td>
              <td>Whistleblower Policies</td>
              <td>
                Encourage reporting of unethical behavior with protection for
                whistleblowers{" "}
                <sup>
                  <Link to="https://whistleblowersoftware.com/en/whistleblowing-system">
                    [5]
                  </Link>
                </sup>
                . Establishing a secure and anonymous reporting system for
                students and staff will help in achieving this.
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
                <Link to="https://www.testportal.net/en/guides/online-test-cheating/ways-to-cheat-on-an-online-test/">
                  “Testportal: Different ways to cheat on an online test |
                  Guides,” Testportal. ‌
                </Link>
              </p>
              <p>
                [2]{" "}
                <Link to="https://www.reddit.com/r/AskAnAmerican/comments/z20yoq/is_seeing_what_the_exam_questions_are_in_advance/">
                  {" "}
                  Is seeing what the exam questions are in advance considered
                  cheating in the USA? : R/askanamerican{" "}
                </Link>
              </p>
              <p>
                {" "}
                [3]{" "}
                <Link to="https://typeset.io/questions/gain-access-to-the-exam-ahead-of-time-is-cheating-9z9db04myh">
                  {" "}
                  L. B et al., “Is having access to past exams cheating and, if
                  yes, could it be proven just by a good grade?,” Academia Stack
                  Exchange.{" "}
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>
                [4]{" "}
                <Link to="https://tlconestoga.ca/preventing-cheating-on-paper-based-exams/">
                  jwilkinson, “Preventing Cheating on Paper-Based Exams,”
                  Faculty Learning Hub, Dec. 01, 2017. ‌
                </Link>
              </p>
              <p>
                [5]{" "}
                <Link to="https://whistleblowersoftware.com/en/whistleblowing-system">
                  “Whistleblowing System: Discover Benefits For Companies,”
                  whistleblowersoftware.com.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccessingQuestionsBeforeExam;
