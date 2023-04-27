const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Almaty, Kazakhstan</p>
          </li>
        </ul>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+79697164294">+ 7 (969) 716-42-94</a>
            </p>
          </li>
        </ul>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:millenium4363@gmail.com">
                millenium4363@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Contacts
