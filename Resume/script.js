    //onload function

            let html = `
                    <h3>ABOUT ME</h3>
                    <p class="para_indent">Experienced software engineer with 4 years of experience in Front-end development seeking a challenging role where I can utilize my skills in React.JS to contribute to the development 
                    of high-quality software solutions.</p>
                    `

function load(){
    document.getElementById('content').innerHTML = html;
}

    //sidebar highlight

    const listItems = document.querySelectorAll('.sidebar li');
    listItems.forEach(item => {
        item.addEventListener('click', () => {
            listItems.forEach(i => {
                i.style.backgroundColor = '';
            })
            item.style.backgroundColor = 'rgb(220, 220, 161)';
        });
    })

    //show content functions

function showAboutMe() {
        let html = `
                    <h3>ABOUT ME</h3>
                    <p class="para_indent">Experienced software engineer with 4 years of experience in Front-end development seeking a challenging role where I can utilize my skills in React.JS to contribute to the development 
                    of high-quality software solutions.</p>
                    `

        document.getElementById('content').innerHTML = html;
    }
    function showEducation() {
        let html = `
                    <h3>EDUCATION</h3>
                    <table border="1" class="education_table">
                        <thead>
                            <tr>
                                <th>Course</th>
                                <th>Institution</th>
                                <th>Year of Completion</th>
                                <th>Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="background-color: #dddddd;">
                                <td>B.E.(ECE)</td>
                                <td>ABC Engineering College</td>
                                <td>2017</td>
                                <td>7.5</td>
                            </tr>
                            <tr>
                                <td>HSC</td>
                                <td>ABC Higher Secondary School</td>
                                <td>2013</td>
                                <td>7</td>
                            </tr>
                            <tr style="background-color: #dddddd;">
                                <td>SSLC</td>
                                <td>ABC Matriculation School</td>
                                <td>2011</td>
                                <td>7.5</td>
                            </tr>
                        </tbody>
                    </table>
                    `

        document.getElementById('content').innerHTML = html;
    }

    function showSkills() {
        let html = `
                    <h3>SKILLSET</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Git</li>
                        <li>Jquery</li>
                        <li>Javascript</li>
                    </ul>
                    `

        document.getElementById('content').innerHTML = html;
    }

    function showExperience() {
        let html = `
                    <h3>PROFESSIONAL EXPERIENCE</h3>
                    <div>
                        <h5  style="margin: 0;">Junior Front End Developer, ABC Company</h5>
                        <small><em>Jan 2020 - June 2022</em></small>                     
                        <ul>
                            <li>Assisted in developing and testing basic design features under guidance</li>
                            <li>Learned to prioritize user experience in design decisions</li>
                            <li>Adopted engineering best practices</li>
                        </ul>
                    </div>
                    <div>
                        <h5  style="margin: 0;">Entry Level Front End Developer, ABC Company</h5>
                        <small><em>June 2018 - Jan 2020</em></small>                     
                        <ul>
                            <li>Participated in usability testing and addressed simple tags</li>
                            <li>Learned about implementing technology for enhanced efficiency and performance</li>
                            <li>Assisted with troubleshooting and efficiency improvements</li>
                        </ul>
                    </div>
                    `
        document.getElementById('content').innerHTML = html;
    }

    function showLanguage() {
        let html = `
                    <h3>LANGUAGES</h3>
                    <div class="language">
                        <div>
                            <h4>English</h4>
                            <p><small><em>Full Professional Proficiency</em></small></p>
                        </div>
                        <div>
                            <span class="dot dark"></span>
                            <span class="dot dark"></span>
                            <span class="dot dark"></span>
                            <span class="dot dark"></span>
                        </div>  
                    </div>
                    <div class="language">
                        <div>
                            <h4>Tamil</h4>
                            <p><small><em>Native/Bilingual Proficiency</em></small></p>
                        </div>
                        <div>
                            <span class="dot dark"></span>
                            <span class="dot dark"></span>
                            <span class="dot dark"></span>
                            <span class="dot dark"></span>
                        </div>
                    </div>
                    <div class="language">
                        <div>
                            <h4>Hindi</h4>
                            <p><small><em>Beginner</em></small></p>
                        </div>
                        <div>
                            <span class="dot dark"></span>
                            <span class="dot dark"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                    </div>
                </div>
                    `

        document.getElementById('content').innerHTML = html;
    }

        function showHobbies() {
        let html = `
                    <h3>HOBBIES</h3>
                    <ul>
                        <li>Painting</li>
                        <li>Reading</li>
                        <li>Learning Languages</li>
                        <li>Art</li>
                        <li>Blogging</li>
                    </ul>
                    `

        document.getElementById('content').innerHTML = html;
    }

    function showContact() {
        let html = `
                    <h3>CONTACT</h3>
                    <div class="contact">
                        <p>Phone: 63485925</p>
                        <p>Email: mailme@gmail.com
                    </div>
                    <div class="icon-wrapper">
                        <a href="#"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram fa-2xl"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook fa-2xl"></i></a>
                    </div>
                    `

        document.getElementById('content').innerHTML = html;
    }
