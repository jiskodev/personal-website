import React, {useEffect} from 'react'
import { Canvas, ListItem } from './tagCloudElements';
import useWindowSize from '../../hooks/useWindowSize'

const TagCanvas = window.TagCanvas

function TagCloud () {
    const windowSize = useWindowSize();

    const isMobile = windowSize.width <= 768 || windowSize.height <= 696;

    const renderTagCloud = () => {
        try {
            TagCanvas.Start("myCanvas", "tags", {
                textColour: "#00E0F9",
                outlineColour: "transparent",
                reverse: true,
                textHeight: 14,
                depth: 0.8,
                maxSpeed: 0.05
            });
        } catch (e) {
        return
        }
    }
    useEffect(() => {
        renderTagCloud()
    }, [])

    return (
    <div>
        <div id="myCanvasContainer">
        <Canvas width={isMobile ? '320px' : '520px'} height={isMobile ? '320px' : '520px'} id='myCanvas'>
        <p>
            Anything in here will be replaced on browsers that do not support the canvas
            element
            </p>
        </Canvas>
        
        </div>
        <div id="tags">
        <ul>
            <ListItem><a href="/">HTML5</a></ListItem>
            <li><a href="/">JAVASCRIPT</a></li>
            <li><a href="/">CSS3</a></li>
            <li><a href="/">SASS</a></li>
            <li><a href="/">STYLED COMPONENTS</a></li>
            <li><a href="/">REACT</a></li>
            <li><a href="/">WEBPACK</a></li>
            <li><a href="/">REDUX</a></li>
            <li><a href="/">BABEL</a></li>
            <li><a href="/">GATSBY</a></li>
            <li><a href="/">GRAPHQL</a></li>
            <li><a href="/">NEXTJS</a></li>
            <li><a href="/">REST</a></li>
            <li><a href="/">NoSQL</a></li>
            <li><a href="/">NodeJS</a></li>
        </ul>
        </div>
    </div>
    )
}


export default TagCloud;