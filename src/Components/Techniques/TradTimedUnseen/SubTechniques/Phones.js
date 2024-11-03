import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Phones() {
  return (
    <div className="app-container">
      <h1>Phones</h1>
      <div className="description">
        <p>
          This cheating technique involves using smartphones or tablets to
          discreetly access answers during online exams
          <sup>
            <Link to=" https://brightlinkprep.com/ways-to-cheat-on-online-exams/">
              [1]
            </Link>
          </sup>
          . Cheaters can hide their device from the proctor's view, for
          instance, by placing it against the computer screen. Moreover, they
          can exploit voice-activated assistants like Siri or Google Assistant
          to obtain answers audibly by simply saying a voice command. This
          method allows cheaters to access information without typing or making
          their device visible, posing a challenge for maintaining academic
          integrity in online assessments.
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
              <td>M1057</td>
              <td>Prohibition of Electronic Devices <sup><Link to="https://ofqual.blog.gov.uk/2023/04/18/mobile-phones-in-exams-what-malpractice-stats-show-us/">[2]</Link></sup></td>
              <td>
                Prohibit students from having any electronic devices other than
                the computer they are testing on. Explicitly ban cell phones,
                smartwatches, earphones, etc. in the exam rules
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
              <td>D1046</td>
              <td>Proctoring Software <sup><Link to="https://assess.com/remote-proctoringsecurity/">[3]</Link></sup></td>
              <td>
                Utilizing proctoring software that can detect if students are
                using their cell phones or other devices to access information
                during the exam. 
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
                <Link to=" https://brightlinkprep.com/ways-to-cheat-on-online-exams/">
                  {" "}
                  "Ways to Cheat on Online Exams (and 9 Ways to Prevent It) |
                  BrightLink Prep.”
                </Link>
              </p>
              <p>[2]<Link to="https://ofqual.blog.gov.uk/2023/04/18/mobile-phones-in-exams-what-malpractice-stats-show-us/">Bradley, H. (2023, April 18). Mobile phones in exams: what malpractice stats show us.</Link></p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>[3]<Link to="https://assess.com/remote-proctoringsecurity/">Admin. (2024, July 3). How students cheat in online exams and how to catch them. Assessment Systems.</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phones;
