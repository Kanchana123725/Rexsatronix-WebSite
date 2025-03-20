import Recat from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

interface OverlayProps {
    title: string;
    subtitle: string;
  }

const Overlay: React.FC<OverlayProps> = ({ title, subtitle }) => {
    return(
        <div className="overlay">
            {/*first test field */}
            
            <div>
                <span className="overlay-text-1">{subtitle}</span>
            </div>

            <div>
                <span className="overlay-text">{title}</span> 
            </div>
            
    
            {/* Hover effect styling */}
        
            <style>
                {`
                    .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #3a3deea6; /* Blue overlay */
                    display: flex;
                    flex-direction: column;
                    // opacity: 0;
                    transition: opacity 0.3s ease;
                    }

                    .overlay:hover {
                        opacity: 1;
                    }

                    .overlay-text {
                        color: #fff;
                        font-size: 18px;
                        float: left;
                        
                    } 
                    
                    .overlay-text-1 {
                        color: #fff;
                        font-size: 16px;
                        float: left;
                        padding-top: 20px;

                    }

                    .overlay-icon {
                        color: #fff;
                        font-size: 24px;
                    }     
                
                
                    
                `}
            </style>
        </div>
            
        
    )
};

export default Overlay;