import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function BluetoothEarphones() {
  return (
    <div className="app-container">
      <h1>Bluetooth Earphones</h1>
      <div className="description">
        <p>
          Individuals familiar with online exam cheating often prefer wireless
          earphones, particularly those with long hair who find it easier to
          conceal their use
          <sup>
            <Link to="https://www.testportal.net/en/guides/online-test-cheating/ways-to-cheat-on-an-online-test/">
              [1]
            </Link>
          </sup>
          . Bluetooth earphones vary from noticeable Apple AirPods-style to
          nearly invisible small models. These earphones enable two-way
          communication, allowing others to search for answers online.
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
              <td>M1054</td>
              <td>Strict Proctoring <sup><Link to="https://cellbusters.com/exam-security/">[4]</Link></sup></td>
              <td>
                Implement strict live proctoring where proctors can ask to see
                the student’s surroundings, including their ears and hair.
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
              <td>D1044</td>
              <td>Audio Monitoring</td>
              <td>
                Use software that can detect feedback or the presence of
                additional audio output devices during the exam. Online
                proctoring services like ProctorU
                <sup>
                  <Link to="https://www.proctoru.com/">[1]</Link>
                </sup>
                , Examity
                <sup>
                  <Link to="https://www.examity.com/">[2]</Link>
                </sup>
                , Proctorio
                <sup>
                  <Link to=" https://proctorio.com/">[3]</Link>
                </sup>{" "}
                etc, include audio monitoring features that analyze sounds in
                the student’s environment.
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
                <Link to="https://www.proctoru.com/">
                  “ProctorU - The Leading Proctoring Solution for Online Exams,”
                  ProctorU, 2018.
                </Link>
              </p>
              <p>
                [2]{" "}
                <Link to="https://www.examity.com/">
                  “Online proctoring on your terms.,” Examity. ‌
                </Link>
              </p>
              
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6"style={{ textAlign: "left" }}>
            <p>
                [3]{" "}
                <Link to=" https://proctorio.com/">
                  “A Comprehensive Learning Integrity Platform - Proctorio,”
                  proctorio.com.
                </Link>
                ‌
              </p>
              <p>[4]<Link to="https://cellbusters.com/exam-security/">Jackandbean. (2024, March 29). 4 Proven strategies to ensure exam security. Cellbusters. </Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BluetoothEarphones;
