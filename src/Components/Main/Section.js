import React from 'react';


function Section(props) {
	
		return (
			<section className={props.wrapperClass}>
        <div className="container">
          <div className={props.titelWrapperClass}>{props.titel}</div>

          <div className="description-wrapper">
		  {props.description}
          </div>

          <div className="price-wrapper">
		  {props.price}
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
		)		
	

}
export default Section;

