import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function FriendsAndFamilies() {
  return (
    <div className="app-container">
      <h1>Friends and Families</h1>

      <div className="description">
        <p>
          Studies have indicated that friends and family as one source of
          contract cheating
          <sup>
            <Link to="https://www.researchgate.net/publication/337832953_Interinstitutional_perspectives_on_contract_cheating_a_qualitative_narrative_exploration_from_Canada ">
              [1]
            </Link>
          </sup>
          . A situation where friends or family members complete assignments for
          students in whole or in part, can be a form of contract cheating that
          does not involve a financial relationship.
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
              <td>M1030</td>
              <td>Increased Support and Resources<sup><Link  to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10653228/">[2]</Link></sup></td>
              <td>
                Provide ample academic support through consultations, writing
                centers, and tutoring services to help students meet academic
                demands without resorting to cheating
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
              <td>D1017</td>
              <td>Authorship Analysis <sup><Link to="https://intapi.sciendo.com/pdf/10.2478/seeur-2022-0100#:~:text=Authorship%20Analysis%20(AA)%20is%20a,authorship%20profiling%2C%20and%20authorship%20verification.">[3]</Link></sup></td>
              <td>
                Utilize sophisticated text analysis tools that employ natural
                language processing (NLP) to analyze the writing style of
                coursework submissions. These tools can detect deviations from a
                student’s usual writing pattern, suggesting the involvement of a
                third-party writer. By comparing submissions against a student's
                previous works, these tools can identify inconsistencies in
                vocabulary, syntax, and writing style.
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
                <Link to="https://www.researchgate.net/publication/337832953_Interinstitutional_perspectives_on_contract_cheating_a_qualitative_narrative_exploration_from_Canada ">
                  [1] (PDF) Interinstitutional Perspectives on contract
                  cheating.{" "}
                </Link>
              </p>
              <p>[2] <Link to="https://doi.org/10.59390/LXMJ2920.">Miles, P., Campbell, M. and Ruxton, G. (2022). ARTICLE Why Students Cheat and How Understanding This Can Help Reduce the Frequency of Academic Misconduct in Higher Education: A Literature Review. The Journal of Undergraduate Neuroscience Education.</Link></p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>[3] <Link to="https://doi.org/10.2478/seeur-2022-0100.">Misini, A., Kadriu, A. and Canhasi, E. (2022). A Survey on Authorship Analysis Tasks and Techniques. SEEU Review, 17(2), pp.153–167.</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendsAndFamilies;
