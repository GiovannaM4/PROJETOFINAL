import IconeLivroForm from '../../assets/IconeLivroForm'
import s from './QueroDoar.module.scss'

export default function QueroDoar() {
    return (
      <section className={s.QueroDoarSection}>
        <p>Por favor, preencha o formulário com suas informações e as informações do livro.</p>
        <form action="">
          <div>
            <img src={IconeLivroForm} alt="Icone de imagem d eum livro" />
            <h2>Informações do livro</h2>
          </div>
          <input type="text" name="" id="" placeholder='Título'/> 
          <input type="text" name="" id="" placeholder='Categoria'/> 
          <input type="text" name="" id="" placeholder='Autor'/> 
          <input type="text" name="" id="" placeholder='Link da imagem'/> 

          <input type="submit" value="Doar" className={s.buttonDoar} />
        </form>
      </section>
    );
  }
  