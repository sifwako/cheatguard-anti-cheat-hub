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
              <td>M045</td>
              <td>Educational Workshops <sup><Link to="https://pcacs.ac.in/national-level-webinar-on-ipr-copyright-and-plagiarism/">[2]</Link></sup></td>
              <td>
                Conduct workshops and seminars on intellectual property and
                academic honesty to increase awareness among students.
              </td>
            </tr>
            <tr>
              <td>M046</td>
              <td>Clear Policy Communication <sup><Link to="https://www.skillstork.org/assets/diploma-programme/Academic%20Honesty%20and%20Integrity%20Policy.pdf">[3]</Link></sup> </td>
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
              <td>D034</td>
              <td>Peer Review<sup><Link to="https://melbourne-cshe.unimelb.edu.au/__data/assets/pdf_file/0006/3590943/Involving-students-in-peer-review.pdf">4</Link></sup></td>
              <td>
                Implement a system where peers review each other’s work for
                potential idea theft, providing checks and balances.
              </td>
            </tr>
            <tr>
              <td>D035</td>
              <td>Digital Comparison Tools <sup><Link to="https://blog.seorocket.ai/turnitin-checker-can-it-really-detect-undetectable-ai/">[5]</Link></sup></td>
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
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>[1]<Link to="https://edintegrity.biomedcentral.com/articles/10.1007/s40979-023-00135-2">Edidiong Orok et al., “Causes and mitigation of academicdishonesty among healthcare students in a Nigerianuniversity,” International Journal for Educational Integrity,vol. 19, no. 1, Jul. 2023. ‌</Link></p>
              <p>[2]<Link to="https://pcacs.ac.in/national-level-webinar-on-ipr-copyright-and-plagiarism/">PCACSmesac, & PCACSmesac. (2022, July 7). National Level webinar on “IPR, Copyright and Plagiarism” | PCACS. PCACS.</Link></p>
              <p>[3]<Link to="https://www.skillstork.org/assets/diploma-programme/Academic%20Honesty%20and%20Integrity%20Policy.pdf">"ACADEMIC HONESTY & INTEGRITY POLICY2023- 2024". 2023</Link></p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>[4]<Link to="https://melbourne-cshe.unimelb.edu.au/__data/assets/pdf_file/0006/3590943/Involving-students-in-peer-review.pdf.">Pearce, J., Mulder, R. and Baik, C. (2009). Involving students in peer review Case studies and practical strategies for university teaching.</Link></p>
              <p>[5]<Link to="https://blog.seorocket.ai/turnitin-checker-can-it-really-detect-undetectable-ai/">SEORocket Blog. (2024). Turnitin Checker: Can It Really Detect Undetectable AI? </Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaTheft;
