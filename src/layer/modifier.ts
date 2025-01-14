import { BaseLayer, ILayer, ILayerSettings } from './base-layer';

export class Modifier extends BaseLayer {
  inputLayer: ILayer;
  constructor(inputLayer: ILayer, settings?: ILayerSettings) {
    super({
      ...settings,
      width: inputLayer.width,
      height: inputLayer.height,
      depth: inputLayer.depth,
    });
    this.inputLayer = inputLayer;
  }

  validate(): void {
    super.validate();
    if (this.width !== this.inputLayer.width) {
      throw new Error(
        `width of ${this.width} does not match inputLayer.width of ${this.inputLayer.width}`
      );
    }
    if (this.height !== this.inputLayer.height) {
      throw new Error(
        `height of ${this.height} does not match inputLayer.height of ${this.inputLayer.height}`
      );
    }
    if (this.depth !== this.inputLayer.depth) {
      throw new Error(
        `depth of ${this.depth} does not match inputLayer.depth of ${this.inputLayer.depth}`
      );
    }
  }
}
