import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main id="main">
      <div className="container">
        <div className="row">
          <section className="col-12">
            <div id="not-found-container">
              <div className="row">
                <div className="col-12">
                  <div className="not-found-title">404</div>

                  <div className="not-found-message">
                    <strong>Məhsul tapılmadı.</strong>
                  </div>

                  <div className="not-found-links">
                    <Link to="/">Ana Səhifə</Link> ‘yə geri qayıda bilərsiniz.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
