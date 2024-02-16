import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const DelayedSurface = ({children, index}) => {
    const ref = useRef(null); //get reference of element to be animated
    const isInView  = useInView(ref,{once:true, amount:0.2}); //check when referenced element is in view: returns boolean value
    const control = useAnimation(); //control to kickstart animation

    useEffect(()=>{
        if(isInView){
            control.start("delayedSurface");
        }
    },[isInView, control])
    
    const variants = {
        hidden:{
            opacity:0,
            y:40
        },
        delayedSurface:(index) =>({
            opacity:1,
            y:0,
            transition: {
                duration:0.5, 
                delay: index * 0.1
            }
        })
    } 
    return (
        <motion.div
            ref={ref} //reference to this div
            variants={variants} //giving this motion element access to the variant states
            initial="hidden" //setting the initial state of the motion element to the "hidden" variant
            animate={control} //
            custom={index}
        >
            {children}
        </motion.div>
    )
}

export default DelayedSurface;