import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { currentVan } = useOutletContext();
  return <h2>Detailed info goes here</h2>;
}
