#Instalar paquetes
install.packages("data.table")
install.packages("tm")
install.packages("corfus")
install.packages("wordcloud")

#Mandarlos a llamar
library(data.table)
library(tm)
library(wordcloud)
library(RColorBrewer)

#Levantar una data table
dt <- data.table(
  name = "Isaac",
  lastname = "Reyes")

#Crear un array
ar = array(c("Pastor","Coca"))

#Crear una lista
mi_lista <- list(
  taco = "Pastor",
  refresco = "Coca"
)

#Fecha de hoy
hoy <- Sys.Date()

class(hoy)

#Tiempo de hoy
time <- Sys.time()

class(time)

#Fecha completa
fecha <- as.Date("2003-29-07",format="%Y-%d-%m")

install.package("tm")

#Crear un vector
comentarios <- c("muy mal programa", 
                 "bueno mori varias veces en el tutorial muy de dark souls",
                 "this game has no business being this hard to run that so many performance vids came out on launch",
                 "for some reason marvel rivals make my pc fans tweak out and rev up to the max",
                 "thanks for the video but btw its not the nvdia app thats killing performance its the nvdia overlay if you keep overlay off you will face no problems at all", 
                 "awesome guide decided to give rivals a shot but my fps was awful went from 60 to 150 thanks",
                 "teach a man to fish", 
                 "thanks for settings i was hitting 120 fps before", 
                 "why it keeps happening", 
                 "lust destroys a mans empire everyone men should watch this video thank you", 
                 "praise God for this video")
  
grepl("muy",comentarios)


print(fecha)
print(dt)