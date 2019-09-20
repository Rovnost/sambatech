import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { FormGroup,FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  conteudoDiv = [];
  buscaAtiva = false;
  paginaAtual = 1;
  semResultados = false;

  constructor(private pesquisaService: ApiService) { }

  ngOnInit() {
    this.pesquisaService.pegarPersonagens(0)
    .subscribe(dados => this.preencherDiv(dados));
  }

  pesquisaForm = new FormGroup({
    pesquisa: new FormControl('', Validators.required),
  });

  preencherDiv(dados){
    this.conteudoDiv = dados;
  }

  pesquisarPersonagem(){
    this.pesquisaService.pesquisarPersonagens(this.pesquisaForm.value.pesquisa)
    .subscribe(dados => this.replaceDiv(dados));
  }

  replaceDiv(dados){
    console.log(dados);
    this.buscaAtiva = true;
    this.conteudoDiv = dados;
    if(dados.length === 0){
      this.semResultados = true;
    }
  }

  proximaPagina(){
    if(this.paginaAtual == 1){
      this.pesquisaService.pegarPersonagens(10)
      .subscribe(dados => this.preencherDiv(dados));
    }else if(this.paginaAtual == 2){
      this.pesquisaService.pegarPersonagens(20)
      .subscribe(dados => this.preencherDiv(dados));
    }else if(this.paginaAtual == 3){
      this.pesquisaService.pegarPersonagens(30)
      .subscribe(dados => this.preencherDiv(dados));
    }else if(this.paginaAtual == 4){
      this.pesquisaService.pegarPersonagens(40)
      .subscribe(dados => this.preencherDiv(dados));
    }else if(this.paginaAtual == 5){
      this.pesquisaService.pegarPersonagens(50)
      .subscribe(dados => this.preencherDiv(dados));
    }
    this.paginaAtual = this.paginaAtual + 1;
    console.log(this.paginaAtual);
  }

  voltarPagina(){
  if(this.paginaAtual == 2){
      this.pesquisaService.pegarPersonagens(0)
      .subscribe(dados => this.preencherDiv(dados));
    }else if(this.paginaAtual == 3){
      this.pesquisaService.pegarPersonagens(10)
      .subscribe(dados => this.preencherDiv(dados));
    }else if(this.paginaAtual == 4){
      this.pesquisaService.pegarPersonagens(20)
      .subscribe(dados => this.preencherDiv(dados));
    }else if(this.paginaAtual == 5){
      this.pesquisaService.pegarPersonagens(30)
      .subscribe(dados => this.preencherDiv(dados));
    }else{
      this.pesquisaService.pegarPersonagens(40)
      .subscribe(dados => this.preencherDiv(dados));
    }
    this.paginaAtual = this.paginaAtual - 1;
    console.log(this.paginaAtual);
  }

  pagina1(){
    this.paginaAtual = 1;
    this.pesquisaService.pegarPersonagens(0)
    .subscribe(dados => this.preencherDiv(dados));
  }

  pagina2(){
    this.paginaAtual = 2;
    this.pesquisaService.pegarPersonagens(10)
    .subscribe(dados => this.preencherDiv(dados));
  }

  pagina3(){
    this.paginaAtual = 3;
    this.pesquisaService.pegarPersonagens(20)
    .subscribe(dados => this.preencherDiv(dados));
  }

  pagina4(){
    this.paginaAtual = 4;
    this.pesquisaService.pegarPersonagens(30)
    .subscribe(dados => this.preencherDiv(dados));
  }

  pagina5(){
    this.paginaAtual = 5;
    this.pesquisaService.pegarPersonagens(40)
    .subscribe(dados => this.preencherDiv(dados));
  }

  pagina6(){
    this.paginaAtual = 6;
    this.pesquisaService.pegarPersonagens(50)
    .subscribe(dados => this.preencherDiv(dados));
  }

  botaoAnterior(){
    if(this.paginaAtual > 1){
      return true;
    }else{
      return false;
    }
  }

}
