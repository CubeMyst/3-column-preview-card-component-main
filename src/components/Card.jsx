export default function Card({ className, image, title, children }) {
  return (
    <section className={`box ${className}`}>
      {image}
      <h1>{title}</h1>
      <p>{children}</p>
      <button className="btn" type="button">
        Learn More
      </button>
    </section>
  );
}
