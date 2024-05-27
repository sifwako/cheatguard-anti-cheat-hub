import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function CreativeIntegrityBreach() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="app-container">
      <h1>Creative Integrity Breach</h1>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          onClick={toggleDropdown}
        >
          Sub-techniques (1)
        </button>
        {isOpen && (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="/idea-theft" className="dropdown-item">
                    T1005.001
                  </Link>
                </td>
                <td>
                  <Link to="/idea-theft" className="dropdown-item">
                    Idea Theft
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <div className="description">
        <p>
          A Creative Integrity Breach in diverse creative assessments occurs
          when students misrepresent their authorship or the originality of
          their work in projects that require creativity and innovation like
          coding, business plans, designs, and other creative outputs{" "}
          <sup>
            <Link to="https://www.teqsa.gov.au/guides-resources/resources/sector-updates-and-alerts/academic-integrity-creative-arts">
              [1]
            </Link>
          </sup>
          . This type of academic dishonesty takes advantage of the multifaceted
          nature of creative tasks, which demand innovation and individual
          expression in various forms and mediums.
          <br />
          <br />
          The subjective evaluation criteria in creative fields, combined with
          the often collaborative and iterative nature of creative work, make it
          challenging to define and detect breaches of integrity. Students might
          engage in such dishonest practices due to pressures to stand out, a
          misunderstanding of the boundaries of copyright and fair use, or a
          lack of awareness about the requirements for proper attribution in
          different mediums
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
              <td>M1028</td>
              <td>Process Documentation</td>
              <td>
                Require students to provide comprehensive documentation of their
                creative process, including initial concepts, development
                stages, and final outputs to ensure authenticity and proper
                attribution
                <sup>
                  <Link to="https://files.eric.ed.gov/fulltext/ED621563.pdf">
                    [2]
                  </Link>
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>M1029</td>
              <td>Educational Initiatives and Clear Guidelines</td>
              <td>
                Educate students on the ethical implications, legal aspects, and
                industry standards of creative works, while providing explicit
                guidelines on acceptable uses of existing works and detailed
                citation practices specific to various works{" "}
                <sup>
                  <Link to="https://files.eric.ed.gov/fulltext/ED621563.pdf">
                    [2]
                  </Link>
                </sup>
                . This education includes understanding copyright, fair use, and
                the nuances of attributing creative sources, ensuring that
                students are well-prepared to produce work that adheres to both
                academic and professional ethical standards.
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
              <td>D1029</td>
              <td>Similarity Detection Software </td>
              <td>
                Use advanced technology tools like Shazam
                <sup>
                  <Link to="https://www.shazam.com/">[3]</Link>
                </sup>{" "}
                for music, Google Image Search
                <sup>
                  <Link to="https://images.google.com/">[4]</Link>
                </sup>{" "}
                for images, Codequiry
                <sup>
                  <Link to="https://codequiry.com/">[5]</Link>
                </sup>{" "}
                and MOSS (Measure of Software Similarity)
                <sup>
                  <Link to="https://theory.stanford.edu/~aiken/moss/">[6]</Link>
                </sup>{" "}
                for programming assignments to check for similarities and ensure
                originality of creative submissions
                <sup>
                  <Link to="https://files.eric.ed.gov/fulltext/ED621563.pdf">
                    [2]
                  </Link>
                </sup>
                .
              </td>
            </tr>
            <tr>
              <td>D1030</td>
              <td>Assessment Design</td>
              <td>
                Design assessments that require students to demonstrate their
                creative process and final outputs through viva voce or
                practical demonstrations, directly assessing their understanding
                and execution.
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
                <Link to="https://www.teqsa.gov.au/guides-resources/resources/sector-updates-and-alerts/academic-integrity-creative-arts">
                  “Academic integrity in the creative arts | Tertiary Education
                  Quality and Standards Agency,” Teqsa.gov.au, Jun. 20, 2022.
                  https://www.teqsa.gov.au/guides-resources/resources/sector-updates-and-alerts/academic-integrity-creative-arts{" "}
                </Link>
              </p>
              <p>
                {" "}
                [3]{" "}
                <Link to="https://www.shazam.com/">
                  “Shazam,” Shazam, 2019. https://www.shazam.com/ ‌
                </Link>
              </p>
              <p>
                {" "}
                [5]{" "}
                <Link to="https://codequiry.com/">
                  “Code Plagiarism & Similarity Checker — Codequiry,”
                  codequiry.com. https://codequiry.com/ (accessed May 10, 2024).
                  ‌
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>
                {" "}
                [2]{" "}
                <Link to="https://files.eric.ed.gov/fulltext/ED621563.pdf">
                  “Academic integrity in the creative arts,” 2022. Available:
                  https://files.eric.ed.gov/fulltext/ED621563.pdf ‌
                </Link>
              </p>
              <p>
                {" "}
                [4]{" "}
                <Link to="https://images.google.com/">
                  Google, “Google Images,” Google.com, Jul. 12, 2001.
                  https://images.google.com/ ‌
                </Link>
              </p>
              <p>
                {" "}
                [6]
                <Link to="https://theory.stanford.edu/~aiken/moss/">
                  “Plagiarism Detection,” theory.stanford.edu.
                  https://theory.stanford.edu/~aiken/moss/ ‌
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativeIntegrityBreach;
