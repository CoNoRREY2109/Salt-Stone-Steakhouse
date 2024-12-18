
  // Map Initialization
  const platform = new H.service.Platform({
    apikey: 'mjy1JvUT-McnB68LXDq6QhuLOGfvXLtaFFRfOOen05c'
  });

  const defaultLayers = platform.createDefaultLayers();
  const map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 15,
      center: { lat: 53.3600, lng: -6.2642 },
      pixelRatio: window.devicePixelRatio || 1
    }
  );

  const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  const ui = H.ui.UI.createDefault(map, defaultLayers);

  const marker = new H.map.Marker({ lat: 53.3600, lng: -6.2642 });
  map.addObject(marker);

  marker.addEventListener('tap', function () {
    const infoBubble = new H.ui.InfoBubble({ lat: 53.3600, lng: -6.2642 }, {
      content: '<div><h3>Steakhouse Delight</h3><p>Our restaurant is located here. Come visit us!</p></div>'
    });
    ui.addBubble(infoBubble);
  });

  window.addEventListener('resize', () => map.getViewPort().resize());

  // Review Carousel
  const reviewCarousel = document.querySelector('.carousel-inner');
  const reviewItems = document.querySelectorAll('.carousel-item');
  const reviewPrevButton = document.querySelector('.carousel-control.prev');
  const reviewNextButton = document.querySelector('.carousel-control.next');
  let currentReviewIndex = 0;

  function updateReviewCarousel() {
    const offset = -currentReviewIndex * 100;
    reviewCarousel.style.transform = `translateX(${offset}%)`;
  }

  reviewPrevButton.addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex - 1 + reviewItems.length) % reviewItems.length;
    updateReviewCarousel();
  });

  reviewNextButton.addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex + 1) % reviewItems.length;
    updateReviewCarousel();
  });


