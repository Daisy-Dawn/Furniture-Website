import { useRef } from "react";
import {motion, useTransform, useScroll} from "framer-motion";


const ScrollSurface = ({children}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["0 1", "0.6 1"],
    });
    const opacityProgress = useTransform(scrollYProgress, [0,1],[0.6,1]);
    const scaleProgress = useTransform(scrollYProgress, [0,1],[0.8,1]);

    return (
        <motion.div 
            ref={ref}
            style={{
                scale:scaleProgress,
                opacity:opacityProgress
            }}
        >
            {children}
        </motion.div>
    )
}

export default ScrollSurface;