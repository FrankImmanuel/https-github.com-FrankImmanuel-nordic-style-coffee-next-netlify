import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <>
        <nav className={styles.navigation + " " + "container"}>
        <img src="./logo.svg" className="img-fluid" alt="Norsic Style Coffee lettermark logo"/>
        <div className="links">
            <button className="btn btn-transparent me-2">App</button>
            <button className="btn btn-transparent me-2">Subscription</button>
            <button className="btn btn-transparent">About us</button>
        </div>
        <a className="btn btn-secondary "  href="mailto:hello@nordicstylecoffee.com">Contact us</a>
      </nav>
    </>
  )
}
