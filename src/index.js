import React from 'react'
import { render } from 'react-dom'
import DeviceSimulator from './DeviceSimulator'
import './index.css'

render(
  <div>
    <DeviceSimulator>
      <p>Bacon ipsum dolor amet fatback filet mignon beef, drumstick alcatra pork loin beef ribs prosciutto pork chop leberkas capicola tail ham hock. Shoulder ground round ribeye pig shank pork belly shankle, flank swine chicken bresaola andouille. Brisket bresaola picanha leberkas boudin doner tri-tip jerky burgdoggen. Tail meatball pastrami chicken.</p>
      <p>Chuck prosciutto corned beef, chicken ball tip turkey pig bresaola spare ribs filet mignon drumstick. Short loin pancetta tri-tip shankle, strip steak landjaeger picanha chuck ball tip salami turducken burgdoggen jowl kevin. Venison shoulder meatloaf swine pig. Doner short ribs ham hock corned beef boudin meatloaf t-bone turkey sirloin fatback pancetta shankle.</p>
    </DeviceSimulator>
  </div>,
  document.getElementById('root')
)
