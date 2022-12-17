import './MainWrapper.css'
import Ppicture from './../../assets/alex.sky.jpg'
import HomeLinks from './HomeLinks'

export default function MainWrapper (props) {
    return (
        <div className="main-wrapper">
            <div className="wrapper-container">
            <h1 className="main-header">Website Developer creating thoughtful, intuitive website pages.</h1>
            <div className='pp-container'>
                <img src={Ppicture} className='pp-alex' alt="" />
            </div>
            <div className="parag">
                <p className='main-parag'>
                    "I’m Alemyehu Mekonen, 
                    a Web Developer from Ethiopia with advanced coding abilities and enthusiasm 
                    for new enhancements. Expert in building high-performing, scalable structures
                    to meet client requirements. Advanced in Js, Python and Node." 
                </p>
                <p className='main-parag'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ipsum unde beatae ullam ducimus sequi sunt quas aperiam similique voluptate optio.
                </p>
                <p className='main-parag'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ex nostrum nisi, cumque numquam natus sequi qui voluptas debitis,
                    aspernatur distinctio incidunt velit, tempora voluptates excepturi 
                    saepe iusto amet esse obcaecati?
                </p>
            </div>
            <HomeLinks/>
            <hr />    
            <hr />
            <div className="footer-bar"></div>
            </div>
        </div>
    )
}