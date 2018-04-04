
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React from 'react';


/**
 * -----------------------------------------------------------------------------
 * Functional Component: SocialNav
 * -----------------------------------------------------------------------------
 */
 const SocialNav = (props) => {
     let { links = [] } = props;
     return (links.length < 1) ? null : (
         <div className={`header-social`}>
             {links.map((item, i) => {
                 let { icon, label = '', to = '/' } = item;
                 return (
                     <a href={to} target='_blank' key={`link-${i}`}>
                         {(!icon) ? null : <img src={icon} />}{label}
                     </a>
                 );
             })}
         </div>
     );
 }

export default SocialNav;
