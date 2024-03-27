// leitura do canvas
let des = document.getElementById('des').getContext('2d')

// definição das instâncias => objetos
const f1 = new Carro(270,550,45,100,'assets/carro_01.png')
const c1 = new Car2(100,-90,45,100,'assets/carro_02.png')
const c2 = new Car2(200,-300,45,100,'assets/carro_03.png')

const e1 = new Est(294,6,12,80,'yellow')
const e2 = new Est(294,146,12,80,'yellow')
const e3 = new Est(294,286,12,80,'yellow')
const e4 = new Est(294,426,12,80,'yellow')
const e5 = new Est(294,566,12,80,'yellow')
const e6 = new Est(294,706,12,80,'yellow')
const e7 = new Est(4,2,12,696,'white')
const e8 = new Est(584,2,12,696,'white')

// definição dos textos
const t1 = new Text()
const t2 = new Text()
const t3 = new Text()
const t4 = new Text()
const fim = new Text()

//definicao jogo
let jogar = true

// definição das instâncias do sons
const som1 = new Audio('assets/motor_11.wav')
const som2 = new Audio('assets/batida_carro_.mp3')
const som3 = new Audio('assets/musica_inicial_loop.wav')
som1.volume = 1.0
som1.loop = true
som2.volume = 0.7
som3.loop = true
som3.volume = 0.5

// controle e movimentação
document.addEventListener('keydown', (event)=>{
    if(event.key === 'a'){
        f1.dir -=5
    }else if(event.key === 'd'){
        f1.dir +=5
    }
})

document.addEventListener('keyup', (event)=>{
    if(event.key === 'a'){
        f1.dir = 0
    }else if(event.key === 'd'){
        f1.dir = 0
    }
})

// game over
function game_over(){
    if(f1.vida <= 0){
        jogar = false
        som1.pause()
        som3.play()        
    }    
}

// pontos
function pontos(){
    if(f1.point(c1)){
        f1.pts +=1
    }
    if(f1.point(c2)){
        f1.pts +=1
    }
}

// colisão
function colisao(){
    if(f1.colid(c1)){
        c1.recomeca()
        f1.vida -=1
        som1.pause()
        som2.play()

    }else if(f1.colid(c2)){
        c2.recomecao2()
        f1.vida -=1
        som1.pause()
        som2.play()
    }
}

// desenha
function desenha(){
    t1.des_text('Pontos:',40,40,'yellow','20px Times')
    t2.des_text(f1.pts,130,40,'yellow','20px Times')
    t3.des_text('Vidas:',440,40,'yellow','20px Times')
    t4.des_text(f1.vida,500,40,'yellow','20px Times')
    
    if(jogar){
        e1.des_obj()
        e2.des_obj()
        e3.des_obj()
        e4.des_obj()
        e5.des_obj()
        e6.des_obj()
        e7.des_obj()
        e8.des_obj()
        c1.des_car()
        c2.des_car()
        f1.des_car()
    }else{
        fim.des_text('Game Over',150,350,'blue','60px Times')
        e7.des_obj()
        e8.des_obj()
    } 

}

// atualiza
function atualiza(){
    if(jogar){
        c1.mov_car2()
        c2.mov_car2()
        f1.mov_car()
        colisao()
        pontos()
        som1.play()
        e1.mov_est()
        e2.mov_est()
        e3.mov_est()
        e4.mov_est()
        e5.mov_est()
        e6.mov_est()
        game_over()
    }    
         
    
}

// principal
function main(){
    des.clearRect(0,0,600,700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()