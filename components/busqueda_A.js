const resultadoRutas = document.getElementById('resultado_ruta')
const resultadoDistancia = document.getElementById('resultado_distancia')
const form = document.getElementById('form')
const selectOrigen = document.getElementById('ciudadOrigen')
const selectDestino = document.getElementById('ciudadDestino')
const button = document.getElementById('myButton');
const datoi = '';
const datof = '';

const mapaRutas = []

const crearCiudad = (id = -1, nombre = 'nombre', distanciaLineaRecta = -1) => {
    ciudad = {
        id: id,
        nombre: nombre,
        hdlr: distanciaLineaRecta,
        vecinos: [],
        caminos: []
    }
    mapaRutas.push(ciudad)
    return ciudad
}

const crearVecinos = (ciudad = 'nombre', vecinos = [], caminos = []) => {
    let idCiudad = mapaRutas.findIndex((obj) => obj.nombre === ciudad)
    mapaRutas[idCiudad].vecinos = vecinos;
    mapaRutas[idCiudad].caminos = caminos;
}

    const cLeticia = crearCiudad(1,'Leticia',0)
    const cMedellin = crearCiudad(2,'Medellin',0)
    const cArauca = crearCiudad(3,'Arauca',0)
    const cBarranquilla = crearCiudad(4,'Barranquilla',0)
    const cCartagena= crearCiudad(5,'Cartagena',0)
    const cTunja = crearCiudad(6,'Tunja',0)
    const cManizales = crearCiudad(7,'Manizales',0)
    const cFlorencia = crearCiudad(8,'Florencia',0)
    const cYopal = crearCiudad(9,'Yopal',0)
    const cPopayan = crearCiudad(10,'Popayan',0)
    const cValledupar = crearCiudad(11,'Valledupar',0)
    const cQuibdo = crearCiudad(12,'Quibdo',0)
    const cMonteria = crearCiudad(13,'Monteria',0)
    const cBogota = crearCiudad(14,'Bogota',0)
    const cInirida = crearCiudad(15,'Inirida',0)
    const cSanJosedelGuaviare = crearCiudad(16,'SanJosedelGuaviare',0)
    const cNeiva = crearCiudad(17,'Neiva',0)
    const cRioacha = crearCiudad(18,'Rioacha',0)
    const cSantaMarta = crearCiudad(19,'SantaMarta',0)
    const cVillavicencio = crearCiudad(20,'Villavicencio',0)
    const cPasto = crearCiudad(21,'Pasto',0)
    const cCucuta = crearCiudad(22,'Cucuta',0)
    const cMocoa = crearCiudad(23,'Mocoa',0)
    const cArmenia = crearCiudad(24,'Armenia',0)
    const cPereira = crearCiudad(25,'Pereira',0)
    const cSanAndres = crearCiudad(26,'SanAndres',0)
    const cBucaramanga = crearCiudad(27,'Bucaramanga',0)
    const cSincelejo = crearCiudad(28,'Sincelejo',0)
    const cIbague = crearCiudad(29,'Ibague',0)
    const cCali = crearCiudad(30,'Cali',0)
    const cMitu = crearCiudad(31,'Mitu',0)
    const cPuertoCarreño = crearCiudad(32,'PuertoCarreño',0);
    console.log(cLeticia)


const crearMapaRutas = () => {

    crearVecinos('Leticia', vecinos = [cBogota], caminos = [1092])
    crearVecinos('Medellin', vecinos = [cTunja, cQuibdo, cManizales, cMonteria], caminos = [418,229,194,403])
    crearVecinos('Arauca', vecinos = [cBucaramanga,cYopal], caminos = [436,362])
    crearVecinos('Barranquilla', vecinos = [cCartagena,cValledupar], caminos = [134,301])
    crearVecinos('Cartagena', vecinos = [cSincelejo,cBarranquilla,cBucaramanga], caminos = [170,134,651])
    crearVecinos('Tunja', vecinos = [cBucaramanga,cYopal,cBogota,cMedellin], caminos = [282,216,80,418])
    crearVecinos('Manizales', vecinos = [cMedellin,cPereira,cIbague,cBogota], caminos = [194,51,174,293])
    crearVecinos('Florencia', vecinos = [cPopayan,cMocoa], caminos = [268,245])
    crearVecinos('Yopal', vecinos = [cArauca,cTunja,cPuertoCarreño], caminos = [624,216,967])
    crearVecinos('Popayan', vecinos = [cCali,cNeiva,cPasto,cFlorencia], caminos = [139,273,246,266])
    crearVecinos('Valledupar', vecinos = [cBarranquilla,cRioacha,cSantaMarta,cCucuta], caminos = [301,159,254,536])
    crearVecinos('Quibdo', vecinos = [cMedellin], caminos = [229])
    crearVecinos('Monteria', vecinos = [cMedellin,cSincelejo], caminos = [403,121])
    crearVecinos('Bogota', vecinos = [cTunja,cIbague,cVillavicencio,cManizales], caminos = [80,201,123,293])
    crearVecinos('Inirida', vecinos = [cPuertoCarreño], caminos = [262])
    crearVecinos('SanJosedelGuaviare', vecinos = [cVillavicencio], caminos = [284])
    crearVecinos('Neiva', vecinos = [cPopayan,cIbague], caminos = [273,210])
    crearVecinos('Rioacha', vecinos = [cValledupar], caminos = [159])
    crearVecinos('SantaMarta', vecinos = [cValledupar], caminos = [254])
    crearVecinos('Villavicencio', vecinos = [cBogota,cSanJosedelGuaviare], caminos = [123,284])
    crearVecinos('Pasto', vecinos = [cPopayan,cMocoa], caminos = [246,146])
    crearVecinos('Cucuta', vecinos = [cBucaramanga,cValledupar], caminos = [195,536])
    crearVecinos('Mocoa', vecinos = [cPasto,cFlorencia], caminos = [146,245])
    crearVecinos('Armenia', vecinos = [cPereira,cIbague,cCali], caminos = [44,85,178])
    crearVecinos('Pereira', vecinos = [cArmenia,cManizales], caminos = [44,51])
    crearVecinos('SanAndres', vecinos = [cBogota], caminos = [1211])
    crearVecinos('Bucaramanga', vecinos = [cArauca,cCucuta,cTunja,cSincelejo,cCartagena], caminos = [436,195,282,497,651])
    crearVecinos('Sincelejo', vecinos = [cMonteria,cCartagena,cBucaramanga], caminos = [121,170,497])
    crearVecinos('Ibague', vecinos = [cBogota,cArmenia,cManizales,cNeiva], caminos = [201,85,174,210])
    crearVecinos('Cali', vecinos = [cArmenia,cPopayan], caminos = [178,139])
    crearVecinos('Mitu', vecinos = [cBogota], caminos = [812])
    crearVecinos('PuertoCarreño', vecinos = [cYopal,cInirida], caminos = [967,262])
}



