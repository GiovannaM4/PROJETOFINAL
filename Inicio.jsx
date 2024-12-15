import s from './Inicio.module.scss'
import imagem1 from '../../assets/imagem1'
import imagem2 from '../../assets/imagem2'
import imagem3 from '../../assets/imagem3'
import imagem4 from '../../assets/imagem4'



export default function Início(){
    return (
       <main>
        <section className={s.PrimeiraSessaoInicio}>
            <section>
            <h2>Por que devo doar?</h2>
            <div className={s.cardsMotivos}>
            <section>
                <section>
                    <img src={imagem1} alt="Imagem de uma roda de pessoas fazendo networking" />
                    <p>Oferece livros a quem não tem acesso</p>
                </section>
                <section>
                    <img src={imagem2} alt="Imagem de uma pessoa lendo um livro" />
                    <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                </section>
                <section>
                    <img src={imagem3} alt="Imagem de uma mão que significa um grupo d epessoas se apoiando" />
                    <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                </section>
                <section>
                    <img src={imagem4} alt="" />
                    <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                </section>
            </div>
            </section>
            </section>
        </section>
       </main>
})