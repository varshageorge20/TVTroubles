import React from 'react';
import Features from '../components/Features'
import Team from '../components/Team';
import Explanation from '../components/Explanation'
import ResponsivePlayer from '../components/ResponsivePlayer'

function LandingPage() {
    return (
        <div>
            <Explanation/>
            <Features/>
            <Team/>
            {/* Insert your created components here */}
            <ResponsivePlayer/>
            <h1>Landing Page Component</h1>
        </div>
    )
}

export default LandingPage;