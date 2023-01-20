import React, { useState } from "react";
import { motion } from "framer-motion";

type CardProps = {
    albumId?: number;
    id?: number;
    title?: string;
    url?: string;
    thumbnailUrl?: string;
    MyImage?: string;
    key1?: number; 
  }

const Card = ( props: CardProps ) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        data-testid="card-1"
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        className="card"
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",
        }}
        key={props.key1}
      >
        <motion.h2 layout="position" className="Card-title">
          {props.title}
          <img src={props.MyImage} alt="startrek" className="starTrek-icon" />
        </motion.h2>

        <br/>
        <motion.div  layout="position"
         transition={{ layout: { duration: 1, type: "spring" } }}
         >
            <img src={props.thumbnailUrl} alt={props.title}  className="Card-photo"/>
        </motion.div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="expand"
          >
            <p>ThumbnailUrl: {props.thumbnailUrl}</p>
            <p>Id : {props.id}</p>
            <p>url : {props.url}</p>

            <button onClick={() => setIsOpen(!isOpen)} className="button-49">
              Hide
            </button>
          </motion.div>
        )}

        {isOpen === false ? (
          <button onClick={() => setIsOpen(!isOpen)} className="button-49">
            Show More
          </button>
        ) : null}
      </motion.div>
    </>
  );
}

export default Card;
