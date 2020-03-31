import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Myquerys from './class.js';
const querys = new Myquerys();
var var01 = [];
var j=0;

class SECTION_1 extends Component {

  constructor(props) { 
    super(props);                             //Declaramos super para adaptar las propiedades en React
    this.state = {                            //Declaramos los estados de las propiedades
      prop1: 0,
      prop2: 0,
      prop3: 0
    };          
  }

  componentDidMount() {                       //Metodo de REACT encargada de mandar llamar una funcion antes de montar el componente de REACT
    this.timerID = setInterval(()=>this.refesh(),1000);
  }

  componentWillUnmount() {                    //Metodo de REACT encargado de mandar llamar una fucnion despues de montar el componente de REACT
    clearInterval(this.timerID);              //Detiene o limpia a la funcion "timerID"
  }

  refesh() {
    
    querys.getdataSQL().then(function(resp){
      for(var i=0; i<5; i++){  
        var01[i] = resp['recordset'][i]["DATA"];
      }
    });

    this.setState({                           //En la funcion seteo o asigno estados a las propiedades
      prop1: var01[0],
      prop2: var01[1],
      prop3: var01[2],
    });

  }
  
  render() {

    return (
      <div> 
        <section className="container-flow">
          <div className="row mx-0">
            <div className="col-md-12 col-lg-6 p-4" style={{minHeight:"20vh"}}>

              <div className="card mx-4" style={{backgroundColor:"rgb(52,73,94)"}}>

                <div className="card-header text-center text-white p-1">React y base de datos desde el cliente</div>

                <section className="container-flow">
                  <div className="row mx-0 justify-content-around">
                    <div className="col-lg-12 card p-0" style={{backgroundColor:"transparent",minHeight:"10vh",borderColor:"rgb(26,188,156)"}}>

                      <table className="table text-white table-borderless"> 
                        <thead>
                          <tr className="text-center" style={{fontSize:"24px"}}> 
                            <th scope="col">#</th>
                            <th scope="col">DATA 01</th>
                            <th scope="col">DATA 02</th>
                            <th scope="col">DATA 03</th>
                            <th scope="col">DATA 04</th>
                            <th scope="col">DATA 05</th>
                          </tr>
                        </thead>
                        <tbody id="TABLE_B">                       
                          <tr className="text-center" style={{fontSize:"24px"}}>
                            <th scope="row" > # </th>
                            <td id="ROW_00"> {this.state.prop1} </td>
                            <td id="ROW_01"> {this.state.prop2} </td>
                            <td id="ROW_02"> {this.state.prop3}  </td>
                            <td id="ROW_03"> {var01[3]} </td>
                            <td id="ROW_04"> {var01[4]} </td>
                          </tr>                                       
                        </tbody>
                      </table>

                    </div>
                  </div>
                </section>


              </div>

            </div>
          </div>
        </section>
      </div>
     );
  }
}

export default SECTION_1;