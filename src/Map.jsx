import "./App.css";

// Option 1: Import the SVG as a React component
import AfricaMap from "./assets/West-Africa.svg";

// Option 2: Import the SVG as a string
// import africaMapSvg from './africa-map.svg?raw';

const Map = () => {
  const handleCountryClick = (countryName) => {
    const wikipediaUrl = `https://en.wikipedia.org/wiki/${countryName}`;
    window.open(wikipediaUrl, "_blank");
  };

  return (
    <div className="map-container">
      {/* Option 1: Render the SVG as a React component */}
      <AfricaMap className="africa-map" onCountryClick={handleCountryClick} />

      {/* Option 2: Render the SVG as a string */}
      {/* <div
        className="africa-map"
        dangerouslySetInnerHTML={{ __html: africaMapSvg }}
      /> */}
    </div>
  );
};

export default Map;
