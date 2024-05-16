import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function EssayMills() {
  return (
    <div className="app-container">
      <h1>Essay Mills</h1>

      <div className="description">
        <p>
          A contract cheating service or essay mill is an organization or
          individual that contracts with students to complete academic
          assignments for a fee. By providing students with completed work that
          they can submit as their own, these services facilitate academic
          dishonesty. Many essay mills recruit writers through bidding processes
          and operate for profit rather than to provide a good service to their
          customers{" "}
          <sup>
            {" "}
            <Link to="https://doi.org/10.1007/s40979-021-00081-x.">[1]</Link>
          </sup>
          . Clients specify the essay's subject and desired length, and pay a
          per-page fee for the service and the firm then allocates the essay to
          a writer, who might not specialize in the topic, to complete and
          return to the client within a given deadline
          <sup>
            <Link to="https://blogs.lse.ac.uk/impactofsocialsciences/2017/12/12/the-crumbling-facade-my-experience-working-for-an-essay-mill/">
              [2]
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
              <td>M1011</td>
              <td>Customized Assignments</td>
              <td>
                Designing assignments that require specific, personalized
                responses or that are closely integrated with class discussions
                and activities, making it difficult for contract writers to
                adequately meet the assignment criteria.
              </td>
            </tr>
            <tr>
              <td>M1012</td>
              <td>Oral Defenses</td>
              <td>
                Implementing oral defenses where students must discuss and
                defend their submitted work in front of instructors, helping to
                confirm authorship and understanding of the content.
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
              <td>D1011</td>
              <td>Analysis of Themes and Topics</td>
              <td>
                A submission that include general terms or topics where the
                answer is not directly relate to the themes and topics discussed
                during lectures and tutorials can be an indication of contracted
                work
                <sup>
                  <Link to="https://www.hw.ac.uk/uk/services/docs/academic-registry/contractcheating-staffguide.pdf">
                    [3]
                  </Link>
                </sup>
                . This is because the contract assignment writers doesn't have
                the detail of the assessment as well as materials taught in
                class{" "}
              </td>
            </tr>
            <tr>
              <td>D1012</td>
              <td>Template Similarity</td>
              <td>
                Another indication is that paid sources like ‘essay mills’ often
                have their own set of template to folllow to complete
                assessments including cover pages, headers, etc. Encountering a
                similar template from students in various courses often serves
                as a significant warning sign
                <sup>
                  <Link to="https://www.hw.ac.uk/uk/services/docs/academic-registry/contractcheating-staffguide.pdf">
                    [3]
                  </Link>
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>D1013</td>
              <td>Document Metadata:</td>
              <td>
                It is also possible to reveal the original author's name or the
                person who last modified the document and the editing time by
                accessing the document properties (Go To:File--Info), before
                saving it{" "}
                <sup>
                  <Link to="https://www.hw.ac.uk/uk/services/docs/academic-registry/contractcheating-staffguide.pdf">
                    [3]
                  </Link>
                </sup>
                . Students often hesitate to alter that particular detail and
                tend to submit the document as it is. If the author or last
                editor is not the student, it raises suspicion.{" "}
              </td>
            </tr>
            <tr>
              <td>D1014</td>
              <td>Language Analysis</td>
              <td>
                A student who submits a work with perfect grammar and uses
                uncommon words in a sophisticated manner, especially if English
                is not their first language, indicates a red flag about the
                authenticity of their work. This could suggest the involvement
                of professional writers or subject matter experts
                <sup>
                  <Link to="https://www.hw.ac.uk/uk/services/docs/academic-registry/contractcheating-staffguide.pdf">
                    [3]
                  </Link>
                </sup>
                . To confirm or dismiss these suspicions, it can be helpful to
                compare their language abilities with their email communications
                and other submitted assessments.
              </td>
            </tr>
            <tr>
              <td>D1015</td>
              <td>Comparison with Previous Submissions</td>
              <td>
                {" "}
                Another way to determine if a student's work has been contracted
                is to compare it with their previous submissions and assess the
                consistency in quality. It is possible to seek access to the
                student's submissions in other courses and see if the quality is
                consistent to the submitted work
                <sup>
                  <Link to="https://www.hw.ac.uk/uk/services/docs/academic-registry/contractcheating-staffguide.pdf">
                    [3]
                  </Link>
                </sup>
                . . While it is normal for some students to improve their work
                over time, a sudden and notable improvement in writing style and
                academic performance can indicate the involvement of contracted
                work.
              </td>
            </tr>
            <tr>
              <td>D1016</td>
              <td>Plagiarism Detection Software</td>
              <td>
                {" "}
                As detecting submitted student works manually might be
                challenging and time consuming, the use of plagiarism detection
                software is essential
                <sup>
                  <Link to="https://doi.org/10.53761/1.6.1.6.">[4]</Link>
                </sup>
                . These tools help identify instances of plagiarism and can be
                particularly useful in detecting works produced by essay mill
                services. Essay millers often provide similar works to multiple
                students with minor modifications, making it possible for
                students to submit content that has been generated by these
                services. Among the various plagiarism detection software
                options available, Turnitin is widely regarded as the most
                robust and highly recommended tool.{" "}
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
                <Link to="https://doi.org/10.1007/s40979-021-00081-x.">
                  M. Draper, T. Lancaster, S. Dann, R. Crockett, and I.
                  Glendinning, “Essay mills and other contract cheating
                  services: to buy or not to buy and the consequences of
                  students changing their minds,” International Journal for
                  Educational Integrity, vol. 17, no. 1, Jun. 2021. ‌
                </Link>
              </p>
              <p>
                [2]{" "}
                <Link to="https://blogs.lse.ac.uk/impactofsocialsciences/2017/12/12/the-crumbling-facade-my-experience-working-for-an-essay-mill/">
                  “The crumbling façade: my experience working for an essay
                  mill,” Impact of Social Sciences, Dec. 12, 2017. ‌
                </Link>
              </p>
              <p>
                [3]
                <Link>
                  “Contract Cheating Detection and Reporting: A Staff Guide.” ‌
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>
                [4]
                <Link to="https://doi.org/10.53761/1.6.1.6.">
                  T. Bretag and S. Mahmud, “A model for determining student
                  plagiarism: Electronic detection and academic judgement,”
                  Journal of University Teaching and Learning Practice, vol. 6,
                  no. 1, pp. 57–69, Jan. 2009. ‌
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EssayMills;
