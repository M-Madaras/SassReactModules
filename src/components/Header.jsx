import styles from './Header.module.scss'

const Header = () => {
    return (
        <>
            <ul className="navigation">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Links</a></li>
            </ul>

            <div className="menu">
                <a href="" className="menu__link">Link 1</a>
                <a href="" className="menu__link">Link 2</a>
                <a href="" className="menu__link">Link 3</a>
            </div>


            <div className={styles['mod', 'mod2324']}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatum officia ipsam earum eius optio similique enim, laborum veniam et magni quasi natus commodi provident qui nam dolores sit molestias.</p>
            </div>

        </>
    )
}

export default Header;