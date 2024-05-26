import { Link } from "react-router-dom";

// Components
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default NotFound;
