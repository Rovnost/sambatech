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

  constructor(private pesquisaService: ApiService) { }

  ngOnInit() {
    this.pesquisaService.pegarPersonagens()
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
    this.conteudoDiv = dados;
  }

}
