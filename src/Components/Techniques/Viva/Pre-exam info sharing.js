import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function PreExamInformationSharing() {
  return (
    <div className="app-container">
      <h1>T1008: Pre-exam Information Sharing</h1>

      <div className="description">
        <p>
          In viva assessments, a common cheating technique occurs when students
          who have already completed their oral examinations passes on questions
          or topics to those scheduled to take the exam later
          <sup>
            <Link to="https://otl.uoguelph.ca/guidelines-oral-assessments-and-exams">
              [1]
            </Link>
          </sup>
          . When students share detailed insights about the questions asked or
          the specific focus areas of the exam, subsequent candidates gain an
          unfair advantage. They have the opportunity to prepare precise answers
          or tailor their responses based on the information disclosed. This not
          only undermines the fairness of the examination process but also
          compromises the assessment's ability to accurately assess each
          student’s individual understanding and performance.
          <br />
          <br />
          The shared information allows students who have not yet taken the viva
          to engage in targeted preparations, effectively bypassing the
          spontaneity and rigorous nature of oral examinations designed to check
          genuine understanding and critical thinking. This not only skews the
          results but can also affect the academic standing and evaluation of
          skills supposedly represented by the assessment.
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
              <td>M1037</td>
              <td>Varying Question Sets <sup><Link to="https://www.facultyfocus.com/articles/educational-assessment/fourteen-simple-strategies-to-reduce-cheating-on-online-examinations/">[3]</Link></sup></td>
              <td>
                Develop multiple sets of examination questions and rotate them
                unpredictably among candidates to reduce the effectiveness of
                sharing specific questions.
              </td>
            </tr>
            <tr>
              <td>M1038</td>
              <td>Schedule Adjustments <sup><Link to="https://www.westernsydney.edu.au/__data/assets/pdf_file/0011/1757837/Designing_and_Assessing_Vivas.pdf">[4]</Link></sup></td>
              <td>
                Minimize the time gap between successive viva sessions or
                schedule them simultaneously to limit the opportunity for
                sharing information between candidates.
              </td>
            </tr>
            <tr>
              <td>M1039</td>
              <td>Non-disclosure Agreements<sup><Link to="https://www.westernsydney.edu.au/__data/assets/pdf_file/0011/1757837/Designing_and_Assessing_Vivas.pdf">[4]</Link></sup> </td>
              <td>
                Require students to sign non-disclosure agreements that legally
                bind them to keep examination content confidential, deterring
                information sharing through formal commitment.
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
              <td>D1026</td>
              <td>Analysis of Student Performance Patterns<sup><Link to="https://www.westernsydney.edu.au/__data/assets/pdf_file/0011/1757837/Designing_and_Assessing_Vivas.pdf">[4]</Link></sup></td>
              <td>
                Analyze patterns in responses and performance across different
                viva sessions to identify anomalies that suggest shared
                information, such as clusters of students providing similar,
                specific answers.
              </td>
            </tr>
            <tr>
              <td>D1027</td>
              <td>Examiner Vigilance</td>
              <td>
                Train examiners to recognize when a student’s responses seem
                overly prepared or suspiciously aligned with specific
                anticipated questions, which may suggest prior knowledge of exam
                content
                <sup>
                  <Link to="https://www.mdpi.com/2227-7102/13/2/148">[2]</Link>
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
                <Link to="https://otl.uoguelph.ca/guidelines-oral-assessments-and-exams">
                  “Guidelines for Oral Assessments and Exams | Office of
                  Teaching and Learning,” otl.uoguelph.ca.
                  https://otl.uoguelph.ca/guidelines-oral-assessments-and-exams
                </Link>
              </p>
              <p>[2]{" "}<Link to="https://www.mdpi.com/2227-7102/13/2/148">D. B. Guruge and R. Kadel, “Towards an Holistic Framework to Mitigate and Detect Contract Cheating within an Academic Institute—A Proposal,” Education Sciences, vol. 13, no. 2, p.148, Jan. 2023, doi: https://doi.org/10.3390/educsci13020148.</Link></p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>[3]<Link to="https://www.facultyfocus.com/articles/educational-assessment/fourteen-simple-strategies-to-reduce-cheating-on-online-examinations/">Budhai, S. S., PhD. (2020, May 5). Fourteen simple strategies to reduce cheating on Online examinations. Faculty Focus | Higher Ed Teaching & Learning.</Link></p>
              <p>[4]<Link to="https://www.westernsydney.edu.au/__data/assets/pdf_file/0011/1757837/Designing_and_Assessing_Vivas.pdf.">DESIGNING AND ASSESSING VIVAS. (n.d.).</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreExamInformationSharing;
