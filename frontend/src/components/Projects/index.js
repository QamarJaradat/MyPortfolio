import React from 'react'
import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectImg,
    ProjectsH2,
    ProjectsP, ProjectstLinks
} from './projectelements'
const Projects = () => {
    return (
        <>
            <ProjectsContainer id='projects'>
                <ProjectsH1>My Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectImg src='https://i.imgur.com/TMlUIdQ.jpg' />
                        <ProjectsH2>Sparkels</ProjectsH2>
                        <ProjectsP>A website where you can book cleaning services, buy cleaning products, and add or check cleaning tips provided by others.
                            <br></br>
                            <br></br>
                            <ProjectstLinks href='https://github.com/QamarJaradat/pythons'>
                                <i className="fa fa-github" style={{ color: '#464142', fontSize: '26px' }}></i>
                            </ProjectstLinks>
                            <a href='https://www.youtube.com/watch?v=rvtZasT_V7Y'>
                                <i className="fa  fa-youtube-play" style={{ color: '#464142', fontSize: '26px' }}></i>
                            </a>
                        </ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectImg src='https://camo.githubusercontent.com/1413812fc2265b9468557d315d31a13750ac1493e747c24d284ac92170cb30cf/68747470733a2f2f692e696d6775722e636f6d2f543657484b67392e706e67' />
                        <ProjectsH2>Laflefne</ProjectsH2>
                        <ProjectsP>Laflefne is local(Palestine) tour booking and viewing website.
                            <br></br>
                            <br></br>
                            <ProjectstLinks href='https://github.com/QamarJaradat/GreenField5'>
                                <i className="fa fa-github" style={{ color: '#464142', fontSize: '26px' }}></i>
                            </ProjectstLinks>
                            <a href='https://laflefne.herokuapp.com/'>
                                <i className="fa fa-globe" style={{ color: '#464142', fontSize: '26px' }}></i>
                            </a>
                        </ProjectsP>

                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectImg src='https://camo.githubusercontent.com/fd088c825b338c3751053d64fa25a69a6494267cf5fd20b2d72daa2764c5c705/68747470733a2f2f692e696d6775722e636f6d2f457162756636622e706e67' />
                        <ProjectsH2>FoodDose</ProjectsH2>
                        <ProjectsP>Food Dose is a website where you can find your favorite restaurant information. You can add the restaurant to your favorite page, and rate it as well.

                            <br></br>
                            <br></br>
                            <ProjectstLinks href='https://github.com/QamarJaradat/legacy'>
                                <i className="fa fa-github" style={{ color: '#464142', fontSize: '26px' }}></i>
                            </ProjectstLinks>
                            <a href='https://fooddosezero.herokuapp.com/'>
                                <i className="fa fa-globe" style={{ color: '#464142', fontSize: '26px' }}></i>
                            </a>
                        </ProjectsP>

                    </ProjectsCard>

                </ProjectsWrapper>
            </ProjectsContainer>

        </>
    )
}

export default Projects
