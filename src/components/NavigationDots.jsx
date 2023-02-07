import React from "react";

const NavigationDots = (props) => {
    const { active } = props;

  return (
    <div className="app__navigation">
      {["Home", "About", "Work", "Skills", "Testimonial", "Contact"].map((item) => {
        return (
          <li className="app__flex p-text" key={`navLink${item}}`}>
            <a href={`#${item}`}
                key={`navLink${item}`}
                className="app__navigation-dot"
                style={active === item ? {backgroundColor: '#313BAC'} : {}}
            >
            </a>
            <div />
          </li>
        );
      })}
    </div>
  );
};

export default NavigationDots;
