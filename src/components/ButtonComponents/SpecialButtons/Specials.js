import React, { useState } from "react";
import SpecialButton from "./SpecialButton";

import { specials } from '../../../data-mock';

const Specials = (props) => {
  const [specialState] = useState(specials);

  return (
    specialState.map((button, idx) => (
      <SpecialButton key={idx} buttonText={button} buttonValue={button} clickHandler={props.btnClickHandler} />
    ))
  );
};


export default Specials;