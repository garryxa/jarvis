import { create } from "zustand";

// type Visible = {
//   porsche: boolean;
//   ironman: boolean;
//   goose: boolean;
// };

type ObjectData = {
  position: {
    x: number;
    y: number;
    z: number;
  };
  // need to remove one
  rotation: {
    x: number;
    y: number;
    z: number;
  };
  scale: number;
  visible: boolean;
};

export type ModelName = "porsche" | "ironman" | "goose";

type Objects = {
  [key in ModelName]: ObjectData;
};

const initialObjects = {
  porsche: {
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0.2,
      y: 4.5,
      z: 0,
    },
    scale: 0.3,
    visible: true,
  },
  ironman: {
    position: {
      x: 0,
      y: -0.5,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    scale: 0.6,
    visible: false,
  },
  goose: {
    position: {
      x: 0,
      y: -0.1,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    scale: 2,
    visible: false,
  },
};

type State = {
  target: THREE.Object3D | null;
  setTarget: (target: THREE.Object3D | null) => void;
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
  objects: Objects;
  setVisible: (modelName: ModelName, visible: boolean) => void;
  setPosition: (
    modelName: ModelName,
    position: { x: number; y: number; z: number },
  ) => void;
  setRotation: (
    modelName: ModelName,
    rotation: { x: number; y: number; z: number },
  ) => void;
  setScale: (modelName: ModelName, scale: number) => void;
  isConnected: boolean;
  setIsConnected: (isConnected: boolean) => void;
};

export const useStore = create<State>((set) => ({
  target: null,
  setTarget: (target) => set({ target }),
  menuOpen: true,
  setMenuOpen: (menuOpen) => set({ menuOpen }),
  objects: initialObjects,
  setVisible: (modelName, visible) =>
    set((state) => ({
      objects: {
        ...state.objects,
        [modelName]: {
          ...state.objects[modelName],
          visible,
        },
      },
    })),
  setPosition: (modelName, position) =>
    set((state) => ({
      objects: {
        ...state.objects,
        [modelName]: {
          ...state.objects[modelName],
          position,
        },
      },
    })),
  setRotation: (modelName, rotation) =>
    set((state) => ({
      objects: {
        ...state.objects,
        [modelName]: {
          ...state.objects[modelName],
          rotation,
        },
      },
    })),
  setScale: (modelName, scale) =>
    set((state) => ({
      objects: {
        ...state.objects,
        [modelName]: {
          ...state.objects[modelName],
          scale,
        },
      },
    })),
  isConnected: false,
  setIsConnected: (isConnected) => set({ isConnected }),
}));