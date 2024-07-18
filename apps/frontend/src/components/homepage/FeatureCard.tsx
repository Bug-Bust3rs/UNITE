import img from '../../assets/explore.gif'

const FeatureCard = () => {
  return (
    <div className="z-10">
      <img
        src={img}

        className="h-19 w-19 rounded-xl "
        alt="thumbnail"
      />

    </div>
  );
}

export default FeatureCard;