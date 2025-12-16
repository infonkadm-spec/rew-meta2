"use client";

import { createContext, useContext, ReactNode } from "react";

type LayerContext = {
  host: string,
  layer: number,
  domain: string,
};

const LayerContext = createContext<LayerContext | undefined>(undefined);

export function LayerProvider({
  host,
  layer,
  domain,
  children,
}: {
  host: string,
  layer: number,
  domain: string,
  children: ReactNode,
}) {

  const contextValue = {
    host,
    layer,
    domain,
  };

  return (
    <LayerContext.Provider value={contextValue}>
      {children}
    </LayerContext.Provider>
  );

};

export function useLayer() {

  const layer = useContext(LayerContext);

  if (!layer) {
    throw new Error("useLayer deve ser usado dentro de LayerProvider");
  };
  
  return layer;

};