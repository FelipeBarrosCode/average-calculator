
var Notafinal=function (matgrade,englgrade,chemgrade,biograde,physicsgrade){
	nota=Number(((matgrade+englgrade+chemgrade+biograde+physicsgrade)/5)*10)
	return nota

}

MEDIA=function(x,y,z,n,b){
let result= Notafinal(x,y,z,n,b)
switch (true) {
	case (result>=90):
	console.log("A best grade")
	break
	case  (result>=80):
	console.log("B Second Place but okay")
	break
	case (result>=70 ):
	console.log("C Almost failed")
	break
	case (result>=60 && result<=69):
	console.log("D FUCK MAN")
	break
	case (result<=60):
	console.log("F from failure or fail")
	break


}}

MEDIA(9,9,9,9,9)


