import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function WearableDevices() {
  return (
    <div className="app-container">
      <h1> Wearable Devices </h1>
      <div className="description">
        <p>
          The smartwatch, a modern spy gadget, is designed for students to cheat
          in exams discreetly. Resembling a regular watch with standard features
          like a display and alarm, it secretly houses advanced technology for
          cheating. This includes taking photos, recording voices, capturing
          video, and internet browsing. Data recorded can be used in the exam
          through a wireless earpiece or sent to someone outside for answers,
          which are then received on the smartwatch
          <sup>
            <Link to="https://learnpar.com/exam-cheating-gadgets/">[1]</Link>
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
              <td>M001</td>
              <td>Ban on Wearable Technology </td>
              <td>
                Explicitly prohibit the use of all wearable technology,
                including smartwatches, during exams and clearly communicate
                this policy to all students.
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
              <td>Implement physical checks</td>
              <td>
                Ensure that students are not wearing smartwatches or any other
                prohibited devices before exams. The visual inspection can
                assist in identifying and preventing cheating with wearable
                technology.
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
                [1]
                <Link to="https://learnpar.com/exam-cheating-gadgets/">
                  J. Kenas, “7 Exam Cheating Gadgets and Devices students
                  commonly use,” LearnPar, Jan. 05, 2024. ‌
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WearableDevices;
