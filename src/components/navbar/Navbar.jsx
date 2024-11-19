import React, { useState } from "react";
import styles from "./NavbarWithStyling.module.css";
import About from "../about/About";
import HoverButton from "../buttons/HoverButton";

const NavbarWithStyling = ({ menu, name, age, address }) => {
  //   const [list, setList] = useState("");
  let list;
  // let biodata = {};
  const [biodata, setBiodata] = useState({});

  if (menu) {
    console.log("test");
    list = (
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#about" className={styles.navLink}>
            {menu[0]}
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#faq" className={styles.navLink}>
            {menu[1]}
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#logout" className={styles.navLink}>
            {menu[2]}
          </a>
        </li>
      </ul>
    );
  } else {
    list = <h1>List Not Exist</h1>;
  }

  function handleTrigerSelect(selectedStudent) {
    console.log("oi " + selectedStudent);
    setBiodata({
      ...biodata,
      name,
      age,
      address,
    });

    // biodata = {
    //   ...biodata,
    //   name,
    //   age,
    //   address,
    // };
  }

  // console.log(biodata)
  // console.log("COMPONENT RENDER")

  return (
    <>
      {/*COMPONENT MODAL */}
      <div className={styles.overlay} onClick={"handleClose"}>
        <div className={styles.modal}>
          {/* <button className={styles.closeButton} onClick={"onClose"}>
            &times;
          </button> */}
          <div className={styles.content}>
            Biodata : {biodata.name} {biodata.age} {biodata.address}
          </div>
        </div>
      </div>

      <div className={styles.navbar}>
        <h1 className={styles.title}>FSW 2 - {name}</h1>
        {list}
      </div>
      <About name={name} age={age} address={address} />
      <HoverButton onSelect={() => handleTrigerSelect(name)}>
        Click Me !
      </HoverButton>
    </>
  );
};

export default NavbarWithStyling;
