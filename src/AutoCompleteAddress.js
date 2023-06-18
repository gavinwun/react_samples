import React, { useRef, useEffect, useState } from "react";

function AutoCompleteAddress({ onPlaceSelected }) {
  const autocompleteInputRef = useRef(null);
  const [addressComponents, setAddressComponents] = useState({});

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      autocompleteInputRef.current
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      const components = {};

      for (let i = 0; i < place.address_components.length; i++) {
        const component = place.address_components[i];
        const componentType = component.types[0];

        switch (componentType) {
          case "street_number":
            components.street = component.long_name;
            break;
          case "route":
            components.street =
              (components.street
                ? components.street + " "
                : "") + component.long_name;
            break;
          case "sublocality_level_1":
            components.suburb = component.long_name;
            break;
          case "locality":
            components.city = component.long_name;
            break;
          case "country":
            components.country = component.long_name;
            break;
          case "postal_code":
            components.postcode = component.long_name;
            break;
          default:
            break;
        }
      }

      setAddressComponents(components);
      onPlaceSelected(place);
    });
  }, []);

  return (
    <div>
      <input
        ref={autocompleteInputRef}
        type="text"
        placeholder="Enter address"
      />
      {addressComponents.street && (
        <div>
          <label>Street:</label> {addressComponents.street}
        </div>
      )}
      {addressComponents.suburb && (
        <div>
          <label>Suburb:</label> {addressComponents.suburb}
        </div>
      )}
      {addressComponents.city && (
        <div>
          <label>City/Town:</label> {addressComponents.city}
        </div>
      )}
      {addressComponents.country && (
        <div>
          <label>Country:</label> {addressComponents.country}
        </div>
      )}
      {addressComponents.postcode && (
        <div>
          <label>Postcode:</label> {addressComponents.postcode}
        </div>
      )}
    </div>
  );
}

export default AutoCompleteAddress;
