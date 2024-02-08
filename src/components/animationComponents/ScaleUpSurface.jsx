import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ScaleUpSurface = ({children}) => {
    const ref = useRef(null); //get reference of element to be animated
    const isInView  = useInView(ref,{once:true}); //check when referenced element is in view: returns boolean value
    const control = useAnimation(); //control to kickstart animation

    useEffect(()=>{
        if(isInView){
            control.start("surface");
        }
    },[isInView, control])
    
    const variants = {
        hidden:{
            opacity:0,
            scale:0.85,
            y:20
        },
        surface:{
            opacity:1,
            scale:1,
            y:0
        }
    } 
    return (
        <div>
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={control}
            transition={{duration:1, type:"spring", ease:"linear"}}
        >
            {children}
        </motion.div>
    </div>
    )
}

export default ScaleUpSurface