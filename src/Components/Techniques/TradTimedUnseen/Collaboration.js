import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function Collaboration() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="app-container">
      <h1>T1011: Collaboration</h1>

      <div className="description">
        <p>
          Collaboration in unseen examinations refers to students working
          together or sharing information during exams that are intended to be
          completed individually
          <sup>
            <Link to="https://camosun.libguides.com/academicintegrity/collaborationvscollusion#s-lg-box-16303355">
              [1]
            </Link>
          </sup>
          <sup>
            <Link to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8898996/">
              [7]
            </Link>
          </sup>

          . This cheating technique is often tempted by the assumption that
          students will have independently reviewed the entire curriculum, thus
          exams tend to focus on broader knowledge and understanding. When exams
          primarily test basic recall of information, they inadvertently
          encourage students to collaborate as a means to cover more content
          with less individual effort. Collaboration during exams can involve
          signaling answers, sharing written notes, or even digital
          communication if monitoring is poor.
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
              <td>M1045</td>
              <td>Test Question Randomization</td>
              <td>
                Utilize test question randomization to ensure each student
                receives a unique set of questions, making it harder for
                students to share useful answers. This strategy enhances exam
                fairness and integrity by minimizing opportunities for cheating,
                especially in asynchronous testing scenarios where students take
                exams at different times
                <sup>
                  <Link to="https://www.taotesting.com/blog/how-test-question-randomization-improves-exam-integrity/">
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
              <td>D1034</td>
              <td>Digital Monitoring Tools </td>
              <td>
                Use advanced digital tools that can monitor and log students'
                actions during an online test, detecting patterns such as
                switching between screens, which might suggest looking up
                answers or communicating with peers
                <sup>
                  <Link to="https://www.taotesting.com/blog/how-test-question-randomization-improves-exam-integrity/">
                    [2]
                  </Link>
                </sup>
                . These include online proctoring software like Proctorio
                <sup>
                  <Link to="https://proctorio.com/">[3]</Link>
                </sup>
                , Examity{" "}
                <sup>
                  <Link to="https://www.examity.coma/">[4]</Link>
                </sup>
                , and ProctorU
                <sup>
                  <Link to="https://www.proctoru.com/">[5]</Link>
                </sup>
                , which utilize real-time monitoring features such as video
                recording, screen sharing, and facial recognition.
              </td>
            </tr>
            <tr>
              <td>D1035</td>
              <td>Post-Examination Reviews</td>
              <td>
                Conduct random interviews or ask follow-up questions post-exam
                to assess individual understanding and ensure the answers
                submitted during the exam were independently derived
                <sup>
                  <Link to="https://youtu.be/WiB6WXUT8pc">[6]</Link>
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
                <Link to="https://camosun.libguides.com/academicintegrity/collaborationvscollusion#s-lg-box-16303355">
                  P. Scott, “Research guides: Academic Integrity Course:
                  Collaboration vs. collusion,” camosun.libguides.com.
                  https://camosun.libguides.com/academicintegrity/collaborationvscollusion#s-lg-box-16303355
                  (accessed May 10, 2024).
                </Link>
              </p>
              <p>
                [2]{" "}
                <Link to="https://www.taotesting.com/blog/how-test-question-randomization-improves-exam-integrity/">
                  S. Leonard, “How Test Question Randomization Improves Exam
                  Integrity,” TAO, Jun. 28, 2023.
                  https://www.taotesting.com/blog/how-test-question-randomization-improves-exam-integrity/
                  (accessed May 10, 2024).‌
                </Link>
              </p>
              <p>
                [3]{" "}
                <Link to="https://proctorio.com/">
                  “A Comprehensive Learning Integrity Platform - Proctorio,”
                  proctorio.com. https://proctorio.com/‌
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>
                [4]{" "}
                <Link to="https://www.examity.coma/">
                  “Online proctoring on your terms.,” Examity.
                  https://www.examity.com/
                </Link>
              </p>
              <p>
                [5]{" "}
                <Link to="https://www.proctoru.com/">
                  “ProctorU - The Leading Proctoring Solution for Online Exams,”
                  ProctorU, 2018. https://www.proctoru.com/
                </Link>
              </p>
              <p>
                [6]{" "}
                <Link to="https://youtu.be/WiB6WXUT8pc">
                  “Detecting and Investigating Contract Cheating Cases and
                  Supporting Students Through the Process,” www.youtube.com.
                  https://youtu.be/WiB6WXUT8pc (accessed May 10, 2024).‌
                </Link>
              </p>
              <p>[7]<Link to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8898996/">F. Noorbehbahani, A. Mohammadi, and M. Aminazadeh, “A systematic review of research on cheating in online exams from 2010 to 2021,” Educ Inf Technol (Dordr), vol. 27, no. 6, p. 8413, Jul. 2022.</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaboration;
