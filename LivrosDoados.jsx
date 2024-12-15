import LivroProtagonista from '../../assets/LivroProtagonista'
import s from './LivrosDoados.module.scss'

export default function LivrosDoados(){
    return (
        <section className={s.LivrosDoadosSection}> 
            <h2>sou o Livros Doados</h2>
            <section className={s.containerCards}>
                <section>
                    <img src={LivroProtagonista} alt="Capa do livro O Protagonista" />
                    <div>
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                    </div>
                </section>
            </section>
        </section>


    )
}