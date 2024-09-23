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
              <td>M001</td>
              <td>Prohibition of Electronic Devices</td>
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
              <td>D001</td>
              <td>Proctoring Software</td>
              <td>
                Utilizing proctoring software that can detect if students are
                using their cell phones or other devices to access information
                during the exam. 
              </td>
            </tr>
            <tr>
              <td>D002</td>
              <td>Proctoring Guidelines</td>
              <td>
                Train proctors to specifically look for signs of students
                interacting with devices outside of the monitored computer.
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
                <Link to=" https://brightlinkprep.com/ways-to-cheat-on-online-exams/">
                  {" "}
                  "Ways to Cheat on Online Exams (and 9 Ways to Prevent It) |
                  BrightLink Prep.”
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phones;
