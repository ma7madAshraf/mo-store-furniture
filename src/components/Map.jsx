import { useState, useRef, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useDispatch } from "react-redux";
import { updateAddress } from "../features/user/userSlice";
import axios from "axios";

const Map = () => {
  const dispatch = useDispatch();
  const [position, setPosition] = useState(null);
  const [latlng, setLatlng] = useState(null);
  const markerRef = useRef(null);

  const getAddress = async (position) => {
    const url = `https://us1.locationiq.com/v1/reverse?key=${
      import.meta.env.VITE_API_KEY
    }&lat=${position.lat}&lon=${position.lng}&format=json`;
    try {
      const resp = await axios(url);
      dispatch(updateAddress(resp.data?.display_name));
      console.log("done");

      return resp.data;
    } catch (error) {
      return null;
    }
  };
  function LocationMarker() {
    const map = useMapEvents({
      click() {
        window.navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLatlng(() => {
            const autoLocation = { lat: latitude, lng: longitude };
            setPosition(autoLocation);
            map.flyTo(autoLocation, map.getZoom());
            setTimeout(() => {
              getAddress(autoLocation);
            }, 3000);

            return autoLocation;
          });
        });
      },
    });
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setPosition(() => {
              const location = marker.getLatLng();
              setTimeout(() => {
                getAddress(location);
              }, 3000);
              return location;
            });
          }
        },
      }),
      []
    );

    return position === null ? null : (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      >
        <Popup minWidth={90}>
          <span>Marker is draggable</span>
        </Popup>
      </Marker>
    );
  }

  return (
    <MapContainer
      className="w-[300px] h-full sm:h-[50vh] sm:w-[500px] mx-auto mt-8 rounded-3xl"
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
