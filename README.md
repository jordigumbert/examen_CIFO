    Para desplegar se necesita tener un hosting que admita "node" y otro que admita SQL ( casi todos )  
    ahí,
cd path/to/clone/to
git clone https://github.com/jordigumbert/examen_CIFO.git

    una vez bajado,
 cd Back 
 npm i

    para que se descarguen los npm del package json 
    ahora ya se podrian cambiar las configs ( )

cp .env.example .env 
modificar al gusto.. .aunque por hora se está usando, creo 


arrancar un servidor SQL y subir el archivo DDBB.sql de Back/ 
ejecutar el codigo en el servidor SQL 

configurar rutas del .env ( cuando se utilicen )

en teoria ahora con las IP/FQDN de los servidores, se debería de poder acceder. 





# examen_CIFO
Pràctica final de mòdul 


# npm init 

# npm install express mysql2 ... 


afegit directament a package.json 

"dependencies": {
    "bcrypt": "^6.0.0", 
    "cookie-parser": "^1.4.7",
    "dotenv": "^16.4.7",
    "express": "^5.2.1",
    "joi": "^18.1.1",
    "jsonwebtoken": "^9.0.3",
    "mysql2": "^3.20.0"
  }

  ---
    "bcrypt": per crear hash i encriptar dades
    "cookie-parser": per poder enviar informació no volàtil al client ( cookie )
    "dotenv": ens permet emprar un .env " invisible " 
    "express": el servidor en si...
    "joi": eina de validació d'entrada d'usuaris
    "jsonwebtoken": creació i validació de tokens " firmats " 
    "mysql2": accés a BBDD SQL 




  # npm i 
  
  per que s'instal·lin les dependeències ja. 

# git add . 
    guardem la config. 
# git commit -m "creació de node modules i dependencies a  package json "


# mkdir -p Front/{js,css}
# mkdir -p Back/routes

creem carpetes i fitxer .env/.example


# git add .
# git commit -m "creat .env "
# git add .
# git commit -m "creat SQL i pujat al xampp des de workbench."

# git push
    pugem a github ara que sabem que no puja .env ni node_modules


# git branch -m APIserver
    branca per fer la conexió a al servidor SQL 
    creem back/server.js i hi creem esquelet del servidor. 


# git merge origin/main
    Already up to date.
git merge APIserver


El servidor ja respon a localhost:3000 i redirecciona a front/index.html
els inputs ja tenen el seu text controlat per guardar en variables posteriorment
el boto fa de submit i reacciona al click.


ya se puede llegar a index.html desde localhost:3000 y también por localhost:3000/dades 
 ( habría que hacer paginas diferentees para cada endpoint)

 git commit 
 

 .... he dejado de anotar todo aqui xD