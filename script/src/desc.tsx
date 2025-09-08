import './desc.css'
import React from 'react';

const DescriptionBlocks = () => {
    return (
        <div className="description-container">
            <div className="zigzag-layout">
                {/* First box - left */}
                <div className="square-box box-left">
                    <h3 className="box-title">Our Goals</h3>
                    <p className="box-text">
                    This project portal was made by the 2025 Programming Club executive members to
                    expand the horizons of the club to not only contain math and programming, but to
                    introduce less traditionally programming related topics, such as chemistry, psychology
                    and much more. It gives students more choices to create a project in line with their
                    preferred subject, as well as a chance to be mentored by the incredibly competent
                    Marianopolis teachers.
                    </p>
                </div>

                {/* Second box - right */}
                <div className="square-box box-right">
                    <img src='./images/new_logo_gradient_cropped.png'
                        className="photo-image"
                    />
                    
                </div>

                {/* Third box - left */}
                <div className="square-box box-left">
                    <h3 className="box-title">MariHacks component</h3>
                    <p className="box-text">
                    Another project that the Marianopolis Programming Club works on is
                    Marihacks: the biggest hackathon for high schools and cegeps. This website
                    allows students to connect with both teachers and other students, collaborating
                    with each other to find solutions and talk about subjects they are passionate 
                    about. By doing this, they have more of an incentive to partake in MariHacks,
                    leading to more creative projects and a tighter community between students and 
                    teachers alike.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default DescriptionBlocks;