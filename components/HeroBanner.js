// import

const HeroBanner = (props) => {
  const [isDesktop, setDesktop] = useState();

  return (
    <div className={styles.backgroundImage}>
      <div className={styles.article}>
        <h4>Featured Article</h4>
        <h2> </h2>
        <div>
          <p>Egbadon Jeffrey</p>
          <p>15 Aug, 2022</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempore
          tenetur ipsum beatae iure vitae quam. Dolore laborum iusto reiciendis
          totam! Dolores saepe nisi repellat hic dicta alias, magnam architecto.
        </p>
      </div>
    </div>
  );
};

const styles = {
  backgroundImage: URL("../images/dj_kit.png"),
};

export default HeroBanner;
