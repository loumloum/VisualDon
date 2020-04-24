la fonction 'circle' prend un point et calcule un cercle polygonal autour de celui-ci, selon le rayon qui lui est donné en argument.
On l'a utilisé pour définir la zone de 1km autour de la HEIG.

La fonction 'bbox' permet de créer une bounding box
Utilisé ici pour faire un carré qui contient notre cercle de 1km de rayon car l'API overpass ne retourne pas un cercle mais un carré. On utilise cette fonction pour palier à ça puisqu'on désire un cercle et non un carré.

On utilise ensuite la fonction 'bboxPolygon' afin de shaper la forme obtenue précédemment en polygone, comme celui que nous avions créé avec 'circle'.

Finalement on a utilisé 'distance' qui, comme son nom l'indique, calcule la distance entre deux points donnés. Cela nous permet de retourner l'info de à combien de m se trouve le bar en question par rapport à la HEIG-VD.
