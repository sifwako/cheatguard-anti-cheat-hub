import React from "react";
import { Link } from "react-router-dom";

function PreemptiveSolutionCompilation() {
  return (
    <div className="app-container">
      <h1>T1014: Preemptive Solution Compilation</h1>
      <div className="description">
        <p>
          In open book exams, where students are permitted to use certain
          resources, the issue of preemptive solution compilation arises. This
          involves students preparing or compiling solutions to anticipated exam
          questions before the exam begins. They gather information, formulas,
          notes, or even complete answers that they expect to be tested on.
          However, the definition of what constitutes cheating in open book
          exams can be vague and may vary depending on the institution or
          instructor
          <sup>
            <Link to="https://ubiquity.acm.org/article.cfm?id=1066320">
              [1]
            </Link>
          </sup>
          .<br />
          <br />
          In open-book exams, students are allowed to use certain resources, but
          the challenge arises when students engage in preemptive solution
          compilation, potentially crossing the line between legitimate
          preparation and unethical behavior. This practice raises concerns
          about the authenticity of students' responses during the exam, as they
          may rely heavily on pre-prepared materials rather than demonstrating
          their understanding and critical thinking skills in real-time
          <sup>
            <Link to="https://ubiquity.acm.org/article.cfm?id=1066320">
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
              <td>M1061</td>
              <td>Clear Exam Guidelines </td>
              <td>
                To address the issue of preemptive solution compilation in open
                book exams, it is crucial to provide explicit instructions
                regarding permissible materials. Clear rules should be
                communicated in the syllabus and reiterated before the exam
                begins, ensuring students understand what resources they can and
                cannot use. Additional briefings may be conducted if necessary
                to reinforce these guidelines and minimize confusion. By
                establishing and communicating these instructions effectively,
                students will have a clear understanding of the boundaries and
                expectations, reducing the likelihood of preemptively preparing
                unauthorized materials{" "}
                <sup>
                  <Link to="https://ubiquity.acm.org/article.cfm?id=1066320">
                    [1]
                  </Link>
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>M1062</td>
              <td>Controlled Materials </td>
              <td>
                It is important to limit the type of materials allowed during
                the exam, such as specifying particular texts and restricting
                personal notes. Additionally, approved materials can be provided
                electronically or as handouts during the exam to ensure
                consistency and fairness among students. By defining and
                providing the authorized resources, the risk of students
                compiling solutions in advance can be minimized, promoting a
                level playing field for all participants{" "}
                <sup>
                  <Link to="https://ubiquity.acm.org/article.cfm?id=1066320">
                    [1]
                  </Link>
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>M1063</td>
              <td>Question Design </td>
              <td>
                Design questions that go beyond simple recall and instead
                require application, synthesis, and analysis of knowledge.
                Incorporate case studies, novel problem scenarios, or questions
                that link multiple concepts to assess students' understanding
                and ability to apply their knowledge in unique contexts. By
                focusing on higher-order thinking skills, the effectiveness of
                preemptively compiled solutions is diminished, encouraging
                students to engage in critical thinking and demonstrating their
                true understanding of the subject matter{" "}
                <sup>
                  <Link to="https://ubiquity.acm.org/article.cfm?id=1066320">
                    [1]
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
              <td>D1050</td>
              <td>Screen Monitoring </td>
              <td>
                Implement real-time screen monitoring where proctors or faculty
                can view student screens during the exam. Tools such as VNC or
                dedicated educational monitoring solutions allow for live
                viewing and recording of student activities, helping to identify
                any attempts to access unauthorized materials
                <sup>
                  <Link to="https://ubiquity.acm.org/article.cfm?id=1066320">
                    [1]
                  </Link>
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>D1051</td>
              <td>Activity Logs </td>
              <td>
                Use system-generated activity logs to monitor file access and
                application usage. Set up alerts for when students open
                non-approved applications or navigate to restricted websites.
                This method requires prior setup to log relevant activities on
                each student's device{" "}
                <sup>
                  <Link to="https://ubiquity.acm.org/article.cfm?id=1066320">
                    [1]
                  </Link>
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>D1052</td>
              <td>Whitelist Applications and Websites </td>
              <td>
                Set up a system that allows only whitelisted applications and
                websites to be accessed during the exam. This can be implemented
                through network or local computer restrictions that block all
                other resources except those explicitly allowed
                <sup>
                  <Link to="https://ubiquity.acm.org/article.cfm?id=1066320">
                    [1]
                  </Link>
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>D1053</td>
              <td>Manual Proctoring </td>
              <td>
                Having human proctors supervise the exam environment can act as
                a deterrent to cheating. Proctors can be tasked with periodic
                checks of student activity and managing the exam process to
                ensure compliance with rules.
                <sup>
                  <Link to="https://ubiquity.acm.org/article.cfm?id=1066320">
                    [1]
                  </Link>
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
                {" "}
                [1]
                <Link to="https://ubiquity.acm.org/article.cfm?id=1066320">
                  “Ubiquity: PCs in the classroom & open book exams,”
                  ubiquity.acm.org. ‌
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreemptiveSolutionCompilation;
