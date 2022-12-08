import './FeatureProject.css'
import imgDesign from './../assets/design-icon.png'
export default function FeatureProject(){
    return(
        <div className='feature-project'>
            <div class="heading-group">
                <h4>Featured projects</h4>
                <div class="sub-heading">A collection of some side projects that have shipped recently.</div>
            </div>
            <div class="home-featured-projects">
                <div class="tile-project" href="https://github.com/afteralexxo">
                    <div class="thumbnail">
                        <img src={imgDesign} alt="" />
                    </div>
                    <div class="detail">
                        <span class="title">Design Vault</span>
                        <p>
                            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, quisquam."
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}