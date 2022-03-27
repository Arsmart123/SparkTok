/* globals React */
/* eslint "react/jsx-no-undef": "off" */

import './style.css'
import ParticlesBg from 'particles-bg'

export default class UIpage extends React.Component {
  constructor() {
    super();
  }
   
  render() {
    return (
      <React.Fragment>
        <h1 className='vintage'>Spark Tok</h1>






        <ul class="tabs" role="tablist">
        <li>
            <input type="radio" name="tabs" id="tab1" checked />
            <label for="tab1"
                   role="tab"
                   aria-selected="true"
                   aria-controls="panel1"
                   tabindex="0">Abstract</label>
            <div id="tab-content1"
                 class="tab-content"
                 role="tabpanel"
                 aria-labelledby="description"
                 aria-hidden="false">
                <p style={{fontSize:"5px"}}>Abstract—Anton 3 is the newest member in a family of 
supercomputers specially designed for atomic-level simulation of 
molecules relevant to biology (e.g., DNA, proteins, and drug 
molecules). Anton 3 achieves order-of-magnitude improvements 
in time-to-solution over its predecessor, Anton 2 (the current state 
of the art), and is over 100-fold faster than any other currently 
available supercomputer, thereby enabling broad new avenues of 
research on critical questions in biology and drug discovery. This 
speedup means that a 512-node Anton 3 simulates a million atoms 
at over 100 microseconds per day. Furthermore, Anton 3 attains 
this performance while consuming an order of magnitude less 
energy per simulated microsecond than any other machine. Like 
its predecessors, Anton 3 was designed from the ground up around 
a new custom chip to best exploit the capabilities offered by new 
technologies. We present here the main architectural and 
algorithmic developments that were necessary to achieve such 
significant advances.</p>
            </div>
        </li>

        <li>
            <input type="radio" name="tabs" id="tab2" />
            <label for="tab2"
                   role="tab"
                   aria-selected="false"
                   aria-controls="panel2"
                   tabindex="0">Author Info</label>
            <div id="tab-content2"
                 class="tab-content"
                 role="tabpanel"
                 aria-labelledby="specification"
                 aria-hidden="true">
                <p style={{fontSize:"5px"}}>David E. Shaw,a
 Peter J. Adams,b
 Asaph Azaria, Joseph A. Bank, Brannon Batson, Alistair Bell, Michael Bergdorf, Jhanvi Bhatt,b
J. Adam Butts, Timothy Correia, Robert M. Dirks,c
 Ron O. Dror,b
 Michael P. Eastwood, Bruce Edwards, Amos Even, Peter Feldmann,
Michael Fenn, Christopher H. Fenton, Anthony Forte, Joseph Gagliardo, Gennette Gill, Maria Gorlatova,b
 Brian Greskamp, J.P. Grossman,b
Justin Gullingsrud, Anissa Harper, William Hasenplaugh,b
 Mark Heily, Benjamin Colin Heshmat, Jeremy Hunt, Douglas J. Ierardi, 
Lev Iserovich, Bryan L. Jackson, Nick P. Johnson, Mollie M. Kirk,b
 John L. Klepeis, Jeffrey S. Kuskin, Kenneth M. Mackenzie, Roy J. Mader, 
Richard McGowen,b
 Adam McLaughlin, Mark A. Moraes, Mohamed H. Nasr,b
 Lawrence J. Nociolo, Lief O'Donnell, Andrew Parker, 
Jon L. Peticolas, Goran Pocina, Cristian Predescu, Terry Quan, John K. Salmon,c
 Carl Schwink,b
 Keun Sup Shim, Naseer Siddique,b
Jochen Spengler,b
 Tamas Szalay, Raymond Tabladillo,b
 Reinhard Tartler,b
 Andrew G. Taube, Michael Theobald, Brian Towles,b
 William Vick,b
Stanley C. Wang, Michael Wazlowski, Madeleine J. Weingarten, John M. Williams,b
 and Kevin A. Yuh</p>
            </div>
        </li>
    </ul>


    <div className='button_loc'>
      <button className='button'>Next Paper</button>
    </div>



        <ParticlesBg type="random" bg={true}/>
      </React.Fragment>
    );
  }
}
