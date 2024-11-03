import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function PastData() {
  return (
    <div className="app-container">
      <h1>T1070: Use of Past Data</h1>
      <div className="description">
        <p>
        It is also possible for students to gain an unfair advantage during the lab work by using previous reports or data. A student may  copy lab reports from past students and then use them as guides for completing their own assignments without having to perform the lab themselves<sup><Link to='https://forums.premed101.com/topic/67225-students-who-cheat-on-lab-reports/'>[1]</Link></sup>. In this way, they will be able to save a substantial amount of time and energy since they will not have to conduct experiments and analyze results independently. ⁤⁤This type of behavior undermines the primary goal of lab work, which is to develop hands-on skills, critical thinking, and problem-solving skills. Moreover, it creates an unfair situation where students who follow the rules and invest genuine effort are at a disadvantage, ultimately compromising academic integrity. ⁤
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
              <td>M1090</td>
              <td>Contextual Requirements</td>
              <td>
              Designing assessments with specific contextual elements that make irregularities easier to detect<sup><Link to='https://edintegrity.biomedcentral.com/articles/10.1007/s40979-017-0021-6'>[5]</Link></sup>
              </td>
            </tr>
            <tr>
              <td>M1091</td>
              <td>Randomization</td>
              <td>
              Using randomized questions in pre-lab homework and quizzes<sup><Link to='https://www.catalystedu.com/blog/n5dc83zwcuhfmq5kgulbbugpnhrfpx'>[3]</Link></sup>
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
              <td>D1089</td>
              <td>Manual Observation </td>
              <td>
                Experienced assessors can be able to identify inconsistency in student submissions by looking at specific patterns like misrepresented bibliographic data, inappropriate references and generalized text that doesn't address the assessment question 
                <sup>
                  <Link to="https://edintegrity.biomedcentral.com/articles/10.1007/s40979-017-0021-6">
                    [1]
                  </Link>
                </sup>
              </td>
            </tr>
            <tr>
              <td>D1088</td>
              <td>Technological Solutions</td>
            <td>Using tools such as plagiarism detection software (e.g., Turnitin integrated with Labflow)<sup><Link to='https://www.catalystedu.com/blog/n5dc83zwcuhfmq5kgulbbugpnhrfpx'>[3]</Link></sup>, similarity checking between student submissions<sup><Link to='https://www.catalystedu.com/blog/n5dc83zwcuhfmq5kgulbbugpnhrfpx'>[3]</Link></sup>, and advanced machine learning approaches (including LSTM networks and dense layers) it is possible to address the issue of using past data and result. <sup><Link to='https://www.mdpi.com/1424-8220/23/8/4149'></Link></sup>,</td>
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
                <Link to="https://forums.premed101.com/topic/67225-students-who-cheat-on-lab-reports/">
                ciel999, 470,  ciel999 M., NutritionRunner, 1kLocationOntario, N. M., future_doc, 18.2k,  future_doc M., Aaronjw, 4.6k,  aaronjw M., Author, futureGP, 980,  futureGP M., Rmorelan, 19.6k,  rmorelan S. M., Ellorie, 2.3k LocationToronto,  ellorie M., NewfieMike, 2.4k, N. S. M., seeking1, 1.1k,  seeking1 M., … 1.8k, R. S. M. (2013, February 5). Students who cheat on lab reports. Premed 101 Forums. ‌
                </Link>
              </p>
              <p>[2]<Link to='https://edintegrity.biomedcentral.com/articles/10.1007/s40979-017-0021-6 '>Rogerson, A. M. (2017, November 14). Detecting contract cheating in essay and report submissions: Process, patterns, Clues and conversations - international journal for educational integrity. BioMed Central. </Link></p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
            <p>[3]<Link to='https://www.catalystedu.com/blog/n5dc83zwcuhfmq5kgulbbugpnhrfpx'>Caras, J. (2024, March 25). Plagiarism detection in laboratory courseware. Catalyst Education.</Link></p>

            <p>[4]<Link to='https://www.mdpi.com/1424-8220/23/8/4149'>Alsabhan, W. (2023, April 20). Student cheating detection in higher education by Implementing Machine Learning and LSTM techniques. MDPI.</Link></p>
            <p>[5]<Link to='https://edintegrity.biomedcentral.com/articles/10.1007/s40979-017-0021-6'>Rogerson, A. M. (2017a, November 14). Detecting contract cheating in essay and report submissions: Process, patterns, Clues and conversations - international journal for educational integrity. BioMed Central.</Link></p>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default PastData;
