import { Link } from "react-router-dom";

interface Props {
  title: string;
  showAll?: {
    title: string;
    link: string;
  };
  className?: string;
  children?: React.ReactNode;
}

const ProductsSection = ({ title, showAll, className, children }: Props) => {
  return (
    <section className={`default-products ${className ? className : ""}`}>
      <div className="container">
        {showAll && (
          <Link to={showAll.link}>
            <div className="products-header-outlet">{showAll.title}</div>
          </Link>
        )}

        <div className="products-header">
          <span>{title}</span>
        </div>

        {children}
      </div>
    </section>
  );
};

export default ProductsSection;