const imprimirListaOpcionesOrigen = () => {
    selectOrigen.innerHTML = ''
    mapaRutas.map(obj => selectOrigen.innerHTML += `<option value="${obj.nombre}">${obj.nombre}</option>`)
}
const imprimirListaOpcionesDestino = () => {
    selectDestino.innerHTML = ''
    mapaRutas.map(obj => selectDestino.innerHTML += `<option value="${obj.nombre}">${obj.nombre}</option>`)
}
const imprimirRuta = (arrayRuta, caminos, sumaCaminos) => {
    resultadoRutas.innerHTML =''
    cont = -1
    arrayRuta.map((obj) => {
        cont++
        resultadoRutas.innerHTML += `<li>
            ${obj.nombre}
            <span class="distanciaRuta">${caminos[cont] != null ? caminos[cont] : ''}</span>
        </li>`
    })
    resultadoDistancia.innerHTML = `Distancia: ${sumaCaminos}`
}

const getCantExistenciasEnRuta = (arrayRuta = [], idCiudad = -1 ) => {
    let cont = -1
    arrayRuta.forEach(obj => { if (idCiudad === obj.id) cont++ })
    return cont
}

const algoritmoBusquedaA = (ciudadOrigen = 'nombre', ciudadDestino = 'nombre') => {
    let arrayRuta = []
    let caminos = []
    let sumaCaminos = 0
    let ciudadActual = mapaRutas.filter((obj) => obj.nombre === ciudadOrigen)[0]
    let caminoActual = 0
    let ciudadElegida = null
    let cont = -1
    arrayRuta.push(ciudadActual)
    while (ciudadActual.nombre !== ciudadDestino) {
        ciudadElegida = crearCiudad(-1,'temporal',999999)
        caminoActual = 999999
        cont = -1
        ciudadActual.vecinos.forEach(obj => {
            cont++
            if (ciudadActual.caminos[cont] + obj.hdlr < caminoActual + ciudadElegida.hdlr ) {
                caminoActual = ciudadActual.caminos[cont]
                ciudadElegida = obj 
            }
        });
        if (getCantExistenciasEnRuta(arrayRuta,ciudadActual.id) > 3) {
            alert('Bucle encontrado por ' + ciudadActual.nombre)
            break;
        }
        ciudadActual = ciudadElegida
        arrayRuta.push(ciudadActual)
        caminos.push(caminoActual)
        sumaCaminos += caminoActual
    }
    imprimirRuta(arrayRuta,caminos, sumaCaminos)
    
}
crearMapaRutas()
imprimirListaOpcionesOrigen()
imprimirListaOpcionesDestino()
function Guardarciudades(){

    const datoi = selectOrigen.value
    if (datoi === 'Rioacha'){
        alert('No hay ruta para ' + datoi)
    
    }
    else if (datoi === 'Mitu'){
        alert('No hay ruta para ' + datoi)
    
    }
    else if (datoi === 'Leticia'){
        alert('No hay ruta para ' + datoi)
    
    }
    else if (datoi === 'SanAndres'){
        alert('No hay ruta para ' + datoi)
    
    }

    const datof=selectDestino.value
    console.log(datoi,datof)
    if(datof === 'Bogota'){
        cLeticia.hdlr=1092;
        cMedellin.hdlr=416;
        cBogota.hdlr=0;
        cArauca.hdlr=703;
        cBarranquilla.hdlr=1000
        cCartagena.hdlr=1059
        cTunja.hdlr=80
        cManizales.hdlr=293
        cFlorencia.hdlr=548
        cYopal.hdlr=341
        cPopayan.hdlr= 592
        cValledupar.hdlr= 863
        cQuibdo.hdlr= 565
        cMonteria.hdlr=790
        cInirida.hdlr= 688
        cSanJosedelGuaviare.hdlr=399
        cNeiva.hdlr=314
        cRioacha.hdlr=1011
        cSantaMarta.hdlr=956
        cVillavicencio.hdlr=123
        cPasto.hdlr=779
        cCucuta.hdlr=555
        cMocoa.hdlr=633
        cArmenia.hdlr=281
        cPereira.hdlr=320
        cSanAndres.hdlr=1211
        cBucaramanga.hdlr=397
        cSincelejo.hdlr=914
        cIbague.hdlr=201
        cCali.hdlr=462
        cMitu.hdlr=574
        cPuertoCarreño.hdlr=970
      }
      else if(datof==='Medellin'){
        cLeticia.hdlr=1319;
        cBogota.hdlr=416;
        cMedellin.hdlr=0;
        cArauca.hdlr=986;
        cBarranquilla.hdlr=714
        cCartagena.hdlr=628
        cTunja.hdlr=419
        cManizales.hdlr=194
        cFlorencia.hdlr=813
        cYopal.hdlr=624
        cPopayan.hdlr= 547
        cValledupar.hdlr= 745
        cQuibdo.hdlr= 229
        cMonteria.hdlr=403
        cInirida.hdlr= 887
        cSanJosedelGuaviare.hdlr=589
        cNeiva.hdlr=578
        cRioacha.hdlr=890
        cSantaMarta.hdlr=834
        cVillavicencio.hdlr=532
        cPasto.hdlr=797
        cCucuta.hdlr=580
        cMocoa.hdlr=897
        cArmenia.hdlr=256
        cPereira.hdlr=211
        cSanAndres.hdlr=973
        cBucaramanga.hdlr=390
        cSincelejo.hdlr=470
        cIbague.hdlr=416
        cCali.hdlr=418
        cMitu.hdlr=812
        cPuertoCarreño.hdlr=1379
      }
      else if(datof==='Barranquilla'){
        cLeticia.hdlr=1774;
        cBogota.hdlr=1000;
        cMedellin.hdlr=714;
        cArauca.hdlr=950;
        cBarranquilla.hdlr=0
        cCartagena.hdlr=134
        cTunja.hdlr=860
        cManizales.hdlr=999
        cFlorencia.hdlr=1397
        cYopal.hdlr=1064
        cPopayan.hdlr= 1381
        cValledupar.hdlr= 301
        cQuibdo.hdlr= 951
        cMonteria.hdlr=370
        cInirida.hdlr= 1097
        cSanJosedelGuaviare.hdlr=1032
        cNeiva.hdlr=1162
        cRioacha.hdlr=268
        cSantaMarta.hdlr=105
        cVillavicencio.hdlr=1105
        cPasto.hdlr=1631
        cCucuta.hdlr=673
        cMocoa.hdlr=1481
        cArmenia.hdlr=1086
        cPereira.hdlr=1045
        cSanAndres.hdlr=770
        cBucaramanga.hdlr=584
        cSincelejo.hdlr=254
        cIbague.hdlr=1000
        cCali.hdlr=1252
        cMitu.hdlr=1195
        cPuertoCarreño.hdlr=1963
      }
     else if(datof === 'Cali'){
        cLeticia.hdlr=1123;
        cMedellin.hdlr=418;
        cBogota.hdlr=462;
        cArauca.hdlr=1164;
        cBarranquilla.hdlr=1252;
        cCartagena.hdlr=1046;
        cTunja.hdlr=602;
        cManizales.hdlr=257;
        cFlorencia.hdlr=402;
        cYopal.hdlr=802;
        cPopayan.hdlr= 139;
        cValledupar.hdlr= 1115;
        cQuibdo.hdlr= 425;
        cMonteria.hdlr=820;
        cInirida.hdlr= 956;
        cSanJosedelGuaviare.hdlr=442;
        cNeiva.hdlr=322;
        cRioacha.hdlr=1272;
        cSantaMarta.hdlr=1207;
        cVillavicencio.hdlr=549;
        cPasto.hdlr=836;
        cCucuta.hdlr=952;
        cMocoa.hdlr=412;
        cArmenia.hdlr=178;
        cPereira.hdlr=208;
        cSanAndres.hdlr=1163;
        cBucaramanga.hdlr=762;
        cSincelejo.hdlr=887;
        cIbague.hdlr=264;
        cCali.hdlr=0;
        cMitu.hdlr=741;
        cPuertoCarreño.hdlr=1397;
      }
     else if(datof === 'Pereira'){
        cLeticia.hdlr=1188;
        cMedellin.hdlr=211;
        cBogota.hdlr=320;
        cArauca.hdlr=1023;
        cBarranquilla.hdlr=1045;
        cCartagena.hdlr=840;
        cTunja.hdlr=460;
        cManizales.hdlr=51;
        cFlorencia.hdlr=564;
        cYopal.hdlr=661;
        cPopayan.hdlr= 339;
        cValledupar.hdlr= 908;
        cQuibdo.hdlr= 250;
        cMonteria.hdlr=614;
        cInirida.hdlr= 867;
        cSanJosedelGuaviare.hdlr=687;
        cNeiva.hdlr=329;
        cRioacha.hdlr=1065;
        cSantaMarta.hdlr=1000;
        cVillavicencio.hdlr=408;
        cPasto.hdlr=585;
        cCucuta.hdlr=745;
        cMocoa.hdlr=612;
        cArmenia.hdlr=44;
        cPereira.hdlr=0;
        cSanAndres.hdlr=1087;
        cBucaramanga.hdlr=557;
        cSincelejo.hdlr=682;
        cIbague.hdlr=124;
        cCali.hdlr=208;
        cMitu.hdlr=723;
        cPuertoCarreño.hdlr=1256;
      }
      else if(datof==='Manizales'){
        cLeticia.hdlr=1202;
        cBogota.hdlr=293;
        cMedellin.hdlr=194;
        cArauca.hdlr=986;
        cBarranquilla.hdlr=999
        cCartagena.hdlr=822
        cTunja.hdlr=423
        cManizales.hdlr=0
        cFlorencia.hdlr=661
        cYopal.hdlr=638
        cPopayan.hdlr= 386
        cValledupar.hdlr= 864
        cQuibdo.hdlr= 301
        cMonteria.hdlr=597
        cInirida.hdlr= 851
        cSanJosedelGuaviare.hdlr=685
        cNeiva.hdlr=426
        cRioacha.hdlr=1009
        cSantaMarta.hdlr=953
        cVillavicencio.hdlr=408
        cPasto.hdlr=637
        cCucuta.hdlr=699
        cMocoa.hdlr=661
        cArmenia.hdlr=96
        cPereira.hdlr=51
        cSanAndres.hdlr=1076
        cBucaramanga.hdlr=509
        cSincelejo.hdlr=644
        cIbague.hdlr=174
        cCali.hdlr=257
        cMitu.hdlr=723
        cPuertoCarreño.hdlr=1257
      }
      else if(datof==='Cartagena'){
        cLeticia.hdlr=1734;
        cBogota.hdlr=1059;
        cMedellin.hdlr=628;
        cArauca.hdlr=1029;
        cBarranquilla.hdlr=134
        cCartagena.hdlr=0
        cTunja.hdlr=919
        cManizales.hdlr=822
        cFlorencia.hdlr=1456
        cYopal.hdlr=1124
        cPopayan.hdlr= 1175
        cValledupar.hdlr= 360
        cQuibdo.hdlr= 857
        cMonteria.hdlr=276
        cInirida.hdlr= 1104
        cSanJosedelGuaviare.hdlr=1459
        cNeiva.hdlr=1232
        cRioacha.hdlr=399
        cSantaMarta.hdlr=236
        cVillavicencio.hdlr=1183
        cPasto.hdlr=1426
        cCucuta.hdlr=734
        cMocoa.hdlr=1547
        cArmenia.hdlr=855
        cPereira.hdlr=840
        cSanAndres.hdlr=720
        cBucaramanga.hdlr=651
        cSincelejo.hdlr=170
        cIbague.hdlr=1067
        cCali.hdlr=1046
        cMitu.hdlr=1169
        cPuertoCarreño.hdlr=1744
      }
      else if(datof === 'Tunja'){
        cLeticia.hdlr=1148;
        cMedellin.hdlr=419;
        cBogota.hdlr=80;
        cArauca.hdlr=564;
        cBarranquilla.hdlr=860;
        cCartagena.hdlr=919;
        cTunja.hdlr=0;
        cManizales.hdlr=423;
        cFlorencia.hdlr=690;
        cYopal.hdlr=216;
        cPopayan.hdlr= 723;
        cValledupar.hdlr= 726;
        cQuibdo.hdlr= 708;
        cMonteria.hdlr=717;
        cInirida.hdlr= 630;
        cSanJosedelGuaviare.hdlr=538;
        cNeiva.hdlr=454;
        cRioacha.hdlr=871;
        cSantaMarta.hdlr=815;
        cVillavicencio.hdlr=261;
        cPasto.hdlr=919;
        cCucuta.hdlr=416;
        cMocoa.hdlr=773;
        cArmenia.hdlr=421;
        cPereira.hdlr=460;
        cSanAndres.hdlr=1204;
        cBucaramanga.hdlr=282;
        cSincelejo.hdlr=773;
        cIbague.hdlr=341;
        cCali.hdlr=602;
        cMitu.hdlr=590;
        cPuertoCarreño.hdlr=1108;
      }
     else if(datof === 'Pasto'){
        cLeticia.hdlr=1014;
        cMedellin.hdlr=797;
        cBogota.hdlr=779;
        cArauca.hdlr=1482;
        cBarranquilla.hdlr=1631;
        cCartagena.hdlr=1426;
        cTunja.hdlr=919;
        cManizales.hdlr=637;
        cFlorencia.hdlr=391;
        cYopal.hdlr=1119;
        cPopayan.hdlr=246;
        cValledupar.hdlr= 1494;
        cQuibdo.hdlr= 804;
        cMonteria.hdlr=1200;
        cInirida.hdlr= 1081;
        cSanJosedelGuaviare.hdlr=1145;
        cNeiva.hdlr=466;
        cRioacha.hdlr=1651;
        cSantaMarta.hdlr=1586;
        cVillavicencio.hdlr=866;
        cPasto.hdlr=0;
        cCucuta.hdlr=1331;
        cMocoa.hdlr=146;
        cArmenia.hdlr=555;
        cPereira.hdlr=585;
        cSanAndres.hdlr=1354;
        cBucaramanga.hdlr=1141;
        cSincelejo.hdlr=1266;
        cIbague.hdlr=641;
        cCali.hdlr=836;
        cMitu.hdlr=784;
        cPuertoCarreño.hdlr=1774;
      }
      else if(datof === 'Popayan'){
        cLeticia.hdlr=1047;
        cMedellin.hdlr=547;
        cBogota.hdlr=592;
        cArauca.hdlr=1286;
        cBarranquilla.hdlr=1381;
        cCartagena.hdlr=1175;
        cTunja.hdlr=723;
        cManizales.hdlr=386;
        cFlorencia.hdlr=268;
        cYopal.hdlr=923;
        cPopayan.hdlr=0;
        cValledupar.hdlr= 1250;
        cQuibdo.hdlr= 550;
        cMonteria.hdlr=953;
        cInirida.hdlr= 977;
        cSanJosedelGuaviare.hdlr=957;
        cNeiva.hdlr=273;
        cRioacha.hdlr=1395;
        cSantaMarta.hdlr=1339;
        cVillavicencio.hdlr=681;
        cPasto.hdlr=246;
        cCucuta.hdlr=1085;
        cMocoa.hdlr=278;
        cArmenia.hdlr=310;
        cPereira.hdlr=339;
        cSanAndres.hdlr=1258;
        cBucaramanga.hdlr=895;
        cSincelejo.hdlr=1020;
        cIbague.hdlr=395;
        cCali.hdlr=139;
        cMitu.hdlr=721;
        cPuertoCarreño.hdlr=1528;
      }
      else if(datof==='Cucuta'){
        cLeticia.hdlr=1373;
        cBogota.hdlr=555;
        cMedellin.hdlr=580;
        cArauca.hdlr=276;
        cBarranquilla.hdlr=673
        cCartagena.hdlr=734
        cTunja.hdlr=416
        cManizales.hdlr=699
        cFlorencia.hdlr=1098
        cYopal.hdlr=513
        cPopayan.hdlr= 1085
        cValledupar.hdlr= 536
        cQuibdo.hdlr= 809
        cMonteria.hdlr=703
        cInirida.hdlr= 675
        cSanJosedelGuaviare.hdlr=953
        cNeiva.hdlr=862
        cRioacha.hdlr=693
        cSantaMarta.hdlr=628
        cVillavicencio.hdlr=674
        cPasto.hdlr=1331
        cCucuta.hdlr=0
        cMocoa.hdlr=1180
        cArmenia.hdlr=786
        cPereira.hdlr=745
        cSanAndres.hdlr=1133
        cBucaramanga.hdlr=195
        cSincelejo.hdlr=586
        cIbague.hdlr=700
        cCali.hdlr=952
        cMitu.hdlr=779
        cPuertoCarreño.hdlr=1522
      }
        else if(datof==='Arauca'){
        cLeticia.hdlr=1256;
        cMedellin.hdlr=986;
        cArauca.hdlr=0;
        cBarranquilla.hdlr=950
        cCartagena.hdlr=1029
        cTunja.hdlr=564
        cManizales.hdlr=986
        cFlorencia.hdlr=1252
        cYopal.hdlr=362
        cPopayan.hdlr= 1286
        cValledupar.hdlr= 822
        cQuibdo.hdlr= 1270
        cMonteria.hdlr=986
        cBogota.hdlr=703;
        cInirida.hdlr= 471
        cSanJosedelGuaviare.hdlr=898
        cNeiva.hdlr=1017
        cRioacha.hdlr=850
        cSantaMarta.hdlr=1021
        cVillavicencio.hdlr=614
        cPasto.hdlr=1482
        cCucuta.hdlr=276
        cMocoa.hdlr=1336
        cArmenia.hdlr=984
        cPereira.hdlr=1023
        cSanAndres.hdlr=1350
        cBucaramanga.hdlr=436
        cSincelejo.hdlr=870
        cIbague.hdlr=904
        cCali.hdlr=1164
        cMitu.hdlr=649
        cPuertoCarreño.hdlr=1329
      }
      else if(datof==='Florencia'){
        cLeticia.hdlr=904;
        cMedellin.hdlr=813;
        cArauca.hdlr=1252;
        cBarranquilla.hdlr=1397
        cCartagena.hdlr=1456
        cTunja.hdlr=690
        cManizales.hdlr=661
        cFlorencia.hdlr=0
        cYopal.hdlr=898
        cPopayan.hdlr= 268
        cValledupar.hdlr= 1262
        cQuibdo.hdlr= 812
        cMonteria.hdlr=1187
        cBogota.hdlr=548;
        cInirida.hdlr= 888
        cSanJosedelGuaviare.hdlr=914
        cNeiva.hdlr=235
        cRioacha.hdlr=1408
        cSantaMarta.hdlr=1352
        cVillavicencio.hdlr=638
        cPasto.hdlr=391
        cCucuta.hdlr=1098
        cMocoa.hdlr=245
        cArmenia.hdlr=525
        cPereira.hdlr=564
        cSanAndres.hdlr=1391
        cBucaramanga.hdlr=908
        cSincelejo.hdlr=1310
        cIbague.hdlr=446
        cCali.hdlr=402
        cMitu.hdlr=598
        cPuertoCarreño.hdlr=1485
      }
      else if(datof==='Yopal'){
        cLeticia.hdlr=1096;
        cMedellin.hdlr=624;
        cArauca.hdlr=362;
        cBarranquilla.hdlr=1064
        cCartagena.hdlr=1124
        cTunja.hdlr=216
        cManizales.hdlr=638
        cFlorencia.hdlr=898
        cYopal.hdlr=0
        cPopayan.hdlr= 923
        cValledupar.hdlr= 909
        cQuibdo.hdlr= 908
        cMonteria.hdlr=901
        cBogota.hdlr=341;
        cInirida.hdlr= 522
        cSanJosedelGuaviare.hdlr=536
        cNeiva.hdlr=655
        cRioacha.hdlr=1054
        cSantaMarta.hdlr=999
        cVillavicencio.hdlr=252
        cPasto.hdlr=1119
        cCucuta.hdlr=513
        cMocoa.hdlr=973
        cArmenia.hdlr=622
        cPereira.hdlr=661
        cSanAndres.hdlr=1299
        cBucaramanga.hdlr=465
        cSincelejo.hdlr=957
        cIbague.hdlr=542
        cCali.hdlr=802
        cMitu.hdlr=515
        cPuertoCarreño.hdlr=967
      }
      else if(datof==='Valledupar'){
        cLeticia.hdlr=1672;
        cMedellin.hdlr=745;
        cArauca.hdlr=822;
        cBarranquilla.hdlr=301
        cCartagena.hdlr=360
        cTunja.hdlr=726
        cManizales.hdlr=864
        cFlorencia.hdlr=1262
        cYopal.hdlr=909
        cPopayan.hdlr= 1250
        cValledupar.hdlr= 0
        cQuibdo.hdlr= 972
        cMonteria.hdlr=433
        cBogota.hdlr=863;
        cInirida.hdlr= 939
        cSanJosedelGuaviare.hdlr=1255
        cNeiva.hdlr=1250
        cRioacha.hdlr=159
        cSantaMarta.hdlr=254
        cVillavicencio.hdlr=979
        cPasto.hdlr=1494
        cCucuta.hdlr=536
        cMocoa.hdlr=1344
        cArmenia.hdlr=949
        cPereira.hdlr=908
        cSanAndres.hdlr=950
        cBucaramanga.hdlr=447
        cSincelejo.hdlr=317
        cIbague.hdlr=863
        cCali.hdlr=1115
        cMitu.hdlr=1077
        cPuertoCarreño.hdlr=1826
      }
else if(datof==='Quibdo'){
        cLeticia.hdlr=1329;
        cMedellin.hdlr=229;
        cArauca.hdlr=1270;
        cBarranquilla.hdlr=951
        cCartagena.hdlr=857
        cTunja.hdlr=708
        cManizales.hdlr=301
        cFlorencia.hdlr=812
        cYopal.hdlr=908
        cPopayan.hdlr= 550
        cValledupar.hdlr= 972
        cQuibdo.hdlr= 0
        cMonteria.hdlr=632
        cBogota.hdlr=565;
        cInirida.hdlr= 987
        cSanJosedelGuaviare.hdlr=931
        cNeiva.hdlr=574
        cRioacha.hdlr=1119
        cSantaMarta.hdlr=1036
        cVillavicencio.hdlr=654
        cPasto.hdlr=804
        cCucuta.hdlr=809
        cMocoa.hdlr=829
        cArmenia.hdlr=290
        cPereira.hdlr=250
        cSanAndres.hdlr=944
        cBucaramanga.hdlr=619
        cSincelejo.hdlr=699
        cIbague.hdlr=368
        cCali.hdlr=425
        cMitu.hdlr=866
        cPuertoCarreño.hdlr=1501
      }
else if(datof==='Monteria'){
        cLeticia.hdlr=1583;
        cMedellin.hdlr=403;
        cArauca.hdlr=986;
        cBarranquilla.hdlr=370
        cCartagena.hdlr=276
        cTunja.hdlr=717
        cManizales.hdlr=597
        cFlorencia.hdlr=1187
        cYopal.hdlr=901
        cPopayan.hdlr= 953
        cValledupar.hdlr= 433
        cQuibdo.hdlr= 632
        cMonteria.hdlr=0
        cBogota.hdlr=790;
        cInirida.hdlr= 1032
        cSanJosedelGuaviare.hdlr=1182
        cNeiva.hdlr=951
        cRioacha.hdlr=605
        cSantaMarta.hdlr=441
        cVillavicencio.hdlr=905
        cPasto.hdlr=1200
        cCucuta.hdlr=703
        cMocoa.hdlr=1270
        cArmenia.hdlr=659
        cPereira.hdlr=614
        cSanAndres.hdlr=765
        cBucaramanga.hdlr=614
        cSincelejo.hdlr=121
        cIbague.hdlr=789
        cCali.hdlr=820
        cMitu.hdlr=1041
        cPuertoCarreño.hdlr=1752
      }
else if(datof==='Inirida'){
        cLeticia.hdlr=924;
        cMedellin.hdlr=887;
        cArauca.hdlr=471;
        cBarranquilla.hdlr=1097
        cCartagena.hdlr=1104
        cTunja.hdlr=630
        cManizales.hdlr=851
        cFlorencia.hdlr=888
        cYopal.hdlr=522
        cPopayan.hdlr= 977
        cValledupar.hdlr= 939
        cQuibdo.hdlr= 987
        cMonteria.hdlr=1032
        cBogota.hdlr=688;
        cInirida.hdlr= 0
        cSanJosedelGuaviare.hdlr=543
        cNeiva.hdlr=823
        cRioacha.hdlr=1014
        cSantaMarta.hdlr=1072
        cVillavicencio.hdlr=634
        cPasto.hdlr=1081
        cCucuta.hdlr=675
        cMocoa.hdlr=1015
        cArmenia.hdlr=862
        cPereira.hdlr=867
        cSanAndres.hdlr=1797
        cBucaramanga.hdlr=679
        cSincelejo.hdlr=1022
        cIbague.hdlr=814
        cCali.hdlr=956
        cMitu.hdlr=388
        cPuertoCarreño.hdlr=262
      }
      else if(datof==='SanJosedelGuaviare'){
        cLeticia.hdlr=743;
        cMedellin.hdlr=589;
        cArauca.hdlr=898;
        cBarranquilla.hdlr=1032
        cCartagena.hdlr=1459
        cTunja.hdlr=538
        cManizales.hdlr=685
        cFlorencia.hdlr=914
        cYopal.hdlr=536
        cPopayan.hdlr= 957
        cValledupar.hdlr= 1255
        cQuibdo.hdlr= 931
        cMonteria.hdlr=1182
        cBogota.hdlr=399;
        cInirida.hdlr= 543
        cSanJosedelGuaviare.hdlr=0
        cNeiva.hdlr=681
        cRioacha.hdlr=1404
        cSantaMarta.hdlr=1349
        cVillavicencio.hdlr=284
        cPasto.hdlr=1145
        cCucuta.hdlr=953
        cMocoa.hdlr=999
        cArmenia.hdlr=648
        cPereira.hdlr=687
        cSanAndres.hdlr=1494
        cBucaramanga.hdlr=824
        cSincelejo.hdlr=1307
        cIbague.hdlr=568
        cCali.hdlr=442
        cMitu.hdlr=305
        cPuertoCarreño.hdlr=1131
      }
else if(datof==='Neiva'){
        cLeticia.hdlr=991;
        cMedellin.hdlr=578;
        cArauca.hdlr=1017;
        cBarranquilla.hdlr=1162
        cCartagena.hdlr=1232
        cTunja.hdlr=454
        cManizales.hdlr=426
        cFlorencia.hdlr=235
        cYopal.hdlr=655
        cPopayan.hdlr= 273
        cValledupar.hdlr= 1025
        cQuibdo.hdlr= 574
        cMonteria.hdlr=951
        cBogota.hdlr=314;
        cInirida.hdlr= 823
        cSanJosedelGuaviare.hdlr=681
        cNeiva.hdlr=0
        cRioacha.hdlr=1172
        cSantaMarta.hdlr=1117
        cVillavicencio.hdlr=402
        cPasto.hdlr=466
        cCucuta.hdlr=862
        cMocoa.hdlr=320
        cArmenia.hdlr=290
        cPereira.hdlr=329
        cSanAndres.hdlr=1281
        cBucaramanga.hdlr=672
        cSincelejo.hdlr=1075
        cIbague.hdlr=210
        cCali.hdlr=322
        cMitu.hdlr=591
        cPuertoCarreño.hdlr=1249
      }
 else if(datof==='SantaMarta'){
        cLeticia.hdlr=1780;
        cMedellin.hdlr=834;
        cArauca.hdlr=1021;
        cBarranquilla.hdlr=105
        cCartagena.hdlr=236
        cTunja.hdlr=815
        cManizales.hdlr=953
        cFlorencia.hdlr=1352
        cYopal.hdlr=999
        cPopayan.hdlr= 1339
        cValledupar.hdlr= 254
        cQuibdo.hdlr= 1036
        cMonteria.hdlr=441
        cBogota.hdlr=956;
        cInirida.hdlr= 1072
        cSanJosedelGuaviare.hdlr=1349
        cNeiva.hdlr=1117
        cRioacha.hdlr=251
        cSantaMarta.hdlr=0
        cVillavicencio.hdlr=1071
        cPasto.hdlr=1586
        cCucuta.hdlr=628
        cMocoa.hdlr=1436
        cArmenia.hdlr=1041
        cPereira.hdlr=1000
        cSanAndres.hdlr=828
        cBucaramanga.hdlr=539
        cSincelejo.hdlr=324
        cIbague.hdlr=955
        cCali.hdlr=1207
        cMitu.hdlr=1194
        cPuertoCarreño.hdlr=1918
      }
      else if(datof==='Villavicencio'){
        cLeticia.hdlr=1015;
        cMedellin.hdlr=532;
        cArauca.hdlr=614;
        cBarranquilla.hdlr=1105
        cCartagena.hdlr=1183
        cTunja.hdlr=261
        cManizales.hdlr=408
        cFlorencia.hdlr=638
        cYopal.hdlr=252
        cPopayan.hdlr= 681
        cValledupar.hdlr= 979
        cQuibdo.hdlr= 654
        cMonteria.hdlr=905
        cBogota.hdlr=123;
        cInirida.hdlr= 634
        cSanJosedelGuaviare.hdlr=284
        cNeiva.hdlr=402
        cRioacha.hdlr=1136
        cSantaMarta.hdlr=1071
        cVillavicencio.hdlr=0
        cPasto.hdlr=866
        cCucuta.hdlr=674
        cMocoa.hdlr=720
        cArmenia.hdlr=369
        cPereira.hdlr=408
        cSanAndres.hdlr=1287
        cBucaramanga.hdlr=516
        cSincelejo.hdlr=1028
        cIbague.hdlr=289
        cCali.hdlr=549
        cMitu.hdlr=497
        cPuertoCarreño.hdlr=852
      }
else if(datof==='Mocoa'){
        cLeticia.hdlr=954;
        cMedellin.hdlr=897;
        cArauca.hdlr=1336;
        cBarranquilla.hdlr=1481
        cCartagena.hdlr=1547
        cTunja.hdlr=773
        cManizales.hdlr=661
        cFlorencia.hdlr=245
        cYopal.hdlr=973
        cPopayan.hdlr= 278
        cValledupar.hdlr= 1344
        cQuibdo.hdlr= 829
        cMonteria.hdlr=1270
        cBogota.hdlr=633;
        cInirida.hdlr= 1015
        cSanJosedelGuaviare.hdlr=999
        cNeiva.hdlr=320
        cRioacha.hdlr=1501
        cSantaMarta.hdlr=1436
        cVillavicencio.hdlr=720
        cPasto.hdlr=146
        cCucuta.hdlr=1180
        cMocoa.hdlr=0
        cArmenia.hdlr=609
        cPereira.hdlr=612
        cSanAndres.hdlr=1386
        cBucaramanga.hdlr=991
        cSincelejo.hdlr=1394
        cIbague.hdlr=529
        cCali.hdlr=412
        cMitu.hdlr=713
        cPuertoCarreño.hdlr=1568
      }
else if(datof==='Bucaramanga'){
        cLeticia.hdlr=1306;
        cMedellin.hdlr=390;
        cArauca.hdlr=436;
        cBarranquilla.hdlr=584
        cCartagena.hdlr=651
        cTunja.hdlr=282
        cManizales.hdlr=509
        cFlorencia.hdlr=908
        cYopal.hdlr=465
        cPopayan.hdlr= 895
        cValledupar.hdlr= 447
        cQuibdo.hdlr= 619
        cMonteria.hdlr=614
        cBogota.hdlr=397;
        cInirida.hdlr= 679
        cSanJosedelGuaviare.hdlr=824
        cNeiva.hdlr=672
        cRioacha.hdlr=604
        cSantaMarta.hdlr=539
        cVillavicencio.hdlr=516
        cPasto.hdlr=1141
        cCucuta.hdlr=195
        cMocoa.hdlr=991
        cArmenia.hdlr=596
        cPereira.hdlr=557
        cSanAndres.hdlr=1118
        cBucaramanga.hdlr=0
        cSincelejo.hdlr=497
        cIbague.hdlr=511
        cCali.hdlr=762
        cMitu.hdlr=726
        cPuertoCarreño.hdlr=1392
      }
      else if(datof==='Sincelejo'){
        cLeticia.hdlr=1618;
        cMedellin.hdlr=470;
        cArauca.hdlr=870;
        cBarranquilla.hdlr=254
        cCartagena.hdlr=170
        cTunja.hdlr=773
        cManizales.hdlr=664
        cFlorencia.hdlr=1310
        cYopal.hdlr=957
        cPopayan.hdlr= 1020
        cValledupar.hdlr= 317
        cQuibdo.hdlr= 699
        cMonteria.hdlr=121
        cBogota.hdlr=914;
        cInirida.hdlr= 1022
        cSanJosedelGuaviare.hdlr=1307
        cNeiva.hdlr=1075
        cRioacha.hdlr=486
        cSantaMarta.hdlr=324
        cVillavicencio.hdlr=1028
        cPasto.hdlr=1266
        cCucuta.hdlr=586
        cMocoa.hdlr=1394
        cArmenia.hdlr=726
        cPereira.hdlr=682
        cSanAndres.hdlr=779
        cBucaramanga.hdlr=497
        cSincelejo.hdlr=0
        cIbague.hdlr=911
        cCali.hdlr=887
        cMitu.hdlr=1061
        cPuertoCarreño.hdlr=1874
      }
      else if(datof==='Armenia'){
        cLeticia.hdlr=1161;
        cMedellin.hdlr=256;
        cArauca.hdlr=984;
        cBarranquilla.hdlr=1086
        cCartagena.hdlr=855
        cTunja.hdlr=421
        cManizales.hdlr=96
        cFlorencia.hdlr=525
        cYopal.hdlr=622
        cPopayan.hdlr= 310
        cValledupar.hdlr= 949
        cQuibdo.hdlr= 290
        cMonteria.hdlr=659
        cBogota.hdlr=290;
        cInirida.hdlr= 659
        cSanJosedelGuaviare.hdlr=281
        cNeiva.hdlr=862
        cRioacha.hdlr=648
        cSantaMarta.hdlr=290
        cVillavicencio.hdlr=1106
        cPasto.hdlr=555
        cCucuta.hdlr=786
        cMocoa.hdlr=609
        cArmenia.hdlr=0
        cPereira.hdlr=44
        cSanAndres.hdlr=1112
        cBucaramanga.hdlr=596
        cSincelejo.hdlr=726
        cIbague.hdlr=85
        cCali.hdlr=178
        cMitu.hdlr=706
        cPuertoCarreño.hdlr=1218
      }
      else if(datof==='Ibague'){
        cLeticia.hdlr=1127;
        cMedellin.hdlr=416;
        cArauca.hdlr=904;
        cBarranquilla.hdlr=1000
        cCartagena.hdlr=1067
        cTunja.hdlr=341
        cManizales.hdlr=174
        cFlorencia.hdlr=446
        cYopal.hdlr=542
        cPopayan.hdlr= 395
        cValledupar.hdlr= 863
        cQuibdo.hdlr= 368
        cMonteria.hdlr=789
        cBogota.hdlr=201;
        cInirida.hdlr= 814
        cSanJosedelGuaviare.hdlr=568
        cNeiva.hdlr=210
        cRioacha.hdlr=1020
        cSantaMarta.hdlr=955
        cVillavicencio.hdlr=289
        cPasto.hdlr=641
        cCucuta.hdlr=700
        cMocoa.hdlr=529
        cArmenia.hdlr=85
        cPereira.hdlr=124
        cSanAndres.hdlr=1149
        cBucaramanga.hdlr=511
        cSincelejo.hdlr=911
        cIbague.hdlr=0
        cCali.hdlr=264
        cMitu.hdlr=659
        cPuertoCarreño.hdlr=1138
      }
      else if(datof==='PuertoCarreño'){
        cLeticia.hdlr=1186;
        cMedellin.hdlr=1379;
        cArauca.hdlr=1329;
        cBarranquilla.hdlr=1963
        cCartagena.hdlr=1744
        cTunja.hdlr=1108
        cManizales.hdlr=1257
        cFlorencia.hdlr=1485
        cYopal.hdlr=967
        cPopayan.hdlr= 1528
        cValledupar.hdlr= 1826
        cQuibdo.hdlr= 1501
        cMonteria.hdlr=1752
        cBogota.hdlr=970;
        cInirida.hdlr= 262
        cSanJosedelGuaviare.hdlr=1131
        cNeiva.hdlr=1249
        cRioacha.hdlr=1983
        cSantaMarta.hdlr=1918
        cVillavicencio.hdlr=852
        cPasto.hdlr=1774
        cCucuta.hdlr=1522
        cMocoa.hdlr=1568
        cArmenia.hdlr=1218
        cPereira.hdlr=1256
        cSanAndres.hdlr=1712
        cBucaramanga.hdlr=1392
        cSincelejo.hdlr=1874
        cIbague.hdlr=1138
        cCali.hdlr=1397
        cMitu.hdlr=627
        cPuertoCarreño.hdlr=0
      }
    else if (datof === 'Rioacha'){
        alert('No hay ruta para ' + datof)
    
    }
    else if (datof === 'Mitu'){
        alert('No hay ruta para ' + datof)
    
    }
    else if (datof === 'Leticia'){
        alert('No hay ruta para ' + datof)
    
    }
    else if (datof === 'SanAndres'){
        alert('No hay ruta para ' + datof)
    
    }
 algoritmoBusquedaA(datoi,datof )

}
//form.addEventListener('input', () => algoritmoBusquedaA(dato, 'Bogota'))//
console.log(mapaRutas)

