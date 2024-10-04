// import React, { useMemo, useState } from "react";
// import styles from "./index.module.css";
// import Wrapper from "../UI/wrapper";
// import BackgroundImage1 from "../../assets/images/banner66.jpg";
// import BackgroundImage2 from "../../assets/images/banner77.jpg";
// import BackgroundImage3 from "../../assets/images/banner88.jpg";
// import BackgroundImage4 from "../../assets/images/banner100.jpg";
// const NewComponent = () => {

//   const data=useMemo(()=>[
//     {
//       images: `${BackgroundImage1}`,
     
//     },
//     {
//       images: `${ BackgroundImage2 }`,
     
//     },
//     {
//       images: `${BackgroundImage3}`,
     
//     },
//     {
//       images: `${BackgroundImage4}`,
    
//     },
//   ],[])
//   return (
//     <Wrapper>
//       <div className={styles.background}>
//         <div className={styles.control}>
//           {data.map((item,index) => (
//             <div key={index} className={styles.border}>
//               <img src={item.images} alt="" loading="lazy" />
            
//             </div>
//           ))}
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default React.memo(NewComponent);
