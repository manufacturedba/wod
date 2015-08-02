(function(document) {
  window.addEventListener('WebComponentsReady', function() {
    app.virtue = "Virtue";
    app.vice = "Vice";
    app.virtues = [
        {
          name: 'Charity'
        },
        {
          name: 'Faith'
        },
        {
          name: 'Fortitude'
        },
        {
          name: 'Hope'
        },
        {
          name: 'Justice'
        },
        {
          name: 'Prudence'
        },
        {
          name: 'Temperance'
        }
      ];

      app.vices = [
          {
            name: 'Wrath'
          },
          {
            name: 'Faith'
          },
          {
            name: 'Fortitude'
          },
          {
            name: 'Hope'
          },
          {
            name: 'Justice'
          },
          {
            name: 'Prudence'
          },
          {
            name: 'Temperance'
          }
        ];

    app.updateVirtue = function(e) {
      app.virtue = e.model.__data__.item.name;
    }

    app.updateVice = function(e) {
      app.vice = e.model.__data__.item.name;
    }
    
  });
})(document);
