import './FeatureProject.css'
import imgDesign from './../../assets/design-icon.png'
export default function FeatureProject() {
    return (
        <div className='feature-project'>
            <div className="heading-group">
                <h4>Featured projects</h4>
                <div className="sub-heading">A collection of some side projects that have shipped recently.</div>
            </div>
            <div className="home-featured-projects">
                <div className="tile-project">
                    <div className="thumbnail">
                        <img src={imgDesign} alt="" />
                    </div>
                    <div className="detail">
                        <span className="title">Design Vault</span>
                        <p>
                            "Under Devlopment"
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}