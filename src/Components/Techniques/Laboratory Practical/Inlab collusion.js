import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function InLabCollusion() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="app-container">
      <h1>T1009: In-Lab Collusion</h1>
      <div className="description">
        <p>
          In the context of educational settings, collusion among students
          during proficiency testing can seriously compromise the integrity of
          the evaluation process. This form of cheating occurs when individuals
          from different academic groups or laboratories collaborate secretly to
          manipulate their submissions{" "}
          <sup>
            <Link to="https://iopscience.iop.org/article/10.1088/1742-6596/1065/21/212001/pdf">
              [1]
            </Link>
          </sup>
          <sup>
            <Link to="https://tr.uow.edu.au/uow/file/abad43f2-b322-41a7-bcf0-967683883672/5/resources/module_1_misconduct.html">
              [2]
            </Link>
          </sup>
          . By sharing answers, methodologies, or data, these students seek to
          unfairly enhance their performance on tests designed to assess their
          proficiency in specific subjects or skills. <br />
          <br />
          Such collusion distorts the true capabilities of the students involved
          and undermines the validity of the testing process, which is intended
          to measure individual competence and understanding accurately. This
          behavior not only threatens the educational standards but also
          diminishes the value of the credentials awarded based on these
          assessments, potentially affecting future academic and professional
          opportunities for all students.
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
              <td>M1040</td>
              <td>Unique Tasks</td>
              <td>
                Designing laboratory assessments with unique, non-repeating
                tasks or datasets for each student is a key strategy to reduce
                the feasibility of collusion in practical assessments{" "}
                <sup>
                  <Link to="https://iopscience.iop.org/article/10.1088/1742-6596/1065/21/212001/pdf">
                    [1]
                  </Link>
                </sup>
                <sup>
                  <Link to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9193284/">
                    [3]
                  </Link>
                </sup>
                . By assigning students different sets of samples or questions,
                it becomes challenging for them to share work or manipulate
                results.
              </td>
            </tr>
            <tr>
              <td>M1041</td>
              <td>Clear Conduct Guidelines</td>
              <td>
                Implement and enforce strict guidelines about collaboration and
                interaction during lab assessments, making the rules and
                consequences clear to all students{" "}
                <sup>
                  <Link to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9193284/">
                    [4]
                  </Link>
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>M1042</td>
              <td>Enhanced Supervision <sup><Link to="https://arxiv.org/pdf/2201.01154">[5]</Link></sup></td>
              <td>
                Increase instructor or lab assistant vigilance during
                assessments to actively monitor student behavior and
                interactions.
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
              <td>D1030</td>
              <td>Similarity Analysis </td>
              <td>
                To identify potential collusion among students, it is important
                to analyze the similarity of lab reports, data sets, or
                calculations submitted by them{" "}
                <sup>
                  <Link to="https://iopscience.iop.org/article/10.1088/1742-6596/1065/21/212001/pdf">
                    [1]
                  </Link>
                </sup>
                . If there are unusual overlaps or similarities that cannot be
                reasonably explained, it may suggest collusion or unauthorized
                collaboration.
              </td>
            </tr>
            <tr>
              <td>D1031</td>
              <td>Random Questioning <sup><Link to="https://arxiv.org/pdf/2201.01154">[5]</Link></sup></td>
              <td>
                Conduct spontaneous oral questioning during the lab to assess
                whether students understand the work they are submitting, which
                can reveal discrepancies indicative of collusion.
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
                <Link to="https://iopscience.iop.org/article/10.1088/1742-6596/1065/21/212001/pdf">
                  P. Briggs, “Collusion and falsification of results in
                  proficiency testing,” Journal of physics. Conference series,
                  vol. 1065, pp. 212001–212001, Aug. 2018, doi:
                  https://doi.org/10.1088/1742-6596/1065/21/212001. ‌
                </Link>
              </p>
              <p>
                [3]{" "}
                <Link to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9193284/">
                  A. Coutts, “Identifying communication spillovers in
                  lab-in-the-field experiments,” Journal of Development
                  Economics, vol. 157, p. 102845, Jun. 2022, doi:
                  https://doi.org/10.1016/j.jdeveco.2022.102845. ‌
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>
                [2]{" "}
                <Link to="https://tr.uow.edu.au/uow/file/abad43f2-b322-41a7-bcf0-967683883672/5/resources/module_1_misconduct.html">
                  “StartSmart,” tr.uow.edu.au.
                  https://tr.uow.edu.au/uow/file/abad43f2-b322-41a7-bcf0-967683883672/5/resources/module_1_misconduct.html
                  ‌
                </Link>
              </p>
              [4]{" "}
              <Link to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9193284/">
                A. Coutts, “Identifying communication spillovers in
                lab-in-the-field experiments,” Journal of Development Economics,
                vol. 157, p. 102845, Jun. 2022, doi:
                https://doi.org/10.1016/j.jdeveco.2022.102845. ‌
              </Link>
              <p>[5]<Link to="https://doi.org/10.1145/3478431.3499420.">Vykopal, J., Valdemar Švábenský, Seda, P. and Pavel Čeleda (2022). Preventing Cheating in Hands-on Lab Assignments. Proceedings of the 53rd ACM Technical Symposium on Computer Science Education.</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InLabCollusion;
