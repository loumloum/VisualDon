Le format topojson sert à faire de la cartographie, c'est à dire représenter des données géométriques sous une forme graphique compréhensible par toutes et tous.
Il s'agit d'une extension du format geojson, et la différence principale qu'elle a avec celui-ci est qu'elle ne représenter pas une série de forme géométrique mais bien une série de points liés entre eux, qu'on appelle "arc".
Cela a pour conséquence que l'on peut stoquer exactement les mêmes datas dans les deux formats mais que le topojson sera toujours plus léger.
