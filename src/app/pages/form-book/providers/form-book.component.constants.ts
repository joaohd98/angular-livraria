import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export const formBookComponentConstants = {

  page: {
    titleAdd: 'Adicionar Livro',
    titleEdit: 'Atualizar Livro',
    btnAdd: 'Adicionar',
    btnEdit: 'Atualizar',
    screenIssueTitle: 'Aviso',
    screenIssueMessage: 'Não foi possível encontrar livro',
    screenIssueButton: 'Tentar novamente',
    alertTitle: 'Aviso',
    alertTitleLoading: 'Carregando...',
    errorAdd: 'Não foi possível adicionar o livro.',
    errorEdit: 'Não foi possível adicionar o livro.',
    iconBack: faArrowLeft,
  },
  inputAuthor: {
    name: 'author',
    type: 'text',
    label: 'Autor do livro',
    placeholder: 'Digite o nome do autor',
    requiredType: 'required',
    requiredMessage: 'Campo autor é obrigatório',
  },
  inputName: {
    name: 'name',
    type: 'text',
    label: 'Nome do livro',
    placeholder: 'Digite o nome do livro',
    requiredType: 'required',
    requiredMessage: 'Campo nome do livro é obrigatório',
  },
  inputPrice: {
    name: 'price',
    type: 'tel',
    label: 'Preço do livro',
    placeholder: 'Digite o preço do livro',
    mask: 'true',
    thousandSeparator: '.',
    requiredType: 'required',
    requiredMessage: 'Campo preço do livro é obrigatório',
    patternType: 'pattern',
    patternMessage: 'Campo preço do livro inválido',
  },

};

