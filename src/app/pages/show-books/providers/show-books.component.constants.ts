import {faEdit, faMinusSquare, faPlusSquare, faTrash} from '@fortawesome/free-solid-svg-icons';

export const showBooksComponentConst = {

  searchBar: {
    placeholder: 'Digite o nome ou autor do livro...',
  },
  listBook: {
    emptyTitle: 'Sem Livros',
    emptyMessage: 'Nenhum livro foi encontrado.',
    emptyButton: 'Adicionar Livro',
    issueTitle: 'Aviso',
    issueMessage: 'Ocorreu um erro ao buscar os livros.',
    issueButton: 'Tentar Novamente',
    successEdit: 'Editar',
    successDelete: 'Deletar',
    successName: 'Nome do livro: ',
    successAuthor: 'Nome do autor: ',
    successPrice: 'Preço: ',
    iconPlus: faPlusSquare,
    iconMinus: faMinusSquare,
    iconEdit: faEdit,
    iconDelete: faTrash,
  },
  footerLoading: {
    btnText: 'Carregar mais livros'
  },

};
