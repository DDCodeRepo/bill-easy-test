import "./card.styles.css";

const Card = (props) => {
  const { imageUrl } = props;
  return (
    <div>
      <img
        src={imageUrl}
        /* onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = "../../assets/default-img.jpg";
        }} */
        alt="flex-gallery"
      />
    </div>
  );
};

export default Card;
