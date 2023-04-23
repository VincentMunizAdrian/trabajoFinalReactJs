const products = [
    {
        "nombre":"Emiliano Martinez",
        "pais": "Argentina",
        "posicion": "Arquero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 200,
        "imagen": "https://i.imgur.com/QRciq3p.jpg"
    },
    {
        "nombre":"Franco Armani",
        "pais": "Argentina",
        "posicion": "Arquero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/zk6OwPa.jpg"
    },
    {
        "nombre":"Marcos Acuña",
        "pais": "Argentina",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 100,
        "imagen": "https://i.imgur.com/kZve12q.jpg"
    },
    {
        "nombre":"Nahuel Molina",
        "pais": "Argentina",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/8lqON5r.jpg"
    },
    {
        "nombre":"Nicolás Otamendi",
        "pais": "Argentina",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 100,
        "imagen": "https://i.imgur.com/pSrwo07.jpg"
    },
    {
        "nombre":"Germán Pezzella",
        "pais": "Argentina",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 100,
        "imagen": "https://i.imgur.com/8Y9NeHX.jpg"
    },
    {
        "nombre":"Cristian Romero",
        "pais": "Argentina",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 100,
        "imagen": "https://i.imgur.com/WcMDF0C.jpg"
    },
    {
        "nombre":"Rodrigo De Paul",
        "pais": "Argentina",
        "posicion": "Mediocampista",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 100,
        "imagen": "https://i.imgur.com/fBhqV27.jpg"
    },
    {
        "nombre":"Ángel Di María",
        "pais": "Argentina",
        "posicion": "Mediocampista",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 300,
        "imagen": "https://i.imgur.com/iKPyKJO.jpg"
    },
    {
        "nombre":"Giovani Lo Celso",
        "pais": "Argentina",
        "posicion": "Mediocampista",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 100,
        "imagen": "https://i.imgur.com/FKBQ0EN.jpg"
    },
    {
        "nombre":"Leandro Paredes",
        "pais": "Argentina",
        "posicion": "Mediocampista",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/zqz4hpS.jpg"
    },
    {
        "nombre":"Guido Rodríguez",
        "pais":"Argentina",
        "posicion": "Mediocampista",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/eiXUeYt.jpg"
    },
    {
        "nombre":"Julián Álvarez ",
        "pais":"Argentina",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 150,
        "imagen": "https://i.imgur.com/qJsW5x0.jpg"
    },
    {
        "nombre":"Joaquín Correa",
        "pais":"Argentina",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/w5WgV6V.jpg"
    },
    {
        "nombre":"Alejandro Gómez",
        "pais":"Argentina",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/PQlnlki.jpg"
    },
    {
        "nombre":"Nicolás González",
        "pais": "Argentina",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/Ow3f9jJ.jpg"
    },
    {
        "nombre":"Lautaro Martínez",
        "pais": "Argentina",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/uPLG1sF.jpg"
    },
    {
        "nombre":"Lionel Messi",
        "pais": "Argentina",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 500,
        "imagen": "https://i.imgur.com/NP1lV8L.jpg"
    },
    {
        "nombre":"Antonio Rudiger",
        "pais": "Alemania",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 200,
        "imagen": "https://i.imgur.com/S8oXyK9.jpg"
    },
    {
        "nombre":"David Raum",
        "pais": "Alemania",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/hXvKSjJ.jpg"
    },
    {
        "nombre":"Ilkay Gundogan",
        "pais": "Alemania",
        "posicion": "Mediocampista",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 200,
        "imagen": "https://i.imgur.com/YJwwOuF.jpg"
    },
    {
        "nombre":"Jonas Hofmann",
        "pais": "Alemania",
        "posicion": "Mediocampista",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/LTt9QK0.jpg"
    },
    {
        "nombre":"Joshua Kimmich",
        "pais": "Alemania",
        "posicion": "Mediocampista",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/jNZKd9l.jpg"
    },
    {
        "nombre":"Kai Havertz",
        "pais": "Alemania",
        "posicion": "Mediocampista",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/4eKXE2j.jpg"
    },
    {
        "nombre":"Leon Goretzka",
        "pais": "Alemania",
        "posicion": "Mediocampista",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/sId95BH.jpg"
    },
    {
        "nombre":"Leroy Sane",
        "pais": "Alemania",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/nu23eD5.jpg"
    },
    {
        "nombre":"Manuel Neuer",
        "pais": "Alemania",
        "posicion": "Arquero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 150,
        "imagen": "https://i.imgur.com/x6Ul3yc.jpg"
    },
    {
        "nombre":"Marc-André ter Stegen",
        "pais": "Alemania",
        "posicion": "Arquero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 100,
        "imagen": "https://i.imgur.com/dTvnp3x.jpg"
    },
    {
        "nombre":"Marco Reus",
        "pais": "Alemania",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 200,
        "imagen": "https://i.imgur.com/NmS3TG4.jpg"
    },
    {
        "nombre":"Matthias Ginter",
        "pais": "Alemania",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/rx42dy1.jpg"
    },
    {
        "nombre":"Niklas Sule",
        "pais": "Alemania",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/mkTxsPC.jpg"
    },
    {
        "nombre":"Robin Gosens",
        "pais": "Alemania",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 100,
        "imagen": "https://i.imgur.com/v2WUUhq.jpg"
    },
    {
        "nombre":"Serge Gnabry",
        "pais": "Alemania",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 50,
        "imagen": "https://i.imgur.com/6bdERFs.jpg"
    },
    {
        "nombre":"Thilo Kehrer",
        "pais": "Alemania",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 100,
        "imagen": "https://i.imgur.com/8eMdkY5.jpg"
    },
    {
        "nombre":"Thomas Muller",
        "pais": "Alemania",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 350,
        "imagen": "https://i.imgur.com/iG0SrOz.jpg"
    },
    {
        "nombre":"Timo Werner",
        "pais": "Alemania",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 150,
        "imagen": "https://i.imgur.com/oH8GHtt.jpg"
    },
    {
        "nombre":"Alex Sandro",
        "pais": "Brasil",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 100,
        "imagen": "https://i.imgur.com/9sgcJT5.jpg"
    },
    {
        "nombre":"Alisson",
        "pais": "Brasil",
        "posicion": "Arquero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 200,
        "imagen": "https://i.imgur.com/pUavEcv.jpg"
    },
    {
        "nombre":"Antony",
        "pais": "Brasil",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 250,
        "imagen": "https://i.imgur.com/4OB2jT3.jpg"
    },
    {
        "nombre":"Casemiro",
        "pais": "Brasil",
        "posicion": "Mediocampista",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 150,
        "imagen": "https://i.imgur.com/DfqKqvw.jpg"
    },
    {
        "nombre":"Danilo",
        "pais": "Brasil",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 150,
        "imagen": "https://i.imgur.com/DWXgaH5.jpg"
    },
    {
        "nombre":"Éder Militao",
        "pais": "Brasil",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 100,
        "imagen": "https://i.imgur.com/lR5MrLQ.jpg"
    },
    {
        "nombre":"Ederson",
        "pais": "Brasil",
        "posicion": "Arquero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 150,
        "imagen": "https://i.imgur.com/jfqcnOK.jpg"
    },
    {
        "nombre":"Gabriel Jesus",
        "pais": "Brasil",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 150,
        "imagen": "https://i.imgur.com/nbPGH0D.jpg"
    },
    {
        "nombre":"Luca Paquetá",
        "pais": "Brasil",
        "posicion": "Mediocampista",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 200,
        "imagen": "https://i.imgur.com/7PS4cFU.jpg"
    },
    {
        "nombre":"Marquinhos",
        "pais": "Brasil",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 150,
        "imagen": "https://i.imgur.com/XmGP9ci.jpg"
    },
    {
        "nombre":"Neymar Jr",
        "pais": "Brasil",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 450,
        "imagen": "https://i.imgur.com/MuGpTA0.jpg"
    },
    {
        "nombre":"Raphinha",
        "pais": "Brasil",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 200,
        "imagen": "https://i.imgur.com/QyqW3t4.jpg"
    },
    {
        "nombre":"Richarlison",
        "pais": "Brasil",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 200,
        "imagen": "https://i.imgur.com/YII9T4i.jpg"
    },
    {
        "nombre":"Thiago Silva",
        "pais": "Brasil",
        "posicion": "Defensor",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 200,
        "imagen": "https://i.imgur.com/UQonPWb.jpg"
    },
    {
        "nombre":"Vinícius Jr",
        "pais": "Brasil",
        "posicion": "Delantero",
        "torneo": "Mundial",
        "año": "2022",
        "precio": 150,
        "imagen": "https://i.imgur.com/vXDPSGk.jpg"
    }
]

export default products;