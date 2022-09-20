import React from 'react'
import "./style/diploma.css"


const Diploma = () => {
  return (
    <div className="diploma_container">
        <div className="diploma_container1">
            <div className="diploma_card_container1">
                <div className="diploma_card">
                    <h2 className="diploma_head">DIPLOMA</h2>
                </div>
            </div>
            <div className="diploma_card_container2">
                <div className="diploma_cards diploma_card1">
                    <h2 className="diploma_head1">MECHANICAL</h2>
                </div>
                <div className="diploma_cards diploma_card2">
                    <h2 className="diploma_head1">ELECTRICAL</h2>
                </div>
            </div>
            <div className="diploma_card_container3">
                <div className="diploma_cards diploma_card3">
                    <h2 className="diploma_head1">CIVIL</h2>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Diploma;