import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function UnauthorizedMaterial() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="app-container">
      <h1>T1044: Unauthorized Materials</h1>
    
      <div className="description">
        <p>
        In closed-book exams, some students may use some creative but unethical methods to gain an unfair advantage by bringing unauthorized materials. Despite strict monitoring students have found ways to sneak in hidden notes, often hidden in sleeves<sup><Link to='https://www.wikihow.com/Cheat-on-a-Test-Using-Clothing'>[1]</Link></sup>, pockets, or even shoes. Others write key information directly on their skin hidden under their clothing<sup><Link to='https://www.wikihow.com/Cheat-on-a-Test-Using-Body-Parts'>[2]</Link></sup>. Programmable calculators are sometimes used to store data, and stationery items like erasers, rulers, and even pen casings become secret storage of answers. Ingenious techniques like printing information on water bottle labels or writing on tissues hidden under bandages are also used. These methods reflect the lengths to which some students go in order to cheat during exams, compromising academic integrity in the process. 
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
              <td>M1047</td>
            
              <td>Vigilant Monitoring </td>
              <td>
                Increase physical monitoring by employing trained examiners <sup><Link  to="https://olj.onlinelearningconsortium.org/index.php/olj/article/view/2096">[9]</Link></sup> who
                are adept at identifying the use of unauthorized devices. Random
                checks conducted by teachers and administrators before and
                during exams further assist in detecting and deterring the use
                of cheating devices
                <sup>
                  <Link to="https://medium.com/@makulobesi/exam-cheating-in-the-digital-age-the-role-of-gadgets-ef525d1efef5">
                    [3]
                  </Link>
                </sup>
                . By combining these measures, institutions can create a robust
                system that upholds academic integrity and maintains a fair
                testing environment.
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
            <td>D1036</td>
              <td>Surveillance Cameras </td>
              <td>
                Utilizing CCTV cameras to visually monitor the exam environment,
                to detect any attempts to use hidden devices or unauthorized
                technology
                <sup>
                  <Link to="https://videoloft.com/cctv-for-schools/">[4]</Link>
                </sup>
                . By strategically placing cameras in the examination hall,
                institutions can maintain a comprehensive view of the
                test-taking area, enabling examiners to identify any suspicious
                behavior or unauthorized activities.{" "}
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
             
            <p>[1]<Link to='https://www.wikihow.com/Cheat-on-a-Test-Using-Clothing '>wikiHow. (2023, October 29). 17 ways to cheat on a test using clothing.</Link></p>
           
            <p>[2]<Link to='https://www.wikihow.com/Cheat-on-a-Test-Using-Body-Parts'>wikiHow. (2017, June 27). 10 ways to cheat on a test using body parts.</Link></p>
          

            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
            <p>
                [4]{" "}
                <Link to="https://videoloft.com/cctv-for-schools/">
                  A. Pearson, “Educational facilities security - How to keep
                  your campus secure,” Videoloft, Dec. 09, 2020.
                </Link>
              </p>
            <p>[9]<Link to="https://olj.onlinelearningconsortium.org/index.php/olj/article/view/2096">D. C. Ison, “Detection of Online Contract Cheating through Stylometry: A Pilot Study.,” Online Learning, vol. 24, no. 2, pp. 142–165, Jun. 2020</Link></p>

           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnauthorizedMaterial;
