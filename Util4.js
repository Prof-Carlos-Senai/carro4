class Obj {
    constructor(x,y,w,h,attrib){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.attrib = attrib
    }

    des_obj(){
        des.fillStyle = this.attrib
        des.fillRect(this.x,this.y,this.w,this.h)
    }
}

// classe carro
class Carro extends Obj{
    dir = 0
    pts = 0
    vida = 5
    des_car(){
        let img = new Image()
        img.src = this.attrib
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }

    mov_car(){
        this.x +=this.dir
        if(this.x <= 2){
            this.x = 4
        }else if(this.x+this.w >= 598){
            this.x = 550
        }
    }
    
    colid(objeto){
        if((this.x < objeto.x+objeto.w) && 
            (this.x+this.w > objeto.x) &&
            (this.y < objeto.y+objeto.h)&&
            (this.y+this.h > objeto.y)){
            return true
        }else{
            return false
        }
    }

    point(objeto){
        if((objeto.y > 800)){
            return true
        }
    }
}

// classe carro 2
class Car2 extends Carro{
    mov_car2(){
        this.y +=4
        if(this.y >= 810){
            this.y = -110
            this.x = (Math.random() * (524 - 4 + 1) + 4)
        }
    }

    recomeca(){
        this.y = -110
        this.x = (Math.random() * (524 - 4 + 1) + 4)
    }

    recomecao2(){
        this.y = -220
        this.x = (Math.random() * (524 - 4 + 1) + 4)
    }
}

// classe estrada
class Est extends Obj{
    mov_est(){
        this.y +=3
        if(this.y >= 790){
            this.y = -66
        }
    }
}

// classe texto
class Text{
    des_text(text,x,y,cor,font){
        des.fillStyle = cor
        des.lineWidth = '5'
        des.font = font
        des.fillText(text,x,y)
    }
}