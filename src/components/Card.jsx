export default function Card({ className, image, alt, title, article }) {
  return (
    <section className={`box ${className}`}>
      <img src={image} alt={alt} />
      <h1>{title}</h1>
      <p>{article}</p>
      <button className="btn">Learn More</button>
    </section>
  )
}