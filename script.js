let VM = []

function calcular(){
    if(localStorage.getItem('VM') != null){
        VM = JSON.parse(localStorage.getItem('VM'))
      }
    dist = document.getElementById("dist").value
    tempo = document.getElementById("temp").value
    vmedia = document.getElementById("vel").value = dist / tempo
    resultados = document.getElementById('result')
    VM.push(vmedia)

    localStorage.setItem('VM', JSON.stringify(VM))
    
}

function limpar(){
    dist = document.getElementById("dist").value = ""
    tempo = document.getElementById("temp").value = ""
    resultado = document.getElementById("vel").value = ""
}   
