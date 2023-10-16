function Map() {
  return (
    <div className="map-container">
      <iframe
        width="750"
        height="500"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=1100&amp;height=600&amp;hl=en&amp;q=Garden%20City%20Nairobi+(Nairobi)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
}

export default Map;
