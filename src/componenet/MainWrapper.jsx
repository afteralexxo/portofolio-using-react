import './MainWrapper.css'
import HomeLinks from './HomeLinks'
import FeatureProject from './FeatureProject';

export default function MainWrapper (props) {
    return (
        <div className="main-wrapper">
            <div className="wrapper-container">
            <h1 className="main-header">Website Designer creating thoughtful, intuitive interfaces.</h1>
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
            <FeatureProject/>
            </div>
        </div>
    )
}