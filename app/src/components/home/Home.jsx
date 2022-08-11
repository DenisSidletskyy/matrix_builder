import s from './Home.module.sass'

const Home = () => {
    return (
        <div className={s.home__inner}>
            <div className={s.home__rightDesc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, recusandae.
            </div>
            <div className={s.home__leftDesc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, id.
            </div>
        </div>
    )
}

export default Home