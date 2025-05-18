const time = document.getElementById("time")

const message = function getTime(x){
        x = new Date()
        x = x.getHours()
        if(x >= 0 && x <= 12){
            return "Morning"
        }
        if(x >= 12 && x <= 19){
            return "Afternoon"
        }
        if(x >= 19 && x <= 23){
            return "Evening"
        }
    }

time.append(message())