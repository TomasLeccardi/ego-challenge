export class CarDetail{
constructor(){
  this.model_features = [];
  this.model_highlights = [];
}

  id​:​ number​;
  name​:​ string;
  segment​:​ string​;
  year​:​ number​;
  price​:​ number​;
  title​:​ string​;
  description​:​ string​;
  thumbnail​:​ string​;
  photo​:​ string​;
  model_features​:​​ ModelFeatuers[];
  model_highlights​:​ModelHighlights[];
}

export class ModelFeatuers{
  name​:​ string​;
  description​:​ string​;
  photo​:​ string​;
}

export class ModelHighlights{
  title​:​ string​;
  content​:​ string​;
  image​:​ string​;
}
