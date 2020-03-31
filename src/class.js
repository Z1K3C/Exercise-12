class Myquerys{                                 //Declaro una clase
    constructor() {                                 //Genero un constructor para inicializar variables
      this.URI = `http://localhost:3000/SQL`;
    }
  
    async getdataSQL() {                            //Genero una funcion asincrona
      const response = await fetch(this.URI,{method: 'GET'});       //Mediante el metodo FETCH realizo una consulta
      const myjson = await response.json();         //Dicha consulta me responde con un JSON
      return myjson;                                //Retorno el JSON generado
    }
  };

  export default Myquerys;